function validation() {
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var p = document.getElementById("pwd").value;
    var mo = document.getElementById("num").value;
    var e = document.getElementById("email").value;

    if (f === "") {
        document.getElementById('firstname').innerHTML = "please fill the firstname";
        // alert("please fill the firstname");
        return false;

    }

    if ((f.length <= 2) || (f.length > 10)) {
        document.getElementById('firstname').innerHTML = "first name length must be between 2 and 10";
        //alert("first name length must be between 2 and 10");
        return false;
    }
    if (!isNaN(f)) {
        document.getElementById('firstname').innerHTML = "only character allowed here";
        //alert("only character allowed here");
        return false;
    }
    document.getElementById('firstname').innerHTML = null;
    if (l === "") {
        document.getElementById('lastname').innerHTML = "please fill the lastname";
        // alert("please fill the lastname");
        return false;
    }
    if ((l.length <= 2) || (l.length > 10)) {
        document.getElementById('lastname').innerHTML = "last name length must be between 2 and 10";
        //alert("last name length must be between 2 and 10");
        return false;
    }
    if (!isNaN(l)) {
        document.getElementById('lastname').innerHTML = "only character allowed here";
        //alert("only character allowed here");
        return false;
    }
    document.getElementById('lastname').innerHTML = null;
    if (e === "") {
        document.getElementById('emailid').innerHTML = "please fill the emailid";
        //alert("please fill the Email ID");
        return false;
    }
    if ((e.charAt(e.length - 4) != ".") && (e.charAt(e.length - 3) != ".")) {
        document.getElementById('emailid').innerHTML = "invalid '.' position";
        //alert("invalid '.' position");
        return false;

    }
    if (e.indexOf('@') <= 0) {
        document.getElementById('emailid').innerHTML = "invalid '@' position";
        //alert("invalid '@' position");
        return false;
    }
    document.getElementById('emailid').innerHTML = null;
    if (mo === "") {
        document.getElementById('mobnum').innerHTML = "please fill the mobnum";
        // alert("please fill the mobile number");
        return false;
    }
    if (isNaN(mo)) {
        document.getElementById('mobnum').innerHTML = "user must write a number not a character";
        //alert("You must have to enter number not a character");
        return false;
    }
    if (mo.length != 10) {
        document.getElementById('mobnum').innerHTML = "please enter valid 10 digit mobile number";
        //alert("please enter valid 10 digit mobile number");
        return false;
    }
    document.getElementById('mobnum').innerHTML = null;
    if (p === "") {
        document.getElementById('passw').innerHTML = "please fill the pass";
        //alert("please fill the password");
        return false;
    }
    if ((p.length <= 5) || (p.length < 8)) {
        document.getElementById('passw').innerHTML = "password length must be between 5 and 8";
        // alert("password length must be between 5 and 8");
        return false;
    }
    document.getElementById('passw').innerHTML = null;


}