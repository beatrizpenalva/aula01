import { addDoc, collection, getDocs } from 'firebase/firestore'

export const getAccessToken = async () => {
    try {
        const tokens = await getDocs(collection('tokens'))

        return {
            accessToken: tokens.where('accessToken').get(),
        }
    } catch (error) {
        return error
    }
}

export const getRefreshToken = async () => {
    try {
        const tokens = await getDocs(collection('tokens'))

        return {
            refreshToken: tokens.where('refreshToken').get(),
        }
    } catch (error) {
        return error
    }
}

export const saveTokens = async ({ accessToken, refreshToken }) => {
    try {
        await addDoc(collection('tokens'), {
            accessToken,
            refreshToken,
        })
    } catch (error) {
        return error
    }
}