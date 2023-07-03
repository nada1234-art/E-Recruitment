import http from "./interceptor/AxiosInterceptor.js";
export default class CategoryService{
 GetAll(){
  return http.get("/category")

 }
 create(data)
 { console.log("it is the service  : :::::",data)
     return http.post("/category/upload", data)
 }
 Update(id,data){
    console.log("update",data)
    return http.patch("/category/"+id,data)

 }
 remove(id){
  return http.delete("/category/" +id)
  
 }
 FindById(id){
    return http.get("/category/" +id) 
 }
}