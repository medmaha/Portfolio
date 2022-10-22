import { createContext, useEffect, useRef, useState } from "react"
import "./Portfolio.css"

import { Navbar } from "./component/navbar"
import {
    Header,
    Projects,
    Experiences,
    Skills,
    Contact,
} from "./component/main"

import { SocialMedia, Modal, Drawer } from "./component/utils"

export const GlobalContext = createContext()

function Portfolio() {
    const [darkTheme, setDarkTheme] = useState()
    const [modal, setModalOptions] = useState({})
    const [drawer, setDrawerOptions] = useState({})

    const appRef = useRef()

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setDarkTheme(true)
        }
    }, [])

    function toggleModal(options = {}) {
        setModalOptions({
            ...modal,
            ...options,
        })
    }

    function toggleDrawer(options = {}) {
        setDrawerOptions({
            ...drawer,
            ...options,
        })
    }

    return (
        <div
            ref={appRef}
            className={`portfolio p-0 m-0 pb-[35px] flex flex-col items-center relative
            ${darkTheme ? "dark text-slate-200 bg-gray-900" : "bg-slate-100"}`}
        >
            <Modal
                state={modal.state}
                children={modal.children}
                instanceDispatcher={toggleModal}
            />
            <Drawer state={drawer.state} callback={drawer.callback} />

            <GlobalContext.Provider
                value={{
                    appRef,
                    darkTheme,
                    setDarkTheme,
                    modal,
                    toggleModal,
                    toggleDrawer,
                }}
            >
                <Navbar changeTheme={setDarkTheme} />
                <SocialMedia />
                <main className="pl-[35px] md:pl-[50px] px-2 container mx-auto overflow-hidden">
                    <Header />
                    <Projects />
                    <Skills />
                    <Experiences />
                    <Contact />
                </main>
            </GlobalContext.Provider>
        </div>
    )
}

export default Portfolio

