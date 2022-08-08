import CustomCarousel from "../BaseComponents/CustomCarousel";
import UpcomingCard from "./UpcomingCard";
import { UpcomingNFTs } from "../../DummyData/DummyData";

const Upcomings = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 760, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 },
    ]

    return (
        <div>
            <div style={{ color: "#CECECE", fontFamily: " 'Raleway', sans-serif", width: "90vw", margin: "auto", fontSize: "26px", marginBottom : "8px" }}>UPCOMINGS</div>
            <CustomCarousel
                CustomCarouselItem={UpcomingCard}
                CustomBreakPoints={breakPoints}
                ItemsToMap={UpcomingNFTs}
            />
        </div>
    )
}

export default Upcomings;