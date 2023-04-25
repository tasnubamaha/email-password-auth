import React, { useState } from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import { Link } from 'react-router-dom';




const auth = getAuth(app);

const Register = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        // prevent page refresh
     event.preventDefault();
     setSuccess('');
     setError('');
    
     //  collect form data
     const email = event.target.email.value;
     const password = event.target.password.value;
     const name = event.target.name.value;
     console.log(name, email, password);

    //  validation
    if(!/(?=.*[A-Z])/.test(password)){
        setError('please add at least one uppercase');
        return;
    }
    else if (!/(?=.*[0-9].*[0-9])/.test(password)){
    setError('please add at least 2 numbers');
    return;
    }
    else if(password.length<6){
        setError('please add at least 6 characters');
        return;
    }
    //  create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        event.target.reset();
        setSuccess('account created');
        sendVerificationEmail(result.user);
        updateUserData(result.user, name);
    })
    .catch(error => {
        console.error(error.message);
        setError(error.message);
     })
    }
      

    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('Please verify your email address')
            })
    }

    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
   }


    return (
        <div className='w-50 mx-auto'>
            <h2>register now</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder="your email" required/>
                <br></br>
                <input className='w-50 mb-4 rounded ps-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="your password" required/>
                <br></br>
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
                <p><small>Already have an account? Please <Link to="/login">Login</Link> </small></p>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;