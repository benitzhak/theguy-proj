import React, { useState } from 'react'
import gemel from '../assets/icons/gemel-logo.png'
import kids from '../assets/icons/kids-logo.png'
import investments from '../assets/icons/investments-logo.png'
import product1 from '../assets/icons/product-icon-1.png'
import product2 from '../assets/icons/product-icon-2.png'
import product3 from '../assets/icons/product-icon-3.png'
import { ProductPreview } from './ProductPreview'

export const ProductList = () => {

    const [ products, setProducts ] = useState([
        {
            logo: kids,
            img: product1,
            txt: 'פתחו עבור הילדים שלכם חסכון שיעזור להם להגשים חלומות.'
        },
        {
            logo: gemel,
            img: product2,
            txt: 'אל תתנו לעתיד להפתיע אתכם פתחו חסכון במיטב דש גמל להשקעה.'
        },
        {
            logo: investments,
            img: product3,
            txt: 'נהלו תיק השקעות ותיהנו מניהול חכם, מקצועי ובהתאמה אישית.'
        },
    ])

    return (
        <section className="product-list">
            <div className="wrapper">
                <h3>מוצרים נוספים שיכולים לעניין אתכם</h3>
                <div className="products-container flex space-between">
                    {
                        products.map(product=> (
                            <ProductPreview key={product.logo} product={product}/>
                            ))
                    }
                </div>
            </div>
        </section>
    )
}
