import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect } from 'react';

const Header = (props) => {

    let { isLogin } = props

    

    let AUTH_URL = "https://www.dropbox.com/oauth2/authorize?client_id=yq91v1umde7estm&response_type=code&redirect_uri=http://localhost:3000/auth"

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    let photo
    let abbreviated_name
    let email
    let name

    useEffect(() => {

        if(isLogin && userInfo){

            if (userInfo.profile_photo_url) {
                photo = userInfo.profile_photo_url
    
            } else {
                abbreviated_name = userInfo.name.pabbreviated_name
            }
    
            email = userInfo.email
            name = userInfo.name.display_name

        }
    },[isLogin])

    return (
        <header>
            <div className='logo-box'>
                <img src={logo} />
                <h1>Dream Explorer</h1>
            </div>

            <SearchBar />

            {isLogin ?

             <div className='account-info'>

                <div className='name-email'>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
                
                {abbreviated_name? 
                <div className='photo-bg'>
                    {abbreviated_name}
                </div> 
                : 
                <img src={photo} />}


             </div> 

             : 

             <a href={AUTH_URL}><button className='signIN'>Sign In</button></a>}


        </header>
    );
}

export default Header;
