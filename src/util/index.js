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
