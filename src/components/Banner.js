import React from 'react'
import imge from '../utils/images/clothing.png'

const Banner = () => {
  return (
    <div className='shop-banner'>
        <img src={imge} className='shop-image'/>
        <div className='shop-text'>
            <h4 className='shop-texts'>shop </h4>
            <h4 className='shop-texts'>all your wears </h4>
            <h4 className='shop-texts'> here at </h4>
            <h4 className='shop-texts'>jumstore </h4>
        </div>
    </div>
  )
}

export default Banner