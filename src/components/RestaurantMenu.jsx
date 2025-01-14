import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  //   console.log(id?.split('-').at(-1).split("rest").at(-1));
  let mainId = id?.split("-").at(-1).split("rest").at(-1);
  const [resInfo, setResInfo] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [discountdata, setDiscountData] = useState([]);

  async function fetchMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const res = await data.json();
    // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setMenuData(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div className="w-full bg-red-500 ">
        <div className="w-1/2 bg-green-500 mx-auto">hello</div>
      </div>
    </>
  );
};

export default RestaurantMenu;
