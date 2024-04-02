import React, { useEffect, useState } from 'react';
import {Restaurant} from '../utils/constants'
import { Link, useParams } from 'react-router-dom';

  const RestaurantCard = ({ restaurant }) => {
    const { name, cloudinaryImageId, cuisines, avgRatingString } = restaurant.info; // Destructure props correctly
    return (
        <div className='border-gray-300 rounded-xl border-4 w-[220px] h-[300px] m-5'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className='w-[220px] h-[150px]' alt='food' />
            <div className='pl-4'>
            <h2 className='font-bold'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRatingString} Stars</h3>
            </div>
        </div>
    );
};


const Body = () => {

    const {id}=useParams();
    // const [restaurant,setRestaurant]=useState(Restaurant)
    const [searchTxt,setSearchTxt]=useState();

    const [allRestaurants,setAllRestaurants]=useState(Restaurant);
    const [filteredRestaurants,setFilteredRestaurants]=useState(Restaurant);
    function filterData(searchTxt,restaurant){
        return restaurant.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase()))
    }

    async function getRestaurant(){
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6362211&lng=77.2922332&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        // optional Chaining
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
      }
    
    
    useEffect(()=>{
        getRestaurant();
    },[])

    if(!allRestaurants){
        return null;
    }
    return (
        <>
    <div className='flex flex-col md:flex-row items-center'>
        <input type='text' className='mx-5 my-5 border border-gray-600 w-full md:w-auto' placeholder='Search Restaurant' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
        <button className='bg-gray-300 p-2 rounded-md ml-0 md:ml-5 mt-2 md:mt-0' onClick={() => {
            // filter data
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
        }}>Search</button>
    </div>
    {filteredRestaurants.length === 0 && <h1 className='mx-5 mt-5 text-center'>No Result Found</h1>}
    <div className='flex flex-wrap justify-center'>
        {filteredRestaurants.map((restaurant, index) => (
            <Link to={`/restaurant/`+restaurant.info.id}><RestaurantCard key={index} restaurant={restaurant} /></Link>
        ))}
    </div>
</>

    );
};

export default Body;
