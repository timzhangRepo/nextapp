'use client'
import React from 'react'

function Censorted({children}: Readonly<{children: React.ReactNode}>) {
    const [isCensored, setIsCensored] = React.useState(false)
    return (
        <button
        className={isCensored ? 'censored' : 'undefined'}
        onClick={() => setIsCensored(!isCensored)}
        >
            {children}
        </button>
         
    );
}
export default Censorted;