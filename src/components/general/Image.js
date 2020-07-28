import React from 'react'
import PropTypes from 'prop-types'
import useImagesQuery from '~h/useImagesQuery'

const setImageObject = (allImages, imageName) => {
  return allImages.find(item => item.name === imageName)
}

const checkImg = (allImages, imageName) => {
  if(allImages.find(item => item.name === imageName)){
      return true
  }
} 

const checkName = (src) => {
  if(src.split(/\/(?=[^\/]+$)/)[1]){
    return src.split(/\/(?=[^\/]+$)/)[1]
  } else {
    return src
  }
}

const Image = ({ src, className }) => {
  const images = useImagesQuery()
  const imageName = checkName(src).split(/\.(?=[^\.]+$)/)[0]
  console.log(setImageObject(images, imageName).publicURL)
  return (
      <img src={
        checkImg(images, imageName) ?
            setImageObject(images, imageName).publicURL
        :
            src
        } 
        alt={
            checkImg(images, imageName) ? 
                setImageObject(images, imageName).name
            :
                imageName.split(/\.(?=[^\.]+$)/)[0]
            }

        className={className}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

Image.defaultProps = {
  className: ''
}

export default Image
