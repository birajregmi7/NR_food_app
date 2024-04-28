import { useEffect, useState } from 'react'
import restaurantList from '../Json'
import Card from './Cards'
import Shimmer from './Shimmer'
import { Form, Link } from 'react-router-dom'
import MainDesign from './MainDesign'
// import Search from './Search'
const filterFun = (searchedText, apiChange) => {
    return apiChange.filter((x) => {
        return x.info.name.toLowerCase().includes(searchedText.toLowerCase())
    })
}
const Body = () => {
    const [searchText, setSearchText] = useState('')
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    useEffect(() => {
        // console.log('Use effect rendering')
        fetchData()
        return () => {    // here the component is unmounting
        }
    }, [])
    { console.log('Normal Render') }
    async function fetchData() {
        const dataFetch = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        const json = await dataFetch.json()
        const correctJsonCheckedData = await checkJsonData(json)
        console.log('check', correctJsonCheckedData)
        setFilteredRestaurants(correctJsonCheckedData)
        setAllRestaurants(correctJsonCheckedData)

        async function checkJsonData(dataJson) {
            for (let i = 0; i < dataJson.data.cards.length; i++) {
                const checkedData = dataJson?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                if (checkedData != undefined) {
                    return checkedData
                }
            }
        }
    }
    {
        return (allRestaurants?.length === 0) ? (<Shimmer />)
            :
            (
                <>
                    <MainDesign />
                    <div className='flex flex-col justify-center items-center'>
                        <div style={{ padding: '1rem' }}>
                            <form className='flex justify-center items-center' onSubmit={(e) => e.preventDefault()}>
                                <input
                                    className='w-96 h-10 m-5 border-solid border-2 border-gray-600 placeholder:italic placeholder:text-slate-400 block bg-white rounded-md py-2 pl-4  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                                    placeholder='Search Restaurants'
                                    value={searchText}
                                    onChange={(e) => {
                                        setSearchText(e.target.value)
                                    }}
                                />
                                <button className='h-10 bg-slate-100' onClick={() => {
                                    console.log('working')
                                    const filteredJsonData = filterFun(searchText, allRestaurants)
                                    setFilteredRestaurants(filteredJsonData)
                                }}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg></button>
                            </form>
                        </div>
                        {(filteredRestaurants?.length === 0) ? <h1>No data is avaliable</h1> :
                            <div className=' flex flex-row justify-center flex-wrap gap-y-6 gap-x-4 md:ml-32 md:mr-32'>
                                {filteredRestaurants?.map((restaurant) => {
                                    return <Link to={"/restaurant/" + restaurant.info.id}> <Card className=" " {...restaurant?.info} key={restaurant?.info?.id} /></Link>
                                })}
                            </div>}
                    </div>
                </>
            )
    }

}

export default Body