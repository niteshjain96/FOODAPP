import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            let response = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${id}`
            );
            let json = await response.json();
            setRestaurant(json.data);
        } catch (error) {
            console.error('Error fetching restaurant information:', error);
        }
    }

    return (
        <div >
            <h2 className='font-bold text-3xl text-center mt-5'>
                {restaurant && restaurant.cards && restaurant.cards[2]?.card?.card?.info?.name} Menu Card
            </h2>
            <div className='flex'>
            <img className='m-10 border border-gray-300 rounded-md ' 
                 src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${restaurant && restaurant.cards && restaurant.cards[2]?.card?.card?.info?.cloudinaryImageId}`}/>
            <div className='m-10'>
                {restaurant && restaurant.cards && restaurant.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((menu) => (
                    <h3>{menu?.card?.info?.name}</h3>
                ))}
            </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
