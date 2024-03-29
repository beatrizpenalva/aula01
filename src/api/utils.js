import api from './api'
import { getRefreshToken, saveTokens } from './firebase'

export const errorHandler = async error => {
    const isInvalidGrantError = error.response.error === 'invalid_grant'

    if (isInvalidGrantError) {
        try {
            const { refreshToken: lastRefreshToken } = await getRefreshToken()
            const { accessToken, refreshToken } = await api.createNewRefreshToken({ lastRefreshToken })
            await saveTokens({ accessToken, refreshToken })
        } catch (err) {
            return err
        }
    } else {
        return error
    }
}
