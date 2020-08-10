 import React, { useState } from 'react'
 import Img from '~c/general/Image'
 
function Slider() {

  const [ opacityCount, setOpacityCount ] = useState(0);
  const [ activeCount, setactiveCount ] = useState(0);

  const sliderData = {
    items: [
      {
        value: "1",
        className: "slider_cont-list_img",
      },
      {
        value: "2",
        className: "slider_cont-list_img",
      },
      {
        value: "3",
        className: "slider_cont-list_img",
      },
      {
        value: "4",
        className: "slider_cont-list_img",
      },
      {
        value: "5",
        className: "slider_cont-list_img",
      }
    ]
  }

  const slider = sliderData.items
  const step = 0.333333
  
  const opacity = (index) => 1 - (index * step) - opacityCount
  const scale = (index) => 1 - (index*0.1) + (activeCount*0.1)
  const left = (index) => index * 20 - (activeCount * 20)
  const zIndex = (index) => slider.length - index - activeCount + slider.length
 
  const styleItems = (index) => {
    return {
      opacity: opacity(index) <= 1 ? opacity(index) : 0,
      zIndex: zIndex(index) <= ((slider.length - activeCount) * 2) ? zIndex(index) : 0
    }
  }

  const styleImg = (index) => {
   return { 
          transform: `scaleY(${
            scale(index) <= 1 ? scale(index) : 0.9
            })`,
            left: left(index) > 0 ? left(index) : 0
          }
  }
 
  const slidePrev = () => {
    if(opacityCount < 0){
     setOpacityCount(opacityCount + step)
     setactiveCount(activeCount - 1)
    }
  }
  const slideNext = () => {
    if(opacityCount >= 0 - ((slider.length - 2)* step)){
      setOpacityCount(opacityCount - step)
      setactiveCount(activeCount + 1)
    }
  }

  const chekItems = (sign) => slider[activeCount + sign]

  return(
    <>
        <h2>Slider</h2>
        <div className="slider">
          <div className="slider_cont-list">
            {
              slider.map(function(item, index){
                  return(
                    <div key={index} className={ "slider_cont-list_img " + (index == activeCount ? "slider_cont-list_img-active" : null)
                    } 
                    style={styleItems(index)} >
                      <div className="slider_cont-list_img-cont">
                        <div >
                          <h2>Title</h2>
                          <p>{item.value}</p>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <Img style={styleImg(index)} className="slider_cont-list_img-img" src="gallery1.jpg" />
                      </div>
                    </div>
                  )
              })
            }
          </div>
          <div>
            <button className={"btn-prex " + (chekItems(-1) ? "disabled" : "" )} onClick={slidePrev} disabled={ chekItems(-1)
              ? false
              : true
              }>
                prev 
                {
                  chekItems(-1) ? 
                  chekItems(-1).value
                  : 
                  null
                }
            </button>
            <button className={"btn-nest" + (chekItems(+1) ? "disabled" : "" )} onClick={slideNext} disabled={ chekItems(+1)
              ? false
              : true
              }  >
                next
                { chekItems(+1) ? 
                  chekItems(+1).value
                  : 
                   null
                }
            </button> 
          </div>
        </div>
    </>
  )
}


export default Slider


