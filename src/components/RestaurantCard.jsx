import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const RestaurantCard = (info) => {
  // console.log(info?.link?.split("/").at(-1));
  return (
   
      <Link to={`/restaurantMenu/${info?.link?.split("/").at(-1)}`}>
        <div className="min-w-[295px] h-[182px] relative">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
            alt={`Item ${info?.name}`}
          />
          <div className="w-full h-full rounded-2xl absolute top-0 bg-gradient-to-t from-black from-1% to-transparent to-40%"></div>
          <p className="text-white absolute bottom-0 left-2 text-base font-bold mb-2">
            {info?.aggregatedDiscountInfoV3
              ? info?.aggregatedDiscountInfoV3?.header +
                " " +
                info?.aggregatedDiscountInfoV3?.subHeader
              : ""}
          </p>
        </div>
        <div className="mt-2 ml-2">
          <h1 className="text-black text-xl font-bold">{info?.name}</h1>
          <p>
            <i className="fi fi-sr-circle-star text-green-600"></i>
            <span className="text-base text-black font-bold">
              {" "}
              {info?.avgRating}
            </span>{" "}
            <span className="text-base text-black font-bold">
              {info?.sla?.slaString}
            </span>
          </p>
          <p className="line-clamp-1 text-base text-black/60 font-semibold">
            {info?.cuisines?.join(", ")}
          </p>
          <p className="line-clamp-1 text-base text-black/60 font-semibold">
            {info?.locality}
          </p>
        </div>
      </Link>
    
  );
};
// Define prop types
RestaurantCard.propTypes = {
  info: PropTypes.shape({
    cloudinaryImageId: PropTypes.string.isRequired, // Ensure the image ID is a required string
    name: PropTypes.string.isRequired, // Ensure the name is a required string
    avgRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow avgRating as a string or number
    sla: PropTypes.shape({
      slaString: PropTypes.string, // Ensure slaString is optional but a string
    }),
    cuisines: PropTypes.arrayOf(PropTypes.string), // Ensure cuisines is an array of strings
    locality: PropTypes.string, // Ensure locality is optional but a string
    aggregatedDiscountInfoV3: PropTypes.shape({
      header: PropTypes.string, // Ensure header is optional but a string
      subHeader: PropTypes.string, // Ensure subHeader is optional but a string
    }),
  }).isRequired,
};

export default RestaurantCard;
