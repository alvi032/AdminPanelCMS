import React, {useState,useEffect} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button/index'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import { amber } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import '../Fonts/SourceCodePro-Light.ttf'
import Redirect from "react-router-dom/es/Redirect";

const MyCard = styled(Card)({

    borderRadius:20,
    // boxShadow:'0 3px 5px 2px rgba(255, 105, 135, .3)',
    background: '#f3f3f3',
    boxShadow: '6px 6px 10px 0px rgba(112,112,112,0.16), -6px -6px 10px 0px #FFFFFF',
    padding: '40px 10px'
})


const MyAvatar = styled(Avatar)({
    background: 'linear-gradient(45deg, #008080 30%, #20B2AA 90%)',
    border: 0,
    color: 'white',
    height: 90,
    width: 90,
    margin:"auto",

})

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #008080 30%, #20B2AA 90%)',
    border: 0,
    color: 'white',
    width: 100,
    justifyContent:"center",
    textDecoration:"none",
    // margin:"auto"
})

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
//
//
//     amber: {
//         backgroundColor: amber[500],
//         width: theme.spacing(7),
//         height: theme.spacing(7),
//
//     },
//
//     button_color:{
//         backgroundColor: amber[500],
//
//     }
//
//
// }))



function Login(){
    // const classes = useStyles()


    //USE EFFECT
    useEffect(() =>{
        }, []
    )

    //SETTING THE STATES
    // const [username,setUserName]=useState('')
    // const [password,setPassword]=useState('')
    // const [errorMessage,setErrorMessage]=useState('')

    const [form, setForm] = useState({
        username: '',
        password:'',
        errorMessage: ''
    })


    const changeHandler = (event)=> {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    //POSTING USERNAME AND PASSWORD TO DB
    function handleClick(){

        const userObject = {
            userName: form.username,
            password: form.password
        }

        let username = form.username
        let password = form.password
        let letters = /^[0-9a-zA-Z]+$/
        let err= ''

        if(username !== '' && !username.match(letters)){
            err = <strong>Your username must contain only alphabets.</strong>
        }
        else if(username === ''){
            err = <strong>Please enter your username.</strong>
        }
        else if(password === ''){
            err = <strong>Please enter your password.</strong>
        }

        else if(username ==='' && password ===''){
            err = <strong>Please fill the fields to proceed.</strong>
        }
        else {
            axios.post(`/api/login`, userObject)
                .then(<Link to='/home' />)
                .catch(err => console.error(err))
        }

        setForm({errorMessage: err})


    }
    return(

        <div className='login'>
            <MyCard className='card'>

                <div>
                    <MyAvatar/>
                    <p className={'card-heading'}>Administrator</p>

                    <form>
                    <TextField
                        type="email"
                        label="Email"
                        name={'username'}
                        className={'login-input'}
                        placeholder="john@example.com"
                        onChange = {changeHandler}
                    />
                    <br/>
                    <br/>

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        name={'password'}
                        className={'login-input'}
                        type="password"
                        onChange = {changeHandler}
                    />
                    <br/>
                    <br/>
                    <br/>
                        {form.errorMessage}

                    <MyButton label="Submit" primary="true" onClick={handleClick}>Submit</MyButton>
                    </form>
                </div>
        </MyCard>
        </div>
    )
}

export default Login
