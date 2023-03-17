import'./L_fron.css';
import {React, useState} from 'react';
// import { useId } from 'react';
import tabV2 from './tabV2';




// const form=document.getElementById('form');
// const username=document.getElementById('username');
//  const password=document.getElementById('password');

const L_fron =(porps)=>{
    const [title,settitle]= useState('')
const [amount,setamount] =useState('')
const inputtitle =(event)=>{
settitle(event.target.value)

}
const inputamount=(event)=>{
setamount(event.target.value)
}
const sevedata=(event)=>{
event.preventDefault();
const itemData ={
title:title,amount:amount
}
console.log(itemData)
settitle('')
setamount('')
if((itemData.title===("warakorn") && itemData.amount===("valentile"))
|| (itemData.title===("warakorn1") && itemData.amount===("va"))
||(itemData.title===("Admin") && itemData.amount===("admin!@#")))

{tabV2()}


else{console.log("no")}

}
function tabV2(){ 
  window.location.href="http://127.0.0.1:1880/ui/#!/0?socketid=ZD5qoW8phoHKUaheAAAc"
} 
    return(
        
        <div class="container" > 
            <form id="form" class="form" onSubmit={sevedata} >
                <h2>Log In</h2>
                    <div class="form-control">
                        <label for="username">Username</label>
                        <input type="text" name="" id="username" placeholder="Enter Your Username" 
                        onChange={inputtitle} value={title} ></input>
                        <small>error message</small>
                    </div>
                    <div class="form-control">
                        <label for="password">รหัสผ่าน</label>
                        <input type="password" name="" id="password" placeholder="Enter Your Password"
                        onChange={inputamount} value={amount} ></input>
                        <small>error message</small>
                    </div>
                    <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    );
};

    export default L_fron;
