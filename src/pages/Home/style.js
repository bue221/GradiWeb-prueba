import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2.3em',
  },
  containerTempCard: {
    display: 'grid',
    placeItems: 'center',
    placeContent: 'center',
    marginTop: '3rem',
    gap: '1rem',
  },
  containerPlaceCard: {
    display: 'grid',
    placeItems: 'center',
    placeContent: 'center',
    marginTop: '3rem',
    gap: '1rem',
  },
  containerReviews: {
    display: 'grid',
    placeItems: 'center',
    placeContent: 'center',
    marginTop: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image_header: {
    borderRadius: '1rem',
  },
  otherCountries: {
    position: 'relative',
    marginTop: '-11pc',
  },
  btnBacancito: {
    position: 'absolute',
    top: '150px',
    boxShadow: '0px 10px 10px black',
  },
  btnBacancito_imagen: {
    padding: '1rem',
    background: '#3b0d85',
    height: '60px',
    width: '60px',
    position: 'relative',
    marginBottom: '-1rem',
    display: 'grid',
    placeContent: 'center',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    '&:before': {
      border: '25px solid #3b0d85 ',
      content: "''",
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      position: 'absolute',
      top: '-48px',
      left: 'calc(-40%)',
    },
  },
  btnBacancito_temp: {
    padding: '1rem',
    background: '#8a41ff ',
    height: '60px',
    width: '60px',
    color: 'white',
    display: 'grid',
    placeContent: 'center',
    fontSize: '30px',
    borderBottomRightRadius: '1rem',
    '&:before': {
      border: '25px solid #8a41ff ',
      content: "''",
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      position: 'absolute',
      bottom: '-48px',
      left: 'calc(-40%)',
    },
  },
  card: {
    maxWidth: '400px',
    display: 'flex',
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
