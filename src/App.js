import React, { Component } from 'react';
import './App.css';
import movierow from './movierow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state  ={}
    
    this.performSearch()
  }

  performSearch(searchTerm){
    console.log("Perfrom search using moviedb")
    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=5fceb2cd2010ef32989d530be884215c&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults)=>{
        console.log("Data succesed")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])

        var movieRows = []

        results.forEach((movie) =>{
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

          //movie.poster.src
          //console.log(movie.poster_path)
          const movieRow = <movierow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error:(xhr,status , err)=>{
        console.log("failed to fetch data")
      }
    })
  }
  
  searchChangeHandler(event){
      console.log(event.target.value)
      const boundObject = this
      const searchTerm = event.target.value
      boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="title">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width= "45" src="video.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h4>Movie search</h4>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="Search" 
        onChange={this.searchChangeHandler.bind(this)}
        placeholder="Enter search term"/>
        

        {this.state.rows}
      </div>
    );
  }
}

export default App;
