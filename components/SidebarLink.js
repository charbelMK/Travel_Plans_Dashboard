import React from 'react'

function SidebarLink({text, active}) {
    return (
        <div className={`flex items-center justify-center cursor-pointer ${active && "underline text-blue-800"}
        xl:justify-start space-x-2 font-sans text-sm hover:text-blue-300`}>
            <span className="hidden md:inline">{text}</span>
        </div>
    )
}

export default SidebarLink
