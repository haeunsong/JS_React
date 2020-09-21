const info = document.querySelector(".js-info");
var inputName = document.getElementById("js-name"), 
    inputPhone = document.getElementById("js-phone");
const inputBox = document.querySelector("div");

let infos=[];

const INFOS_LS = "INFOS"
function deleteInfo(){
    console.log("delete");
}
function changeInfo(){
    console.log("modify");
}

function saveInfo(){
    localStorage.setItem(INFOS_LS,JSON.stringify(infos));
}
function paintBox(name,phone){
    /*
        <div>
            <b>이름<br></b>
            전번
        </div>

    */
   var div = document.createElement('div');
   document.body.append(div);
   var b = document.createElement('b');
   div.append(b);
   b.append(name);
   var br = document.createElement('br');
   b.appendChild(br);
   div.append(phone)
   div.append(br);
   

   const delBtn = document.createElement("button");
   const chgBtn = document.createElement("button");
   delBtn.innerText="삭제"
   chgBtn.innerText="수정"
   div.appendChild(delBtn);
   div.appendChild(chgBtn);
   delBtn.addEventListener("click",deleteInfo);
   chgBtn.addEventListener("click",changeInfo);


}


function handleSubmit(e){
    e.preventDefault();
    const nameValue = inputName.value;
    const phoneValue = inputPhone.value;

    const infoObj = {
        nameValue,
        phoneValue
    }
    infos.push(infoObj);
    saveInfo();
    paintBox(nameValue,phoneValue);
    // inputName=''; 
    // inputPhone='';`
    inputName.focus();
}

function loadInfos(){
    const loadedInfos = localStorage.getItem(INFOS_LS);
    if(loadedInfos!==null){
        const parsedInfos = JSON.parse(loadedInfos);  // string -> Object 
        parsedInfos.forEach(function(info){
            paintBox(info.nameValue,info.phoneValue);
        });
    }
}

function init(){
    loadInfos();
    info.addEventListener("submit",handleSubmit);
}
init();