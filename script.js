let disp = document.querySelector("#dispdata");

disp.focus();                                            //Always focus/blink the display

var finval = 0;
var prc = 0;
var oprarr = [];                                          //Initializing of Variables used
var exp = '';
var 𝛑 = 3.14159265359;


const form = document.querySelector('Form');

form.addEventListener('keypress', (k) => {

    key(k.key);

    if (k.keyCode === 13 && disp.value === "") {
        k.preventDefault();                                      //Prevents empty operation reload of page
        console.log("Empty Display - No reload");
        // return true;
    }

    else if (k.keyCode === 13 && disp.value !== "") {
        k.preventDefault();
        findval();                      //When Enter key is pressed and display is not empty value is calculated
        console.log("Enter");
    }

});



disp.addEventListener("input", (e) => {
    if (disp.value === "") e.preventDefault();             //Prevents loading of page while entering values
    console.log(disp.value);
});


function key(val) {
    disp.focus();
    if (val === '%' || val === '÷' || val === '*' || val === '-' || val === '+') {    //Checks for operator entry;

        if (oprarr[oprarr.length - 1] === '%' || oprarr[oprarr.length - 1] === '÷' || oprarr[(oprarr.length) - 1] === '*' || oprarr[(oprarr.length) - 1] === '-' || oprarr[(oprarr.length) - 1] === '+') oprarr[(oprarr.length)-1]= val;
        else oprarr += val;

    }
    else if (val === 3.14) oprarr += '𝛑';                      //Checks for Pi(𝛑) entry;
    else if (val >= 0 && val <= 9) oprarr += val;              //Checks for Number entry;
    else if (val === '.') oprarr += val;                       //Checks for Decimal entry;
    // else if (val.keycode == 8) cleardisp('CE');             //Checks for Backspace keypress;
    disp.value = oprarr;
    exp = oprarr.toString();
    console.log(oprarr);
    // console.log(disp.value);
};


function findval() {                                          //Finds the final value 
    exp = oprarr.toString();
    finval = eval(exp);
    console.log(finval);
    if (exp !== '' && disp.value !== '' && oprarr != []) {
        disp.value = "ANS= " + finval;
        prc++;
    }
    else if (typeof(finval) === 'undefined') 
    disp.value = "";
    oprarr = [];
    oprind = 0;
    exp = '';
    disp.focus();
};



function cleardisp(val) {                                 //Clears display as AC (All Clear) or CE (Clear Each)
    if (val === 'AC' || prc === 1) {
        oprarr = [];
        oprind = 0;
        disp.value = "";
    }
    else {
        oprarr = oprarr.slice(0, oprarr.length - 1);
        disp.value = oprarr;

    }
    disp.focus();
};



