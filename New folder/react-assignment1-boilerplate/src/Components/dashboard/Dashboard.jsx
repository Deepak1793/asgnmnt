import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
export default function Dashboard() {
    const [news,setNews] = useState([])
    const[later,setLater] =useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=6cf17b9881aa49b0ad818eb7490ffb7f")
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
        fetch('http://localhost:3001/newsdata',{
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
  return (
    <div data-testid="cont" className="container">
        {
        news.map((item) => <Card urlToImage={item.urlToImage} title={item.title} author={item.author} readLater={readLater} description={item.description} url={item.url}/>)
        }
    </div>
    )
}
