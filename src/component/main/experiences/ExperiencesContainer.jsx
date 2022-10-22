import AboutMe from "./AboutMe"

import React from "react"

export default function ExperiencesContainer() {
    const experiences = [0]
    return (
        <div className="" id="aboutMe">
            <h2 className="text-center my-[50px] text-2xl tracking-wide">
                About Me
            </h2>
            <div className="flex items-center flex-col gap-2">
                {experiences.map((_) => {
                    return <AboutMe key={_} />
                })}
            </div>
        </div>
    )
}
