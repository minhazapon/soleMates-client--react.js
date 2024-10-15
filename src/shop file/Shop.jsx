import { useEffect } from "react";
import { useState } from "react";
import ShopList from "./ShopList";
import ShopPagination from "./ShopPagination";


const Shop = () => {


    const [shop, setShop] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postePerPage, setPostPerPage] = useState(6);


    useEffect( () =>{     
        fetch('https://sole-mates-server-h2pqomdj7-minhazapons-projects.vercel.app/shopData')
        .then( res => res.json())
        .then( data => setShop(data) )
    } , [])


    const lastPostIndex = currentPage * postePerPage 
    const fastPostIndex = lastPostIndex - postePerPage
    const currentPost = shop.slice(fastPostIndex, lastPostIndex)



    return (
        <div className=" ">

            <div
              className="hero min-h-screen "
              style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/athletic-style-shoes-trainers-shelf-shop_330478-3355.jpg?w=740 )",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-9xl font-thin text-white ">Shop</h1>
                </div>
              </div>
            </div>

            <div className=" mt-10 mb-10 ml-10 mr-10">
                 <div>
                   <p className=" font-serif text-center text-gray-500 mb-10"> Shop Items</p>
                 </div>
                 <ShopList shop={currentPost} ></ShopList>
                <div className=" flex justify-center">
                     <ShopPagination totalPost={shop.length} postePerPage={postePerPage} setCurrentPage={setCurrentPage} ></ShopPagination>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;