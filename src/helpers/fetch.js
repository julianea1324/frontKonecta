const baseUrl = process.env.REACT_APP_API_URL;

export const fetchtoken = (endpoint,data,method='GET') =>{

    const url = `${baseUrl}/${endpoint}/`;

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}
export const fetchContoken = (endpoint,data,method='GET') =>{

const url = `${baseUrl}/${endpoint}/`;
const token = localStorage.getItem('token')
    if(method === 'GET'){
        return fetch(url, {
            method,            
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        });
    }else{
        return fetch(url,{
            method,
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-type':'application/json',
            },
            
            body:JSON.stringify(data)
        })
    }
}
