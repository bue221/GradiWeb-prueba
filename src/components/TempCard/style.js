import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '1rem',
    borderRadius: '1rem',
    width: '250px',
    height: '80px',
    gap: '1rem',
  },
  tempCard: {
    background: (props) => props.color,
    borderRadius: '1rem',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    color: (props) => props.colorText,
    fontWeight: 'bold',
  },
}))

export default useStyles
