import * as contentful from 'contentful';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import BlogItem from '@/components/ui/blog-item';
import type IBlogPost from '@/types/blog-post';
import convertPost from '@/utils/convertPost';

const HomeBlogSection = () => {
  const [posts, setPosts] = useState<Array<IBlogPost>>([]);

  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENT_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENT_ACCESS_TOKEN as string,
  });

  // Fetch all entries of content_type `blogPost`

  const getPosts = async () => {
    const rawPosts = await client
      .getEntries({ content_type: 'blogs' })
      .then((response) => {
        console.log(response, 'respoinse');
        return response.items;
      });

    const convertedPosts: IBlogPost[] = [];
    if (rawPosts && rawPosts.length > 0) {
      rawPosts.forEach((rawPost) => {
        if (convertedPosts.length < 3) {
          convertedPosts.push(convertPost(rawPost));
        }
      });
    }
    setPosts(convertedPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="relative py-16 bg-gray-50 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <Link href="/blogs">
            <a className="">
              <h2 className="text-3xl font-extrabold tracking-wider uppercase  text-cyan-600 sm:text-4xl">
                Blogs
              </h2>
            </a>
          </Link>
        </div>
        <div className="grid max-w-md gap-8 px-4 mx-auto mt-12  sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {posts.map((post) => (
            <BlogItem post={post} key={post.slug} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/blogs">
            <a className="btn btn-1">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
