import React, { useContext } from 'react';
import logo from '../../images/logo2.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { useAuth } from '../Login/useAuth';
import { CartContext } from '../../App';

const Navbar = () => {

    const history = useHistory();
    const auth = useAuth();
    const [cart, setCart] = useContext(CartContext)

    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white border-bottom">
                <div className="container">
                    <img onClick={() => history.push('/')} src={logo} alt="" width='180px' height='50px' />

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                auth.user &&
                                <li className='nav-item'>
                                    <Link className='nav-link text-danger text-capitalize'>{auth.user.displayName}</Link>
                                </li>
                            }
                            <li className='nav-item mt-2 ml-3'>
                                <Link to='/cart' className='text-dark'>
                                    <AddShoppingCartIcon />
                                </Link>
                                <span>{cart.length && cart.length}</span>
                            </li>
                            <li className="nav-item ml-3 signUp">
                                {auth.user ?
                                    <Link onClick={() => { auth.signOut() }} className="nav-link text-white" href="#">Sing Out</Link>
                                    :
                                    <Link to='/login' className="nav-link text-white" href="#">Sing Up</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;