import CustomCarousel from "../BaseComponents/CustomCarousel";
import UpcomingCard from "./UpcomingCard";

const Upcomings = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 760, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]

    const items = [
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 5, title: 'item #5' }
    ]

    return (
        <div>
            <h1>UPCOMINGS</h1>
            <CustomCarousel 
                CustomCarouselItem={UpcomingCard}
                CustomBreakPoints={breakPoints}
                ItemsToMap={items}
            />
        </div>
    )
}

export default Upcomings;