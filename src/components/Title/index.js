import React from 'react'

import { Typography } from '@material-ui/core'
import useStyles from './style'

const Title = ({ title, nextTitle, ...props }) => {
  const classes = useStyles(props)
  return (
    <>
      <Typography variant="body" gutterBottom className={classes.title}>
        <strong>{title} </strong> {nextTitle}
      </Typography>
    </>
  )
}

export default Title
