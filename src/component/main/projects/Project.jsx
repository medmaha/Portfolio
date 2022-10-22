import React from "react"

export default function Project({ data }) {
    return (
        <div className="min-h-[150px] md:min-h-[170px] flex flex-col items-center p-2">
            <div className="flex-1 relative w-full ">
                <img
                    src={require("../../../assets/img/images.png")}
                    alt="project"
                    width="100%"
                    className="rounded-t-md"
                />

                {/* absolute position */}

                <a href="">
                    <span
                        className="absolute left-0 top-0 opacity-0 hover:bg-black hover:opacity-80 hover:text-slate-200 font-semibold 
                    w-full h-full px-1 rounded-t-md tracking-wider
                    flex items-center justify-center gap-2 flex-col"
                        data-project-name
                    >
                        <span>Preview Live Demo</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048"
                            width={24}
                            className="fill-slate-200"
                            height={24}
                        >
                            <path d="M1024 768q79 0 149 30t122.5 82.5T1378 1003t30 149q0 80-30 149.5t-82.5 122T1173 1506t-149 30q-80 0-149.5-30t-122-82.5-82.5-122-30-149.5q0-79 30-149t82.5-122.5 122-82.5 149.5-30zm0 640q53 0 99.5-20t81.5-55 55-81.5 20-99.5-20-99.5-55-81.5-81.5-55-99.5-20-99.5 20-81.5 55-55 81.5-20 99.5 20 99.5 55 81.5 81.5 55 99.5 20zm0-1152q143 0 284 35.5T1574 396t226.5 170.5T1966 800q40 83 61 171.5t21 180.5h-128q0-118-36-221t-99.5-188T1635 591t-185.5-113-208.5-70-217-24-217 24-208.5 70T413 591 263.5 743 164 931t-36 221H0q0-92 21-180.5T82 800q64-132 165.5-233.5T474 396t266-104.5 284-35.5z" />
                        </svg>
                    </span>
                </a>
            </div>
            <span
                title={data.name}
                className="text-lg cursor-default inline-block text-center sm:text-xl md:text-2xl font-semibold mt-1 mb-3 tracking-wide truncate w-full"
            >
                {data.name}
            </span>
            <p className="text-center pb-2 text-sm tracking-wide px-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                illo necessitatibus reiciendis consequatur in sint{" "}
            </p>
            <div className="flex justify-between gap-2 w-full">
                <div className="flex gap-1 items-center text-sm tracking-wide">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="16px"
                        height="16px"
                        viewBox="0 0 92 92"
                    >
                        <path
                            id="XMLID_1335_"
                            d="M89,58.8V86c0,2.8-2.2,5-5,5H8c-2.8,0-5-2.2-5-5V58.8c0-2.8,2.2-5,5-5s5,2.2,5,5V81h66V58.8
                            c0-2.8,2.2-5,5-5S89,56,89,58.8z M42.4,65c0.9,1,2.2,1.5,3.6,1.5s2.6-0.5,3.6-1.5l19.9-20.4c1.9-2,1.9-5.1-0.1-7.1
                            c-2-1.9-5.1-1.9-7.1,0.1L51,49.3V6c0-2.8-2.2-5-5-5s-5,2.2-5,5v43.3L29.6,37.7c-1.9-2-5.1-2-7.1-0.1c-2,1.9-2,5.1-0.1,7.1L42.4,65z"
                        />
                    </svg>
                    <span>download</span>
                </div>
                <div className="flex gap-1 items-center text-sm tracking-wide">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="16px"
                        height="16px"
                        fill="orange"
                        viewBox="0 0 92 92"
                    >
                        <path
                            id="XMLID_31_"
                            d="M59,75c-1.1,0-2.1-0.4-2.9-1.2c-1.5-1.6-1.5-4.1,0.1-5.7l23-22.1l-23-22.1c-1.6-1.5-1.6-4.1-0.1-5.7
                            c1.5-1.6,4.1-1.6,5.7-0.1l26,25c0.8,0.8,1.2,1.8,1.2,2.9s-0.4,2.1-1.2,2.9l-26,25C61,74.6,60,75,59,75z M35.9,73.8
                            c1.5-1.6,1.5-4.1-0.1-5.7L12.8,46l23-22.1c1.6-1.5,1.6-4.1,0.1-5.7c-1.5-1.6-4.1-1.6-5.7-0.1l-26,25C3.4,43.9,3,44.9,3,46
                            s0.4,2.1,1.2,2.9l26,25C31,74.6,32,75,33,75C34,75,35.1,74.6,35.9,73.8z"
                        />
                    </svg>
                    source code
                </div>
            </div>
        </div>
    )
}
