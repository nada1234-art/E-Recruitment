import http from "./interceptor/AxiosInterceptor.js";
export default class UserService{
 GetAll(){
  return http.get("/user")

 }

 Update(id,data){
  return http.patch("/user/"+id,data)
 }
 remove(id){
  return http.delete("/user/" +id)
 }
 FindById(id){
  return http.get("/user/"+id)
 }
 create(data)
 { console.log("it is the service  : :::::",data)
     return http.post("/user/upload", data)
 }
 sendMail(data)
 {
    console.log("hello", data)
    return http.post("user/mail", data)
 }

 reset(data)
 {
    console.log("hello", data)
    return http.post("user/resetPassword", data)
 }
}