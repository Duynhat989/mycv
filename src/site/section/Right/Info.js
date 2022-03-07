import React from "react"

function App({data}){
    return(
        <div className='name'>
        <h1 className='name-cv'>Đinh Viết Duy</h1>
        <p className='list-item' ><em>------------------------- <strong>{data.position}</strong> -------------------------</em></p>
    </div>
    )
}
export default App