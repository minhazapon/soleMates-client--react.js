
import { Link } from "react-router-dom";

const Banner = () => {


    return (


        <div>

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/Portfolio-list-img-09.jpg)",
          }}>
          <div className=" hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="">
              <p className=" text-white font-serif text-7xl">Limited Edition<br></br> Sports Swear</p>
              <p className=" mt-5 font-serif text-xl text-white">Search The Shoes And Find Your pieces</p>

              <div className=" flex justify-center mt-5">

                <Link to='/shop' >
                <button className=" hover:border-[1px] border-[#22fcdf]  h-[50px] w-[300px] text-3xl  text-white font-serif">Shop Now</button>
                </Link>
                
              </div>
            
            </div>
          </div>
        </div>


            
        </div>
    );
};

export default Banner;