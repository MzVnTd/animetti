import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';

import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Auth service
import auth from "../..";

const Login = () => {
	console.log(auth.currentUser);
	const navigate = useNavigate();
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // Action if the user is authenticated successfully
					navigate("/ranking");
                },
                uiShown: function() {
                    // This is what should happen when the form is full loaded. In this example, I hide the loader element.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInSuccessUrl: 'https://www.anyurl.com', // This is where should redirect if the sign in is successful.
            signInOptions: [ // This array contains all the ways an user can authenticate in your application. For this example, is only by email.
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                }
            ],
            tosUrl: 'https://www.example.com/terms-conditions', // URL to you terms and conditions.
            privacyPolicyUrl: function() { // URL to your privacy policy
                window.location.assign('https://www.example.com/privacy-policy');
            }
        });
    }, []);

    return (
        <>
            <h1 className="text-center my-3 title">Login Page</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center">Loading form</div>
        </>
    )
}

export default Login;