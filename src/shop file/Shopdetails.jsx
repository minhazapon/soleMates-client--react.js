import { Link } from "react-router-dom";



const Shopdetails = ({ image, company, price, title }) => {


    return (
        <div>

            <div className="max-w-xs hover:border-[1px] border-black  shadow-md h-[500px] w-[500px] bg-white text-black">
	        <img src={image} alt="" className="object-cover object-center w-full  h-72 bg-gray-500" />
	            <div className="flex flex-col justify-between p-6 space-y-8">
		    <div className="space-y-2">
			<h2 className=" text-xl tracking-wide font-serif"> {company} </h2>
			<p className="text-black text-2xl font-serif">  </p>
            <h2 className=" text-xl tracking-wide font-serif"> {title} </h2>
            <div className=" flex justify-between items-center ">
             <p  className="  text-xl text-gray-500 font-thin "> {price} </p>
             <div>

                <Link to='/add' >
                
                <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white font-serif ">Add Cart</span>
                </a>
                
                </Link>
                
             </div>
            </div>
		    </div>
            </div>
            </div>
            
        </div>
    );
};

export default Shopdetails;