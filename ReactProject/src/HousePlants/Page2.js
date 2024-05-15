import { useParams,useNavigate } from "react-router-dom"
import { useEffect,useState } from 'react'
export default function Page2(){
    const navigate = useNavigate();
    const {id } = useParams();// Extracting the 'id' parameter from the URL
    const [data,setData]=useState([]);

    useEffect(()=>{
        const url = `https://house-plants2.p.rapidapi.com/id/${id}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '8f59907ef2msh4ea15bbdb812c39p15e5c5jsn9a6b06fd5d27',
            'x-rapidapi-host': 'house-plants2.p.rapidapi.com',
            'Content-Type': 'application/json'
          }
        };
            const fetchData=async()=>{
              try{
                const response=await fetch(url,options);// Fetching data from the API
                const resJson=await response.json();// Parsing the response as JSON
                console.log(resJson); // Logging the result to the console
                setData(resJson);// Updating state with the fetched data
              }catch(error){
                alert("data_error");// Alerting in case of an error
              }
            };
            fetchData();// Calling the asynchronous function to fetch data
        
          },[id]); // Dependency array containing 'id' ensures the effect runs when 'id' changes
return(
<>
<div id='data'>
<ul className="list-group list-group-flush">
  <li className="list-group-item"><h3>Appeal:</h3> <h4>{data.Appeal}</h4></li>
  <li className="list-group-item"><h3>Family:</h3> <h4>{data.Family}</h4></li>
  <li className="list-group-item"><h3>Category:</h3> <h4>{data.Categories}</h4></li>
  <li className="list-group-item"><h3>Climat:</h3> <h4>{data.Climat}</h4></li>
  <li className="list-group-item"><h3>Temperature:</h3> <h4>{data.Temperature}</h4></li>
  <li className="list-group-item"><h3>Zone:</h3> <h4>{data.Zone}</h4></li>
  <li className="list-group-item"><h3>Watering:</h3> <h4>{data.Watering}</h4></li>
  <li className="list-group-item"><h3>Origin:</h3> <h4>{data.Origin}</h4></li>
  <li className="list-group-item"><h3>Pruning:</h3> <h4>{data.Pruning}</h4></li>
  <li className="list-group-item"><h3>Growth:</h3> <h4>{data.Growth}</h4></li>
  <li className="list-group-item"><h3>Perfume:</h3> <h4>{data.Perfume}</h4></li>
  <li className="list-group-item"><h3>Bearing:</h3> <h4>{data.Bearing}</h4></li>
  <li className="list-group-item"><h3>Style:</h3> <h4>{data.Style}</h4></li>
  <li className="list-group-item"><h3>Avaibility:</h3> <h4>{data.Avaibility}</h4></li>
  <li className="list-group-item"><h3>Insects:</h3> <h4>{data.Insects}</h4></li>
  <li className="list-group-item"><h3>Use:</h3> <h4>{data.Use}</h4></li>
  <li className="list-group-item"><h3>Disease:</h3> <h4>{data.Disease}</h4></li>
</ul>
 {/* Displaying the image of the plant */}
<img src={data.Img}></img>
    </div>
{/* Button to navigate back to the previous page */}
<button onClick={()=>navigate(-1)}>go back</button>

</>)
}


