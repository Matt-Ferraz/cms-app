import { Api } from '@/services/Api'

export async function LoginRequest (email: string, password: string) {
    try {
        const response = await Api.post('login', { email, password })
        console.log(response)

        return response.data
    } catch (err) {

        console.error('LOGIN ERROR:util.ts', err)
        return null
    }
}