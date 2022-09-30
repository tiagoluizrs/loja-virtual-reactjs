import  { useEffect } from 'react';
import { userIsLoggedIn } from "../../services/auth/auth";
import { calculateTotal, calculatePromo } from "../../utils/calculate";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { productsCart } from "../cart/produtos-cart";
import "./checkout.css";

const Checkout = () => {
    const variantType = "filled";
    const totals = Object.keys(productsCart).map(id => {
        let qtd = productsCart[id].quantity;
        return [productsCart[id].price * qtd, productsCart[id].promo_price * qtd]
    });

    function formatD(){
        let today = new Date;
        let mes = today.getMonth() + 1;

        return `${today.getFullYear()}-${("0" + mes).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
    }

    console.log(formatD())

    const total = calculateTotal(totals);
    const totalPromo = calculatePromo(totals);


    useEffect(() => {
        userIsLoggedIn();
    })

    return <Grid container spacing={2} className="checkout">
        <Grid item xs={12}>
            <Typography variant="h5" component="h1">Realizar pagamento</Typography>
        </Grid>
        <Grid item sx={{}} xs={12} md={8} lg={9}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <span>Informações Pessoais</span>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Nome"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Sobrenome"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="CPF"
                                type="tel"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Telefone"
                                type="tel"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="E-mail"
                                type="email"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Endereço"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Número"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Complemento"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="CEP"
                                type="tel"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Bairro"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Cidade"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Estado"
                                type="text"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <span>Detalhes do pagamento</span>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Nome impresso no cartão"
                                type="text"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Número do cartão"
                                type="tel"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth
                                variant={variantType}
                                label="Código de seg."
                                size="small"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth
                                variant={variantType}
                                label="Data de vencimento"
                                size="small"
                                type="date"
                                value={formatD()}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>SELECT DE PARCELAS</Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} className="order-detail">
                    <div>
                        <Typography variant="h6" component="h6">Detalhes da compra</Typography>
                        <ul>
                            {
                                Object.keys(productsCart).map((id, idx) => {
                                    return <li key={idx}>
                                        <span>
                                            {productsCart[id].name}
                                        </span>
                                        <span>
                                            {productsCart[id].promo_price ? productsCart[id].promo_price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})  : productsCart[id].price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'}) }
                                        </span>
                                    </li>
                                })
                            }
                        </ul>
                        <hr/>
                        <ul>
                            <li>
                                <span><strong>Total</strong></span>
                                <span>{total.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</span>
                            </li>
                            <li>
                                <span><strong>Descontos</strong></span>
                                <span>{totalPromo.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</span>
                            </li>
                            <li>
                                <span><strong>Subtotal</strong></span>
                                <span>{(total - totalPromo).toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})}</span>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth>Pagar</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default Checkout;