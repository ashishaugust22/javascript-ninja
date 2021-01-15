1 == '1';


// JS automatically converts into same type to match 




// to avoid it we '===' in JS 
1 === '1';





// =================================================
// converts to true
if (1) {

}


// =================================================
// converts to false
if (0) {

}


// =================================================
if (-0 === +0) {
    // true
}


// =================================================


// JS can be weird when it comes to type coercion. Try to guess what the output for each of the lines below are:

false == "";
false == [];
false == {};
"" == 0;
"" == [];
"" == {};
0 == [];
0 == {};
0 == null; 