import React from 'react';

class movierow extends React.Component{
	render(){
	//	viewMovie(){
	//			const url ="https://www.themoviedb.org/movie/" + this.props.movie.id
	//			window.location.href = url
	//	}

		return <table key={this.props.movie.id}>
		<tbody>
				<tr>
					<td>
						<img alt="poster" width="120" src={this.props.movie.poster.src}/>
					</td>
					<td>
						<h3>{this.props.movie.title}</h3>
						<p>{this.props.movie.overview}</p>
						<input type="button" onClick ={this.viewMovie.bind(this)} value="view"/>
					</td>
				</tr>		
		</tbody>
	</table>
	}
}


export default movierow