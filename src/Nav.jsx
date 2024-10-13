////https://w0.peakpx.com/wallpaper/316/849/HD-wallpaper-yeezy-boost-yeezy-boost-stock-adidas-yeezy-boost.jpg

import { NavLink } from 'react-router-dom';
import logo from './image/logo.jpg'

const Nav = () => {

    

    const navZ = <>

      <div className=' flex-col md:flex-row lg:flex-row flex justify-between items-center gap-10'>


       
       <div className='  flex-col md:flex-row lg:flex-row  fle  flex justify-center items-center gap-2'>

       
       <li className='  hover:border-[1px] border-[#22fcdf] rounded-xl  font-serif' ><NavLink to='/' >HOME</NavLink></li>
       <li className='  hover:border-[1px] border-[#22fcdf] rounded-xl  font-serif' ><NavLink to='/about' >PAGE</NavLink></li>
       <li className='  hover:border-[1px] border-[#22fcdf] rounded-xl  font-serif' ><NavLink to='/shop' >SHOP</NavLink></li>
       <li className='  hover:border-[1px] border-[#22fcdf] rounded-xl  font-serif' ><NavLink to='/blog' >BLOGS</NavLink></li>
       <li className='  hover:border-[1px] border-[#22fcdf] rounded-xl  font-serif' ><NavLink to='/port' >PORTFOLIO</NavLink></li>

       </div>

    

       </div>
 
    
    
    </>






    return (
        <div>
            <div className="navbar  p-5 shadow-md  fixed text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navZ}
      </ul>
    </div>
    <div className=' flex items-center gap-2'>

       <img className=' h-[100px] ' src='https://cdn-icons-png.flaticon.com/128/4205/4205459.png' alt="" />
       <a className=" font-serif  text-3xl">SoleMates</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navZ}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-3">
     
    <div className='    flex items-center gap-2 '>
    
    <img className=' h-[30px]' src="https://cdn-icons-png.flaticon.com/128/10469/10469570.png" alt="" />
    <img className=' h-[30px]' src="https://cdn-icons-png.flaticon.com/128/1121/1121882.png" alt="" />    
    
    </div>




    <div>
       
        <a className="btn font-serif bg-white ">Run  

        <img className=' h-[30px] ' src="https://cdn-icons-gif.flaticon.com/10827/10827027.gif" alt="" />

        </a>
    </div>


  </div>
</div>
            
        </div>
    );
};

export default Nav;