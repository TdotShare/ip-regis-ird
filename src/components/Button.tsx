import React from 'react'


// type AppProps = {
//     btn_type?: string,
//     btn_block? : boolean,

//     children: React.ReactNode,
//     onClick?: () => void
// };

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

const Button:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <button {...rest}>{children}</button>
    )
}

// const Button = ({ btn_type = "btn-primary", btn_block = false, children , onClick  , btn_action }: AppProps) => {
        
//     const block = btn_block ? 'btn-block' : ''

//     return (
//         <button type={btn_action} onClick={onClick} className={`btn ${btn_type} ${block}`}>
//             {children}
//         </button>

//     )


// }


export default Button