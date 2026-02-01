export type CardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  // v1 hover-only
  href?: never;
};
