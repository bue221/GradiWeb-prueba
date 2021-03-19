import React from 'react'

import { makeStyles, styled } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

const MyAvatar = styled(Avatar)({
  borderRadius: '1rem',
})

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '1rem',
  },
  avatar: {
    borderRadius: '1rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
  },
}))

const Reviews = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <p className={classes.text}> &#10036; Top Reviews</p>
        <AvatarGroup max={5} className={classes.avatar}>
          <MyAvatar
            alt="Remy Sharp"
            src="https://lh3.googleusercontent.com/ogw/ADGmqu9i_4TbMRT__bC5B2JgqBn6sMe6dsUGVl1s3WfbMsE=s64-c-mo"
          />
          <MyAvatar
            alt="Travis Howard"
            src="https://lh3.google.com/u/2/ogw/ADGmqu8iZSqnOOLSCd5US5KjWdaEgCuHvZTBn7-TpPyJ=s64-c-mo"
          />
          <MyAvatar
            alt="Travis Howard"
            src="https://lh3.google.com/u/2/ogw/ADGmqu8iZSqnOOLSCd5US5KjWdaEgCuHvZTBn7-TpPyJ=s64-c-mo"
          />
          <MyAvatar
            alt="Travis Howard"
            src="https://lh3.google.com/u/2/ogw/ADGmqu8iZSqnOOLSCd5US5KjWdaEgCuHvZTBn7-TpPyJ=s64-c-mo"
          />
        </AvatarGroup>
      </div>
    </>
  )
}

export default Reviews
