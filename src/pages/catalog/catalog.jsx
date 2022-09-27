import { products, categories } from './products';
import { Button, Grid, Typography } from "@mui/material";
import './catalog.css';
import { Link } from "react-router-dom";

const Catalog = () => {
    return <Grid container spacing={4} sx={{
        marginTop: '10px',
        paddingLeft: '32px',
        paddingRight: '32px',
        boxSizing: 'border-box'
    }}>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    <span className="badge-item">10%</span>
                    <img src={products[id].image}/>

                    {
                        products[id].categories.map(categoryId => {
                            return <span className='category-label'>{categories[categoryId].name}</span>
                        })
                    }

                    <Typography variant="h5" component="h2">{products[id].name}</Typography>
                    <Typography variant="p" component="p">{products[id].description.substring(0, 100)}...</Typography>
                    <Link to={"../product/" + id}>
                        <Button fullWidth variant="contained">
                            Ver Produto
                        </Button>
                    </Link>
                </Grid>
            })
        }
    </Grid>
}

export default Catalog;