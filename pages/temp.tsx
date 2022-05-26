import { useState,useEffect } from "react";

function temp(){

    const [data,setData] = useState([{}])

    useEffect(()=> {
        fetch('http://localhost:5000/movies')
  .then(response => response.json())
  .then(data => console.log(data));
    })

    return (
        <div>

        </div>
    )

}

export default temp