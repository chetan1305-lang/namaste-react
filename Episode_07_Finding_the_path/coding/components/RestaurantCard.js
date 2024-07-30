import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundcolor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //console.log(props);
  const { resData } = props;
  //console.log(resData.info.cloudinaryImageId);
  const { cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime, } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="fooding"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}mins</h4>
    </div>
  );
};

export default RestaurantCard;
