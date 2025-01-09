import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);

  const [menuData, setmenuData]=useState("");

  async function fetchMenu() {
    const data = await fetch(
      `/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${id}&catalog_qa=un`
    );

    const res = await data.json();
    console.log(res?.data?.cards[0]?.card?.card?.text);
    setmenuData(res?.data?.cards[0]?.card?.card?.text);
  }

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <h1>RestaurantMenu----{id} {menuData}</h1>
    </>
  );
};

export default RestaurantMenu;
