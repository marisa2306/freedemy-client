
import axios from 'axios'



export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://freedemy-server.herokuapp.com/api',
            withCredentials: true
        })
    }

    signup = credentials => this.apiHandler.post('/signup', credentials)
    login = credentials => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
}