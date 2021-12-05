import React from 'react'

export const ProductPreview = ({ product }) => {
    return (
        <section className="product-preview">
            <img className="logo" src={product.logo} alt="" />
            <img className="img" src={product.img} alt="" />
            <p>{product.txt}</p>
            <button>למידע נוסף</button>
        </section>
    )
}
