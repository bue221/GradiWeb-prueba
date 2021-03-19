import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2.3em',
  },
  containerTempCard: {
    display: 'grid',
    // placeItems: 'center',
    // placeContent: 'center',
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
    gap: '2rem',
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
    marginTop: '-12pc',
  },
  btnBacancito: {
    position: 'absolute',
    top: '120px',
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
  containerOtherTemps: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
  },
}))

export default useStyles
