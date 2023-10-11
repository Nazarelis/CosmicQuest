import React from "react";


const HookFetchApi = () => {
  //recuerda poner parametro la url de api
  React.useEffect(() => {
    const apiKey: string = 'c7a3vhWm3In4tW55dK1clGCjdaQYdiVS73tmfH48'
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Datos de la API:", data);
        } 
      catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []); 
    


};

export default HookFetchApi;