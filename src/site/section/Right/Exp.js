
function App({data}){
    return(
        <div className='selectV1'>
            <div className='title'>
                <h1 className='btn-title'>Kinh nghiệm làm việc</h1>
            </div>
            <ul className='list'>
                {
                    data.exp.map(content =>(
                        <li className='list-item' >- <strong>{content.name}</strong> : {content.content} <br/>&emsp;&emsp;+ <em><strong>Đã đạt được</strong>: {content.target}</em></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App