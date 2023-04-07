import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '../Styling/Header.css';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [value, setValue] = useState('1');
    const [showLogOrSignin, setShowLogOrSignin] = useState("none");

    useEffect(() => {
        console.log("I Only run once (When the component gets mounted)")
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
                <SearchIcon className='search-icon' fontSize='large'/>
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
                            <button className='sign-up-or-in-btn' onClick={() => handleLogOrSigninClick()}>
                                My account
                            </button>
                            <Box className="sign-in-or-up-box" sx={{ width: '15vw', typography: 'body1', display: showLogOrSignin }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab sx={{width: '50%'}} label="Sign in" value="1" />
                                        <Tab sx={{width: '50%'}} label="Sign up" value="2" />
                                    </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <input placeholder='Email'/>
                                        <input placeholder='Password'/>
                                        <br />
                                        <button>Log in</button>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <input placeholder='Email'/>
                                        <input placeholder='Password'/>
                                        <br />
                                        <button>Sign up</button>
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default Header;