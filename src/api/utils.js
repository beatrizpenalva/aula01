import { createNewRefreshToken } from './api'
import { getRefreshToken, saveTokens } from './firebase'

const errorHandler = async error => {
    const isInvalidGrantError = error.response.error === 'invalid_grant'

    if (isInvalidGrantError) {
        try {
            const { refreshToken: lastRefreshToken } = await getRefreshToken()
            const { accessToken, refreshToken } = await createNewRefreshToken({ lastRefreshToken })
            await saveTokens({ accessToken, refreshToken })
        } catch (err) {
            return err
        }
    } else {
        return error
    }
}

export {
    errorHandler,
}