import React, { useState } from 'react'
import logo from '../assets/icons/logo.png'  

export const Header = () => {

    const[ isTop, setIsTop ] = useState('')
    
    const checkScroll = () => {
        if(window.scrollY >= 72){
            setIsTop('white')
        } else {
            setIsTop('')
        }
    }
    window.addEventListener('scroll', checkScroll)
    
    return (
        <section className={`header flex align-center ${isTop}`} >
                <div className="menu-icon">
                    ☰
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
        </section>
    )
}
