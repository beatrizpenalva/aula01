import service from '../service'
import firebase from '../firebase'

export const errorHandler = async error => {
    const isInvalidGrantError = error?.response?.error === 'invalid_grant'

    if (isInvalidGrantError) {
        try {
            const { refreshToken: lastRefreshToken } = await firebase.getRefreshToken()
            const { accessToken, refreshToken } = await service.createNewRefreshToken({ lastRefreshToken })
            return await firebase.saveTokens({ accessToken, refreshToken })
        } catch (err) {
            return err
        }
    } else {
        console.log(error)
        return error
    }
}
