import "./styles.css"
import Hero from "./Hero"

export default function Header() {
    return (
        <header
            id="home"
            className="w-full h-[99vh] flex items-center justify-center"
        >
            <Hero />
            {/* <div className="flex h-full w-full">
                <div className="">
                </div>
            </div> */}
        </header>
    )
}
