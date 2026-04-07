import React from 'react';

import Footer from '@/components/footer';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import BlogPost from '@/components/ui/blog-post';
import type IBlogPost from '@/types/blog-post';
import type { ContentfulEntry } from '@/types/contentful-entry';
import convertPost from '@/utils/convertPost';

const Slug = ({ post }: { post: ContentfulEntry }) => {
  const convertedPost: IBlogPost = convertPost(post);
  console.log(convertedPost, '-----');
  return (
    <Main
      meta={
        <Meta
          title={
            convertedPost.metaTitle ||
            'Blogs | Medico Legal Request LLC | Legal Support Services'
          }
          description={
            convertedPost.metaDescription ||
            'MLR, LLC is a leading record review service provider to the law firms and independent legal practices and teams throughout the United States and Canada. '
          }
        />
      }
    >
      <Navbar />

      {post && <BlogPost post={convertedPost} />}
      <Footer />
    </Main>
  );
};

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  // eslint-disable-next-line global-require
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN as string,
  });

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: 'blogs',
      'fields.slug': context.params.slug,
    })
    .then((response) => response.items);

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop();

  console.log(result, '<----------');

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} };
  }

  // Return the post as props
  return {
    props: {
      post,
    },
    revalidate: 86400, // Revalidate once per day (24 hours)
  };
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  // eslint-disable-next-line global-require
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN as string,
  });

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: 'blogs' })
    .then((response) => response.items);

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking', // Enable fallback for new blog posts
  };
}

export default Slug;
