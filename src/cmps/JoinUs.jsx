import React from 'react'
import stockesIcon from '../assets/icons/stocks_icon.png'

export const JoinUs = () => {
    return (
        <section className="join-us flex column">
            <div className="img-container">
                <img src={stockesIcon} alt="" />
            </div>
            <h3>עוד על מסחר עצמאי:</h3>
            <iframe allow="autoplay"
                src="https://www.youtube.com/embed/SKUKfoBHYzQ?autoplay=1">   
            </iframe>
            <button> <span> הצטרפו עכשיו </span> Online</button>
        </section>
    )
}
