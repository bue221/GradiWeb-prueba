import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { CircularProgress } from '@material-ui/core'

import TempCard from '../../components/TempCard'
import PlaceCard from '../../components/PlaceCard'
import Title from '../../components/Title'
import Reviews from '../../components/Reviews'
import OtherTemps from '../../components/OtherTemps'

import useStyles from './style'
import LocationSvg from '../../assets/svg/LocationSvg'

import { MyFecthApi } from '../../util'

const API_KEY = 'ac47c7d64690c2c4e31689a578824f1d'

const HomePage = () => {
  // isMobile
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const classes = useStyles(isMobile)
  // states
  const [climaBogota, setClimaBogota] = useState(null)
  const [climaParis, setClimaParis] = useState(null)
  const [climaAlemania, setClimaAlemania] = useState(null)

  // filter para obtener un array con las fechas mayores o iguales al dia de hoy + 3 dias
  const list = climaBogota?.list.filter((n) => {
    const date = new Date(n.dt_txt)
    const nowDate = new Date()
    const dias = 3
    const sumaFecha = nowDate.setDate(nowDate.getDate() + dias)
    // console.log(sumaFecha)
    return date <= sumaFecha
  })

  // console.log(list)

  useEffect(() => {
    MyFecthApi(
      `https://api.openweathermap.org/data/2.5/forecast?q=bogota&units=metric&appid=${API_KEY}`,
      setClimaBogota
    )
    MyFecthApi(
      `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=${API_KEY}`,
      setClimaParis
    )
    MyFecthApi(
      `https://api.openweathermap.org/data/2.5/weather?q=moscu&units=metric&appid=${API_KEY}`,
      setClimaAlemania
    )
  }, [])

  // console.log(isMobile)
  return (
    <>
      {climaBogota !== null && climaAlemania !== null && climaParis !== null ? (
        <>
          <div className={classes.btnBacancito}>
            <div className={classes.btnBacancito_imagen}>
              <img
                src={`http://openweathermap.org/img/wn/${climaBogota?.list[0].weather[0].icon}@2x.png`}
                alt="icon"
              />
              <div className={classes.btnBogota}>
                <LocationOnIcon />
                Bogota
              </div>
            </div>
            <div className={classes.btnBacancito_temp}>
              <p className={classes.btnBacancito_temp_text_1}>
                {Math.round(climaBogota?.list[0].main.temp)}
                <strong className={classes.btnBacancito_temp_text}>??c</strong>
              </p>
            </div>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div>
                  <img
                    className={classes.image_header}
                    src="https://cdn.pixabay.com/photo/2019/09/07/02/25/city-4457801_1280.jpg"
                    alt="Bogot??"
                    width="100%"
                    height="350vh"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <Title title="3 Days" nextTitle="Forecast" size={25} />
                <div className={classes.containerTempCard}>
                  {list && !!list.length && (
                    <>
                      <TempCard
                        color="#9366E6"
                        colorText="white"
                        title={list[0]?.dt_txt}
                        subtitle={list[0]?.weather[0].main}
                        temp={`${Math.round(
                          list[0]?.main.temp_min
                        )}??/${Math.round(list[0]?.main.temp_max)}??`}
                        icon={list[0]?.weather[0].icon}
                      />
                      <TempCard
                        color="#BFD8E5"
                        colorText="black"
                        title={list[12]?.dt_txt}
                        subtitle={list[12]?.weather[0].main}
                        temp={`${Math.round(
                          list[12]?.main.temp_min
                        )}??/${Math.round(list[12]?.main.temp_max)}?? `}
                        icon={list[12]?.weather[0].icon}
                      />
                      <TempCard
                        color="#BFD8E5"
                        colorText="black"
                        title={list[20]?.dt_txt}
                        subtitle={list[20]?.weather[0].main}
                        temp={`${Math.round(
                          list[20]?.main.temp_min
                        )}??/${Math.round(list[20]?.main.temp_max)}??`}
                        icon={list[20]?.weather[0].icon}
                      />
                    </>
                  )}
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
                    descrip={climaParis?.weather[0].description}
                  />
                  <OtherTemps
                    title={climaAlemania?.name}
                    subtitle={climaAlemania?.sys.country}
                    temp={Math.round(climaAlemania?.main.temp)}
                    humadity={Math.round(climaAlemania?.main.humidity)}
                    wind={climaAlemania?.wind.speed}
                    descrip={climaAlemania?.weather[0].description}
                  />
                </div>
                <Paper className={classes.AddLocation}>
                  <button className={classes.btnLocation}>add location</button>
                  <div style={{ marginBottom: '-40px' }}>
                    <LocationSvg />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </>
  )
}

export default HomePage
