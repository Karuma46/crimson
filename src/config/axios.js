import axios from 'axios'

class Call{

    baseUrl = process.env.REACT_APP_API_URL
    
    constructor(endpoint){
        this.endpoint = `${this.baseUrl}${endpoint}`
    }
    
    getHeaders = () => {
        var tokens = localStorage.getItem('user')
        if (tokens){
            tokens = JSON.parse(tokens)
            var headers = {
                Authorization : `${tokens.access}`,
            }
        } else {
            headers = {}
        }
        return headers
    } 

    get = async (params) =>{
        return await axios({
            method: 'get',
            url: this.endpoint+`${params ? params : ''}`,
            // headers: this.getHeaders()
        })
    }

    post = async (params) =>{
        return await axios({
            method: 'post',
            url: this.endpoint,
            data: params,
            headers: this.getHeaders()
        })
    }

    put = async (id, params) =>{    
        return await axios({
            method: 'put',
            url: this.endpoint+''+id,
            data: params,
            headers: this.getHeaders()
        })
    }   

    delete = async (params) =>{
        return await axios({
            method: 'delete',
            url: this.endpoint+`${params ? params : ''}`,
            headers: this.getHeaders()
        })
    }
}

export default Call