import PropTypes from "prop-types";
import RestaurantCard from "./RestaurantCard";

const OnlineFoodDelivery = ({ data }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Restaurants with online food delivery in Noida 1
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map(({ info , cta : {link}}) => {
          return (
            <div key={info?.id} className="hover:scale-95 duration-300">
              <RestaurantCard {...info} link={link}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

// Define prop types for validation
OnlineFoodDelivery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      info: PropTypes.shape({
        id: PropTypes.string.isRequired, // Ensure id is a required string
        cloudinaryImageId: PropTypes.string,
        name: PropTypes.string,
        avgRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        sla: PropTypes.shape({
          slaString: PropTypes.string,
        }),
        cuisines: PropTypes.arrayOf(PropTypes.string),
        locality: PropTypes.string,
        aggregatedDiscountInfoV3: PropTypes.shape({
          header: PropTypes.string,
          subHeader: PropTypes.string,
        }),
      }).isRequired, // Ensure info is required
    })
  ).isRequired, // Ensure data is an array and required
};

export default OnlineFoodDelivery;
