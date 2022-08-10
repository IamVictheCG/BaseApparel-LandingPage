import React from 'react'
import hero from "../../base-apparel-coming-soon-master/images/hero-desktop.jpg"

function IMG() {
  return (
    <div>
        <img src={hero} alt="desktop-design" style={image}/>
    </div>
  )
}

const image = {
  height: "632.5px"
}

export default IMG
