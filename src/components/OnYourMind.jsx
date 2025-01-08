// import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const OnYourMind = ({data}) => {
  // const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  // async function fetchData() {
  //   const data = await fetch(
  //     "/api/dapi/restaurants/List/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const result = await data.json();
  //   // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  //   setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(value);

  function handlePrev() {
    value <= 0 ? "" : setValue((pre) => pre - 26);
  }

  function handleNext() {
    value >= 104 ? "" : setValue((pre) => pre + 26);
  }
  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-2xl font-bold">{`What's on your mind?`}</h1>
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
              value >= 104 ? "bg-gray-400" : "bg-gray-200"
            }`}
          ></i>
        </div>
      </div>
      <div className="flex duration-1000" style={{ translate: `-${value}%` }}>
        {data.map((item, index) => {
          return (
            <img
              key={index}
              className="w-28 object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
              alt={`Item ${index}`}
            />
          );
        })}
      </div>
      <hr className="border my-4" />
    </>
  );
};


// Define prop types
OnYourMind.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageId: PropTypes.string.isRequired, // Validate imageId as a required string
    })
  ).isRequired, // Ensure data is an array and required
};


export default OnYourMind;
