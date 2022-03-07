import React from "react"
import Tags from '../../Tags'

function App({data}){
    return(
        <React.Fragment>
           <div className='selectV1'>
                <div className='title'>
                    <h1 className='btn-title'> Người liên hệ</h1>
                </div>
                <ul className='list'>
                <li className='list-item' >Tổ chức : {data.or_contact[0].company}</li>
                <li className='list-item' >Người liên hệ : {data.or_contact[0].name}</li>
                <li className='list-item' >Số điện thoại : {data.or_contact[0].Phone}</li>
                <li className='list-item' >Chức vụ : {data.or_contact[0].position}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default App