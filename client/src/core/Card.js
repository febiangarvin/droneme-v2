import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = f => f,
    run = undefined
    // changeCartSize
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
                </Link>
            )
        );
    };
    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCartBtn = showAddToCartButton => {
        return product.quantity > 0 ? (
            showAddToCartButton && (
                <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
                    Add To Cart
                </button>
            )
        ) : null
    };

    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock </span>
        ) : (
                <span className="badge badge-danger badge-pill">Out of Stock </span>
            );
    };

    const handleChange = (productId) => (event) => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        // if product quantity (available) is less than what user is trying to buy
        if (event.target.value > product.quantity) {
            window.alert(`Maximum available quantity is; ${product.quantity} items. Please modify your total quantity or your final purchase quantity will be a total of ${product.quantity} items`);
            return;
        }

        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <span className="badge badge-warning badge-pill">Maximum quantity available: {product.quantity} items</span>
                    <div className="input-group mb-3 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Adjust Quantity</span>
                        </div>
                        <input type="number" min='1' max={product.quantity} className="form-control" value={count} onChange={handleChange(product._id)} />
                    </div>
                </div>
            )
        );
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => {
                        removeItem(product._id);
                        setRun(!run); // run useEffect in parent Cart
                    }}
                    className="btn btn-outline-danger mt-2 mb-2"
                >
                    Remove Product
                </button>
            )
        );
    };
    return (
        <div className="card ">
            <div className="card-header card-header-1 ">{product.name}</div>
            <div className="card-body">
                {shouldRedirect(redirect)}
                <ShowImage item={product} url="product" />
                {showStock(product.quantity)}
                <p className="black-10 mt-4">Brand: {product.brand}</p>
                <p className="black-9">Edition: {product.yearedition}</p>
                <p className="card-p black-10">$ {product.price}</p>
                <p className="black-9">Category: {product.category && product.category.name}</p>
                <p className="black-10">Added on {moment(product.createdAt).fromNow()}</p>
                {/* <p className="card-p  mt-2">{product.description.substring(0, 100)} (View to read more) </p> */}

                {showViewButton(showViewProductButton)}

                {showAddToCartBtn(showAddToCartButton)}

                {showRemoveButton(showRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}
            </div>
        </div>
    );
};

export default Card;
