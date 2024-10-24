import { useQuery } from "@tanstack/react-query";
import ShowAllDetails from "./ShowAllDetails";



const Showall = () => {

   


    const { data: query } = useQuery({

       queryKey: ['query'],
       queryFn: async () =>{

           const res = await fetch('https://solemates-server-nodejs-1.onrender.com/featuredData')
           return res.json()

       }
    })



    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center ">


            <div className=" grid  md:grid-cols-3">




              {

                query?.map( query => <ShowAllDetails query={query} ></ShowAllDetails> )


              }








            </div>
            
        </div>
    );
};

export default Showall;