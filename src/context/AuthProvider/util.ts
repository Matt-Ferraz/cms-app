import { Api } from '@/services/Api'

export async function LoginRequest (email: string, password: string) {
    try {
        const requestLogin = await Api.post('login', { email, password })

        return requestLogin.data
    } catch (err) {

        console.error('LOGIN ERROR:util.ts', err)
        return null
    }
}