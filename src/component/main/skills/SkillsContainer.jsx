import React from "react"
import Languages from "./Languages"
import Skill from "./Skill"
import Technologies from "./Technologies"

export const SkillsContainer = () => {
    return (
        <section className=" mt-[20px] sm:mt-[50px] flex justify-center flex-col items-center">
            <h2 className="sm:mb-[50px] mb-[25px] pt-[25px] text-xl sm:text-2xl tracking-wide font-semibold">
                Skills And Tools
            </h2>

            <Languages />

            <Technologies />
        </section>
    )
}
