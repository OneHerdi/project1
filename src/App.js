import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import MovieRow from './movierow';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={}
    //console.log("This is my initializer")

        
        this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("perform oke")
    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=5fceb2cd2010ef32989d530be884215c&query=" + searchTerm
    $.ajax({
          url:urlString,
          success:(searchResults) =>{
            console.log("Data connect")
            const results = searchResults.results
            
            var movieRows =[]

            results.forEach((movie) =>{
              movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

              const movieRow = <MovieRow key={movie.id} movie={movie} />
              movieRows.push(movieRow)
            })

            this.setState({
                rows: movieRows
            })
          },
          error:(xhr, status, err)=>{
            console.error("Failed")
          }
    })
  }

  searchChangeHandler(event){
    const searchTerm = event.target.value
    const boundObject = this
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
            
            <table className="titlebar">
                <tbody>
                    <tr>
                          <td>
                                <img width="50" src="video.svg"/> 
                          </td>
                          <td width="5"/>
                          <td>
                              Movie Search
                          </td>
                    </tr>
                </tbody>
            </table>

            <input className="Search"
                  onChange={this.searchChangeHandler.bind(this)}
                  placeholder="Enter Seach Term"
            />
          
           
          {this.state.rows}
      </div>
    );
  }
}

export default App;
