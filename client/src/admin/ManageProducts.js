import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Manage Products"
            description="Perform CRUD on products"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mt-5">
                        Total {products.length} products
                    </h2>
                    <hr />
                    <div className="list-group mb-5">
                        {products.map((p, i) => (
                            <div
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.name}</strong>

                                <div className="btn-group" role="group" aria-label="Basic example">
                                <Link to={`/admin/product/update/${p._id}`}>
                                    <button className="btn btn-warning">
                                        Update
                                    </button>
                                </Link>

                                <button
                                    onClick={() => destroy(p._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                                </div>

                            </div>
                        ))}
                    </div>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
