import { Link } from "react-router-dom";



const ShowAllDetails = ({query}) => {
    
    const { image, company, price, title } = query

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
             <Link to='/shop' >
             <img className="  hover:border-[1px] border-black p-2  h-[40px]" src="https://cdn-icons-png.flaticon.com/128/1124/1124233.png" alt="" />
             </Link>     
            </div>
		    </div>
            </div>
            </div>
            
        </div>
    );
};

export default ShowAllDetails;