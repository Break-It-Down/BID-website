import React, { useEffect, useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import '../styles/imageSlider.css';

const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);
    const { ImageSrc } = sliderProperty;
    const [count, setCount] = useState(0);
    const [animationCls, setAnimationCls] = useState('displayBlock fade');

    const NextClick = () => {

        setAnimationCls(() => ('displayBlock fade'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fade')
        }, 100);

        if (count <= props.ImageData.length-1) {
            setCount(count+1);
        }

        if (count === props.ImageData.length-1) {
            setCount(0);
        }

    };

    useEffect(() => {
        setSliderProperty((previous) => ({ ...previous, ImageSrc: props.ImageData[count].ImageSrc }));
    }, [count]);



    useEffect(() => {
         const interval=  setInterval(() => {
            NextClick();
        }, props.SlideInterValTime);

        return () => clearInterval(interval);
    }, [count]);



    return (
        <>
            <div className='slideshow-container '>
                <div className={animationCls}>
                    {ImageSrc}
                </div>
            </div>


        </>

    );
};

export default ImageSliderAuto;