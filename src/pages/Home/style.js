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
    objectFit: 'cover',
  },
  otherCountries: {
    position: 'relative',
    marginTop: '-12pc',
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
  },
  map_header: {
    position: 'relative',
  },
  AddLocation: {
    border: 'dashed 4px #cfc8c8',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2em',
  },
  btnLocation: {
    background: '#9366E6',
  },
}))

export default useStyles
