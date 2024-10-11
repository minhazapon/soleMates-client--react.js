import Banner from "./home file/Banner";
import CompanyLogo from "./home file/CompanyLogo";
import Fetured from "./home file/Fetured";
import Mark from "./home file/Mark";
import Marquee from "./home file/Marq";
import NewCollection from "./home file/NewCollection";
import NewSale from "./home file/NewSale";
import ProductsNumbers from "./home file/ProductsNumbers";
import Shoes from "./home file/Shoes";
import Street from "./home file/Street";


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
            <Street></Street>
            <Mark></Mark>
            
        </div>
    );
};

export default Home;