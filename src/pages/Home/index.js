import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'

import useStyles from './style'

import TempCard from '../../components/TempCard'
import PlaceCard from '../../components/PlaceCard'
import Title from '../../components/Title'
import Reviews from '../../components/Reviews'

import { MyFecthApi } from '../../util'
import OtherTemps from '../../components/OtherTemps'

const API_KEY = 'ac47c7d64690c2c4e31689a578824f1d'

const HomePage = () => {
  const classes = useStyles()
  const [climaBogota, setClimaBogota] = useState(null)
  const [climaParis, setClimaParis] = useState(null)
  const [climaAlemania, setClimaAlemania] = useState(null)

  useEffect(() => {
    MyFecthApi(
      `http://api.openweathermap.org/data/2.5/forecast?q=bogota&units=metric&appid=${API_KEY}`,
      setClimaBogota
    )
    MyFecthApi(
      `http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${API_KEY}`,
      setClimaParis
    )
    MyFecthApi(
      `http://api.openweathermap.org/data/2.5/weather?q=moscu&units=metric&appid=${API_KEY}`,
      setClimaAlemania
    )
  }, [])

  // console.log(climaBogota)
  return (
    <>
      <div className={classes.btnBacancito}>
        <div className={classes.btnBacancito_imagen}>
          <img
            src={`http://openweathermap.org/img/wn/${climaBogota?.list[0].weather[0].icon}@2x.png`}
            alt="icon"
          />
        </div>
        <div className={classes.btnBacancito_temp}>
          {Math.round(climaBogota?.list[0].main.temp)}°C
        </div>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>
              <img
                className={classes.image_header}
                src="https://cdn.pixabay.com/photo/2020/02/25/11/52/colombia-4878721_1280.jpg"
                alt="Bogotá"
                width="100%"
                height="350vh"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Title title="3 Days" nextTitle="Forecast" size={25} />
            <div className={classes.containerTempCard}>
              <TempCard
                color="#8a41ff"
                colorText="white"
                title={climaBogota?.list[0].dt_txt}
                subtitle={climaBogota?.list[0].weather[0].main}
                temp={`${Math.round(
                  climaBogota?.list[0].main.temp_min
                )}°/${Math.round(climaBogota?.list[0].main.temp_max)}°`}
                icon={climaBogota?.list[0].weather[0].icon}
              />
              <TempCard
                color="#BFD8E5"
                colorText="black"
                title={climaBogota?.list[2].dt_txt}
                subtitle={climaBogota?.list[2].weather[0].main}
                temp={`${Math.round(
                  climaBogota?.list[2].main.temp_min
                )}°/${Math.round(climaBogota?.list[2].main.temp_max)}° `}
                icon={climaBogota?.list[2].weather[0].icon}
              />
              <TempCard
                color="#BFD8E5"
                colorText="black"
                title={climaBogota?.list[12].dt_txt}
                subtitle={climaBogota?.list[12].weather[0].main}
                temp={`${Math.round(
                  climaBogota?.list[12].main.temp_min
                )}°/${Math.round(climaBogota?.list[12].main.temp_max)}°`}
                icon={climaBogota?.list[12].weather[0].icon}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Title title="Place to" nextTitle="visit" size={25} />
            <div className={classes.containerPlaceCard}>
              <PlaceCard
                height="280px"
                title="Arab street"
                subtitle="Singapore"
                img="https://image.freepik.com/foto-gratis/dubai-marina_158595-2000.jpg"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Reviews />
            <div className={classes.containerReviews}>
              <PlaceCard
                height="80px"
                title="Art Science"
                subtitle="Museum"
                img="https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg"
              />
              <PlaceCard
                height="160px"
                title="Fontain"
                subtitle="of healttin"
                img="https://cdn.pixabay.com/photo/2015/02/25/07/39/church-648430_1280.jpg"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3} className={classes.otherCountries}>
            <div className={classes.containerOtherTemps}>
              <OtherTemps
                title={climaParis?.name}
                subtitle={climaParis?.sys.country}
                temp={Math.round(climaParis?.main.temp)}
                humadity={Math.round(climaParis?.main.humidity)}
                wind={climaParis?.wind.speed}
              />
              <OtherTemps
                title={climaAlemania?.name}
                subtitle={climaAlemania?.sys.country}
                temp={Math.round(climaAlemania?.main.temp)}
                humadity={Math.round(climaAlemania?.main.humidity)}
                wind={climaAlemania?.wind.speed}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default HomePage
