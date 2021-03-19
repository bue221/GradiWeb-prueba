import React from 'react'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import useStyles from './style'

const OtherTemps = () => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.card} elevation={3}>
        <div className={classes.card_countrie}>
          <div className={classes.card_image}>
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="icon" />
          </div>
          <div className={classes.card_temp}>
            <div className={classes.temp_numbre}>
              <h2 className={classes.temp_numbre_title}>29</h2>
              <p className={classes.temp_numbre_subtitle}>°c</p>
            </div>

            <Divider orientation="vertical" flexItem />

            <div>
              <p>
                <strong>Paris</strong>
                <br />
                pais
              </p>
            </div>
          </div>
        </div>
        <div className={classes.card_info}>
          <p>Huamdity</p>
          <p>Huamdity</p>
          <p>Huamdity</p>
        </div>
      </Paper>
    </>
  )
}

export default OtherTemps
