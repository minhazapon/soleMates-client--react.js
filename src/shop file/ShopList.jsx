import Shopdetails from "./Shopdetails";




const ShopList = ({shop}) => {
    return (
        <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 ">


                 { shop.map( (shop, index) => {

                      return (

                         <Shopdetails key={index} image={shop.image} company={shop.company} price={shop.price} title={shop.title}  ></Shopdetails>


                      )



                 })}
 


            </div>
            
        </div> 
    );
};

export default ShopList;