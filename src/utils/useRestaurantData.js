// import { useState, useEffect } from 'react'
// const useRestaurantData = () => {
//     const [allRestaurantss, setAllRestaurantss] = useState([])
//     const [filteredRestaurantss, setFilteredRestaurantss] = useState([])
//     useEffect(() => {
//         console.log('Use effect rendering')
//         fetchData()
//         return () => {    // here the component is unmounting
//         }
//     }, [])
//     { console.log('Normal Render') }
//     async function fetchData() {
//         const dataFetch = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
//         const json = await dataFetch.json()
//         const correctJsonCheckedData = await checkJsonData(json)
//         console.log('check', correctJsonCheckedData)
//         setFilteredRestaurantss(correctJsonCheckedData)
//         setAllRestaurantss(correctJsonCheckedData)

//         async function checkJsonData(dataJson) {
//             for (let i = 0; i < dataJson.data.cards.length; i++) {
//                 const checkedData = dataJson?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//                 if (checkedData != undefined) {
//                     return checkedData
//                 }
//             }
//         }

//     }
//     return [allRestaurantss, filteredRestaurantss]
// }
//     export default useRestaurantData