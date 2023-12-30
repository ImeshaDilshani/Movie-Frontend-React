import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import './Hero.css'

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