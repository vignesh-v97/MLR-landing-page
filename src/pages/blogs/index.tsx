import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import BlogItem from '@/components/ui/blog-item';
import type IBlogPost from '@/types/blog-post';
import type { ContentfulEntry } from '@/types/contentful-entry';
import convertPost from '@/utils/convertPost';

const Blog = ({ posts = [] }: { posts: ContentfulEntry[] }) => {
  const convertedPosts: IBlogPost[] = [];
  if (posts && posts.length > 0) {
    posts.forEach((rawPost) => convertedPosts.push(convertPost(rawPost)));
    // Sort by publishedDate in descending order (latest first)
    convertedPosts.sort((a, b) => b.publishedDateRaw.getTime() - a.publishedDateRaw.getTime());
  }
  return (
    <Main
      meta={
        <Meta
          title="Blogs | Medico Legal Request LLC | Legal Support Services"
          description="MLR, LLC is a leading record review service provider to the law firms and independent legal practices and teams throughout the United States and Canada. "
        />
      }
    >
      <Navbar />
      <HeroBanner
        title="Blogs"
        subheading=""
        imgUrl="/assets/images/page-banners/blog.jpg" alt="Blogs_Banner"
      />
      <div className="m-4 mx-auto max-w-6xl leading-relaxed text-gray-800 px-6 xl:px-0">
        <div className="py-16">
          <div className=" mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
            {convertedPosts &&
              convertedPosts?.length > 0 &&
              convertedPosts?.map((post: IBlogPost) => {
                if (post?.slug) {
                  return <BlogItem post={post} key={post.slug} />;
                }
              })}
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  // eslint-disable-next-line global-require
  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN as string,
  });

  // Fetch all entries of content_type `blogPost`

  const posts = await client
    .getEntries({ content_type: 'blogs' })
    .then((response) => {
      console.log(response, 'respoinse');
      return response.items;
    });

  return {
    props: {
      posts,
    },
    revalidate: 86400, // Revalidate once per day (24 hours)
  };
}

export default Blog;
