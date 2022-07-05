import SignUp from "../../sign-up-form/signup.component"
import SignInForm from "../../sign-in-form/sign-in"
import { Fragment } from "react"
import './authentication.scss'



const Signin = () => {


    return (
        <div className="authentication-container">
            
            <SignInForm />

            <SignUp />
        </div>
    )
}

export default Signin