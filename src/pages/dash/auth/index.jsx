import React, {useState, useEffect, useContext} from 'react'
import Api from 'config/api'
import {Row, Col} from 'react-bootstrap'
import {Input,Button,FormStatus} from 'components/input'
import UserContext from './context'

const Auth = () =>{

    const [form,setForm] = useState({
        status: 'okStatus',
        message: ''
    })
    
    const context = useContext(UserContext)

    const handleForm = (e) => {
        let obj = {...form}
        obj[e.target.name] = e.target.value
        setForm(obj)
    }

    const showMessage = () => {
        let formStatus = document.getElementById('formStatus')
        formStatus.style.display = 'block'
        setTimeout(() => {
            formStatus.style.display = 'none'
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let btn = document.getElementById('submitBtn')
        btn.disabled = 'disabled'

        Api.login.post(form)
        .then(res => {
            context.setUser(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            setForm({...form, message: 'Log in Successful!'})
            showMessage()
            setTimeout(() =>{
                window.location.href = '/dash'
            },3000)
        })
        .catch(error =>{
            console.log(error)
            btn.disabled = ''
            setForm({...form, status:'errStatus', message: 'Failed. Try Again.'})
            showMessage()
        })
    } 

    useEffect(() => {
        document.title = "Login | Crimsont Traders"


    },[])

    return(
        <>
            <Row id="main-section" className="p-3">
                <Col xs={4} className="mx-auto">
                    <form onSubmit={handleSubmit} id="login-form">
                        <Input label="Email" type="email" placeholder="Your email address" name="email" onChange={handleForm} value={form.email} required="required" />
                        <Input label="Password" type="password" placeholder="Your password" name="password" onChange={handleForm} value={form.password} required="required" />
                        <FormStatus class={form.status} message={form.message} />
                        <Button title="Login" id="submitBtn"/>
                    </form>
                </Col>
            </Row>
        </>
    )
}

export default Auth