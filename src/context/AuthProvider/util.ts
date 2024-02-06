import { Api } from '@/services/Api'
import { IUser } from './types'

export function setUserLocalStorage(user: IUser) {
    localStorage.setItem('usr', JSON.stringify(user))
} 

export function getUserLocalStorage() {
    const userStr = localStorage.getItem('usr')

    if (!userStr) return null

    const user = JSON.parse(userStr)

    return user ?? null
} 

export const LoginRequest = async (email: string, password: string) => {
    try {
        const requestLogin = await Api.post('login', { email, password })

        return requestLogin.data
    } catch (err) {

        console.error('LOGIN ERROR:util.ts', err)
        return null
    }
}