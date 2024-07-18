export default function Input ({item,index}) {
    
    return (
        <div key={index} className="row">
       <input placeholder={item.english}/>
        <input></input>
        <input></input>
        
       
        </div>)
}