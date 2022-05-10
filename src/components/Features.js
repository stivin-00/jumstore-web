import React from 'react'
import { FcCurrencyExchange } from 'react-icons/fc';
import { FcInTransit } from 'react-icons/fc';
import { FcShop } from 'react-icons/fc';
import { FcSupport } from 'react-icons/fc';
import { FcAlarmClock } from 'react-icons/fc';

const Features = () => {
  return (
    <div className='features row'>
        <div className="featrure"><h3 style={{marginRight: '10px', marginLeft: '10px', borderRadius: '50%', backgroundColor: '#f4d4d7 ', padding: '5px', height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <FcCurrencyExchange/> </h3><h5>easy payment</h5></div>
        <div className="featrure"><h3 style={{marginRight: '10px', marginLeft: '10px', borderRadius: '50%', backgroundColor: '#f4d4d7 ', padding: '5px', height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <FcInTransit /> </h3><h5>free delivery</h5></div>
        <div className="featrure"><h3 style={{marginRight: '10px', marginLeft: '10px', borderRadius: '50%', backgroundColor: '#f4d4d7 ', padding: '5px', height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <FcShop /> </h3><h5>offline stores</h5></div>
        <div className="featrure"><h3 style={{marginRight: '10px', marginLeft: '10px', borderRadius: '50%', backgroundColor: '#f4d4d7 ', padding: '5px', height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <FcSupport /> </h3><h5>24/7 support</h5></div>
        <div className="featrure"><h3 style={{marginRight: '10px', marginLeft: '10px', borderRadius: '50%', backgroundColor: '#f4d4d7 ', padding: '5px', height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <FcAlarmClock /> </h3><h5>fast process</h5></div>
    </div>
  )
}

export default Features