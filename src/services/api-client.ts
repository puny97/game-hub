import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7305e078cc3744548e608b7f5ac7fb11'
    }
})