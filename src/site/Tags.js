const tags = {
    Input({type,className ='',id ='',name =''}){
        return <input type={type} className={className} name={name} id ={id}/>
    },
    Li({className,content='',id =''}){
        return <li className={className} id={id}>{content}</li>
    },
    ProcesBar({value}){
        return <progress value={value}  min='0' max='100'></progress>
    }
}
export default tags