import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    width: '100%',
    '&:hover': {
      opacity: '0.7',
      transitionDuration: '1s',
    },
  },
  cardTitle: {
    position: 'absolute',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    padding: '.5rem',
  },
  cardImage: {
    objectFit: 'cover',
    borderRadius: '3rem',
    width: '100%',
    height: (props) => props.height,
  },
}))

export default useStyles
