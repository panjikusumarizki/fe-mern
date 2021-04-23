import React from 'react'

import imageHero from 'assets/images/img-hero.jpg'
import imageHero_ from 'assets/images/img-hero-frame.jpg'
import iconTravel from 'assets/images/icons/icon-traveler.svg'
import iconTreasure from 'assets/images/icons/icon-treasure.svg'
import iconCities from 'assets/images/icons/icon-cities.svg'

import Button from 'elements/Button'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth'
    })
  }

  return (
    <section className='container pt-4'>
      <div className='row align-items-center'>
        <div className='col-auto pr-5' style={{ width: 530 }}>
          <h1 className='font-weight-bold line-height-1 mb-3'>
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className='mb-4 font-weight-light text-gray-500 w-75'
            style={{ lineHeight: '170%' }}
          >
            We provide what you need to enjoy your holiday with family. Time to 
            make another memorable moments.
          </p>
          <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width='32'
                height='32'
                src={iconTravel}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{' '}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width='32'
                height='32'
                src={iconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{' '}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                width='32'
                height='32'
                src={iconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{' '}
                <span className="text-gray-500 font-weight-light">
                  cities
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 500, height: 390 }}>
            <img
              src={imageHero}
              alt='Room with couches'
              className='img-fluid position-absolute'
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={imageHero_}
              alt='Room with couches frame'
              className='img-fluid position-absolute'
              style={{ margin: '10px -15px -15px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
