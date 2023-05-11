/* */
import axios from 'axios';
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, //BaseURL = url + api do .env
})
//Funcoes feitas antes de request ser enviado or depois das respostas recebida
//Esse é antes do requestVVVVVVV
//Sempre antes de requisitar vai verificar se tem o token de acesso
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN")
    config.headers.Authorization = `Bearer ${token}` //Cabeça da requisição
    return config
})

axiosClient.interceptors.response.use((response) => { //Se não tiver erros, retorna a resposta
    return response
}, (error) => { //caso tenha:
    const { response } = error;
    if (response.status == 401) { //Usuário tentou entrar e não foi autorizado
        localStorage.removeItem("ACCESS_TOKEN")
    }
    throw error;
})

export default axiosClient