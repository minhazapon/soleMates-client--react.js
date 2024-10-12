import Banner from "./home file/Banner";
import CompanyLogo from "./home file/CompanyLogo";
import Fetured from "./home file/Fetured";
import Mark from "./home file/Mark";
import NewCollection from "./home file/NewCollection";
import NewSale from "./home file/NewSale";
import Products from "./home file/Products";
import ProductsNumbers from "./home file/ProductsNumbers";
import Shoes from "./home file/Shoes";
import Street from "./home file/Street";
import TrendNow from "./home file/TrendNow";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Fetured></Fetured>
            <Products></Products>
            <Shoes></Shoes>
            <NewCollection></NewCollection>
            <ProductsNumbers></ProductsNumbers>
            <NewSale></NewSale>
            <CompanyLogo></CompanyLogo>
            <TrendNow></TrendNow>
            <Street></Street>
            <Mark></Mark>
        
                        
        </div>
    );
};

export default Home;