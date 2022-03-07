import React from "react"
import Tags from '../../Tags'

function App({data}){
    return(
        <React.Fragment>
            {
                 data.skills.map((skill,index)=>(
                    <div key={index} className='selectV1'>
                        <div className='title'>
                            <h1 className='btn-title'>{skill.name}</h1>
                        </div>
                        <ul className='list'>
                            {
                                skill.content.map((stn,vitri)=>(
                                    
                                    <li key={vitri}  className='list-item flex'>
                                        <p>{Object.entries(stn)[0][0] }</p> 
                                        {Object.entries(stn)[0][0].length >= 3 ? <Tags.ProcesBar value={Object.entries(stn)[0][1]} /> : Object.entries(stn)[0][1]}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </React.Fragment>
    )
}
export default App