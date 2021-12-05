import React from 'react'

export const WhyUsPreview = ({ content }) => {
    return (
            <li className="why-us-preview flex column">
                <img src={content.img} alt="" />
                <span></span>
                <h4>{content.txt}</h4>
            </li>
    )
}
