import React from 'react'
import PropTypes from 'prop-types'


const Square = ({ colorsArr, bgImage, bgText }) => {
  return (
    <div style={{
      height: '300px',
      width: '300px',
      backgroundColor: colorsArr,
      backgroundImage: bgImage,
      border: '5px solid black'
    }}>
      {bgText}
    </div>
  )
}

Square.propTypes = {
  colorArr: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  bgText: PropTypes.array.isRequired
}


export default Square;
