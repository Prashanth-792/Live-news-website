
import News from "./News"
import "./App.css"
import { useEffect, useState} from "react"

const App = () => {
  const [articles,setArticles]=useState([])
  const [category,setCategory]=useState("Hyderabad")
  
  
  useEffect(()=>{
  
  
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-20&apiKey=42ff895a6e1e43ca81fef009c8c4f97a`)
    .then((response)=>response.json())
    .then((news)=>{
      
    
      setArticles(news.articles)
      console.log(articles)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[category])
  
  return(
    <div className="app">
      
      <header className="header">
        <h1>News</h1>
       
        <input className="input" placeholder="Search News" onChange={(event)=>{
          if(event.target.value!==""){
            setCategory(event.target.value);
          }
          else{
            setCategory("Hyderabad")
          }
        }}></input>
      </header>
      <section className="news-articles">
       

        {
          
          articles.length!==0?
          articles.map((article,index)=>{
            return (<News article={article} key={index}/>)
          })
          :
          <h3>No search is found for your search</h3>
          
          
        }

        


      </section>
    
      
    </div>
  )
}

export default App
  
