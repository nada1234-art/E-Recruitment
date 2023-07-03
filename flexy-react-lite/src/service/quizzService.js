import http from "./interceptor/AxiosInterceptor.js";
export default class QuizzService{
 GetAll(){
  return http.get("/quizz")

 }
 Update(id,data){
  return http.patch("/quizz/"+id,data)
 }
 remove(id){
  return http.delete("/quizz/" +id)
 }
 FindById(id){
  return http.get("/quizz/"+id)
 }
 create(data)
 { console.log("it is the service  : :::::",data)
     return http.post("/quizz/upload", data)
}
}