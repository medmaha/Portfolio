import "./styles.css"
import Project from "./Project"
import { useEffect } from "react"

export const ProjectsContainer = () => {
    useEffect(() => {
        intersectionObserverFunc(null, "0px 0px 50px 0px", false)
    }, [])
    return (
        <section className="pl-2 sm:pl-0">
            <h2 className="text-center text-xl sm:text-2xl my-[25px] p-3 tracking-wide font-semibold">
                Latest Projects
            </h2>
            <div className="flex justify-center gap-[15px] sm:gap-2 flex-wrap ">
                {projects.map((data, idx) => {
                    return (
                        <div
                            key={idx}
                            className="__project__card flex-1 min-w-[250px] max-w-[350px]"
                        >
                            <Project data={data} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

function intersectionObserverFunc(root, rootMargin, repeatProcess = true) {
    const options = {
        root: root,
        rootMargin: rootMargin,
    }

    function callback(entries = []) {
        entries.forEach((entry) => {
            entry.target.classList.toggle("__animate__in", entry.isIntersecting)
            if (!repeatProcess && entry.isIntersecting) {
                // observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(callback, options)

    const projects = document.querySelectorAll(".__project__card")

    projects.forEach((project) => {
        observer.observe(project)
    })
}

const projects = [
    {
        name: "Celesup Media",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Postman Clone",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "StudyBuddy",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Music App",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Spotify Clone",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Path Finding Visualizer",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Fitness Master",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Sorting Algorithm Visualizer",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Tech Electrical",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "E-commerce Site",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Google Clone",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
    {
        name: "Youtube Clone",
        description: "",
        githubLink: "",
        downloadLink: "",
        liveDemoLink: "",
        technologies: [""],
    },
]
