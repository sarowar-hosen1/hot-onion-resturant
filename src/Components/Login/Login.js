import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../images/logo2.png';
import './Login.css';
import { useAuth } from './useAuth';

const Login = () => {
    const [returnUser, setReturnUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = useAuth();

    const onSubmit = (data) => {
        if (returnUser) {
            if (data.email, data.password) {
                auth.signIn(data.email, data.password)
            }
        }else{
            if (data.email, data.password, data.name) {
                auth.signUp(data.email, data.password, data.name)
            }
        }
    }
    return (
        <div className="sign-up">
            <div className="logo mb-4">
                <img src={logo} alt="" />
            </div>
            <button onClick={auth.googleSignIn} className='btn btn-danger w-100 mx-auto d-block my-4'>Continue With Google</button>
            <button onClick={auth.fbsignIn} className='btn btn-danger w-100 mx-auto d-block my-4'>Continue With Facebook</button>
            {
                returnUser ?
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="email" className='form-control' ref={register({ required: true })} placeholder='Email address' />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="password" type='password' className='form-control' ref={register({ required: true })} placeholder="Password" />
                            {errors.password && <span>Password is required</span>}
                        </div>

                        <div className="">
                            <input type="submit" className='form-control btn btn-danger' value='Sing In' />
                        </div>
                        <div className="form-group">
                            <label onClick={() => { setReturnUser(false) }} className='btn btn-link text-center form-control'>Create an account</label>
                        </div>
                    </form>
                    :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" className='form-control' ref={register({ required: true })} placeholder='Name' />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="email" className='form-control' ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='Email address' />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" className='form-control' ref={register({ required: true, pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/ })} placeholder="Password" />
                            {errors.password && <span>Uppercase, Lowercase, Special Charactor and Numeric</span>}
                        </div>
                        <div className="form-group">
                            <input name="confirm_password" type="password" className='form-control' ref={register({ required: true, validate: (value) => value === watch('password') })} placeholder="Confirm password" />
                            {errors.confirm_password && <span>Password not matched yet</span>}
                        </div>
                        <div className="form-group">
                            <input type="submit" className='form-control btn btn-danger' value='Sing In' />
                        </div>
                        <div className="form-group">
                            <label onClick={() => { setReturnUser(true) }} className='btn btn-link text-center form-control'>Alreade have an account</label>
                        </div>
                    </form>
            }
            
        </div>
    );
};

export default Login;