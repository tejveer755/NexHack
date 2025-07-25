import React from 'react'

function Header({
    title = "Header Title",
    subtitle ,
    gradientFrom = "orange-400",
    gradientTo = "blue-700",
    className = "",
    textAlign = "text-center",
}) {
    return (
        <div className={`max-w-7xl mx-auto  px-4 md:px-8 lg:px-10 ${className}`}>
            <div className={`${textAlign} border-b border-zinc-50 w-fit mx-auto pb-3 `}>
                <h2 className={`text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Header
