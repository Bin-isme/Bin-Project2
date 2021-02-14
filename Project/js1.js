function signin(){
    let demo = document.getElementById("demo1");
    let input_email = document.getElementById("email").value;
    let input_password = document.getElementById("password").value;
    let caseBlock = document.getElementById("checkcase");
    let listUsers = [];
    let listPassword = [];
    let listUsername = [];
    let isAccountExist = true;
    // let name = document.getElementById("name");
    listUsers = JSON.parse(localStorage.getItem("listUsers"));
    listPassword = JSON.parse(localStorage.getItem("listPassword"));
    if (input_email == listUsers && input_password == listPassword){
        for(let i = 0; i < listUsers.length && i < listPassword.length;i++){
            if(input_email == listUsers[i] && input_password == listPassword[i]){
                console.log("Success");
                caseBlock.innerHTML = "Successful";
                caseBlock.style.color = "green";
                if(confirm("Are u a member ?")){  
                    demo.innerHTML ="ok"
                  } 
                else{
                    demo.innerHTML ="cancel"
                  }
            }
        else{
            console.log("Error");
            caseBlock.innerHTML = "Sign up failed";
            caseBlock.style.color = "red";
            }
        }
    }
}