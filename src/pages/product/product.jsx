import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams();

    return <h1>Produto {params.id}</h1>
}

export default Product;