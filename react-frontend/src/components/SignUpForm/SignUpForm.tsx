import React, { useRef } from 'react';
import './SignUpForm.css';
import TextInput from '../TextInput/component';
import { useForm } from "react-hook-form";

function SignUpForm() {
    const { register, handleSubmit, errors, watch } = useForm(); 

    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit = (formData: any) => doPost(formData);

        return (    
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>

                <TextInput 
                    label="First Name" 
                    inputRef={register({ required: 'Name is required' })}
                    error={errors.firstName}
                    value={watch('firstName')} />

                <TextInput 
                    label="Last Name" 
                    inputRef={register}
                    value={watch('lastName')} />

                <TextInput 
                    label="User Name" 
                    inputRef={register({ required: 'Username is required', minLength: {
                        value: 3,
                        message: 'Username should be atleast of 3 characters'
                    } })}
                    error={errors.userName}
                    value={watch('userName')} />

                <TextInput 
                    label="Password"
                    type="password"
                    inputRef={register({ required: 'Password is required', minLength: {
                        value: 8,
                        message: 'Password should be atleast of 8 characters'
                    } })}
                    error={errors.password}
                    value={watch('password')} />

                <TextInput 
                    label="Confirm Password"
                    type="password"
                    inputRef={register({ required: 'Password is required', minLength: {
                        value: 8,
                        message: 'Password should be atleast of 8 characters'
                    },
                    validate: value =>value === password.current || "The passwords do not match" })}
                    error={errors.confirmPassword}
                    value={watch('confirmPassword')} />

                <input type="submit" />
            </form>
        );   
}

function doPost(formData: any) {
    fetch('http://localhost:4200/user', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
}

export default SignUpForm;
