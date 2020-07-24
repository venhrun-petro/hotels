import React from 'react'
import Form from '~c/sections/Form'
import content_EN from '~d/en/content.json'
import content_UK from '~d/uk/content.json'
import { useSelector } from 'react-redux'
import Img from '~c/general/Image'

// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line react/prefer-stateless-function
const Teaser = () => {
  const state = useSelector(props => props);
  let content = (state.languageValue === "uk" ? content_UK : content_EN);
  return (
    <section className="teaser">
      <Img className="teaser_img" src={content.teaserImage} />
      <div className="container-small">
        <div className="teaser_cont">
          <h1 className="teaser_cont_title">
            {content.title}
            <span className="teaser_cont_title-red">
              {content.subTitle}
            </span>
          </h1>
          <Form />
        </div>
      </div>
    </section>
  )
}


export default Teaser