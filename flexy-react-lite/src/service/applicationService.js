import http from "./interceptor/AxiosInterceptor.js";
export default class ApplicationService{
 GetAll(){
  return http.get("/application")

 }
 create(data)
 { console.log("it is the service  :",data)
     return http.post("/application/upload", data)
 }

 update(id,data){
  console.log("welcome to update offer",data)
return http.patch("/application/"+id,data)

}
remove(id){
return http.delete("/application/" +id)

}
FindById(id){
 console.log("bonjour",id)
  return http.get("/application/"+id)
 }
}