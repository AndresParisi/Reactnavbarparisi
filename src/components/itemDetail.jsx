import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import productsData from './items.json';

export const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    const navigate = useNavigate()


    useEffect(() => {
        const selectedProduct = productsData.products.find(
            product => product.id === parseInt(productId)
        );
        setProduct(selectedProduct);
    }, [productId]);

    const onBack = () => {
        navigate(-1)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <ul>
                        <li><strong>Brand:</strong> {product.brand}</li>
                        <li><strong>Price:</strong> ${product.price}</li>
                    </ul>
                    <button className="btn btn-primary">Add to Cart</button>
                    <button onClick={onBack} className="btn btn-secondary m-2"> Volver </button>

                </div>
            </div>
        </div>
    );
};
