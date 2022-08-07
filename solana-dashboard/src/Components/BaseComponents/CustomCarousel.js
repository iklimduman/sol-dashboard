import React from "react";
import Carousel from 'react-elastic-carousel';

const CustomCarousel = ({
    CustomCarouselItem: CarouselItem,
    CustomBreakPoints: breakPoints,
    ItemsToMap : ItemArr }) => {
        
    return (
        <div style={{ backgroundColor: "red" }}>

            <Carousel breakPoints={breakPoints}>
                {ItemArr.map(item => <CarouselItem key={item.id}>{item.title}</CarouselItem>)}
            </Carousel>

        </div>

    );
}

export default CustomCarousel;