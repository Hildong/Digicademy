import { useState } from 'react';
import '../Styling/Header.css';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);

    const userLoggedIn = () => {
        setLoggedIn(true);
    }

    const userLoggedOut = () => {
        setLoggedIn(false)
    }

    return(
        <div className="Header">
            <section className='logo-section'>Digicademy</section>
            <section className='searchbar-section'></section>
            <section className='account-section'>
                <p>Become a teacher man</p>
                {
                    loggedIn ? (
                        <div>
                            <p>My study</p>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => alert("Hello")}>
                                My account
                            </button>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default Header;