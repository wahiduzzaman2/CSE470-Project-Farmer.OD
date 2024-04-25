import {Link, NavLink, Outlet } from "react-router-dom";
import {FaWallet, FaHome,  FaUsers } from 'react-icons/fa';
import { FaCirclePlus, FaClipboardList } from "react-icons/fa6";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Dashboard = () => {

    const role = localStorage.getItem('Role');
    const {user, logOut, loading} = useContext(AuthContext)
        const handleLogout = () =>{
        logOut()
        .then()
        .catch(error => console.error(error));
        }

    return (
        <>
        <div className="navbar bg-base-100 p-7 xl:max-w-[80%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {
                        role == 'Admin' ? <>
                            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to="/dashboard/allUser"><FaClipboardList></FaClipboardList>All Users</NavLink></li>
                            <li><NavLink to="/dashboard/orderHistory"><FaUsers></FaUsers>Order History</NavLink></li>
                            
                        </> : role == 'Farmer'? <>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/dashboard/addProduct"><FaCirclePlus></FaCirclePlus>Add Product</NavLink></li>
                        <li><NavLink to={`/dashboard/myProduct/${user?.email}`}><FaClipboardList></FaClipboardList>My Products</NavLink></li>
                        
                        </>:<>
                            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to={`/dashboard/myCart/${user?.email}`}><FaClipboardList></FaClipboardList>My Cart</NavLink></li>
                            
                            <li><NavLink to={`/dashboard/purchaseHistory/${user?.email}`}><FaWallet></FaWallet>Purchase History</NavLink></li>
                        </>
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
                {
                        role == 'Admin' ? <>
                            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to="/dashboard/allUser"><FaClipboardList></FaClipboardList>All Users</NavLink></li>
                            <li><NavLink to="/dashboard/orderHistory"><FaUsers></FaUsers>Order History</NavLink></li>
                            
                        </> : role == 'Farmer'? <>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/dashboard/addProduct"><FaCirclePlus></FaCirclePlus>Add Product</NavLink></li>
                        <li><NavLink to={`/dashboard/myProduct/${user?.email}`}><FaClipboardList></FaClipboardList>My Products</NavLink></li>
            
                        </>:<>
                            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to={`/dashboard/myCart/${user?.email}`}><FaClipboardList></FaClipboardList>My Cart</NavLink></li>
                           
                            <li><NavLink to={`/dashboard/purchaseHistory/${user?.email}`}><FaWallet></FaWallet>Purchase History</NavLink></li>
                        </>
                    } 
                </ul>
            </div>
            <div className="navbar-end">
                { (user || loading) && 
                <div className="tooltip tooltip-top" data-tip={user?.displayName}>
                    <img
                        style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                        className="img-fluid d-block group-hover:opacity-80 transition-opacity me-3"
                        src={user?.photoURL}
                        alt=""
                        />
              </div>
                }

                {user || loading ? (
                <button onClick={handleLogout} className="btn btn-outline btn-warning">Logout</button>
                ) : (
                <Link to="/login" className="btn btn-outline btn-warning px-md-2">
                    Login
                </Link>
                )}

            </div>
        </div>
        <div className='xl:max-w-[80%] mx-auto'>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default Dashboard;