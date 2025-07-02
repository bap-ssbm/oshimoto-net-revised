import { getImage } from 'astro:assets';

export interface ImageResult {
  src: string;
  width: number;
  height: number;
}

export async function loadImage(src: string): Promise<ImageResult> {
  const { options, src: imageSrc } = await getImage({ src, format: 'webp' });
  return {
    src: imageSrc,
    width: options.width ?? 0,
    height: options.height ?? 0,
  };
}

export async function getOptimizedImages(desktopSrc: ImageMetadata, mobileSrc: ImageMetadata) {
  const desktopImage = await getImage({ src: desktopSrc, format: 'webp' });
  const mobileImage = await getImage({ src: mobileSrc, format: 'webp' });

  return {
    desktopImage: `url(${desktopImage.src})`,
    mobileImage: `url(${mobileImage.src})`,
  };
}
