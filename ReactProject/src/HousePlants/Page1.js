import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CountriesApi from '../HOC/Api';
import './style.css'
function Page1(props){
  const navigate=useNavigate();
   const categories=props.categories;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {// useEffect hook to fetch all plant data when the component mounts
    const url = 'https://house-plants2.p.rapidapi.com/all-lite';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8f59907ef2msh4ea15bbdb812c39p15e5c5jsn9a6b06fd5d27',
        'x-rapidapi-host': 'house-plants2.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };
    const func=async()=>{
    try {
      const response = await fetch(url, options); // Fetching data from the API
      const result = await response.json(); // Parsing the response as JSON
      console.log(result);// Logging the result to the console
      setSearchResults(result);// Updating searchResults state with the fetched data
    } catch (error) {
      console.error(error); // Logging any errors to the console
    }
  };
  func();// Calling the asynchronous function to fetch data
  }, []);// Empty dependency array means this effect runs once after initial render

  

  
 // Function to search plants by category
  const SearchByCategory = async (category) => {
    const baseUrl = `https://house-plants2.p.rapidapi.com/category/${category}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8f59907ef2msh4ea15bbdb812c39p15e5c5jsn9a6b06fd5d27',
        'x-rapidapi-host': 'house-plants2.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(baseUrl,options);
      const data = await response.json();
      console.log(data)
      setSearchResults(data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 // Function to filter plants by family
 const FilterByFamily = (fval) => {
  const filtered = searchResults.filter(d => d.Family.includes(fval));
  setSearchResults(filtered);
};
// Function to filter plants by latin name
const FilterByLatinName = (lval) => {
  const filtered = searchResults.filter(d => d["Latin name"].includes(lval));
  setSearchResults(filtered);
};
  
    return <>
      <div id='inputs'>
        {/* Dropdown for selecting a category */}
      <select onChange={(e) => SearchByCategory(e.target.value)} className="form-select">
      {categories.map((c,index)=>(
        <option key={index} value={c.Category}>{c.Category}</option>
      ))}
      </select>
       {/* Input field for filtering by family */}
      <input type='text' placeholder='filter by family' onBlur={(e) => FilterByFamily(e.target.value)}  className="form-control"></input>
      {/* Using onBlur to trigger search when input loses focus*/}
       {/* Input field for filtering by Latin name */}
      <input type='text' placeholder='filter by latin name' onBlur={(e) => FilterByLatinName(e.target.value)}  className="form-control"></input>
      {/* Using onBlur to trigger search when input loses focus*/}
      </div>
    <div id='response'>
      {/* Displaying the search results */}
    {searchResults.map((d, index) => (
          <table className='table table-dark'>
            <tbody>
              <tr key={index}>
                <td><h3>Latin name:</h3> <h4>{d["Latin name"]}</h4></td>
                <td><h3>Family:</h3> <h4>{d["Family"]}</h4></td>
                <td><h3>Category:</h3> <h4>{d["Categories"]}</h4></td>
                {/* Button to navigate to a detailed page for the plant */}
                <button onClick={()=>navigate(`/Page2/${d.id}`)}>show more information</button>
              </tr>
            </tbody>
          </table>
        ))
      
      }
    </div>
</>
};
export default CountriesApi(Page1);// Exporting the component wrapped in the CountriesApi HOC