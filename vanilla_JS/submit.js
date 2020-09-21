const info = document.querySelector(".js-info");
const inputName = document.getElementById("js-name"), 
    inputPhone = document.getElementById("js-phone");
const inputBox = document.querySelector("div");

function createBox(name,phone){
    var body = document.body;
    /*
        <div class="infoBox">
            <b>{name}</b>
            {phone}
        </div>

    */
   var div = document.createElement('div');
   document.body.append(div);
   var b = document.createElement('b');
   div.append(b);
   b.append(name);
   var br = document.createElement('br');
   b.append(br);
   div.append(phone)


}


function handleSubmit(e){
    e.preventDefault();
    const nameValue = inputName.value;
    const phoneValue = inputPhone.value;

    createBox(nameValue,phoneValue);
    // inputName=''; 
    // inputPhone='';
    inputName.focus();
}

function submitData(){
    info.addEventListener("submit",handleSubmit);

}

