import { useState } from 'react'
import api from '../api'

const refreshToken = localStorage.getItem('refreshToken')

const useSessionToken = () => {
    const [isInitialError, setIsInitialError] = useState(false)
    const [isInitialLoading, setIsInitialLoading] = useState(false)

    const getSessionToken = async () => {
        setIsInitialLoading(true)
        try {
            const { access_token, refresh_token } = api.getSessionToken()
            localStorage.setItem('acessToken', access_token)
            localStorage.setItem('refreshToken', refresh_token)
        } catch (error) {
            const isInvalidGrantError = error.response.error === 'invalid_grant'

            if (!isInvalidGrantError) {
                setIsInitialError(true)
                return
            } else {
                const { access_token, refresh_token } = await api.getNewRefreshToken({ refreshToken })
                localStorage.setItem('acessToken', access_token)
                localStorage.setItem('refreshToken', refresh_token)
            }
        } finally {
            setIsInitialLoading(false)
        }
    }

    return {
        getSessionToken,
        isInitialError,
        isInitialLoading,
    }
}

export default useSessionToken