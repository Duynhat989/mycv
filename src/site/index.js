import Header from './Header'
import Body from './Body'
import Create from './Create'
import Contact from './Contact'
import React from 'react';
import './css/style.min.css'
import { useEffect , useState } from 'react'

function App(){
    const [data,SetData] = useState([])
    const [status ,SetStatus] = useState(false)
    const [view,Setview] = useState(1)
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("Access-Control-Allow-Headers", "Content-Type,Authorization,true");
        myHeaders.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        fetch("https://mocki.io/v1/da11d545-53e6-4e37-be6f-534cf9c202e5", requestOptions)
        .then(response => response.text())
        .then(result => {
            SetData(JSON.parse(result))
            SetStatus(true)
        })
        .catch(error => console.log('error', error));
       
    },[])
    useEffect(()=>{
        view || false && (view = 1)
    },[view])
    return (
       <React.Fragment>
            <Header
                callback={(view)=>{Setview(view)}}
            />
            {
                view == 1 && status == true && <Body data = {data}/>
            }
            {
                view == 2 && status == true && <Create data = {data}/>
            }
            {
                view == 3 && status == true && <Contact data = {data}/>
            }
       </React.Fragment>
    );
}
export default App