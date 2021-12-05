import React from 'react'
import { WhyUs } from '../cmps/WhyUs'
import { ProductList } from '../cmps/ProductList'
import { IoIosArrowBack } from "react-icons/io";

export const MainView = () => {
    return (
        <section className="main-layout">
            <div className="go-back align-center">
                <span>
                    חזור    
                </span>
                <IoIosArrowBack className="arrow-icon"/>
            </div>
            <WhyUs/>
            <ProductList/>
        </section>
    )
}
