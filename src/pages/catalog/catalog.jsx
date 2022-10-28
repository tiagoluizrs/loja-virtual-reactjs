import { Button, Grid, Typography } from "@mui/material";
import './catalog.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { _get } from '../../services/http/http';

const Catalog = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const result = await _get('product');
        setProducts(result);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <Grid container spacing={4} sx={{
        marginTop: '10px',
        paddingLeft: '32px',
        paddingRight: '32px',
        boxSizing: 'border-box',
        maxWidth: "1280px",
        margin: "10px auto",
    }}>
        {
            products !== undefined ? 
                products.map(product => {
                    return <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                        <span className="badge-item">10%</span>
                        <div style={{
                            backgroundImage: `url("${product.images}")`,
                        }}></div>

                        {/* {
                            product.categories.map(categoryId => {
                                return <span className='category-label'>{categories[categoryId].name}</span>
                            })
                        } */}
                        <Typography variant="h5" component="h2" title={product.name}>{
                           product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name
                        }</Typography>

                        {
                            product.promo_price ? <Typography variant="p" component="p" className="promo_price">{product.promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
                        }
                        <Typography variant="p" component="p" className="price" style={{
                            fontSize: product.promo_price ? '16px' : '20px',
                            color: product.promo_price ? '#a9a9a9' : '#333333',
                            textDecoration: product.promo_price ? 'line-through' : 'none',
                        }}>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>

                        <Typography variant="p" component="p">{product.description?.substring(0, 100)}...</Typography>
                        <Link to={"../product/" + product.id}>
                            <Button fullWidth variant="contained">
                                Ver Produto
                            </Button>
                        </Link>
                    </Grid>
                })
            : 'Não tem'
        }
        {/* {   products !== undefined  ? products.map(product => {
                return <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    <span className="badge-item">10%</span>
                    <img src={product.image}/>

                    {
                        product.categories.map(categoryId => {
                            return <span className='category-label'>{categories[categoryId].name}</span>
                        })
                    }

                    <Typography variant="h5" component="h2">{product.name}</Typography>

                    {
                      product.promo_price ? <Typography variant="p" component="p" className="promo_price">{product.promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
                    }
                    <Typography variant="p" component="p" className="price" style={{
                        fontSize: product.promo_price ? '16px' : '20px',
                        color: product.promo_price ? '#a9a9a9' : '#333333',
                        textDecoration: product.promo_price ? 'line-through' : 'none',
                    }}>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>

                    <Typography variant="p" component="p">{product.description.substring(0, 100)}...</Typography>
                    <Link to={"../product/" + product.id}>
                        <Button fullWidth variant="contained">
                            Ver Produto
                        </Button>
                    </Link>
                </Grid>
            }) : "Nenhum produto encontrado"
        } */}
    </Grid>
}

export default Catalog;