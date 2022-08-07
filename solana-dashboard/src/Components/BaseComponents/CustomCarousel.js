import React from "react";
import Carousel from 'react-elastic-carousel';

const CustomCarousel = ({
    CustomCarouselItem: CarouselItem,
    CustomBreakPoints: breakPoints,
    ItemsToMap: ItemArr }) => {

    return (
        <div style={{ backgroundColor: "rgb(77,74,232,0.05)" }}>

            <Carousel breakPoints={breakPoints}>
                {ItemArr.map(item => <CarouselItem
                    solPrice={item.solPrice}
                    supply={item.supply}
                    releaseDate={item.releaseDate.toDateString()}
                    backgroundImage={item.image}
                >{item.title}</CarouselItem>)}
            </Carousel>

        </div>

    );
}

export default CustomCarousel;