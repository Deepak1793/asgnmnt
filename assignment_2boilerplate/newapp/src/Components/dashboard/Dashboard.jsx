import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate();
    const [news,setNews] = useState([])
    const[later,setLater] =useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=7173bb0ecf214c62a37cb63362f13c0e")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data.articles);
            setNews(data.articles)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    const readLater = (newCard) => {
        fetch('http://localhost:3001',{
            'method' : 'POST',
            'body' : JSON.stringify(newCard),
            'headers' : {'Content-Type' : 'application/json'}
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=>{
            setLater([...later, data])
        })
        .catch((error)=>{
            console.log(error);
        })
      };
      useEffect(() => {
        fetch("http://localhost:9000/auth/isAuthenticated",{
           method:"POST",
           headers:{
               "Authorization":`Bearer ${localStorage.getItem("jwt_token")}`
           }
        })
        .then(res=>res.json())
        .then(data=>{
           console.log(data);
           if(!data.isAuthenticated){
               navigate("/login")
           }
        })
       }, [])
  return (
    <div>
        {
        news.map((item) => <Card key={item.id} urlToImage={item.urlToImage} title={item.title} author={item.author} readLater={readLater} description={item.description} url={item.url}/>)
        }
    </div>
    )
}
