
function App({data}){
    return(
        <div className='selectV1'>
            <div className='title'>
                <h1 className='btn-title'>Kỹ năng</h1>
            </div>
            <ul className='list'>
                {
                    data.extra_skill.map(content =>(
                        <li className='list-item' >- <strong>{content.name}</strong> : {content.content} </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App