import React from 'react'
import {useState}from "react"

function Field(props) { 
    const [move,setMove] = useState([  
    {filed:document.getElementsByClassName("one"),clicked:false,id:1,itemMove:""},
    {filed:document.getElementsByClassName("two"),clicked:false,id:2,img:'',itemMove:""},
    {filed:document.getElementsByClassName("three"),clicked:false,id:3,img:'',itemMove:""},
    {filed:document.getElementsByClassName("four"),clicked:false,id:4,img:'',itemMove:""},
    {filed:document.getElementsByClassName("five"),clicked:false,id:5,img:'',itemMove:""},
    {filed:document.getElementsByClassName("six"),clicked:false,id:6,img:'',itemMove:""},
    {filed:document.getElementsByClassName("seven"),clicked:false,id:7,img:'',itemMove:""},
    {filed:document.getElementsByClassName("eight"),clicked:false,id:8,img:'',itemMove:""},
    {filed:document.getElementsByClassName("nine"),clicked:false,id:9,img:'',itemMove:""}])
const handleClick = (e)=>{
    let id = e.target.id;
    move.forEach(item=>{
        if(item.id == id){
            if(item.clicked === false && item.itemMove != "0"){
                setMove([
                    ...move,
                   item.clicked = true,
                   item.img = `<img src="https://img.icons8.com/ios-filled/50/000000/x.png"/>`,
                   item.itemMove = "X"
                ])
            }
        }
    })
    let moveO = move.filter(item=>{
        if(item.img === "" && item.itemMove != "X"){
            return true;
        }
    })
    let random = Math.floor(Math.random()*moveO.length);
    moveO.forEach(item=>{
        if(item.itemMove != "X" && item.clicked == false && item.img === ""){
            setTimeout(()=>{
                setMove([
                    ...move,
                    moveO[random].clicked = true,
                    moveO[random].img = `<img src="https://img.icons8.com/ios-filled/50/000000/o.png"/>`,
                    moveO[random].itemMove = "O"
                ])
            },1000)
        }
    })
}
const decideWinner=()=>{
if(move[0].itemMove === "X"&&move[1].itemMove==="X"&& move[2].itemMove==="X" ||move[3].itemMove === "X"&&move[4].itemMove==="X"&& move[5].itemMove==="X" || move[6].itemMove === "X"&&move[7].itemMove==="X"&& move[8].itemMove==="X" ){
    document.getElementsByClassName("winner")[0].innerHTML=`<h1>The winner is X!</h2>`
}
if(move[0].itemMove === "X"&&move[3].itemMove==="X"&& move[6].itemMove==="X" ||move[1].itemMove === "X"&&move[4].itemMove==="X"&& move[7].itemMove==="X" || move[2].itemMove === "X"&&move[5].itemMove==="X"&& move[8].itemMove==="X" ){
    document.getElementsByClassName("winner")[0].innerHTML=`<h1>The winner is X!</h2>`}
if(move[0].itemMove === "X"&&move[4].itemMove==="X"&& move[8].itemMove==="X" ||move[2].itemMove === "X"&&move[4].itemMove==="X"&& move[6].itemMove==="X"){
    document.getElementsByClassName("winner")[0].innerHTML=`<h1>The winner is X!</h2>`}
/*
X pobednik
*/
if(move[0].itemMove === "O"&&move[1].itemMove==="O"&& move[2].itemMove==="O" ||move[3].itemMove === "O"&&move[4].itemMove==="O"&& move[5].itemMove==="O" || move[6].itemMove === "O"&&move[7].itemMove==="O"&& move[8].itemMove==="O" ){
 document.getElementsByClassName("winner")[0].innerHTML=`<h1>The winner is O!</h2>`
}
else if(move[0].itemMove === "O"&&move[3].itemMove==="O"&& move[6].itemMove==="O" ||move[1].itemMove === "O"&&move[4].itemMove==="O"&& move[7].itemMove==="O" || move[3].itemMove === "O"&&move[5].itemMove==="O"&& move[8].itemMove==="O" ){
    document.getElementsByClassName("winner")[0].innerHTML=`<h1>The winner is O!</h2>`
}
if(move[0].itemMove === "O" && move[4].itemMove==="O" &&  move[8].itemMove==="O" || move[2].itemMove === "O" && move[4].itemMove==="O" && move[6].itemMove==="O"){
    document.getElementsByClassName("winner")[0].innerHTML=`<h1>The winner is O!</h2>`
}
}
const getImg = ()=>{
    let divs =  document.getElementsByClassName("box");
    for(let i = 0;i<divs.length;i++){
        divs[i].innerHTML = move[i].img;
        if(divs[i].innerHTML==="undefined"){
            divs[i].innerHTML="";
        }
    }
}

    return (
        <div className="board">
        <div className="field">
            <div className="box one" id="1" onClick={handleClick}></div>
            <div className="box two" id="2" onClick={handleClick}></div>
            <div className="box three" id="3" onClick={handleClick}></div>
        </div>
        <div className="field">
            <div className="box four" id="4" onClick={handleClick}></div>
            <div className="box five" id="5" onClick={handleClick}></div>
            <div className="box six" id="6" onClick={handleClick}></div>
        </div>
            <div className="field">
            <div className="box seven" id="7" onClick={handleClick}></div>
            <div className="box eight" id="8" onClick={handleClick}></div>
            <div className="box nine" id="9" onClick={handleClick}></div>
        </div>
        {getImg()}
        {decideWinner()}
        <div className="winner">
        </div>
        </div>
    )
}

export default Field