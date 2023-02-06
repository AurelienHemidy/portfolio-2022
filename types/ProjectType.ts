import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

interface ProjectInterface extends MarkdownParsedContent {
  id: number;
  title: string;
  context: string;
  description: string;
  why: string;
  date: number;
  themeColor: string;
  link: string;
  slug: string;
  placeholder: string;
  images: ImageInterface[];
  techStack: string[];
}

interface ImageInterface {
  src: string;
  alt: string;
  color: string;
}

export default ProjectInterface;
