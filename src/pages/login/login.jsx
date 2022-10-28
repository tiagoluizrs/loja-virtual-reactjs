import '../../assets/css/auth.css';
import cover from '../../assets/img/cover-login.jpg';
import logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import {
    Grid,
    TextField,
    Button,
    Stack,
    InputAdornment,
    OutlinedInput,
    IconButton,
    FormControl,
    InputLabel
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import { authLogin } from "../../services/auth/auth";
import { saveStorage } from "../../services/storage/storage";

const Login = () => {
    const [visibilityToggle, setVisibilityToggle] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const result = await authLogin(userEmail, password);
        
        alert(result.msg);

        saveStorage('user', result.user);
        saveStorage('token', result.token);

        
        window.location.href = "/";
    }

    const toggleVisibility = () => {
        setVisibilityToggle(!visibilityToggle);
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
                        {/* <img src={} alt={''} */}
                        <img src={logo} style={{
                            width: '150px'
                        }} alt="Logo"/> 
                        <h1>Entre com seu usuário</h1>
                        <Grid container>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <TextField 
                                    value={userEmail}
                                    onChange={(event) => setUserEmail(event.target.value)}
                                    fullWidth 
                                    label="Usuário/E-mail" 
                                    type="text"
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel>Senha</InputLabel>
                                    <OutlinedInput  
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        color="primary"
                                        fullWidth 
                                        label="Senha"
                                        type={visibilityToggle ? 'text' : 'password'}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                            aria-label="Clique para exibir"
                                            onClick={toggleVisibility}
                                            >
                                            {
                                                visibilityToggle ? <VisibilityOff/> : <Visibility/>
                                            }
                                        </IconButton>
                                        </InputAdornment>}
                                        variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <Button 
                                    onClick={login}
                                    fullWidth 
                                    variant="contained" 
                                    endIcon={<LoginIcon />}>Entrar</Button>
                            </Grid>
                            <Link 
                                style={{
                                    textAlign: 'center',
                                    display: 'block',
                                    width: '100%',
                                    color: '#333'
                                }}
                                to="/recovery-password">Esqueci minha senha</Link>
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

export default Login;