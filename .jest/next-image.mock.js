import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { blurDataURL, objectFit, ...rest} = props
    return <img {...rest} />
  }
})
