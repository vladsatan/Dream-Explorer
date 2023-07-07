import React from 'react';
import { useEffect } from 'react';
import Header from '../Components/Header/Header';

const Home = () => {

    const getAccount = () => {

        const tokenInfo = JSON.parse(localStorage.getItem('auth_info'))
        let token = tokenInfo.access_token 
        let data = JSON.stringify({account_id: tokenInfo.account_id})
        fetch("https://api.dropboxapi.com/2/users/get_account", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: data
        }).then(res => res.json())
        .then(data => {localStorage.setItem('userInfo', JSON.stringify(data))})
        .catch(err => console.log(err));
    }

    const getList = () => {

        const tokenInfo = JSON.parse(localStorage.getItem('auth_info'))
        let token = tokenInfo.access_token
        let data = JSON.stringify({limit: 1000})

        fetch("https://api.dropboxapi.com/2/file_requests/list_v2", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: data
        }).then(res => res.json())
        .then(data => {console.log(data)})
        .catch(err => console.log(err));

    } 

    const getListContine = () =>{

    }

    useEffect(() =>{
        getAccount()
        // getList()
    },[])

    return (
        <div>
            Home pages
        </div>
    );
}

export default Home;
