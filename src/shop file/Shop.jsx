import { useEffect } from "react";
import { useState } from "react";


const Shop = () => {


    const [shop, setShop] = useState([])


    useEffect( () =>{     
        fetch('http://localhost:5000/shopData')
        .then( res => res.json())
        .then( data => setShop(data) )
    } , [])



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

                </div>
            </div>
            
        </div>
    );
};

export default Shop;