import React from "react"

export default function Technologies() {
    return (
        <>
            <h2 className="text-center w-full tracking-wide my-[50px] font-semibold mb-[15px]">
                Technologies
            </h2>
            <div className="flex justify-center flex-wrap gap-2 w-full max-w-[900px]">
                {technologies.map((framework) => {
                    return (
                        <button
                            key={framework.name}
                            className="p-1 px-2 rounded-lg bg-blue-500"
                        >
                            {framework.name}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

const technologies = [
    {
        name: "Django",
    },
    {
        name: "Pandas",
    },
    {
        name: "React",
    },
    {
        name: "MangoDB",
    },
    {
        name: "Git",
    },
    {
        name: "Redux",
    },
    {
        name: "Angular",
    },
    {
        name: "Redis",
    },
    {
        name: "Node",
    },
    {
        name: "Express",
    },
    {
        name: "Flask",
    },
]
