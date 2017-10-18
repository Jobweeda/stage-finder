import API from '../../api'
import { history } from '../../store'

export const ARTIST_UPDATED = 'ARTIST_UPDATED'

const api = new API()

export default (artistId, artistData) => {
  return (dispatch) => {

    const backend = api.service('artists')

    api.authenticate()
      .then(() => {
        backend.patch(artistId, artistData)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: ARTIST_UPDATED,
                  payload: result
                })
                history.push(`/artists/${artistId}`)
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
