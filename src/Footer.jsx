import Swal from "sweetalert2";




const Footer = () => {


  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Join Done!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      event.target.reset();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      setResult(data.message);
    }
  };




    return (
        <div className=" ">

          <div className=" mt-5 mb-5">
             <hr></hr>
          </div>




          <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-20">
             <div>
             <img className=' h-[100px] ' src='https://cdn-icons-png.flaticon.com/128/4205/4205459.png' alt="" />
             </div>

             <div className=" flex items-center gap-5">
               <img className=" h-[60px] " src="https://cdn-icons-png.flaticon.com/128/2311/2311992.png" alt="" />
               <p className=" font-thin ">FREE SHIPPING &<br></br> RETURN POLICY</p>
             </div>

             <div className=" flex items-center gap-5">
               <img className=" h-[60px] " src="https://cdn-icons-png.flaticon.com/128/9417/9417383.png" alt="" />
               <p className=" font-thin ">90-DAY WARRANTY</p>
             </div>

             <div className=" flex items-center gap-5">
               <img className=" h-[60px] " src="https://cdn-icons-png.flaticon.com/128/9091/9091861.png" alt="" />
               <p className=" font-thin ">NEW PRODUCT <br></br>OFFERINGS & DEALS</p>
             </div>
          </div>

          <div className=" mt-5 mb-5 ">
             <hr></hr>
          </div>


          <div className=" mt-10">


          <footer className=" flex-col md:flex-row lg:flex-row flex justify-center gap-80 footer bg-white text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>





          </div>


          <div className=" mt-5 mb-5">
             <hr></hr>
          </div>



          <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-36 mt-10 mb-10">



            <div>
            <form onSubmit={onSubmit} >
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="Join Us"
                      name="name"
                      required
                      className="input input-bordered join-item" />
                    <input className=" btn join-item font-thin " type="submit" value="join" />
                  </div>
                </fieldset>
              </form>
            </div>


            <div>
               
               <p className=" font-thin ">New York<br></br>
               7(381)157-09-479<br></br>
               45 Grand BEntral Teriman<br></br>
               New York, NY<br></br>
               Mon-Sat: 09:00-19:00</p>

            </div>


            <div>

               <p className=" font-thin ">Los Angeles<br></br>
                7(382)157-09-474<br></br>
                90A Tolbuhina Lorem Original<br></br>
                Los Angeles, CA 200153<br></br>
                Mon-Sat: 09:00-19:00</p>

            </div>






          </div>


          <footer className="footer  text-neutral-content items-center p-4 bg-no-repeat bg-cover "
          
          style={{
            backgroundImage: "url(  https://img.freepik.com/free-photo/close-up-basketball-shoes_23-2150847378.jpg?t=st=1728727235~exp=1728730835~hmac=943de370deaa5942ef38001a76ab81273030cd3f9d7bbf37d4b2ee326fa0dfbc&w=740 )",
          }}
          
          
          >
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>


            
        </div>
    );
};

export default Footer;

