async function getdata(){
    const data = await fetch('https://dummyjson.com/user');
    const records = await data.json();

    let tab = '';
    records.users.forEach(function(user){
        tab += `<tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            </tr>`
           
            
        })
    
    document.getElementById('tbody').innerHTML = tab;
    }
 function onsumit(){
    console.log("click");
    location.href ="fetchData.html";
    return false;
 }