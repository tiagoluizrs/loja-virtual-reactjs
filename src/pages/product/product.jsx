import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { products, categories } from '../catalog/products';
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

const Product = () => {
    const params = useParams();
    const [currentImage, setCurrentImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setCurrentImage(products[params.id].images[0]);
    }, [])

    const setImageToView = (position) => {
        setCurrentImage(products[params.id].images[position])
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

    return <Grid container spacing={2} className="product">
        <Grid item xs={12} sm={5} className="imageSide">
            <Stack className="imageSide__image">
                <div className="imageSide__image-item" style={{
                    backgroundImage: `url(${currentImage})`
                }}></div>
            </Stack>
            <Stack direction="row" className="imageSide__images">
                {
                    products[params.id].images.map((image, idx) => <img onClick={()=>setImageToView(idx)} width="auto" height="104px" src={image} alt="" />)
                }
            </Stack>
        </Grid>
        <Grid item xs={12} sm={7} className="productItem">
            <Typography variant="h4" component="h1" className="productItem__title">{products[params.id].name}</Typography>
            <div className="productItem__categories">
                {
                    products[params.id].categories.map(categoryId => <Chip className="productItem__categories-label" label={categories[categoryId].name} />)
                }
            </div>
            
            {
                products[params.id].promo_price ? <Typography variant="p" component="p" className="productItem__promo_price">{products[params.id].promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
            }
            <Typography variant="p" component="p" className="productItem__price" style={{
                fontSize: products[params.id].promo_price ? '16px' : '20px',
                color: products[params.id].promo_price ? '#a9a9a9' : '#333333',
                textDecoration: products[params.id].promo_price ? 'line-through' : 'none',
            }}>{products[params.id].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>

            <Typography variant="p" component="p" className="productItem__description">{products[params.id].description}</Typography>
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
    </Grid>
    // return <h1>
    //     Produto  branch catalogo
    
    //     </h1>
}

export default Product;