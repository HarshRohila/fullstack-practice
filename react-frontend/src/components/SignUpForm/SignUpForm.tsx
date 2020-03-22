import React, { useRef } from 'react';
import './SignUpForm.css';
import TextInput from '../TextInput/component';
import { useForm } from "react-hook-form";

function SignUpForm() {
    const { register, handleSubmit, errors, watch } = useForm(); 

    const onSubmit = (d: any) => console.log(d);
    const password = useRef({});
    password.current = watch('password', '');
    
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

// class SignUpForm extends React.Component {
//     constructor(props: Readonly<{}>) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             userName: '',
//             password: '',
//             confirmPassword: '',
//         };
//         this.onSubmit = this.onSubmit.bind(this);
//         // this.handleChange = this.handleChange.bind(this);
//     }

//     doPost(body: Readonly<{}>) {
//         fetch('http://localhost:4200/user', { 
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(body)
//             })
//             .then(res => res.json())
//             .then(res => console.log(res))
//             .catch(err => console.error(err));
//     }

//     onSubmit() {
//         console.log('submitted successfully');
//         console.log(this.state);
//         this.doPost(this.state);
//         // e.preventDefault();
//     }

//     // handleChange(e) {
//     //     const { name, value } = e.target;
//     //     this.setState({ [name]: value });
//     // }

//     // render() {
//     //     return (
//     //         <form className="sign-up-form" onSubmit={this.handleSubmit}>
//     //           <TextInput label="First Name" value={this.state.firstName} onChange={this.handleChange}></TextInput>
//     //           <TextInput label="Last Name" value={this.state.lastName} onChange={this.handleChange}></TextInput>
//     //           <TextInput label="User Name" value={this.state.userName} onChange={this.handleChange}></TextInput>
//     //           <TextInput label="Password" type="password" value={this.state.password} onChange={this.handleChange}></TextInput>
//     //           <TextInput label="Confirm Password" type="password" value={this.state.confirmPassword} onChange={this.handleChange}></TextInput>
//     //           <input type="submit"></input>
//     //         </form>
//     //     );        
//     // }

//     render() {
//         const { register, handleSubmit, errors } = useForm(); 

//         return (    
//             <form className="sign-up-form" onSubmit={handleSubmit(this.onSubmit)}>
//                 <input name="firstName" ref={register({ required: true, minLength: 3 })} />
//                 <input name="lastName" ref={register} />
//                 <input name="userName" ref={register({ required: true, minLength: 3 })} />
//                 <input name="password" type="password" ref={register({ required: true, minLength: 8 })} />
//                 {errors.multipleErrorInput &&
//                 errors.multipleErrorInput.type === "required" && "Password is required" &&
//                 errors.multipleErrorInput.type === "minLength" && "Password should be atleast of 8 characters"}
//                 <input name="confirmPassword" type="password" ref={register({ required: true, minLength: 8 })} />
//               <input type="submit" />
//             </form>
//         );        
//     }
// }

export default SignUpForm;
