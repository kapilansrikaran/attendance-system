import axios from 'axios';

const AuthService = {
    login: async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            throw new Error('Invalid username or password');
        }
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

export default AuthService;
