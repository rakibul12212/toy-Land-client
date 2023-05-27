import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

<nav className="bg-slate-300 border-gray-200 dark:bg-gray-900 sticky z-100 top-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-start">
      <img src="logo.jpg" className="h-8 mr-3" alt="toyland Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToyLand</span>
  </Link>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500 hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>Home</NavLink>
      </li>
      <li>
        <NavLink to="alltoys" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500  hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>All Toys</NavLink>
      </li>
      <li>
        <NavLink to="/addatoy" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500 hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>Add A Toy</NavLink>
      </li>
      <li>
        <NavLink to="/mytoys" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500 hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>My Toys</NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500 hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500 hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active-link' : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-blue-500 hover:text-gray-900 hover:border-gray-300 dark:hover:text-gray-300")}>Contact Us</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </>
    );
};

export default Navbar;





