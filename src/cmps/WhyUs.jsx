import React, { useState } from 'react'
import tradeLogo from '../assets/icons/trade-logo.png'
import icon1 from '../assets/icons/icon-1.png'
import icon2 from '../assets/icons/icon-2.png'
import icon3 from '../assets/icons/icon-3.png'
import { WhyUsPreview } from './WhyUsPreview'
import { JoinUs } from './JoinUs';
import { FrequentlyAsked } from './FrequentlyAsked'

export const WhyUs = () => {

    const [contents, setContents] = useState([
        {
            img: icon3,
            txt: 'עמלות מסחר אטרקטיביות'
        },
        {
            img: icon2,
            txt: 'מערכות מסחר מתקדמות'
        },
        {
            img: icon1,
            txt: 'חבילת השירות הטובה ביותר'
        },
    ])

    return (
        <section className="why-us">
            <img src={tradeLogo} alt="" />
            <div className="why-us-container flex">
                <div className="right-container">
                    <div className="wrapper">
                        <p>
                            מפסיקים להיות פראיירים. מצטרפים לחבר הבורסה הגדול בישראל*,
                            משלמים פחות עמלות במסחר בבורסה ונהנים מחבילת הצטרפות מצוינת. מתאים ללקוחות כל הבנקים.
                        </p>
                    </div>
                    <div className="wrapper">
                        <h3>למה זה מתאים לכם?</h3>
                        <ul className="flex space-between">
                            {
                                contents.map(content => (
                                    <WhyUsPreview key={content.txt} content={content}/>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
                <JoinUs/>
            </div>
            <FrequentlyAsked/>
        </section>
    )
}
