import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Grid,
    Stack,
    Button,
    Typography,
    TextField,
    Chip, 
    IconButton
} from "@mui/material";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { _get } from '../../services/http/http';

const Product = () => {
    const params = useParams();
    // const [currentImage, setCurrentImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    
    const loadProduct = async (id) => {
        const result = await _get(`product/${id}`);
        setProduct(result);
    }

    useEffect(() => {
        // setCurrentImage(product.images[0]);
        loadProduct(params.id);
    }, [])

    const setImageToView = (position) => {
        // setCurrentImage(product.images[position])
    }

    const changeQuantityButton = (value) => {
        if(quantity >= 0){
            let result = quantity + value;
            if(result === -1){
                result = 0;
            }
            setQuantity(result);
        }
    }

    return product 
            ? <Grid container spacing={2} className="product">
                <Grid item xs={12} sm={5} className="imageSide">
                    <Stack className="imageSide__image">
                        <div className="imageSide__image-item" style={{
                            backgroundImage: `url(${product.images})`
                        }}></div>
                    </Stack>
                    {/* <Stack direction="row" className="imageSide__images">
                        {
                            product.images.map((image, idx) => <img onClick={()=>setImageToView(idx)} width="auto" height="104px" src={image} alt="" />)
                        }
                    </Stack> */}
                </Grid>
                <Grid item xs={12} sm={7} className="productItem">
                    <Typography variant="h4" component="h1" className="productItem__title">{product.name}</Typography>
                    {/* <div className="productItem__categories">
                        {
                            product.categories.map(categoryId => <Chip className="productItem__categories-label" label={categories[categoryId].name} />)
                        }
                    </div> */}
                    
                    {
                        product.promo_price ? <Typography variant="p" component="p" className="productItem__promo_price">{product.promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
                    }
                    <Typography variant="p" component="p" className="productItem__price" style={{
                        fontSize: product.promo_price ? '16px' : '20px',
                        color: product.promo_price ? '#a9a9a9' : '#333333',
                        textDecoration: product.promo_price ? 'line-through' : 'none',
                    }}>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>

                    <Typography variant="p" component="p" className="productItem__description">{product.description}</Typography>
                    <div className="productItem__quantity">
                        <IconButton onClick={() => changeQuantityButton(-1)}>
                            <RemoveIcon color='primary'/>
                        </IconButton>
                        <TextField size="small" type="number" value={quantity} onChange={(event) => { setQuantity(event.target.value) }}/>
                        <IconButton onClick={() => changeQuantityButton(1)}>
                            <AddIcon color='primary'/>
                        </IconButton>
                    </div>
                    <Button variant="contained" size="large" endIcon={<ShoppingCartIcon />} lassName="productItem__buy">Comprar</Button>
                </Grid>
            </Grid> : "Produto não existe"
    // return <h1>
    //     Produto  branch catalogo
    
    //     </h1>
}

export default Product;