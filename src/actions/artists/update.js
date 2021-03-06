import API from '../../api'
import { history } from '../../store'

export const ARTIST_UPDATED = 'ARTIST_UPDATED'
const PROFILE_UPDATE = 'PROFILE_UPDATE'

const api = new API()

export default (artistId, artistData) => {
  return (dispatch) => {

    const backend = api.service('artists')

    api.authenticate()
      .then(() => {
        backend.patch(artistId, { type: PROFILE_UPDATE, payload: artistData})
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
