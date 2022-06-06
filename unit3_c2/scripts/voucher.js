// let show=document.getElementById("wallet_balance");

// let wallet=+(show.textContent);
// let total=+amount+wallet;
// show.innerText=+amount+wallet;
// localStorage.getItem(user.amount);

const url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

// let vouchers_div=document.getElementById("voucher_list");
async function voucher(){
    
    // const url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

    let res= await fetch(url);
    let data=await res.json();
    append(data)
    console.log("data:",data)
    
}
voucher()

function append(data){
    let container=document.getElementById("voucher_list");
    container.innerHTML=null;
    let h3=document.createElement("h3");
    h3.innerText=vouchers.name;
    let h2=document.createElement("h2");
    h2.innerText=vouchers.price;
    let img=document.createElement("img");
    img.src=vouchers.image;

    let btn=document.createElement("button");
    btn.innerText=Buy
    btn.class=buy_voucher

    container.append(img,h3,h2,btn)


}