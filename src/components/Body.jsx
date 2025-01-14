import { useEffect, useState } from "react";
import OnYourMind from "./OnYourMind";
import TopRestaurant from "./TopRestaurant";
import OnlineFoodDelivery from "./OnlineFoodDelivery";

function Body() {
  const [onYourMindData, setOnYourMindData] = useState([]);
  const [topRestaurantData, setTopRestaurantData] = useState([]);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setTopRestaurantData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="w-[80%] mx-auto  mt-3  overflow-hidden">
          <OnYourMind data={onYourMindData} />
          <TopRestaurant data={topRestaurantData} />
          <OnlineFoodDelivery data={topRestaurantData} />
        </div>
      </div>
    </>
  );
}

export default Body;
