import Link from 'next/link';
import React from 'react';

import type IBlogPost from '@/types/blog-post';

const BlogItem = ({ post }: { post: IBlogPost }) => {
  return (
    <div>
      <div
        key={post.title}
        className="group flex flex-col overflow-hidden transition-all ease-linear rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105"
      >
        <div className="shrink-0">
          <img
            className="object-fill w-full h-48"
            src={post.heroImage?.imageUrl || ''}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
          <div className="flex-1">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <time dateTime={post.publishedDate}>{post.publishedDate}</time>
            </div>
            <Link href={`/blogs/${post.slug}`}>
              <a className="block">
                <p className="text-xl font-semibold text-gray-900 group-hover:text-primary">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
            </Link>
          </div>
          {/* <div className="flex items-center mt-6">
                  <div className="shrink-0">
                    <a href={post.author.href}>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={post.author.imageUrl}
                        alt={post.author.name}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> read</span>
                    </div>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
