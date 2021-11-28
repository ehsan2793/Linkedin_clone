import { auth, provider } from '../../firebase'
import { SET_USER } from './actionType'

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})
export function signInAPI() {
    return (dispatch) => {
        auth
            .signInWithPopup(provider)
            .then((res) => {
                console.log(res);
                dispatch(setUser(res.user))
            })
            .catch((err) => alert(err.message))
    }
}
