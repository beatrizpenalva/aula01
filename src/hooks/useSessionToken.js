import { useState } from 'react'
import api from '../api'

const useSessionToken = () => {
    const [isInitialError, setIsInitialError] = useState(false)
    const [isInitialLoading, setIsInitialLoading] = useState(false)

    const getSessionToken = async () => {
        setIsInitialLoading(true)
        try {
            const code = await api.getCode()
            console.log(code)
            const token = getSessionToken({ code })
            console.log(token)
            localStorage.setItem('token', token)
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