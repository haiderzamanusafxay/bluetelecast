import React, { useEffect } from 'react';

function GoogleSignIn() {
  useEffect(() => {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: '1072310200260-q1qe1abccig96i51rr1ab237c9mg91mq.apps.googleusercontent.com',
      });
    });
  }, []);

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn().then(function(user) {
      console.log('User signed in:', user);
      // Add your logic for handling the signed-in user here
    }, function(error) {
      console.error('Error signing in:', error);
    });
  };

  const signOut = () => {
    gapi.auth2.getAuthInstance().signOut().then(function() {
      console.log('User signed out');
      // Add your logic for handling sign-out here
    });
  };

  return (
    <div>
      <button onClick={signIn}>Sign In with Google</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default GoogleSignIn;