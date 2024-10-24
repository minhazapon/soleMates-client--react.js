import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ReadDetails = ({query, shoesDelete, setShoesDelete}) => {
    

    const { _id, name, brand, price, category, photourl, description} = query


    const handleDelete = delete_id =>{
          
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`https://solemates-server-nodejs-1.onrender.com/addData/${_id}`,{

                method: 'DELETE',

            })
            .then( res => res.json())
            .then( data => {
               
                console.log(data)

                if(data.deletedCount > 0){

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    
                    const remaining = shoesDelete.filter(sd => sd._id !== _id )  
                    setShoesDelete(remaining)

                }


            } )




            }
          });




    }




    return (
        <div>


            <div className="max-w-xs hover:border-[1px] border-black  shadow-md h-[500px] w-[500px] bg-white text-black">
	        <img src={photourl} alt="" className="object-cover object-center w-full  h-72 bg-gray-500" />
	            <div className="flex flex-col justify-between p-6 space-y-8">
		    <div className="space-y-2">
			<h2 className=" text-xl tracking-wide font-serif"> {brand} </h2>
			<p className="text-black text-2xl font-serif">  </p>
            <h2 className=" text-xl tracking-wide font-serif"> {name} </h2>
            <div className=" flex justify-between items-center ">
             <p  className="  text-xl text-gray-500 font-thin "> ${price} </p>
             <div>
             </div>
            </div>
            <div className=" flex items-center gap-5">

             <Link to='/buy' >
                    
             <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
             <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
             <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
             <span class="relative text-black font-serif group-hover:text-white">Buy Now</span>
             </a>

             
             </Link>

          


             <button onClick={ ()=> handleDelete(query._id) } ><img className=" h-[40px]" src="https://cdn-icons-png.flaticon.com/128/4041/4041307.png" alt="" /></button>
             <Link to={`/update/${_id}`} >
             <button><img className=" h-[40px]" src="https://cdn-icons-png.flaticon.com/128/1688/1688988.png" alt="" /></button>
             </Link>
            </div>
		    </div>
            </div>
            </div>
            
        </div>
    );
};

export default ReadDetails;