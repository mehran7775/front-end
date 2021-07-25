import axios from 'axios'

const apiClient=axios.create({
    baseURL:'/',
    // baseURL:'http://damirco.com',
    withCredentials:false,
    headers:{
        'Accept':'application/json',
    //    'Content-Type':'applications/json'
    }
}) 

export default{
    // apiClient,
    get_mainCategory(){
        return apiClient.get('mainCategories')
    },
    select_default_msg(payload){
        let f=new FormData()
        f.set('note',payload.id)
        // f.set('csrf_token',payload.csrf)
        return apiClient.post('userpanel/msg',f,{
            headers:{
                'X-CSRFToken':payload.csrf
            }
        })
    },
    send_email_to_number(payload){
        // console.log(payload)
    //    return payload/0
        return apiClient.post('users-api/get-code',{
            payload
        })
    }
}