import React from 'react'

import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
// import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

import useStyles from './style'

const TempCard = ({ title, subtitle, temp, icon, ...props }) => {
  const classes = useStyles(props)
  const fecha = new Date(title)
  const options = { weekday: 'long' }
  const fechaFormateada = fecha.toLocaleDateString('en-EN', options)
  return (
    <>
      <Paper elevation={3} className={classes.card}>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
            width="50px"
          />
        </div>
        <div className={classes.textCard}>
          <Typography variant="h6" className={classes.titleCard}>
            {fechaFormateada}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {subtitle}
          </Typography>
        </div>
        <div className={classes.tempCard}>{temp}</div>
      </Paper>
    </>
  )
}

export default TempCard
