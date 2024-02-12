import React ,{ useEffect, useState } from "react"



const App = () => {
  const[movies, setMovies] = useState([])
  const[movieIndex, setMovieIndex] = useState(0)

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/movies/')
    .then(res => res.json())
    .then(apiMovies=> {
      setMovies(apiMovies)
      console.log(apiMovies)
    })
  }, [])

  const generateImageUrl = (old) => {
    return "http://127.0.0.1:8000" + old
  }

  const fixUrl = (oldUrl) => {
    return oldUrl.replaceAll('static', 'assets')
  }

  const swipe = () =>{
    if(movies.length > movieIndex + 1){
      setMovieIndex(movieIndex => movieIndex+1)

    }
    
    else{
      window.alert('Elfogytak a filmek!')
    }
  }
  return (
    <div>

    {movies.length > 0 ?
        <div className="card" style={{ backgroundImage: `url(${(movies[movieIndex].poster_image.replaceAll('static', 'assets'))})` }}>
          <h2>{ movies[movieIndex].title }</h2>
        </div> :
        <div>Loading...</div>}

    <div className='buttons'>
      <button onClick={() => swipe()}>👍</button>
      <button onClick={() => swipe()}>😎</button>
    </div>

    </div>
  )
}

export default App