import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import validateJWT from '../JWT/Auth';
import '../Styling/Navbar.css';

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [value, setValue] = useState('1');
    const [showLogOrSignin, setShowLogOrSignin] = useState("none");

    useEffect(() => {
        validateJWT
        .then(data => {
            console.log(data)
            setLoggedIn(data)
        })
        console.log(loggedIn)
    }, []);

    const handleLogOrSigninClick = () => {
        showLogOrSignin === "none" ? setShowLogOrSignin("block") : setShowLogOrSignin("none");
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const userLoggedIn = () => {
        setLoggedIn(true);
    }

    const userLoggedOut = () => {
        setLoggedIn(false)
    }

    return(
        <div className="Header">
            <section className='logo-section'>
                <p>Digicademy</p>
            </section>
            <section className='searchbar-section'>
                <p className='header-text'>Categories</p>
                <input placeholder="Search..." className='search-input-field'/>
                {/*<SearchIcon className='search-icon' fontSize='large'/>*/}
            </section>
            <section className='account-section'>
                <p className='become-teacher-link header-text'>Become a teacher</p>
                <p className='become-teacher-link header-text'>Business</p>
                <ShoppingCartIcon className='shopping-cart-icon'/>
                <FavoriteIcon className='wishlist-icon'/>
                {
                    loggedIn ? (
                        <div>
                            <p>My study</p>
                            <div>
                                
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link className='sign-up-or-in-btn' to={{ pathname: '/login-or-signup', search: '?action=login'}}>
                                Login
                            </Link>
                            <Link className='sign-up-or-in-btn' to={{ pathname: '/login-or-signup', search: '?action=signup'}}>
                                Sign up
                            </Link>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default Navbar;