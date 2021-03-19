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
            src="https://avatars.githubusercontent.com/u/52434296?s=460&u=590ab73c9e5f84051484a78096ad3c8110ac5539&v=4"
          />
          <MyAvatar
            alt="Remy Sharp"
            src="https://lh3.googleusercontent.com/ogw/ADGmqu9i_4TbMRT__bC5B2JgqBn6sMe6dsUGVl1s3WfbMsE=s64-c-mo"
          />
          <MyAvatar
            alt="Travis Howard"
            src="https://avatars.githubusercontent.com/u/52434296?s=460&u=590ab73c9e5f84051484a78096ad3c8110ac5539&v=4"
          />
        </AvatarGroup>
      </div>
    </>
  )
}

export default Reviews
