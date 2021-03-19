import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: (props) => props.size,
    marginBottom: '2rem',
  },
}))

export default useStyles
