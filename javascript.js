

// export default class User{
//     constructor(name,age,lname){
//         this.name = name;
//         this.age = age;
//         this.lname=lname;

       
//     }

    
// }

//     export function printname(User) {
//         return `this is the print Name method ` + User.name + User.lname;
        
//     }

//    export function printage(User) {

//         return `this is the print age method ` + User.age;
//    }


// export default User;

// export {printName,printAge};



const text = [

    {

        "name": "sharifullah",
        "lname":"shirzad",
        "deb":"BCS",
        " id":"0095",
        "Phone":"0789530481",
        "Email":"sharifullahshirzad81@gmail.com",
        "Photo":"shirzad image",

    }

]

var placeholder = document.querySelector('#data');

var out = '';

const arl = text.length
var i = 0;
while(i<arl){

    out += `

    <tr>

        
        <td>${text[i].name}</td>
        <td>${text[i].lname}</td>
        <td>${text[i].deb}</td>
        <td>${text[i].id}</td>
        <td>${text[i].Phone}</td>
        <td>${text[i].Email}</td>
        <td>${text[i].Photo}</td>
    </tr>
    `
    i++
    placeholder.innerHTML = out;
    
}

