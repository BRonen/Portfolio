import { FC } from 'react'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface ImageFallbackProps extends ImageProps {
  src: string
  fallbackSrc: string
  alt: string
}

const ImageFallback: FC<ImageFallbackProps> = ({ src, fallbackSrc, ...rest }) => {
  const [imgSrc, setSrc] = useState<string>(src)

  return (
    <Image
      src={imgSrc}
      onError={() => setSrc(fallbackSrc)}
      onLoadingComplete={result => {
        if (result.naturalWidth === 0)
          setSrc(fallbackSrc);
      }}
      {...rest}
    />
  )
}

export default ImageFallback