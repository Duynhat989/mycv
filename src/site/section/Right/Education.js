
function App({data}){
    return(
        <div className='selectV1'>
            <div className='title'>
                <h1 className='btn-title'>Học vấn</h1>
            </div>
            <ul className='list'>
                {
                    data.education.map(content =>(
                        <li className='list-item' >- <strong>{content.time}</strong> : {content.learn}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App