
  



let submitBtn = document.querySelector("#submitbtn");
const res = document.querySelector(".conres");

submitBtn.addEventListener("click",async (e) => {
    e.preventDefault();
    res.innerHTML = `<img src="img/loading.svg" alt="" class="loadimg">`

  console.log("Submit");
  
  let email = document.getElementById("Email").value;

  let key = "ema_live_KtgMzWESg6MWOIKLPopdcexxr7i0UyKSOKgHaTrW"
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}
`;

let resp = await fetch(url);
let result = await resp.json();


let str =  ``;

for (key of Object.keys(result)) {
    if(result[key] != "" && result[key] != " "){

    
  str = str + `<div>${key}: ${result[key]}</div>`;
    }
}


res.innerHTML = str;

});



