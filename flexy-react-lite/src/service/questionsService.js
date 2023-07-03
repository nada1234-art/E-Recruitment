import http from "./interceptor/AxiosInterceptor.js";
export default class QuestionsService{
 GetAll(){
  return http.get("/questions")

 }
 Update(id,data){
  return http.patch("/questions/"+id,data)
 }
 remove(id){
  return http.delete("/questions/" +id)
 }
 FindById(id){
  return http.get("/questions/"+id)
 }
 create(data)
 { console.log("it is the service  : :::::",data)
     return http.post("/questions/upload", data)
}
}