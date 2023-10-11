import {useEffect, useState, FC} from "react";
import './imgOfTheDay.css'

type apodTypeResponse = {
  date:            Date;
  explanation:     string;
  hdurl:           string;
  media_type:      string;
  service_version: string;
  title:           string;
  url:             string;
}

const ImgOfTheDay: FC = () => {
        const [apodData, setApodData] = useState<apodTypeResponse | null>(null)
        useEffect(() => {
          const apiKey: string = import.meta.env.VITE_API_KEY
          const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      
          async function fetchData() {
            try {
              const response = await fetch(apiUrl);
              const data = await response.json();
              console.log("Datos de la API:", data);
              setApodData(data)
              } 
            catch (error) {
              console.log(error);
            }
          }
      
          fetchData();
        }, []); 

    return (
        <>
        <div className="container-info-api">
          <img className="imgOfTheDay" src ={apodData?.url} alt="" />
          <div className="container-text-api">
            <h2>{apodData?.title}</h2>
            <p>{apodData?.explanation}</p>
          </div>
          

        </div>


        </>
    )

}

export default ImgOfTheDay;