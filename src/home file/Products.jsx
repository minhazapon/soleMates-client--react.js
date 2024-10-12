
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Showall from './Showall';


const Products = () => {
     
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className=" mt-20 ml-5 mr-5 mb-10">

              <div>
                <p className=" font-serif  text-gray-500 text-center">SoleMates Collection</p>
                <p className=" text-center text-6xl font-serif">Featured Products</p>
              </div>


            <div className=' flex justify-center mt-10'>


            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
            <Tab>SHOW ALL</Tab>
            <Tab>FITNESS</Tab>
            <Tab>CYCLING</Tab>
            <Tab>WINTER</Tab>
            </TabList>
            <TabPanel>
            <Showall></Showall> 
            </TabPanel>
            <TabPanel>
            <Showall></Showall> 
            </TabPanel>
            <TabPanel>
            <Showall></Showall> 
            </TabPanel>
            <TabPanel>
            <Showall></Showall> 
            </TabPanel>
            </Tabs>


            </div>
            
        </div>
    );
};

export default Products;