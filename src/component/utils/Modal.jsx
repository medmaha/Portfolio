import "./modalStyles.css"
import React, { useEffect, useState } from "react"

export default function Modal({ children, state, instanceDispatcher }) {
    const [open, setOpen] = useState(state)

    useEffect(() => {
        setOpen(state)
    }, [state])

    function closeModal() {
        setOpen(false)
        instanceDispatcher({
            state: null,
        })
    }

    return (
        <>
            {open && (
                <div className="__modal">
                    <div className="__modal_container">
                        <div className="__modal_content">{children}</div>

                        <span
                            className="__modal_close absolute left-[90%] top-[10px] p-3 h-[1.9rem] cursor-pointer rounded-full bg-gray-600 flex justify-center items-center"
                            onClick={closeModal}
                        >
                            x
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}
