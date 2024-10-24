import { useEffect } from "react";
import { useState } from "react";
import TrendDetails from "./TrendDetails";



const TrendNow = () => {


    const [trend, setTrend] = useState([])

    useEffect( () =>{

        fetch('https://solemates-server-nodejs-1.onrender.com/trendingData')
        .then( res => res.json())
        .then( data => setTrend(data) )

    } , [])


    return (
        <div className=" mt-20 mb-10 ml-5 mr-5">


            <div>


               <div>
                   <p className=" font-serif text-gray-400 text-center ">Find What is</p>
                   <p className=" text-center mt-5 text-6xl font-serif ">Trending Now</p>

               </div>

               

               <div className=" flex justify-center mt-10 ">
                  <div className=" grid  md:grid-cols-3 ">


                       
                       {
                               
                               trend.map( trend => <TrendDetails trend={trend} ></TrendDetails> )

                       }




                  </div>
               </div>






            </div>
            
        </div>
    );
};

export default TrendNow;