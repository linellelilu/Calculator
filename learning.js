// sayHappy = () => {
//     console.log("Happy New Year!")
//     let happy = document.createElement('h1')
//     happy.innerText = 'Happpyyyyy Year'
//     document.body.appendChild(happy)
// }
// addRow = () => {
//     sayHappy();
//     newAddRow('Phat', 25);
//     newAddRow('jordan',20);
//     newAddRow('linlinln',100)
// }

// newAddRow = (name, age) => {
//     console.log(name,age)
//     let row = document.createElement('tr')
//     let data1 = document.createElement('td')
//     data1.innerText = name
//     let data2 = document.createElement('td')
//     data2.innerText = age
//     row.appendChild(data1)
//     row.appendChild(data2)
//     document.body.appendChild(row)
// }


// addInputName = () => {
//     let inputValue = document.getElementById('input1').value
//     let enter = document.createElement('tr')
//     let enterName = document.createElement('td')
//     enterName.innerText = inputValue
//     enter.appendChild(enterName)
//     document.body.appendChild(enter)
// }

// addComment = () => {
//     let input1Value = document.getElementById('input1').value 
//     let commentRow = document.createElement ('h1')
//     // let commentData = document.createElement ('td')
//     commentRow.innerText = input1Value
//     // commentRow.appendChild(commentData)

//     // let input2Value = document.getElementById('input2').value
//     // let commentData2 = document.createElement ('td')

//     // commentData2.innerText = input2Value
    
//     // commentRow.appendChild(commentData2)
//     document.getElementById('para').appendChild(commentRow)
//     document.getElementById('input1').value  = ''
//     // document.getElementById('para').appendChild(commentRow2)
// }


// logIn =()=>{
//     document.getElementById('login').style.display = 'none';
//     document.getElementById('logout').style.display = 'block';
// }

// logOut = ()=>{
//     document.getElementById('login').style.display = 'block';
//     document.getElementById('logout').style.display = 'none';
// }


// hideIt =()=>{
//     document.getElementById('hide').style.display = 'none';
//     document.getElementById('para').style.display = 'none';
//     document.getElementById('show').style.display = 'block';


// }
// showIt =()=>{
//     document.getElementById('show').style.display = 'none';
//     document.getElementById('para').style.display = 'block';
//     document.getElementById('hide').style.display = 'block';
// }

// equals =()=> {
//     let input1Value = document.getElementById('input1').value
//     let selectValue = document.getElementById('operation-select').value
//     let input2Value = document.getElementById("input2").value
//     let result;
//     if (selectValue === "+") {
//         result = Number(input1Value) + Number(input2Value)
//     } else if (selectValue === "-") {
//         result = Number(input1Value) - Number(input2Value)
//     } else if (selectValue === "*") {
//         result = Number(input1Value) * Number(input2Value)
//     } else if (selectValue === "/") {
//         result = Number(input1Value) / Number(input2Value)
//     }
//     console.log(result)
//     let printResult = document.getElementById('printResult')
//     printResult.innerText = result
// }

funcArea =()=> {
    let lengthValue = document.getElementById('length').value
    let widthValue = document.getElementById('width').value
    // if (lengthValue > 0 && widthValue > 0) {
    let calculate = Number(lengthValue) * Number(widthValue)
    let printIt = document.createElement('h2')
    printIt.innerText = calculate
    document.body.appendChild(printIt)
    // let areaDiv = document.getElementById('area')
    // areaDiv.style.display = 'none'
    // }
}
    

