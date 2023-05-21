import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../Styling/LoginOrSignup.css';

export default function Login() {

    const [tabsValue, setTabsValue] = useState(0);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    let hashedPwd;
    let urlSearchParams = new URL(document.location).searchParams;
    let specificSearchParameter = urlSearchParams.getAll('action')

    useEffect(() => {
      specificSearchParameter == "login" ? setTabsValue(0) : setTabsValue(1);
    }, [useLocation()])

    const handleChange = (event, newValue) => {
      setTabsValue(newValue);
    };

    const a11yProps = index => {
      setTabsValue(index)
    }

    const clearCredentials = () => {
      setEmail("");
      setPwd("");
      setConfirmPwd("");
    }

    //Async function which hashes the inputted password with sha256
    async function sha256(password) {
      // encode as UTF-8
      const msgBuffer = new TextEncoder().encode(password);                    
                    
      // hash the password
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
                    
      // convert ArrayBuffer to Array
      const hashArray = Array.from(new Uint8Array(hashBuffer));
                    
      // convert bytes to hex string                  
      hashedPwd = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    }

    //Function to check password and email with regex and then add the user with axios post request
    const addUser = () => {

      const email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      //Check if password meets requirements
      if(pwd !== confirmPwd) {
        //Passwords are not matching up
        alert("Passwords are not matching.")
      } else if(pwd.length < 8) {
        //Password is less than required length
        alert("Password must be more than 8 characters")
      } else if(!/.*?(?:[a-z].*?[0-9]|[0-9].*?[a-z]).*?/i.test(pwd)) {
        //Password doesn't contain both numbers and characters
        alert("Password must contain both letters and numbers.")
      } else if(/^[0-9a-zA-Z]+$/.test(pwd)) {
              
        //Check one extra time if email is valid with a email regex, incase the user changed input type in inspect element
        if(email_validator_regex.test(email)) {
          //Create variable to store hashed password, call the function to hash the password, then use a promise (then) to do a axios post request to the backend
          sha256(pwd)
          .then(() => {
            console.log(hashedPwd + " " + pwd + process.env.REACT_APP_ENDPOINT);
            //Create user
            axios.post(`${process.env.REACT_APP_ENDPOINT}/signup`, { email: email, password: hashedPwd })
            .then(res => {
              //Depending on response from backend, tell user if email is in use or if the account was created
              res.data.exists ? alert("Email already in use") : alert("Account successfully created!");
            })
          })
        } else {
          //Email not valid
          alert("Please use a valid email");
        }
        } else {
          //Password contains "banned" characters
          alert("Password can only contain english letters and numbers")
        }
      }

    const login = () => {
      sha256(pwd)
      .then(() => {
        console.log(hashedPwd + " " + pwd + process.env.REACT_APP_ENDPOINT);
        //Create user
        axios.post(`${process.env.REACT_APP_ENDPOINT}/login`, { email: email, password: hashedPwd })
        .then(res => {
          //Depending on response from backend, tell user if email is in use or if the account was created
          if(!res.data.exists) {
            alert("Account with that username doesnt exist")
          } else {
            if(res.data.authenticated) {
              alert("Right credentials")
            } else {
              alert("Email and password not matching")
            }
          }
        })

      })
    }

    return (
      <div className='login-or-signup-div'>
        <section className='login-or-signup-form-section'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabsValue} onChange={handleChange} aria-label="basic tabs example">
                  <Tab className='login-or-signup-tabs' label="Login" onClick={() => {
                    a11yProps(0);
                    clearCredentials();
                    }} />
                  <Tab className='login-or-signup-tabs' label="Sign up" onClick={() => {
                    a11yProps(1);
                    clearCredentials();
                    }} />
                </Tabs>
            </Box>
            {
              tabsValue === 0 ? (
                <div className="tab-panel" value={tabsValue} index={0}>
                  <input type="email" placeholder='email' value={email} required onChange={e => setEmail(e.target.value)}/>
                  <input type="password" placeholder='password' value={pwd} required onChange={e => setPwd(e.target.value)}/>

                  <button disabled={
                    !email || !pwd ? true : false
                  } onClick={() => login()}>Login</button>
                  <button onClick={() => axios.get(`${process.env.REACT_APP_ENDPOINT}/xxxxxx`)}>test cookie</button>

                </div>
              ) : (
                <div className="tab-panel" value={tabsValue} index={1}>
                  <input type="text" placeholder='email' value={email} required onChange={e => setEmail(e.target.value)}/>
                  <input type="password" placeholder='password' value={pwd} required onChange={e => setPwd(e.target.value)}/>
                  <input type="password" placeholder='confirm password' value={confirmPwd} required onChange={e => setConfirmPwd(e.target.value)}/>

                  <button className="" disabled={
                    !email || !pwd || !confirmPwd ? true : false
                  } onClick={() => addUser()}>Login</button>
                  <button onClick={() => axios.get(`${process.env.REACT_APP_ENDPOINT}/xxxxxx`, {withCredentials: true})}>test cookie</button>
                </div>      
              )
            }
          </Box>
        </section>
      </div>
    )
}