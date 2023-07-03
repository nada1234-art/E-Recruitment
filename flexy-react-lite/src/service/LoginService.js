import http from "./interceptor/AxiosInterceptorJSON"
export default class LoginService{
    create(data)
    { console.log("it is the auth  service",data)
        return http.post("/auth/signin", data)
    }
}