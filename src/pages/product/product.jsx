import { useParams } from "react-router-dom";
import { products, categories } from '../catalog/products';

const Product = () => {
    const params = useParams();

    return <h1>
        Produto {products[params.id].name} branch catalogo
        {
            products[params.id].categories.map(categoryId => categories[categoryId].name)
        }
        </h1>
}

export default Product;