import { useContext, useState } from "react"
import ButtonComponent from "../components/button-component/button"
import FormInput from "../components/FormInput/forminput"
import { crateAuthUserWithEmailAndPassword , auth , createUserDocumentFromAuth } from '../utils/firebase/firebaseutils'
import './signupform.scss'
const defaultFormField = {
    displayName: '' , 
    email: '' , 
    password: '' , 
    confirmPassword: ''
}


const SignUp = () => {

    const [formField , setFormField] = useState(defaultFormField)

    const { displayName , email , password , confirmPassword } = formField


    const handleChange = (event) => {
        
        const {name , value} = event.target

        setFormField({...formField , [name]: value})
    }

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const handleSubmissionForm = async(handler) => {
        handler.preventDefault()
        try {
            if(password===confirmPassword){
                const {user} = await crateAuthUserWithEmailAndPassword(email , password)
                const created = await createUserDocumentFromAuth(user , {
                    displayName: displayName
                })
                resetFormField()
            }else{
                alert('The two password should match')
            }
            
        } catch (error) {
        }
        
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sigup with your email and password</span>
            <form action="" onSubmit={handleSubmissionForm}>
                <FormInput 
                   label='Disply name'
                   type="text" 
                   required onChange={handleChange} 
                   name='displayName' 
                   value={displayName} 
                />

                <FormInput 
                   label='Email'
                   type="email" 
                   required onChange={handleChange} 
                   name='email' 
                   value={email} 
                />

                <FormInput 
                   label='Password'
                   type="password" 
                   required onChange={handleChange} 
                   name='password' 
                   value={password} 
                />

                <FormInput 
                   label='Confirm Password'
                   type="password" 
                   required onChange={handleChange} 
                   name='confirmPassword' 
                   value={confirmPassword} 
                />

                <ButtonComponent>Sign Up</ButtonComponent>
            </form>
        </div>
    )
}

export default SignUp