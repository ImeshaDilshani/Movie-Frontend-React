import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";



function Hero({movies}) {
  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {
          movies.map((movies) =>{
            return(
              <Paper>
                <div className = 'movie-card-container'>
                  <div className="movie-card" style={{"--img": `url(${movies.backdrops[0]})`}}>
                    <div className='movie-detail'>
                      <div className='movie-poster'>
                        <img src={movies.poster} alt=""/>
                      </div>
                      <div className='movie-title'>
                        <h4>{movies.title}</h4>
                      </div>
                      <div className='movie-buttons-container'>
                        <Link to={`/trailer/${movies.trailerLink.substring(movies.trailerLink.length - 11)}`}>
                        <div className='play-button-icon-container'>
                          <FontAwesomeIcon className='play-button-icon'
                            icon = {faCirclePlay}
                          />
                        </div>
                        </Link>
                        <div className="movie-review-button-container">
                          {/* <Button variant ="info" onClick={() => reviews(movies.imdbId)} >Reviews</Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero