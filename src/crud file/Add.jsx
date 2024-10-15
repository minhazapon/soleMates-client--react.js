import Swal from "sweetalert2";



const Add = () => {


    const handleAdd = e =>{

      e.preventDefault();
      const form = e.target
      const name = form.name.value 
      const brand = form.brand.value 
      const price = form.price.value 
      const category = form.category.value 
      const photourl = form.photourl.value 
      const description = form.description.value 
      const addUser = { name, brand, price, category, photourl, description }
      console.log(addUser)

      fetch('https://sole-mates-server-h2pqomdj7-minhazapons-projects.vercel.app/addData', {
       
        method: 'POST',
        headers:{
           
            'content-type': 'application/json'

        },
        body: JSON.stringify(addUser)

      })
      .then( res => res.json())
      .then( data => {

           console.log(data)

           if(data.insertedID){
             
            alert('data added')

            Swal.fire({
                title: 'Successfully added!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            
            form.reset()  

           }
      } ) 
    }






    return (
        <div>


            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url( https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg?t=st=1728811341~exp=1728814941~hmac=0d4820298d669e789b4ffd0ae684ce573d6400afc79f9bbfb5c654411c8d09b0&w=740 )",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-9xl font-bold font-serif text-white ">Add Your Products</h1>
                </div>
              </div>
            </div>
            


            <div className=" mt-10 mb-10 ml-10 mr-10">

                 

<section class="bg-black dark:bg-gray-900 mt-10 border-[1px] border-[#00CCDD] rounded-xl ">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-[#00CCDD] dark:text-white  ">Add a new product</h2>
      <form onSubmit={handleAdd} >
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Product Name</label>
                  <input className=" bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "  placeholder="Type product name" required type="text" name="name" />
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Brand</label>
                  <input  name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" type="text" />
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Price</label>
                  <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""  />
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Category</label>
                  <select id="category" name="category" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="Premium">Premium</option>
                      <option value="General">General</option>
                    
                  </select>
              </div>
              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">PhotoUrl</label>
                  <input  placeholder="PhotoUrl" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" type="url" name="photourl" id="" />
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Description</label>
                  <textarea id="description" rows="8" name="description" class="block p-2.5 w-full text-sm text-[#00CCDD] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
           <input  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-black btn rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 border-[1px] border-[#00CCDD] " type="submit" value="AddProducts" />
          {/* <button type="submit">
              Add product
          </button> */}
      </form>
  </div>
</section>
    
</div>



        </div>
    );
};

export default Add;