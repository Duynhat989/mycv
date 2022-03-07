
function App({data}){
    return(
        <div className='selectV1'>
            <div className='title'>
                <h1 className='btn-title'>Mục tiêu nghề nghiệp</h1>
            </div>
            <ul className='list'>
                {
                    data.target.map(content =>(
                        <li className='list-item' >- {content}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App