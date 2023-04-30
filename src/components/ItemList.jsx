import React, { useState, useEffect } from 'react';
import productsData from './items.json';
import { Link } from 'react-router-dom';

export const Products = ({ categories }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    const filteredProducts = categories && categories.length > 0
        ? products.filter(product => categories.includes(product.category))
        : products;
    console.log(filteredProducts);
    return (
        <div className="container">
            <div className="row">
                {filteredProducts.map(product => (
                    <div key={product.id} className="col-md-3">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Price:</strong> ${product.price}</li>
                                </ul>
                                <Link to={`/${product.category}/${product.id}`} className="btn btn-primary m-1">View</Link>
                                <a href="#" className="btn btn-secondary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;