import React from "react"

export default function ContactForm() {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-center capitalize text-lg font-semibold tracking-wide">
                Say hello
            </h3>
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="email address"
                    required
                    className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    required
                    placeholder="subject"
                    className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                    role={4}
                    id="message"
                    required
                    placeholder="Message"
                    className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                ></textarea>
            </div>
            <div className="text-right mt-2">
                <span className="p-2 rounded-md text-slate-800 bg-blue-400">
                    Submit
                </span>
            </div>
        </div>
    )
}
