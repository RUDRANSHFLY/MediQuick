import React, { useState } from 'react'
import {
  useEffect
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faDna,
  faHeartPulse,
  faUserDoctor
} from "@fortawesome/free-solid-svg-icons";
import { faStethoscope, faCapsules, faThermometer, faVirusCovid } from '@fortawesome/free-solid-svg-icons';
import "../Slider/Slider.scss";
import "../Slider/SliderUtil.scss";




const Slider = () => {


  const [currentSlide, SetCurrentSlide] = useState(0);

  const data = [
    "https://cdn01.pharmeasy.in/dam/banner/banner/d6593086ed1-25GETNEW.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/d0f87cc6a96-Group_514021.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/a4e6d0088ad-slippers.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/58033df844d-Hp.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/03b538c95bb-abcfd6435fe-FragSB.jpeg?dim=1440x0",
  ];

  const prevSlide = () => {
    SetCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  const nextSlide = () => {
    SetCurrentSlide((prev) => (prev === data.length - 2 ? 0 : prev + 1));
  }

  useEffect(() => {
    const slideTimer = setTimeout(nextSlide, 2000);
    return () => {
      clearInterval(slideTimer)
    };
  }, [currentSlide]);



  return (
    <div className='slider' onMouseEnter={nextSlide}>
      <div className='container'>
        <FontAwesomeIcon className='iconsHos' icon={faDna} fade size="2xl" style={{ "--fa-primary-color": "#c21919", "--fa-secondary-color": "#b40e0e", }} />
        <FontAwesomeIcon className='iconsHos' icon={faStethoscope} shake size="2xl" />
        <FontAwesomeIcon className='iconsHos' icon={faCapsules} spin size="2xl" />
        <FontAwesomeIcon className='iconsHos' icon={faHeartPulse} beatFade size='2xl' />
        <FontAwesomeIcon className='iconsHos' icon={faVirusCovid} spin size="2xl" />
        <FontAwesomeIcon className='iconsHos' icon={faThermometer} size="2xl" flip />
        <FontAwesomeIcon className='iconsHos' icon={faUserDoctor} bounce size="2xl" />

        {/* <img src={data[0]} />
        <img src={data[1]} />
        <img src={data[2]} />
        <img src={data[3]} />
        <img src={data[4]} /> */}
      </div>
      <div className='icons'>
        <div className='icon'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} />
        </div>
        <div className='icon'>
          <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
};


export default Slider;
