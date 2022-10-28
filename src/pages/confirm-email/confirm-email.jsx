import '../../assets/css/auth.css';
import cover from '../../assets/img/cover-login.jpg';
import logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import {
    Grid,
    TextField,
    Button,
    Stack,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react';
import { authConfirm } from "../../services/auth/auth"
import { saveStorage } from '../../services/storage/storage';

const ConfirmEmail = () => {
    const [pin, setPin] = useState("");

    const confirm = async () => {
        const result = await authConfirm(pin);
        
        if(result){
            alert(result.msg);
            saveStorage('user', result.user);
            saveStorage('token', result.token);
            window.location.href = "/";
        }
    }

    return <Grid container spacing={2} style={{
        height: '100vh'
    }}>
                <Grid className='leftSide' item sx={{
                    padding: '10px',
                    boxSizing: 'border-box'
                }} xs={0} md={7} lg={8}>
                    <Stack spacing={2} style={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItem: 'center'
                    }}>
                        <img src={cover} style={{
                            width: '100%'
                        }} alt="Logo"/>    
                    </Stack>
                </Grid>   
                <Grid item xs={12} md={5} lg={4}>
                    <Stack spacing={2} style={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 16,
                        paddingRight: 16,
                        boxSizing: 'border-box'
                    }}>
                        <img src={logo} style={{
                            width: '150px'
                        }} alt="Logo"/> 
                        <h1>Confirm seu e-mail</h1>
                        <Grid container>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <TextField 
                                    value={pin}
                                    onChange={(event) => setPin(event.target.value)}
                                    fullWidth 
                                    label="PIN" 
                                    type="text"
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <Button 
                                    onClick={confirm}
                                    fullWidth 
                                    variant="contained" 
                                    endIcon={<LoginIcon />}>Confirmar</Button>
                            </Grid>
                            <Link 
                                style={{
                                    marginTop: 16,
                                    textAlign: 'center',
                                    display: 'block',
                                    width: '100%',
                                    color: '#333'
                                }}
                                to="/register">Criar conta</Link>
                        </Grid>
                    </Stack>
                </Grid>   
           </Grid>
}

export default ConfirmEmail;