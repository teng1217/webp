
const changeText = (event) =>{
    var c = 0;
    c++
    console.log(event.target)
    if(c/2)
        event.target.innerText = "已說讚"
    else{
    event.target.innerText = "收回讚"
    }
}

document.addEventListener("click", function(e){
    if (e.target.id == "btn")
        changeText(e)
});

const Button = (num) =>{
    var output = [];
    for (let i = 1; i < num+1; ++i)
        output.push(<button id = 'btn'>按讚</button>)
    return output;
}

export default Button;