import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  //console.log(resInfo);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    //console.log("fafa",json.data);
    setResInfo(json.data);
  };
  //console.log("resInfo ===", resInfo);
  if (resInfo === null) return <Shimmer />;

  const { text, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
             <li key={item.card.info.id}>
             {item.card.info.name} -{" Rs."}
             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
           </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
