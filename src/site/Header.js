
function App({callback}){
    return (
        <header className="header">
            <div className="header-content">
                <div className="container">
                    <ul className="menu flex">
                        <li className="menu-item" onClick={()=>(callback(1))}>My CV</li>
                        <li className="menu-item" onClick={()=>(callback(2))}>Tạo vc mới
                            <ul className="sub">
                                <li>Mẫu hiện đại</li>
                                <li>Mẫu không hiện đại</li>
                                <li>Mẫu cổ</li>
                            </ul>
                        </li>
                        <li className="menu-item" onClick={()=>(callback(3))}>Liên hệ</li>
                    </ul>       
                </div>
            </div>
        </header>
    )
}
export default App