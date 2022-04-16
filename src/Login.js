import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from './firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur =event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }


    const handleSignInUser = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
    }
    
    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div className='w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-5'>
                <h1>Login </h1>
                <Form onSubmit={handleSignInUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email"  required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p className='text-danger'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>
                Dream Pictures <Link to="/signup">Create a account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;