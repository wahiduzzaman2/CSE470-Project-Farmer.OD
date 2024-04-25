import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    const role = localStorage.getItem('Role');
    

    const handleLogout = async () => {
        try {
          await logOut();
          localStorage.removeItem('Role');
        } catch (error) {
          console.error(error);
        }
      };
    
    return (
        <div className={ "navbar"} >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Foods">Foods</Link></li> 
                    {/* <li><Link to="/my-cart">My Cart</Link></li> */}
                    {user &&
                    <li><Link to={
                        role == 'Admin' ? '/dashboard/allUser'
                            : role == 'Farmer' ? '/dashboard/myProduct'
                            : '/dashboard/myCart'
                        }>Dashboard</Link></li>}

                    {!user &&
                    <li><Link to="/becameSeller" className="text-yellow-500 underline decoration-underline">Became A Seller</Link></li>
                    }
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <span className="text-red-500 font-extrabold">Food</span>
                    <span className="text-blue-500 font-extrabold">2</span>
                    <span className="text-yellow-400 font-extrabold">Door</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Foods">Foods</Link></li> 
                    {/* <li><Link to="/my-cart">My Cart</Link></li> */}
                    {user &&
                    <li><Link to={
                        role == 'Admin' ? '/dashboard/allUser'
                        : role == 'Farmer' ? `/dashboard/myProduct/${user?.email}`
                        : `/dashboard/myCart/${user?.email}`
                    }>Dashboard</Link></li>}

                   {!user &&
                    <li><Link to="/becomeSeller" className="text-yellow-500 underline decoration-underline">Become A Seller</Link></li>
                   }
                </ul>
            </div>
            <div className="navbar-end">
            
            { (user) && 
                <div className="tooltip tooltip-top" data-tip={user?.displayName}>
                    <img
                        style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                        className="img-fluid d-block group-hover:opacity-80 transition-opacity me-3"
                        src={user?.photoURL}
                        alt={user?.photoURL}
                        />
              </div>
                }

                {user ? (
                <button onClick={handleLogout} className="btn btn-outline btn-warning">Logout</button>
                ) : ( 
                <Link to="/login" className="btn btn-outline btn-warning px-md-2">
                    Login
                </Link>
 )}

            </div>
        </div>
    );
};

export default Header;