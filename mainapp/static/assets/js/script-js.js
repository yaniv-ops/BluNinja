
const form = document.getElementById('form');
const plan = document.getElementById('plan');
const username = document.getElementById('username');
const userfamily = document.getElementById('userfamily');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const web = document.getElementById('web');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    
    
})

function checkInputs() {
    // get the values from the input
    const planValue = plan.value.trim();
    const usernameValue = username.value.trim();
    const userfamilyValue = userfamily.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const webValue = web.value.trim();

    if(usernameValue === '') {
        //show error
        //add failure class
        setErrorFor(username, 'יש למלא שם פרטי');

    } else {
        //add success class
        setSuccessFor(username);
    }
    
    if(userfamilyValue === '') {
        //show error
        //add failure class
        setErrorFor(userfamily, 'יש למלא שם משפחה');

    } else {
        //add success class
        setSuccessFor(userfamily);
    }
    if(emailValue === '') {

        setErrorFor(email, 'יש למלא כתובת מייל');
    } else if(!isEmail(emailValue)) {

        setErrorFor(email, 'כתובת מייל אינהה תקינה');

    } else {

        setSuccessFor(email);
    }

    if(webValue === '') {

        setSuccessFor(web);
        
    } else if(!isSite(webValue)) {

        setErrorFor(web, 'כתובת אתר לא תקינה');

    } else {

        setSuccessFor(web);
    }
    
    if(phoneValue === '') {

        setErrorFor(phone, 'יש למלא מספר טלפון');
    } else if(!isPhone(phoneValue)) {

        setErrorFor(phone, 'מספר טלפון אינו תקין');

    } else {

        setSuccessFor(phone);
    }
    
    var spans = document.getElementsByClassName("form-control success");
    if (spans.length == 5) {
        alert('הודעתך נשלחה ,נציגנו יצרו איתך קשר במהרה');
        form.submit();
    }
    


}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class

    formControl.className = 'form-control failure';
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isSite(web) {
    return /^([a-zA-Z0-9]+)\.([a-z.]+)+$/.test(web);
}

function isPhone(phone) {
    return /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

