import React from'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history} = this.props;
        if (location.state == undefined){
            history.push('/');
        }
    }

    render(){
        const {location}= this.props;
        console.log(this.props);
        if(location.state){
            return (
                <div className='movieDetail'>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <h1 className="movie_titile">{location.state.title}</h1>
                    <h2 className="movie_year">{location.state.year}</h2>
                    <h3><ul className="movie_genres">
                    {location.state.genres.map((genre, index) => {
                        return <li key={index} classsName="movie_genre">{genre}</li>;

                    })}
                    </ul></h3>
                    <p classsName="movie_summary">{location.state.summary}</p>
                </div>
            );
        } else{
            return null;
        }
        
         
    }
}

export default Detail;