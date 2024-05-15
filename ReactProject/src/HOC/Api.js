import React from "react";
import { useEffect,useState } from 'react'
const CountriesApi=(OriginalComponent)=>{// Higher-Order Component (HOC) that takes a component as an argument
    function NewComponent(){// New functional component created by the HOC
  const [cdata,setcdata]=useState([]);// State to store categories data
  useEffect(()=>{// useEffect hook to fetch data when the component mounts
const url1 = 'https://house-plants2.p.rapidapi.com/categories';// API endpoint for categories
const options = {// Options for the fetch request, including headers and API key
  method: 'GET',
  headers: {
    'x-rapidapi-key': '8f59907ef2msh4ea15bbdb812c39p15e5c5jsn9a6b06fd5d27',
    'x-rapidapi-host': 'house-plants2.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};
    const fetchData1=async()=>{// Asynchronous function to fetch data from the API
      try{
        const response=await fetch(url1,options); // Fetch data from the API
        const resJson=await response.json();// Parse the response as JSON
        console.log(resJson);// Log the response data to the console
        setcdata(resJson);// Update the state with the fetched data
      }catch(error){
        alert("c_error");// Alert in case of an error
      }
    };
    fetchData1();// Call the function to fetch data

  },[]);// Empty dependency array ensures the effect runs only once when the component mounts
        return <OriginalComponent categories={cdata}/>;// Render the original component, passing the fetched categories data as props
    }
    return NewComponent;// Return the new component created by the HOC
}
export default CountriesApi; // Export the HOC