import { Link, Navigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaSearchengin} from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContexProvider';
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handelLogout = ()=>{
    logOut()
    .then(() => {
      <Navigate to={'/'}></Navigate>
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:  hidden">
        
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-20' src={logo} alt="" /></a>
    <div className="form-control ml-6">
    <FaSearchengin className='absolute ml-2 mt-4 text-cyan-700'/>
      <input type="text" placeholder="   Search" className="input input-bordered w-24 md:w-auto"  />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/news'}>News</Link></li>
      <li><Link to={'/destination'}>Destination</Link></li>
      
      
    </ul>
  </div>
  <div className="navbar-end pr-5">
    {
      user ? <Link onClick={handelLogout}  className='btn'>Logout</Link>
      :
      <Link to={'/login'} className='btn'>Login</Link>
    }
    
  </div>
</div>  
    );
};

export default Navbar;