import { swiggy_menu_api_URL } from "../Constant"
import { useEffect, useState } from "react"

const useRestaurant = (resId) => {
    const [restInfo, setRestInfo] = useState()
    useEffect(() => {
        getResMenu()
    }, [])
    async function getResMenu() {
        const data = await fetch(swiggy_menu_api_URL + resId)
        const json = await data.json()
        // console.log(json)
        const menuData = await json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info)
        // console.log('menuData', menuData)
        setRestInfo(menuData)
        // console.log('restInfo', restInfo)
        // console.log('statevar', menuData)

        // setIsLoading(false)

    }
    return restInfo
}

export default useRestaurant