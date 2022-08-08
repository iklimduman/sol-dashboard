import React from "react";
import Carousel from 'react-elastic-carousel';

const CustomCarousel = ({
    CustomCarouselItem: CarouselItem,
    CustomBreakPoints: breakPoints,
    ItemsToMap: ItemArr }) => {

    return (
        <div>

            <Carousel breakPoints={breakPoints}>
                {ItemArr.map(item => <CarouselItem
                    solPrice={item.solPrice}
                    supply={item.supply}
                    releaseDate={item.releaseDate.toDateString()}
                    backgroundImage={item.image}
                    title={item.name}
                ></CarouselItem>)}
            </Carousel>

        </div>

    );
}

export default CustomCarousel;