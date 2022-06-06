function user(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=am;
}
let userdata=JSON.parse(localStorage.getItem("user")) || []

function submit(){
    
    
     let name=document.getElementById("name").value 
     let email=document.getElementById("email").value 
     let address=document.getElementById("address").value 
     let amount=document.getElementById("amount").value 

   let p1=new user(name,email,address,amount)
 userdata.push(p1);
 console.log("arr:",userdata)

 localStorage.setItem("user",JSON.stringify(userdata));

}