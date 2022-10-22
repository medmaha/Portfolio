import React, { useState, useContext } from "react"
import { GlobalContext } from "../../Portfolio"
import { ContactForm } from "../utils"

export default function NavLinks() {
    const { modal, toggleModal } = useContext(GlobalContext)

    function ShowContactModal() {
        toggleModal({
            state: !modal.state,
            children: <ContactForm />,
        })
    }

    return (
        <ul className="__nav__link sm:flex gap-2 text-sm  hidden h-full items-center overflow-hidden ">
            <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer active">
                Home
            </li>
            <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                Work
            </li>
            <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                About
            </li>
            <li className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer">
                Skills
            </li>
            <li
                onClick={ShowContactModal}
                className="tracking-wide font-semibold hover:text-slate-500 dark:hover:text-slate-400 cursor-pointer"
            >
                Contact
            </li>
        </ul>
    )
}
