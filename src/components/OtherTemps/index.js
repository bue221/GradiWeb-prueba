import React from 'react'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import useStyles from './style'

const OtherTemps = ({ title, subtitle, humadity, temp, wind }) => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.card} elevation={3}>
        <div className={classes.card_countrie}>
          <div className={classes.card_image}>
            <img
              width="100%"
              src="http://openweathermap.org/img/wn/10n@2x.png"
              alt="icon"
            />
          </div>
          <div className={classes.card_temp}>
            <div className={classes.temp_numbre}>
              <h2 className={classes.temp_numbre_title}>{temp}</h2>
              <p className={classes.temp_numbre_subtitle}>°c</p>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <p>
                <strong>{title}</strong>
                <br />
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card_info}>
          <p>Humidity: {humadity}%</p>
          <p> Nor </p>
          <p>{wind} km/h</p>
        </div>
      </Paper>
    </>
  )
}

export default OtherTemps
