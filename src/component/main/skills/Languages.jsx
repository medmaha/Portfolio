import "./styles.css"
import { useEffect } from "react"

export default function Languages() {
    useEffect(() => {
        intersectionObserverFunc(null, "0px 0px -50px 0px", false)
    }, [])

    return (
        <div className="px-5 sm:px-2 sm:flex-row flex flex-col gap-2 lg:gap-5 flex-wrap justify-between items-center w-full">
            {programmingLang.map((lang) => {
                return (
                    <div
                        key={lang.name}
                        className={`
                            __skills__lang flex-1 sm:basis-[410px] w-full flex gap-1 items-center flex-col justify-center ${lang.animation}
                        `}
                    >
                        <div className="flex justify-between gap-2 text-sm w-full font-semibold tracking-wide">
                            <span className="md:text-lg">{lang.name}</span>
                            <span className="md:text-lg">{lang.score}</span>
                        </div>
                        <div className="w-full flex bg-blue-200 dark:bg-slate-800 h-[8px]">
                            <span
                                style={{
                                    maxWidth: `${lang.score}`,
                                    backgroundColor: `${lang.color}`,
                                }}
                                className="flex-1 w-full rounded-full"
                            ></span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function intersectionObserverFunc(root, rootMargin, repeatProcess = true) {
    const options = {
        root: root,
        rootMargin: rootMargin,
        threshold: 0.5,
    }

    function callback(entries = []) {
        entries.forEach((entry) => {
            entry.target.classList.toggle(
                "__animate_lang",
                entry.isIntersecting,
            )
            if (!repeatProcess && entry.isIntersecting) {
                // observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(callback, options)

    const projects = document.querySelectorAll(".__skills__lang")

    projects.forEach((project) => {
        observer.observe(project)
    })
}

const programmingLang = [
    {
        name: "Python",
        score: "85%",
        color: "#2563eb",
        animation: "animate-left",
    },
    {
        name: "Php",
        score: "65%",
        color: "#a78bfa",
        animation: "animate-right",
    },
    {
        name: "Javascript",
        score: "80%",
        color: "#fbbf24",
        animation: "animate-left",
    },
    {
        name: "Html",
        score: "90%",
        color: "#c2410c",
        animation: "animate-right",
    },
    {
        name: "Sass",
        score: "85%",
        color: "#db2777",
        animation: "animate-left",
    },
    {
        name: "Sql",
        score: "85%",
        color: "#64748b",
        animation: "animate-right",
    },
]
