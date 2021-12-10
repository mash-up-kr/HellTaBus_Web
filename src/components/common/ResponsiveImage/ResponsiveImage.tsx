import classNames from 'classnames';
import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { useDetectViewport } from '@/hooks';
import { ViewPort } from '@/types';
import { VIEWPORT_SIZE } from '@/consts';

interface Props {
  src: string;
  alt: string;
  className?: string;
  placeHolderImage: string;
}

const toResponsiveImageParams = (url: string) =>
  url.replace(/(\d{2,4}).(png|jpe?g|gif|svg)/, ',,\\,,\\$2').split(',,\\,,\\');

const getResponsiveSrc = (src: string, format: string, size: ViewPort) => {
  if (size === VIEWPORT_SIZE.X_SMALL) return `${src}180.${format}`;
  if (size === VIEWPORT_SIZE.SMALL) return `${src}360.${format}`;
  if (size === VIEWPORT_SIZE.MEDIUM) return `${src}720.${format}`;
  return `${src}1080.${format}`;
};

const ResponsiveImage = ({ src, alt, className, placeHolderImage }: Props) => {
  const { size } = useDetectViewport();

  if (src.match(/data:image/) && src.match(/base64/))
    return <img src={src} alt={alt} className={className} />;

  const [deletedResolutionUrl, format] = toResponsiveImageParams(src);
  const responsiveSrc = getResponsiveSrc(deletedResolutionUrl, format, size);

  return (
    <ProgressiveImage src={responsiveSrc} placeholder={placeHolderImage}>
      {(progressiveSrc: string) => (
        <img src={progressiveSrc} alt={alt} className={classNames(className)} />
      )}
    </ProgressiveImage>
  );
};

export default ResponsiveImage;
