import { useParams } from "react-router-dom/cjs/react-router-dom.min";




const TEST2 = () => {
    
 const{id }=useParams()
    return (  
        <div className="test2">
            <h1>{id}</h1>
        </div>
    );
}
 
export default TEST2;