const userInput = [];

const del = (index) => {
    console.log(index)
}
const display = () => {
    return document.getElementById("displayList").innerHTML =
        `<ol style="background-color: rgb(28, 170, 28); color: white;">
    ${userInput.map((listItems, index) => {
            return `<li id=${index}>${listItems}  
    <button style="float: right;" type="submit" onclick="${del(index)}">Delete</button>
    <button style="float: right;" type="submit">Update</button></li>`  })}
    </ol>`
}
const todoList = () => {
    userInput1 = document.getElementById("userInput").value
    userInput.unshift(userInput1)
    console.log(userInput)
    display()
}
var colors = ["red", "blue", "purple", "green", "orange"]
const colorMap = () => {
    temp=" "
    colors.map((color) => {
    temp = temp +
      `
      <div style="width: 80px; height: 80px;color:white; text-align:center; background-color: ${color}">${color}</div>
      `;
    });
    document.getElementById("myDiv").innerHTML=temp;
}
const filterBox=()=>{
    let temp=""
    colors.filter((color)=>{
        if(color !== "red")    
        temp=temp +
            `
            <div style="width: 80px; height: 80px;color:white; text-align:center; background-color: ${color}">${color}</div>
            `;
    });
    document.getElementById("myDiv1").innerHTML=temp;
}
const sortBox=()=>{
    let temp=""
    sorted=colors.sort();
    sorted.map((color)=>{ 
        temp = temp +
            `
            <div style="width: 80px; height: 80px;color:white; text-align:center; background-color: ${color}">${color}</div>
            `;
    });
    document.getElementById("myDiv2").innerHTML=temp;
}

const reverseBox=()=>{
    let temp=""
    reverse=colors.reverse();
    reverse.map((color)=>{ 
        temp = temp +
            `
            <div style="width: 80px; height: 80px;color:white; text-align:center; background-color: ${color}">${color}</div>
            `;
    });
    document.getElementById("myDiv3").innerHTML=temp;
}