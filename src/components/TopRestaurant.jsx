import { useState } from "react";
import PropTypes from "prop-types";
const TopRestaurant = ({ data }) => {
  console.log(data);

  const [value, setValue] = useState(0);

  // const [data, setData] = useState([]);
  // async function fetchData() {
  //   const data = await fetch(
  //     "/api/dapi/restaurants/List/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const result = await data.json();
  //   console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setData(
  //     result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(value);

  function handleNext() {
    value >= 486 ? "" : setValue((pre) => pre + 54);
  }
  function handlePrev() {
    value <= 0 ? "" : setValue((pre) => pre - 54);
  }
  return (
    <>
      <div className="my-16">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{`Top restaurant chains in Noida 1`}</h1>
          <div className="flex gap-4">
            <i
              onClick={handlePrev}
              className={`fi fi-rr-arrow-small-left h-10 w-10 rounded-full flex justify-center items-center text-black cursor-pointer text-2xl ${
                value <= 0 ? "bg-gray-400" : "bg-gray-200"
              }`}
            ></i>
            <i
              onClick={handleNext}
              className={`fi fi-rr-arrow-small-right h-10 w-10 rounded-full flex justify-center items-center text-black cursor-pointer text-2xl ${
                value >= 486 ? "bg-gray-400" : "bg-gray-200"
              }`}
            ></i>
          </div>
        </div>

        <div
          className="flex  mt-4 gap-5 w-full   duration-1000"
          style={{ translate: `-${value}%` }}
        >
          {data.map(({ info }) => {
            return (
              <div key={info?.id} className="hover:scale-90 duration-300">
                <div className="min-w-[295px] h-[182px] relative">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
                    alt={`Item ${info?.name}`}
                  />
                  <div className="w-full h-full rounded-2xl absolute top-0 bg-gradient-to-t from-black from-1% to-transparent to-40%"></div>
                  <p className="text-white absolute bottom-0 left-2 text-base font-bold mb-2">
                    {info.aggregatedDiscountInfoV3?.header + " "}
                    {info.aggregatedDiscountInfoV3?.subHeader}
                  </p>

                  

                
                </div>

                <div className="mt-2 ml-2">
                    <h1 className="text-black text-xl font-bold">{info.name}</h1>
                    <p>
                      <i className="fi fi-sr-circle-star text-green-600"></i>
                      <span className="text-base text-black font-bold">
                        {" "}
                        {info.avgRating}
                      </span>{" "}
                      <span className="text-base text-black font-bold">
                        {info.sla?.slaString
                        }
                      </span>
                    </p>
                    <p className="text-base text-gray-500 font-semibold">
                      {info.cuisines.join(", ")}
                    </p>
                    <p className="text-base text-gray-500 font-semibold">
                      {info.locality}
                    </p>
                  </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border my-2" />
    </>
  );
};

// Define prop types
TopRestaurant.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageId: PropTypes.string.isRequired, // Validate imageId as a required string
    })
  ).isRequired, // Ensure data is an array and required
};

export default TopRestaurant;
