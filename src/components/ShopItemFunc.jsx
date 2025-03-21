import React from "react";
import PropTypes from "prop-types";

const ShopItemFunc = ({ item }) => {
    const {
        brand,
        title,
        description,
        descriptionFull,
        price,
        currency,
        image,
    } = item;
    console.log(item);
    return (
        <div className="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="description">{descriptionFull}</div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay">
                    {/* <img src={image} alt={title} width={100} height={200} className="" /> */}
                </div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">
                    {currency}
                    {price}
                </div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
};

ShopItemFunc.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionFull: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ShopItemFunc;
