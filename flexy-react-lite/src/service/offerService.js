import http from "./interceptor/AxiosInterceptorJSON";
export default class OfferService{
 GetAll(){
  return http.get("/offer")

 }
 create(data)
 { console.log("it is the service  :",data)
     return http.post("/offer", data)
 }
 update(id,data){
    console.log("welcome to update offer",data)
  return http.patch("/offer/"+id,data)
  
 }
 remove(id){
  return http.delete("/offer/" +id)
  
 }
 FindById(id){
   console.log("bonjour",id)
    return http.get("/offer/"+id)
   }
}