import React from 'react'

type AppProps = {
    btn_type?: string,
    btn_block? : boolean,
    children: React.ReactNode,
    onClick?: () => void
};


const Button = ({ btn_type = "btn-primary", btn_block = false, children , onClick  }: AppProps) => {
        
    const block = btn_block ? 'btn-block' : ''

    return (
        <button onClick={onClick} className={`btn ${btn_type} ${block}`}>
            {children}
        </button>

    )


}


export default Button