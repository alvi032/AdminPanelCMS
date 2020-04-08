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
    boxShadow:'0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding:5

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
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent:"center",
    textDecoration:"none"
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
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')


    //POSTING USERNAME AND PASSWORD TO DB
    function handleClick(){

        const userObject = {
            userName: username,
            password: password
        }

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

        setErrorMessage(err)


    }
    return(

        <div className='login'>
            <MyCard className='card'>

                <div>
                    <h1>Login</h1>
                    <MyAvatar/>
                    <h4>Administrator</h4>
                    <br/>
                    <br/>

                    <form>
                    <TextField
                        type="email"
                        label="Email"
                        placeholder="john@example.com"
                        onChange = {event => setUserName(event.target.value)}
                    />
                    <br/>
                    <br/>

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        onChange = {event => setPassword(event.target.value)}
                    />
                    <br/>
                    <br/>
                    <br/>
                        {errorMessage}

                    <MyButton label="Submit" primary="true" style={style} onClick={handleClick}>Submit</MyButton>
                    </form>
                </div>
        </MyCard>
        </div>
    )
}

const style = {
    margin: 15,
}


export default Login
