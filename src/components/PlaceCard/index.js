import React from 'react'

import LocationOnIcon from '@material-ui/icons/LocationOn'

import useStyles from './style'

const PlaceCard = ({ title, subtitle, img, ...props }) => {
  const classes = useStyles(props)
  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardTitle}>
          <LocationOnIcon />
          <div>
            <p>
              {title}
              <br />
              {subtitle}
            </p>
          </div>
        </div>
        <img className={classes.cardImage} src={img} alt={title} />
      </div>
    </>
  )
}

export default PlaceCard
