import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

const RestaurantMenu = () => {
  const { id } = useParams();
  let mainId = id?.split("-").at(-1).split("rest").at(-1);
  const [resInfo, setResInfo] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [discountdata, setDiscountData] = useState([]);
  const [value, setValue] = useState(0);

  function handlePrev() {
    if (value > 0) setValue((prev) => prev - 26);
  }

  function handleNext() {
    if (value < 104) setValue((prev) => prev + 26);
  }

  async function fetchMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const res = await data.json();
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setMenuData(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    );
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-8">
        <p className="text-[12px] text-slate-500">
          <Link to="/">
            <span className="hover:text-slate-700 hover:cursor-pointer">Home</span>
          </Link>
          /
          <Link to="/">
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {resInfo.city}
            </span>
          </Link>
          /
          <span className="text-slate-700">{resInfo.name}</span>
        </p>
        <div className="pt-11 pb-5">
          <h1 className="font-bold text-2xl tracking-[-0.4px] leading-[28px] ms-5">
            {resInfo.name}
          </h1>
        </div>

        <div className="w-full h-auto bg-gradient-to-t from-slate-200/70 rounded-[30px] px-4 pb-4">
          <div className="w-full bg-white border border-slate-200/70 rounded-[20px] h-full px-6 py-3">
            <div className="flex items-center gap-2 py-">
              <span className="mt-1">
                <i className="fi fi-sr-circle-star text-green-600"></i>
              </span>
              <span className="font-bold tracking-[-0.4px] text-xl leading-[19px]">
                {resInfo.avgRating}
              </span>
              <span className="font-bold tracking-[-0.4px] text-xl leading-[19px]">
                ({resInfo.totalRatingsString})
              </span>
              <span className="flex items-center gap-1 font-bold tracking-[-0.4px] leading-[19px] text-xl">
                <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                {resInfo.costForTwoMessage}
              </span>
            </div>
            <div className="flex items-center py-2 gap-1">
              <p className="font-bold text-[14px] tracking-[-0.1px] leading-[17px] text-orange-600 underline decoration-solid decoration-orange-600">
                {resInfo?.cuisines?.join(",")}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-2 flex flex-col justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="w-[1px] h-[23px] bg-slate-400"></div>
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex gap-3">
                  <span className="font-bold text-[14px]">Outlet</span>
                  <span className="text-slate-500 font-extralight text-[14px]">
                    {resInfo.areaName}
                  </span>
                </p>
                <p className="font-bold text-[14px]">{resInfo?.sla?.slaString}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-hidden">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-2xl font-bold ms-5">Deals for you</h1>
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
          <div className="flex gap-2 py-5">
            {discountdata?.map((data, index) => (
              <Discount key={index} data={data} index={index} />
            ))}
          </div>

          <h2 className="text-[13px] leading-[16px] tracking-[4px] font-normal text-center flex justify-center items-center">
           
            MENU
          
          </h2>
        </div>
      </div>
    </div>
  );
};

function Discount({
  data: {
    info: { header, offerLogo, couponCode },
  },
  index,
}) {
  return (
    <div
      key={index}
      className="flex bg-white min-w-[328px] h-auto border rounded-lg p-4 mb-4"
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`}
        width={48}
        height={48}
        alt={header}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <h1 className="text-lg font-semibold text-gray-800">{header}</h1>
        <p className="text-sm text-gray-600">{couponCode}</p>
      </div>
    </div>
  );
}

RestaurantMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageId: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Discount.propTypes = {
  data: PropTypes.shape({
    info: PropTypes.shape({
      header: PropTypes.string.isRequired,
      offerLogo: PropTypes.string.isRequired,
      couponCode: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
  }).isRequired,
};

export default RestaurantMenu;
