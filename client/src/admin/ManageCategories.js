import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const destroy = categoryId => {
        deleteCategory(categoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCategories();
            }
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <Layout
            title="Manage Categories"
            description="Perform CRUD on categories"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mt-5">
                        Total {categories.length} categories
                    </h2>
                    <hr />
                    <div className="list-group mb-5">
                        {categories.map((c, i) => (
                            <div
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{c.name}</strong>

                                <div className="btn-group" role="group" aria-label="Basic example">
                                <Link to={`/admin/category/update/${c._id}`}>
                                    <button className="btn btn-warning">
                                        Update
                                    </button>
                                </Link>

                                <button
                                    onClick={() => destroy(c._id)}
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

export default ManageCategories;