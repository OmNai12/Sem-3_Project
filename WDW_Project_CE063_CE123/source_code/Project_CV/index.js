function certificate(){

    let new_node = document.createElement("input","text");
    new_node.classList.add('form-control');
    new_node.classList.add('mt-2');
    new_node.classList.add('crts');
    new_node.setAttribute("placeholder","Certificate Name");   
    

    let cert = document.getElementById('cer');
    let certi = document.getElementById('certificate');

    cert.insertBefore(new_node,certi);
    
}
function education(){

    let new_node = document.createElement("input","text");
    new_node.classList.add('form-control');
    new_node.classList.add('mt-2');
    new_node.classList.add('ed');
    new_node.setAttribute("placeholder","Study Program");   
    

    let cert = document.getElementById('edu');
    let certi = document.getElementById('educations');

    cert.insertBefore(new_node,certi);
   
}

function personal_project(){

    let new_node = document.createElement("input","text");
    new_node.classList.add('form-control');
    new_node.classList.add('mt-2');
    new_node.classList.add('pr');
    new_node.setAttribute("placeholder","Project Name");   
    

    let cert = document.getElementById('prp');
    let certi = document.getElementById('personal_project');

    cert.insertBefore(new_node,certi);    
    
}
function work_experience(){
    
    let new_node = document.createElement("input","text");
    new_node.classList.add('form-control');
    new_node.classList.add('mt-2');
    new_node.classList.add('we');
    new_node.setAttribute("placeholder","Workplace/Company");   
   
    

    let cert = document.getElementById('wrk_exp');
    let certi = document.getElementById('Work_experience');

    cert.insertBefore(new_node,certi);
    
    

}

// function social_acc(){
//     let new_node = document.createElement("input","text");
//     new_node.classList.add('form-control');
//     new_node.classList.add('so_a');
//     new_node.classList.add('mt-2');
//     new_node.setAttribute("placeholder","LinkedIn / Github Link");   
    

//     let cert = document.getElementById('s_a');
//     let certi = document.getElementById('social_acc');

//     cert.insertBefore(new_node,certi);
// }

function skills(){
    let new_node = document.createElement("input","text");
    new_node.classList.add('form-control');
    new_node.classList.add('mt-2');
    new_node.classList.add('skl');
    new_node.setAttribute("placeholder","Add Your skills");   
    

    let cert = document.getElementById('sk');
    let certi = document.getElementById('skills');

    cert.insertBefore(new_node,certi);
}

function achivements(){
    let new_node = document.createElement("input","text");
    new_node.classList.add('form-control');
    new_node.classList.add('mt-2');
    new_node.classList.add('ach');
    new_node.setAttribute("placeholder","Achivement Name");   
    

    let cert = document.getElementById('ac');
    let certi = document.getElementById('Achivements');

    cert.insertBefore(new_node,certi);
}

// generate_resume

function template1(){

//    0
   let profile_p = document.getElementById('file-input').files[0];

   console.log(profile_p);

   let reader = new FileReader();

   reader.readAsDataURL(profile_p);

   reader.onloadend=function(){
      document.getElementById('prfl_pc').src = reader.result;
   }
   

//    1
   let nm = document.getElementById('Name');
   let nmT1 = document.getElementById('nameT1');
   let nmT2 = document.getElementById('nameT2');

   nmT1.innerHTML = `<b>${nm.value}</b>`;
   nmT2.innerHTML = `<b>${nm.value}</b>`;
   
// 2
   
   let qck = document.getElementById('quick').value;
   let qckT = document.getElementById('quickT');

   qckT.innerHTML = qck;

//    3
   

   let eml = document.getElementById('email').value;
   let emlT = document.getElementById('emailT');

   emlT.innerHTML =eml;

//    4

   let add = document.getElementById('address').value;
   let addT = document.getElementById('addressT');

   addT.innerHTML = add;

//    5

   let cont = document.getElementById('contact').value;
   let contT = document.getElementById('contctT');

   contT.innerHTML = cont;

//    6

   let cty = document.getElementById('city').value;
   let ctyT = document.getElementById('cityT');

   ctyT.innerHTML = cty;

//    7


   let stt = document.getElementById('state').value;
   let sttT = document.getElementById('stateT');

   sttT.innerHTML = stt;

//    8

   let cntry = document.getElementById('country').value;
   let cntryT = document.getElementById('countryT');

   cntryT.innerHTML = cntry;

//    9

   let edu = document.getElementsByClassName('ed');

   let str1 ='';

   for(let e of edu){
      str1 = str1 + `<li>${e.value}</li>`;
   }

   document.getElementById('EducationT').innerHTML = str1;


//    10

   let ppr = document.getElementsByClassName('pr');

   let str2 = '';
   
   for(let e of ppr){
      str2 = str2 + `<li>${e.value}</li>`;
   }

   document.getElementById('PpT').innerHTML = str2;

//    11

   let wr = document.getElementsByClassName('we');

   let str3 = '';

   for(let e of wr){
      str3 = str3 + `<li>${e.value}</li>`;
   }

   document.getElementById('work_experienceT').innerHTML = str3;
//    12

let sc_ac = document.getElementById('social_accountL').value;
let ss = document.getElementById('so_aT1');

ss.innerHTML = sc_ac;


let sc_ac1 = document.getElementById('social_accountG').value;
let ss1 = document.getElementById('so_aT2');

ss1.innerHTML = sc_ac1;

   

//    13

   let skls = document.getElementsByClassName('skl');
   let str4 = '';

   for(let e of skls){
      str4 = str4 + `<li>${e.value}</li>`;
   }


   document.getElementById('sklT').innerHTML = str4;
 
//    14

   let orgns = document.getElementById('Organization').value;
   let orgnsT = document.getElementById('OrgT');

   orgnsT.innerHTML = orgns;

//    15

   let certs = document.getElementsByClassName('crts');

   let str = "";

   for(let e of certs){
      str = str + `<li>${e.value}</li>`;
   }

   document.getElementById('CertiT').innerHTML = str;
//    16


   let lan = document.getElementById('Language').value;
   let lanT = document.getElementById('LanT');

   lanT.innerHTML = lan;

//    17

   let int = document.getElementById('Interest').value;
   let intT = document.getElementById('IntsT');

   intT.innerHTML = int;

   document.getElementById('resume-form').style.display="none";
   document.getElementById('template2').style.display="none";
   document.getElementById('template3').style.display="none";
   document.getElementById('template4').style.display="none";

   document.getElementById('template1').style.display="block";

}
function template2(){

   //    0
      let profile_p = document.getElementById('file-input').files[0];
   
      console.log(profile_p);
   
      let reader = new FileReader();
   
      reader.readAsDataURL(profile_p);
   
      reader.onloadend=function(){
         document.getElementById('prfl_pc2').src = reader.result;
      }
      
   
   //    1
      let nm = document.getElementById('Name').value;
      let nmT1 = document.getElementById('nameT12');
   
      nmT1.innerHTML = nm;
      
      
   // 2
      
      let qck = document.getElementById('quick').value;
      let qckT = document.getElementById('quickT2');
   
      qckT.innerHTML = qck;
   
   //    3
      
   
      let eml = document.getElementById('email').value;
      let emlT = document.getElementById('emailT2');
   
      emlT.innerHTML =eml;
   
   //    4
   
      let add = document.getElementById('address').value;
      let addT = document.getElementById('addressT2');
   
      addT.innerHTML = add;
   
   //    5
   
      let cont = document.getElementById('contact').value;
      let contT = document.getElementById('contctT2');
   
      contT.innerHTML = cont;
   
   //    6
   
      let cty = document.getElementById('city').value;
      let ctyT = document.getElementById('cityT2');
   
      ctyT.innerHTML = cty;
   
   //    7
   
   
      let stt = document.getElementById('state').value;
      let sttT = document.getElementById('stateT2');
   
      sttT.innerHTML = stt;
   
   //    8
   
      let cntry = document.getElementById('country').value;
      let cntryT = document.getElementById('countryT2');
   
      cntryT.innerHTML = cntry;
   
   //    9
   
      let edu = document.getElementsByClassName('ed');
   
      let str1 ='';
   
      for(let e of edu){
         str1 = str1 + `<li>${e.value}</li>`;
      }
   
      document.getElementById('EducationT2').innerHTML = str1;
   
   
   //    10
   
      let ppr = document.getElementsByClassName('pr');
   
      let str2 = '';
      
      for(let e of ppr){
         str2 = str2 + `<li>${e.value}</li>`;
      }
   
      document.getElementById('PpT2').innerHTML = str2;
   
   //    11
   
      let wr = document.getElementsByClassName('we');
   
      let str3 = '';
   
      for(let e of wr){
         str3 = str3 + `<li>${e.value}</li>`;
      }
   
      document.getElementById('work_experienceT2').innerHTML = str3;
   //    12
   
   let sc_ac = document.getElementById('social_accountL').value;
   let ss = document.getElementById('so_aT12');
   
   ss.innerHTML = sc_ac;
   
   
   let sc_ac1 = document.getElementById('social_accountG').value;
   let ss1 = document.getElementById('so_aT22');
   
   ss1.innerHTML = sc_ac1;
   
      
   
   //    13
   
      let skls = document.getElementsByClassName('skl');
      let str4 = '';
   
      for(let e of skls){
         str4 = str4 + `<li>${e.value}</li>`;
      }
   
   
      document.getElementById('sklT2').innerHTML = str4;
    
   //    14
   
      let orgns = document.getElementById('Organization').value;
      let orgnsT = document.getElementById('OrgT2');
   
      orgnsT.innerHTML = orgns;
   
   //    15
   
      let certs = document.getElementsByClassName('crts');
   
      let str = "";
   
      for(let e of certs){
         str = str + `<li>${e.value}</li>`;
      }
   
      document.getElementById('CertiT2').innerHTML = str;
   //    16
   
   
      let lan = document.getElementById('Language').value;
      let lanT = document.getElementById('LanT2');
   
      lanT.innerHTML = lan;
   
   //    17
   
      let int = document.getElementById('Interest').value;
      let intT = document.getElementById('IntsT2');
   
      intT.innerHTML = int;
   
      document.getElementById('resume-form').style.display="none";
      document.getElementById('template1').style.display="none";
      document.getElementById('template3').style.display="none";
      document.getElementById('template4').style.display="none";
   
      document.getElementById('template2').style.display="block";
   
   }
   function template3(){

//    0
let profile_p = document.getElementById('file-input').files[0];
   
console.log(profile_p);

let reader = new FileReader();

reader.readAsDataURL(profile_p);

reader.onloadend=function(){
   document.getElementById('prfl_pc3').src = reader.result;
}


//    1
let nm = document.getElementById('Name').value;
let nmT1 = document.getElementById('nameT13');

nmT1.innerHTML = nm;


// 2

let qck = document.getElementById('quick').value;
let qckT = document.getElementById('quickT3');

qckT.innerHTML = qck;

//    3


let eml = document.getElementById('email').value;
let emlT = document.getElementById('emailT3');

emlT.innerHTML =eml;

//    4

let add = document.getElementById('address').value;
let addT = document.getElementById('addressT3');

addT.innerHTML = add;

//    5

let cont = document.getElementById('contact').value;
let contT = document.getElementById('contctT3');

contT.innerHTML = cont;

//    6

let cty = document.getElementById('city').value;
let ctyT = document.getElementById('cityT3');

ctyT.innerHTML = cty;

//    7


let stt = document.getElementById('state').value;
let sttT = document.getElementById('stateT3');

sttT.innerHTML = stt;

//    8

let cntry = document.getElementById('country').value;
let cntryT = document.getElementById('countryT3');

cntryT.innerHTML = cntry;

//    9

let edu = document.getElementsByClassName('ed');

let str1 ='';

for(let e of edu){
   str1 = str1 + `<li>${e.value}</li>`;
}

document.getElementById('EducationT3').innerHTML = str1;


//    10

let ppr = document.getElementsByClassName('pr');

let str2 = '';

for(let e of ppr){
   str2 = str2 + `<li>${e.value}</li>`;
}

document.getElementById('PpT3').innerHTML = str2;

//    11

let wr = document.getElementsByClassName('we');

let str3 = '';

for(let e of wr){
   str3 = str3 + `<li>${e.value}</li>`;
}

document.getElementById('work_experienceT3').innerHTML = str3;
//    12

let sc_ac = document.getElementById('social_accountL').value;
let ss = document.getElementById('so_aT13');

ss.innerHTML = sc_ac;


let sc_ac1 = document.getElementById('social_accountG').value;
let ss1 = document.getElementById('so_aT23');

ss1.innerHTML = sc_ac1;



//    13

let skls = document.getElementsByClassName('skl');
let str4 = '';

for(let e of skls){
   str4 = str4 + `<li>${e.value}</li>`;
}


document.getElementById('sklT3').innerHTML = str4;

//    14

let orgns = document.getElementById('Organization').value;
let orgnsT = document.getElementById('OrgT3');

orgnsT.innerHTML = orgns;

//    15

let certs = document.getElementsByClassName('crts');

let str = "";

for(let e of certs){
   str = str + `<li>${e.value}</li>`;
}

document.getElementById('CertiT3').innerHTML = str;
//    16


let lan = document.getElementById('Language').value;
let lanT = document.getElementById('LanT3');

lanT.innerHTML = lan;

//    17

let int = document.getElementById('Interest').value;
let intT = document.getElementById('IntsT3');

intT.innerHTML = int;


   document.getElementById('resume-form').style.display="none";
   document.getElementById('template1').style.display="none";
   document.getElementById('template2').style.display="none";
   document.getElementById('template4').style.display="none";

   document.getElementById('template3').style.display="block";

}
function template4(){

   //    0
      let profile_p = document.getElementById('file-input').files[0];
   
      console.log(profile_p);
   
      let reader = new FileReader();
   
      reader.readAsDataURL(profile_p);
   
      reader.onloadend=function(){
         document.getElementById('prfl_pc').src = reader.result;
      }
      
   
   //    1
      let nm = document.getElementById('Name');
      let nmT1 = document.getElementById('nameT1');
      let nmT2 = document.getElementById('nameT2');
   
      nmT1.innerHTML = `<b>${nm.value}</b>`;
      nmT2.innerHTML = `<b>${nm.value}</b>`;
      
   // 2
      
      let qck = document.getElementById('quick').value;
      let qckT = document.getElementById('quickT');
   
      qckT.innerHTML = qck;
   
   //    3
      
   
      let eml = document.getElementById('email').value;
      let emlT = document.getElementById('emailT');
   
      emlT.innerHTML =eml;
   
   //    4
   
      let add = document.getElementById('address').value;
      let addT = document.getElementById('addressT');
   
      addT.innerHTML = add;
   
   //    5
   
      let cont = document.getElementById('contact').value;
      let contT = document.getElementById('contctT');
   
      contT.innerHTML = cont;
   
   //    6
   
      let cty = document.getElementById('city').value;
      let ctyT = document.getElementById('cityT');
   
      ctyT.innerHTML = cty;
   
   //    7
   
   
      let stt = document.getElementById('state').value;
      let sttT = document.getElementById('stateT');
   
      sttT.innerHTML = stt;
   
   //    8
   
      let cntry = document.getElementById('country').value;
      let cntryT = document.getElementById('countryT');
   
      cntryT.innerHTML = cntry;
   
   //    9
   
      let edu = document.getElementsByClassName('ed');
   
      let str1 ='';
   
      for(let e of edu){
         str1 = str1 + `<li>${e.value}</li>`;
      }
   
      document.getElementById('EducationT').innerHTML = str1;
   
   
   //    10
   
      let ppr = document.getElementsByClassName('pr');
   
      let str2 = '';
      
      for(let e of ppr){
         str2 = str2 + `<li>${e.value}</li>`;
      }
   
      document.getElementById('PpT').innerHTML = str2;
   
   //    11
   
      let wr = document.getElementsByClassName('we');
   
      let str3 = '';
   
      for(let e of wr){
         str3 = str3 + `<li>${e.value}</li>`;
      }
   
      document.getElementById('work_experienceT').innerHTML = str3;
   //    12
   
   let sc_ac = document.getElementById('so_aL').value;
   let ss = document.getElementById('so_aT1');
   
   ss.innerHTML = sc_ac;
   
   
   let sc_ac1 = document.getElementById('so_aG').value;
   let ss1 = document.getElementById('so_aT2');
   
   ss1.innerHTML = sc_ac1;
   
      
   
   //    13
   
      let skls = document.getElementsByClassName('skl');
      let str4 = '';
   
      for(let e of skls){
         str4 = str4 + `<li>${e.value}</li>`;
      }
   
   
      document.getElementById('sklT').innerHTML = str4;
    
   //    14
   
      let orgns = document.getElementById('Organization').value;
      let orgnsT = document.getElementById('OrgT');
   
      orgnsT.innerHTML = orgns;
   
   //    15
   
      let certs = document.getElementsByClassName('crts');
   
      let str = "";
   
      for(let e of certs){
         str = str + `<li>${e.value}</li>`;
      }
   
      document.getElementById('CertiT').innerHTML = str;
   //    16
   
   
      let lan = document.getElementById('Language').value;
      let lanT = document.getElementById('LanT');
   
      lanT.innerHTML = lan;
   
   //    17
   
      let int = document.getElementById('Interest').value;
      let intT = document.getElementById('IntsT');
   
      intT.innerHTML = int;
   
      document.getElementById('resume-form').style.display="none";
      document.getElementById('template1').style.display="none";
      document.getElementById('template2').style.display="none";
      document.getElementById('template3').style.display="none";
   
      document.getElementById('template4').style.display="block";
   
   }

function print_Resume(){


   window.print();
}

