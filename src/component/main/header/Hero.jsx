import React, { useContext } from "react"
import { GlobalContext } from "../../../Portfolio"
import Quotes from "./Quote"

export default function Hero() {
    const context = useContext(GlobalContext)
    return (
        <div className="w-full h-full relative ">
            {/* <img
                className="w-full h-full object-cover"
                src={require("../../assets/img/images.png")}
                alt="hero"
            /> */}
            <div className="flex justify-center items-center h-full flex-col">
                <h1
                    className={`sm:text-3xl text-2xl md:text-3xl text-center tracking-wide font-semibold capitalize`}
                >
                    I'm Mahamed Toure
                </h1>
                <p
                    className={`max-w-[25ch] text-center ${
                        context.darkTheme ? "text-slate-300" : "text-slate-700"
                    }`}
                >
                    A software engineer and a full stack developer
                </p>
            </div>
            {/*  */}
            <Quotes />
        </div>
    )
}
