import { useState } from 'react'
import api from '../api'

const useSessionToken = () => {
    const [isInitialError, setIsInitialError] = useState(false)
    const [isInitialLoading, setIsInitialLoading] = useState(false)

    const getSessionToken = async () => {
        setIsInitialLoading(true)
        try {
            const { access_token, refresh_token } = api.getSessionToken()
            localStorage.setItem('acessToken', access_token)
            localStorage.setItem('refreshToke', refresh_token)
        } catch {
            setIsInitialError(true)
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