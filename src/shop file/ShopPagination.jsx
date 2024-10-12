

const ShopPagination = ({ totalPost, postePerPage, setCurrentPage }) => {
    

    let shop = []

    for( let i = 1; i <= Math.ceil(totalPost/postePerPage); i++ ){

       shop.push(i)


    }
  

    return (
        <div>

            { shop.map ( ( shop, index ) => {


                    return  <div className="join mt-10 ">
                    <button onClick={() => setCurrentPage(shop)} className="join-item btn" key={index} > {shop} </button>
                    </div>
                   
                  
            })}
            
        </div>
    );
};

export default ShopPagination;

