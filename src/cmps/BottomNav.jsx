import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

export const BottomNav = () => {
    return (
        <section className="bottom-nav flex justify-center align-center">
            <button className="flex space-between align-center"> <span> להצטרפות אונליין </span> <IoIosArrowBack/> </button>
        </section>
    )
}
