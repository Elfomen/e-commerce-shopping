import { getRedirectResult } from "firebase/auth"
import { Fragment, useContext, useEffect, useState } from "react"
import ButtonComponent from "../components/button-component/button"
import FormInput from "../components/FormInput/forminput"
import { auth, createUserDocumentFromAuth, signinWithEmailAndPassword, signInWithGooglePopup } from "../utils/firebase/firebaseutils"
import './signin.scss'
const SignInForm = () => {


    const defaultValues = {
        email: '',
        password: ''
    }

    const [credentials, setcredentials] = useState(defaultValues)

    const { email, password } = credentials

    const logGooleUser = async () => {
        const { user } = await signInWithGooglePopup()

        const userRef = await createUserDocumentFromAuth(user)

    }

    useEffect(() => {
        const getResponse = async () => {
            const response = await getRedirectResult(auth)
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }

        getResponse()

    }, [])

    const handleChange = (event) => {
        const { value, name } = event.target

        setcredentials({
            ...credentials, [name]: value
        })
    }

    const handleSubmission = async (e) => {
        e.preventDefault()
        try {
            const {user} = await signinWithEmailAndPassword(email, password)
        } catch (error) {
        }
    }



    return (
        <div className="sign-up-container">
            <h2>Signin here</h2>
            <span>Sign in with your email and password</span>

            <form action="" onSubmit={handleSubmission}>
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

                <div className="buttons-container">
                    <ButtonComponent type='submit'>Sign In</ButtonComponent>
                    <ButtonComponent onClick={logGooleUser} buttonType='google'>Sign In with Google</ButtonComponent>
                    {/* <button onClick={signInWithGooleRedirect}>SignIn with Redirect</button> */}
                </div>

            </form>


        </div>
    )
}

export default SignInForm