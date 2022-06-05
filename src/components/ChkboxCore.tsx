import React from 'react'


type AppProps = {
    tilte_yes : string,
    tilte_no : string,
    chk_name : string
    chk_getData :  (data : number) => void,
};



export default function ChkboxCore({tilte_yes , tilte_no , chk_name , chk_getData} : AppProps) {

    const changeData = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const value = e.target.value
        chk_getData(Number(value))
    }


    return (
        <>
            <table className="table table-bordered" width={`100%`}>
                <tbody>
                    <tr>
                        <th><input type={`radio`} name={chk_name} value={1} onChange={changeData} /></th>
                        <th >{tilte_yes}</th>
                    </tr>
                    <tr>
                        <th ><input type={`radio`} name={chk_name} value={0} onChange={changeData} /></th>
                        <th >{tilte_no}</th>
                    </tr>
                </tbody>
            </table>
            <hr />
        </>
    )
}