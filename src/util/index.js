import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import $ from 'jquery'

export const MyFecthApi = (url, set) => {
  $.ajax({
    url,
    success(respuesta) {
      return set(respuesta)
    },
    error() {
      console.log('No se ha podido obtener la información')
    },
  })
}

export const isMobile = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return matches
}
