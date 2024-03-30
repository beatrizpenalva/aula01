import * as Firestore from 'firebase/firestore'
import firebase from './firebase'

jest.mock('firebase/firestore')

const accessToken = 'IAmAnAccessToken'
const error = 'ImAnError'
const refreshToken = 'IAmARefreshToken'

describe('firebase', () => {
    describe('getAccessToken', () => {
        let where
        let get

        beforeEach(() => {
            get = jest.fn(() => accessToken)
            where = jest.fn(() => ({ get }))

            Firestore.collection = jest.fn()
            Firestore.getDocs = jest.fn(() => ({ where }))
        })

        test('calls api with properly params and return access token', async () => {
            const result = await firebase.getAccessToken()

            expect(Firestore.collection).toHaveBeenCalledWith('tokens')
            expect(Firestore.getDocs).toHaveBeenCalledWith(Firestore.collection('tokens'))
            expect(where).toHaveBeenCalledWith('accessToken')
            expect(get).toHaveBeenCalled()
            expect(result).toEqual({ accessToken })
        })

        test('return error when request fails', async () => {
            Firestore.getDocs.mockRejectedValueOnce(error)

            const result = await firebase.getAccessToken()

            expect(Firestore.collection).toHaveBeenCalledWith('tokens')
            expect(Firestore.getDocs).toHaveBeenCalledWith(Firestore.collection('tokens'))

            expect(where).not.toHaveBeenCalled()
            expect(get).not.toHaveBeenCalled()

            expect(result).toEqual(error)
        })
    })

    describe('getRefreshToken', () => {
        let where
        let get

        beforeEach(() => {
            get = jest.fn(() => refreshToken)
            where = jest.fn(() => ({ get }))

            Firestore.collection = jest.fn()
            Firestore.getDocs = jest.fn(() => ({ where }))
        })

        test('calls api with properly params and return refresh token', async () => {
            const result = await firebase.getRefreshToken()

            expect(Firestore.collection).toHaveBeenCalledWith('tokens')
            expect(Firestore.getDocs).toHaveBeenCalledWith(Firestore.collection('tokens'))
            expect(where).toHaveBeenCalledWith('refreshToken')
            expect(get).toHaveBeenCalled()
            expect(result).toEqual({ refreshToken })
        })

        test('return error when request fails', async () => {
            Firestore.getDocs.mockRejectedValueOnce(error)

            const result = await firebase.getRefreshToken()

            expect(Firestore.collection).toHaveBeenCalledWith('tokens')
            expect(Firestore.getDocs).toHaveBeenCalledWith(Firestore.collection('tokens'))

            expect(where).not.toHaveBeenCalled()
            expect(get).not.toHaveBeenCalled()

            expect(result).toEqual(error)
        })
    })

    describe('saveTokens', () => {
        beforeEach(() => {
            Firestore.collection = jest.fn()
            Firestore.addDoc = jest.fn()
        })

        test('calls save tokens api with properly params and return request', async () => {
            const result = await firebase.saveTokens({ accessToken, refreshToken })

            expect(Firestore.addDoc).toHaveBeenCalledWith(Firestore.collection('tokens'), {
                accessToken,
                refreshToken,
            })

            expect(result).not.toEqual(error)
        })

        test('return error when request fails', async () => {
            Firestore.addDoc.mockRejectedValueOnce(error)

            const result = await firebase.saveTokens({ accessToken, refreshToken })
            expect(Firestore.addDoc).toHaveBeenCalledWith(Firestore.collection('tokens'), {
                accessToken,
                refreshToken,
            })
            expect(result).toEqual(error)
        })
    })
})

