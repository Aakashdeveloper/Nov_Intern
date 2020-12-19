function validateFname(){
    var fname = document.getElementById('fname').value;
    if(fname=="" || fname ==' '){
        document.getElementById('fout').innerText="Please Enter First Name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validateEmail = () => {
    var email = document.getElementById('email').value;
    if(email=="" || email.length==0){
        document.getElementById('eout').innerText="Please Enter Email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") === null){
            document.getElementById('eout').innerText="Please Enter Valid Email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const validatePwd = () => {
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min Length is 8";
            document.getElementById('ppout').style.visibility="visible";
            document.getElementById('ppout').style.background="red"
        }else if(pwd.length<10){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.visibility="visible";
            document.getElementById('ppout').style.background="orange"
        }
    }else{
        document.getElementById('ppout').style.background="green"
    }
}

function validateCPwd(){
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password does not match";
    }
}

const getSeats = () => {
    var seats = document.getElementById('seats').value;
    document.getElementById('sout').innerText=`Number of Seats Selected is ${seats}`
}