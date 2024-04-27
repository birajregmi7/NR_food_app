// const categories = await data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//     (c) =>
//         c.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
// );
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cdn_Img_Link } from "../Constant";
import Shimmer from "./Shimmer";
// import useRestaurant from "../utils/useRestaurant";
import { swiggy_menu_api_URL } from '../Constant'
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
const RestraurantMenu = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const  {resId}  = useParams()
    const restInfo = useRestaurant(resId)
    const dispatch = useDispatch()
    console.log(restInfo)

    const handleOnClick= (x) =>{
        dispatch(addToCart(x))
    }

    return (!restInfo) ? <Shimmer /> : (
        <>
            <div>
                {restInfo?.map((x) =>
                    <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
                        <h2>{x.name}</h2>
                        <img style={{ width: '150px' }} src={`${cdn_Img_Link}${x.imageId}`} alt={x.name} />
                        {(typeof x.defaultPrice === 'number' || typeof x.price === 'number') &&
                            <h3>Price: {((x.defaultPrice || x.price) / 100).toFixed(2)}</h3>
                        }
                        <h4>{x.description}</h4>
                        <button className="bg-slate-700 text-white w-20 h-10 rounded-md" onClick={()=>{handleOnClick(x)}}>Add +</button>
                    </div>
                )}
            </div>

        </>
    );
};

export default RestraurantMenu;