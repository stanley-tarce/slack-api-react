import React, { useEffect, useRef, useState } from 'react'
import './Signup.css'
import apiHooks from '../API/API'
import { useHistory } from 'react-router-dom'

function Signup({ toast, setToast, setOutcome, setFeedback }) {
    const emailInput = useRef()
    const passwordInput = useRef()
    const [style, setStyle] = useState('disabled')
    const confirmPasswordInput = useRef()
    const { postUserRegistration } = apiHooks()
    const [checked, setChecked] = useState(false)
    const [button, setButton] = useState(true)
    const history = useHistory()
    useEffect(() => {
        if (checked === true) {
            setButton(false)
            setStyle('active')
        }
        else {
            setButton(true)
            setStyle('disabled')
        }
        checked ? setButton(false) : setButton(true)
    }, [checked])

    const onButtonSubmit = (event) => {
        event.preventDefault()
        let data = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
            password_confirmation: confirmPasswordInput.current.value
        }
        postUserRegistration(data)
            .then(() => {
                setOutcome('success')
                setToast(true)
                setTimeout(() => setToast(false), 3000)
                setFeedback(['Sign-up Successful',])
                return history.push('/')
            }).catch((error) => {
                const { data: { errors: { full_messages } } } = error.response
                setOutcome('error')
                setToast(true)
                setTimeout(() => setToast(false), 3000)
                setFeedback(full_messages)
            })

    }
    const goToLogin = () => {
        return history.push('/')
    }
    return (
        <>
            <div className={"signUpMain"}>
                <div className={"SVG-Photo"} />
                <div className={"Main-Signup"}>
                    <div className={"Main-Signup-Form"}>
                        <form onSubmit={(e) => onButtonSubmit(e)}>
                            <h1>Sign Up to Slack API</h1>
                            <div>
                                <label>Email</label>
                                <input type={'email'} ref={emailInput} placeholder={"Enter Email Here"} required />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type={'password'} ref={passwordInput} placeholder={"Enter Password Here"} required />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type={'password'} ref={confirmPasswordInput} placeholder={"Enter Password"} required />
                            </div>
                            <div className={"CheckBox"}>
                                <input type="checkbox" id="checkbox" name="vehicle1" defaultChecked={checked} onChange={() => setChecked(!checked)} required />
                                <label>Creating an account meants you’re okay with our <span id={"anchor"}>Terms of Service, Privacy Policy,</span> and our <span id={"anchor"}>default Notification Settings</span></label>
                            </div>
                            <button disabled={button} className={`${style}-button`} onSubmit={(e) => onButtonSubmit(e)}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={"ForwardSignIn"}>
                <p>Already a Member?</p>
                <button onClick={() => goToLogin()}>Sign In</button>
            </div>
        </>
    )
}

export default Signup
