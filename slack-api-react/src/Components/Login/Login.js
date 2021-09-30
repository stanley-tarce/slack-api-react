import React, { useRef } from 'react'
import apiHooks from '../API/API'
import './Login.css'
import { useHistory } from 'react-router-dom'

function Login({ header, setHeader }) {
    const history = useHistory()
    const { postCreateUserSession } = apiHooks()
    const emailInput = useRef()
    const passwordInput = useRef()
    const setLoginStates = async (data) => {
        const result = await postCreateUserSession(data)
        const { headers: {
            expiry,
            uid,
            client,
            ...others
        } } = result
        let accessToken = others["access-token"]

        setHeader({
            ...header,
            expiry: expiry,
            uid: uid,
            accessToken: accessToken,
            client: client
        })
    }
    const onButtonSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.dataset.hello)
        let data = {
            email: emailInput.current.value,
            password: passwordInput.current.value
        }
        setLoginStates(data)
        return history.push("/main")
    }
    const goToSignUp = () => {
        return history.push("/signup")
    }
    return (
        <>
            <div className={"LoginMain"}>
                <div className={"SVG-Photo-Login"} />
                <div className={"Main-Login"}>
                    <div className={"Wrapper-Main"}>
                        <h1 className={"Header"}>Sign In to Slack API</h1>
                        <div className={"Google-Button"}>
                            <div className={"Google-Img"} />
                            <p>Sign in With Google</p>
                        </div>
                        <div className={"or-Wrapper"}>
                            <div />
                            <p className="or">Or</p>
                            <div />
                        </div>
                        <form data-hello={"hello"} onSubmit={(e) => onButtonSubmit(e)}>
                            <div>
                                <label>Email</label>
                                <input type={'email'} ref={emailInput} placeholder={"Enter Email Here"} required />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type={'password'} ref={passwordInput} placeholder={"Enter Password Here"} required />
                            </div>
                            <button className={"Login-Submit"} data-hello={'hello'} disabled={null} onSubmit={(e) => onButtonSubmit(e)}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={"ForwardSignUp"}>
                <p>Not a Member? <span onClick={() => goToSignUp()}>Sign Up Now</span></p>
            </div>
        </>
    )
}

export default Login
