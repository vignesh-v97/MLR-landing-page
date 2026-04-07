import type { Body } from '@/types/contentful-entry';

export type Image = {
  imageUrl: string;
  description: string;
  title: string;
};

interface IBlogPost {
  id: string;
  body: Body;
  description: string;
  publishedDate: string;
  publishedDateRaw: Date;
  slug: string;
  title: string;
  heroImage?: Image;
  author?: string;
  metaTitle: string;
  metaDescription: string;
  metaImage?: Image;
  sampleImage?: Image;
}

export default IBlogPost;
