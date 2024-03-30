import firebase from '../firebase'
import service from '../service'
import { errorHandler } from './helpers'

jest.mock('../firebase')
jest.mock('../service')

const accessToken = 'NewAccessToken'
const refreshToken = 'NewRefreshToken'
const mockAccessToken = 'IAmAnAccessToken'
const mockRefreshToken = 'IAmARefreshToken'

const mockError = {
    response: {
        error: 'IAmACommomError'
    }
}

const mockInvalidGrantError = {
    response: {
        error: 'invalid_grant'
    }
}

describe('api helpers', () => {
    describe('errorHandler', () => {
        test('returns error when error is not an invalid grant error', async () => {
            const result = await errorHandler(mockError)
            expect(result).toEqual(mockError)
        })

        test('make a request to create a new refresh token when error is invalid grant error', async () => {
            firebase.getRefreshToken.mockImplementation(() => ({
                accessToken: mockAccessToken,
                refreshToken: mockRefreshToken,
            }))
            service.createNewRefreshToken.mockImplementation(() => ({ accessToken, refreshToken }))
            firebase.saveTokens.mockResolvedValue('Sucesso')

            const result = await errorHandler(mockInvalidGrantError)

            expect(firebase.getRefreshToken).toHaveBeenCalled()
            expect(service.createNewRefreshToken).toHaveBeenCalledWith({ lastRefreshToken: mockRefreshToken })
            expect(firebase.saveTokens).toHaveBeenCalledWith({ accessToken, refreshToken })
            expect(result).toEqual('Sucesso')
        })

        test('return an error when getRefreshToken request fails', async () => {
            firebase.getRefreshToken.mockRejectedValue(mockError)

            const result = await errorHandler(mockInvalidGrantError)

            expect(firebase.getRefreshToken).toHaveBeenCalled()
            expect(service.createNewRefreshToken).not.toHaveBeenCalled()
            expect(firebase.saveTokens).not.toHaveBeenCalled()
            expect(result).toEqual(mockError)
        })

        test('return an error when createNewFreshToken request fails', async () => {
            firebase.getRefreshToken.mockImplementation(() => ({
                accessToken: mockAccessToken,
                refreshToken: mockRefreshToken,
            }))
            service.createNewRefreshToken.mockRejectedValue(mockError)

            const result = await errorHandler(mockInvalidGrantError)

            expect(firebase.getRefreshToken).toHaveBeenCalled()
            expect(service.createNewRefreshToken).toHaveBeenCalledWith({ lastRefreshToken: mockRefreshToken })
            expect(firebase.saveTokens).not.toHaveBeenCalled()
            expect(result).toEqual(mockError)
        })

        test('return an error when saveTokens request fails', async () => {
            firebase.getRefreshToken.mockImplementation(() => ({
                accessToken: mockAccessToken,
                refreshToken: mockRefreshToken,
            }))
            service.createNewRefreshToken.mockImplementation(() => ({ accessToken, refreshToken }))
            firebase.saveTokens.mockRejectedValue(mockError)

            const result = await errorHandler(mockInvalidGrantError)

            expect(firebase.getRefreshToken).toHaveBeenCalled()
            expect(service.createNewRefreshToken).toHaveBeenCalledWith({ lastRefreshToken: mockRefreshToken })
            expect(firebase.saveTokens).toHaveBeenCalledWith({ accessToken, refreshToken })
            expect(result).toEqual(mockError)
        })
    })
})