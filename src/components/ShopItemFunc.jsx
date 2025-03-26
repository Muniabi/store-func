import React from "react";

const ShopItemFunc = ({
    item: { description, descriptionFull, price, currency, brand, title },
}) => {
    return (
        <div className="main-content">
            <div className="border">
                <h2>{brand}</h2>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <div className="description">{descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
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
        </div>
    );
};

export default ShopItemFunc;
