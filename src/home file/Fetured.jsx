import { Link } from "react-router-dom";



const Fetured = () => {


    return (
        <div className=" mt-20 mb-10 ml-10 mr-10  flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 ">

            <div className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img
                  src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/main-home-product-1.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-serif ">Featured!</h2>
                <div className="card-actions justify-end">

                  <Link to='/shop' >
                     
                     <button className="btn  mt-48 ">Shop Now</button>
                  
                  </Link>
                 
                </div>
              </div>
            </div>




            <div className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img
                  src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-2-product-1.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-serif ">newCollection!</h2>
                <div className="card-actions justify-end">
                <Link to='/shop' >
                     
                     <button className="btn  mt-48 ">Shop Now</button>
                  
                  </Link>
                 
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Fetured;