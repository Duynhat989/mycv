
function App({data}){
    return(
        <div className='selectV1'>
            <div className='title'>
                <h1 className='btn-title'>Thông tin cá nhân</h1>
            </div>
            <ul className='list'>
                <li className='list-item' > + Sinh ngày: {data.dayofbirth}</li>
                <li className='list-item' > + Email: {data.email}</li>
                <li className='list-item' > + Số điện thoại: {data.phone}</li>
                <li className='list-item' > + Địa chỉ: {data.address}</li>
            </ul>
        </div>
    )
}
export default App