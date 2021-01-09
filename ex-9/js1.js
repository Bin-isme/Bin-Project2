function signup(){
    let input_email = document.getElementById("email").value;
    let input_password = document.getElementById("password").value;
    let input_name = document.getElementById("name").value;
    let caseBlock = document.getElementById("checkcase");
    let listUsers = [];
    let listPassword = [];
    let listUsername = [];
    let isAccountExist = false;
    
    if(listUsers = JSON.parse(localStorage.getItem("listUsers")) != null){
        listUsers = JSON.parse(localStorage.getItem("listUsers"));
    }
    if(listPassword = JSON.parse(localStorage.getItem("listPassword")) != null){
        listPassword = JSON.parse(localStorage.getItem("listPassword"));
    }
    if(listUsername = JSON.parse(localStorage.getItem("listUsername")) != null){
        listUsername = JSON.parse(localStorage.getItem("listUsername"));
    }
    
    if (input_name == "" || input_email == "" || input_password == "")
    {   console.log("Error");
        caseBlock.innerHTML = "Sign up failed";
        caseBlock.style.color = "red";
    }
    else {
        for(let i = 0; i < listUsers.length;i++){
            if(input_email == listUsers[i]){
                console.log("error");
                caseBlock.innerHTML = "Already have account,pls fill in all areas";
                caseBlock.style.color = "red";
                isAccountExist = true;
            }
        }
        if(!isAccountExist){
            listUsers.push(input_email);
            listPassword.push(input_password);
            listUsername.push(input_username);
            
            localStorage.setItem("listUsers",JSON.stringify(listUsers));
            localStorage.setItem("listPassword",JSON.stringify(listPassword));
            localStorage.setItem("listUsername",JSON.stringify(listUsername));

            console.log("Successful")
            caseBlock.innerHTML = "Successful";
            caseBlock.style.color = "green"
            console.log("Email:",input_email);
            console.log("Pas:",input_password);
            console.log("Name:",input_name);

        }
    }
}