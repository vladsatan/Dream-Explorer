import React from 'react';
import { useLocation } from 'react-router-dom';

const Auth = (props) => {

    let { setIsLogin } = props

    let params = (new URL(document.location)).searchParams;
    let AUTH_CODE = params.get("code")

    let location = useLocation()

    const funcGetToken = () => {

        const url = 'https://api.dropboxapi.com/oauth2/token';
        const authorizationCode = AUTH_CODE;
        const redirectUri = 'http://localhost:3000/auth';
        const clientId = 'yq91v1umde7estm';
        const clientSecret = '2fp06ydmsd7ugvq';
    
        const data = new URLSearchParams();
        data.append('code', authorizationCode);
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', redirectUri);
        data.append('client_id', clientId);
        data.append('client_secret', clientSecret);
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data,
        })
          .then(response => response.json())
          .then(data => {
            // Обработка ответа от сервера
            console.log(data);
            localStorage.setItem('auth_info', JSON.stringify(data));
            setIsLogin(true);
            setTimeout(()=>{
                window.location.href = "http://localhost:3000/home";
            },1000)
            
          })
          .catch(error => {
            // Обработка ошибок
            console.error(error);
          });
      }

      funcGetToken()

    return (
        <div></div>
    );
}

export default Auth;
