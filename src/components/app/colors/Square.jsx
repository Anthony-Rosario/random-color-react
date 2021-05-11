import React from 'react'
import PropTypes from 'prop-types'


export default function Square({ sqColor, bgImage }) {
  return (
    <div style={{
      height: '300px',
      width: '300px',
      backgroundColor: sqColor,
      backgroundImage: bgImage,
      border: '5px solid black'
    }}>

      test
    </div>
  )
}

Square.propTypes = {
  sqColor: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired
}
