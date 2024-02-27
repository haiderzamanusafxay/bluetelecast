import React from 'react'
import {useEffect} from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
const clientId="1072310200260-q1qe1abccig96i51rr1ab237c9mg91mq.apps.googleusercontent.com"
const Home = () => {
  useEffect(() => {
    gapi.load("shareme_frontend:auth2", () => {
     gapi.auth2.init({clientId:clientId})
    })
   }, []);


  const handleLogin = (response) => {
    console.log(response);
  }
  return (

    <>
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign up with Google"
      onSuccess={handleLogin}
      className="w-full btn_font_family"
      style={{ fontFamily: "Lato sans-serif" }}
      />
    </>
  )
}

export default Home