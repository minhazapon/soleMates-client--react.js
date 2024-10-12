import { Link } from "react-router-dom";



const NewSale = () => {


    return (
        <div className=" mt-20 mb-10  ">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center">



            <div
              className="hero min-h-screen  "
              style={{
                backgroundImage: "url(  https://www.onlybasics.de/cdn/shop/files/LUCA-GIUNTA-SHOPFOTOS-IDGAFSYNDROME-web-24.jpg?v=1703200303 )",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-9xl font-bold text-white font-serif">NEW</h1>
                </div>
              </div>
            </div>


            <div
              className="hero min-h-screen  "
              style={{
                backgroundImage: "url(   https://down-id.img.susercontent.com/file/5bcc64de380a066d2caa23ff03eb1bdb )",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className=" flex justify-start ">

                <div>
                <h1 className="mb-5 text-9xl font-bold text-white font-serif">SALE</h1>
                <p className=" text-white ">20% Off all Hoodies</p>
                <div>

                  <Link to='/shop' >
                  <button className=" mt-5 border-[1px] border-[#22fcdf]  h-[50px] w-[300px] text-3xl  text-white font-serif">Shop Now</button>
                  </Link>
               
                </div>
                </div> 
                </div>
              </div>
            </div>













            </div>
            
        </div>
    );
};

export default NewSale;