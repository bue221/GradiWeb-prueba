import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '400px',
    display: 'flex',
    height: '145px',
    flexDirection: 'column',
    background: 'white',
    // padding: '1em',
    borderRadius: '1rem',
    // borderColor: 'black',
    // border: '1px solid',
  },
  card_countrie: {
    display: 'flex',
    alignItems: 'center',
  },
  card_info: {
    color: 'grey',
    padding: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  card_temp: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  card_image: {
    background: '#BFD8E5',
    padding: '0.5em',
    borderRadius: '1rem',
    marginRight: '3rem',
    width: '70px',
  },
  divader: {
    borderLeft: '3px solid grey',
  },
  temp_numbre: {
    display: 'flex',
  },
  temp_numbre_title: {
    fontSize: '40px',
    fontWeight: '500',
    margin: 0,
  },
  temp_numbre_subtitle: {
    color: 'grey',
  },
}))

export default useStyles
