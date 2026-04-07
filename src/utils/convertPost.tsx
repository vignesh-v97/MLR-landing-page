import moment from 'moment';

import type IBlogPost from '@/types/blog-post';
import type { ContentfulEntry, Image } from '@/types/contentful-entry';

const convertImage = (rawImage: any): Image | null => {
  if (rawImage && rawImage.file) {
    return {
      imageUrl: rawImage.file.url.replace('//', 'https://'), // Use https instead of http
      description: rawImage.description || '',
      title: rawImage.title || '',
    };
  }
  return null;
};

const convertPost = (rawData: ContentfulEntry): IBlogPost => {
  const rawPost = rawData.fields;
  const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
  const rawSampleImage = rawPost.sampleImage
    ? rawPost.sampleImage.fields
    : null;
  const rawAuthor = rawPost.author;
  const publishedDateRaw = new Date(rawData.sys.createdAt);
  return {
    id: rawData.sys.id,
    body: rawPost.body,
    description: rawPost?.description || '',
    publishedDate: moment(rawData.sys.createdAt).format('DD MMM YYYY'),
    publishedDateRaw,
    slug: rawPost.slug,
    title: rawPost.title,
    metaDescription: rawPost.metaDescription || '',
    heroImage: convertImage(rawHeroImage) || undefined,
    author: rawAuthor,
    metaTitle: rawPost.metaTitle || '',
    metaImage: rawPost.metaImage
      ? convertImage(rawPost.metaImage.fields)
      : undefined,
    sampleImage: convertImage(rawSampleImage) || undefined,
  };
};

export default convertPost;
