import { useQuery } from "@tanstack/react-query";
import ReadDetails from "./ReadDetails";



const Read = () => {

     const { data: query } = useQuery({

          queryKey: ['query'],
          queryFn: async () =>{

              const res = await fetch('https://sole-mates-server-h2pqomdj7-minhazapons-projects.vercel.app/addData')
              return res.json()

          }


     })


    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://img.freepik.com/premium-vector/e-commerce-flat-illustration-design_286786-6049.jpg?w=740)",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-8xl font-bold font-serif text-white ">Products</h1>
                </div>
              </div>
            </div>

            <div>
               <p className="  font-thin text-xl text-center mt-5 mb-5 text-gray-500 ">Your Products</p>
            </div>

            {/* /////////////////////////////////////////////// */}
           

            <div className=" flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 ">


                    {

                       query?.map( query => <ReadDetails query={query} ></ReadDetails> )

                    }



                </div>
            </div>
            
        </div>
    );
};

export default Read;