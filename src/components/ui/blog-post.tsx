import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';

import type IBlogPost from '@/types/blog-post';

const BlogPost = ({ post }: { post: IBlogPost }) => {
  console.log(post, 'blogpost-----');
  return (
    <div>
      <div className="m-4 mx-auto max-w-6xl  leading-relaxed text-gray-800 px-6 xl:px-0 my-8">
        <article className="main-blog-article">
          <h1 className="text-xl sm:text-2xl mb-4 sm:mb-8">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <time dateTime={post.publishedDate}>{post.publishedDate}</time>
          </div>
          <img
            src={post.heroImage?.imageUrl}
            alt=""
            className="w-full h-full my-4 sm:my-8"
          />
          {documentToReactComponents(post?.body)}
          {post?.sampleImage && (
            <div>
              <img
                src={post.sampleImage?.imageUrl}
                alt=""
                className="w-8/12 mx-auto h-full my-4 sm:my-8"
              />
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
