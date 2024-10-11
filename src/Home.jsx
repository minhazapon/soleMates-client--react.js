import Banner from "./home file/Banner";
import CompanyLogo from "./home file/CompanyLogo";
import Fetured from "./home file/Fetured";
import NewCollection from "./home file/NewCollection";
import NewSale from "./home file/NewSale";
import ProductsNumbers from "./home file/ProductsNumbers";
import Shoes from "./home file/Shoes";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Fetured></Fetured>
            <Shoes></Shoes>
            <NewCollection></NewCollection>
            <ProductsNumbers></ProductsNumbers>
            <NewSale></NewSale>
            <CompanyLogo></CompanyLogo>
            
        </div>
    );
};

export default Home;