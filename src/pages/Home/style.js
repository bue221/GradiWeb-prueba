import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2.3em',
  },
  btnBogota: {
    left: '150px',
    position: 'absolute',
    display: 'flex',
    fontSize: '30px',
    alignItems: 'center',
    fontWeight: '700',
    color: '#ffffff',
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
    objectFit: 'cover',
  },
  otherCountries: {
    position: 'relative',
    marginTop: (isMobile) => (isMobile ? '' : '-10pc'),
  },
  btnBacancito: {
    position: 'absolute',
    top: '120px',
    // boxShadow: '0px 10px 10px black',
  },
  btnBacancito_imagen: {
    padding: '1rem',
    background: '#0F1E71',
    height: '70px',
    width: '70px',
    position: 'relative',
    marginBottom: '-1rem',
    display: 'grid',
    placeContent: 'center',
    borderTopRightRadius: '2rem',
    borderBottomRightRadius: '1rem',
    '&:before': {
      border: '25px solid #0F1E71 ',
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
    background: '#9366E6 ',
    height: '70px',
    width: '70px',
    color: 'white',
    display: 'grid',
    placeContent: 'center',
    fontSize: '30px',
    borderBottomRightRadius: '2rem',
    '&:before': {
      border: '25px solid #9366E6 ',
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
  btnBacancito_temp_text: {
    fontSize: '20px',
    fontWeight: 100,
    display: 'flex',
  },
  btnBacancito_temp_text_1: {
    display: 'flex',
    fontSize: '40px',
  },
  map_header: {
    position: 'relative',
  },
  AddLocation: {
    border: 'dashed 4px #ebebeb',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2em',
  },
  btnLocation: {
    outline: 'none',
    background: '#9366e642',
    marginTop: '2rem',
    opacity: '.9',
    border: 'none',
    padding: '0.5rem 3rem',
    borderRadius: '1rem',
    transitionDuration: '1s',
    color: '#3f00b2',
    '&:hover': {
      background: '#3f00b2',
      color: 'white',
      transitionDuration: '1s',
    },
  },
}))

export default useStyles
