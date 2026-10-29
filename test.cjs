const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map();
function element(key){if(!elements.has(key))elements.set(key,{innerHTML:'',textContent:'',className:'',hidden:false,open:false,scrollTop:0,addEventListener(){},querySelector(){return {focus(){}}},querySelectorAll(){return []},elements:{namedItem(){return null}},showModal(){this.open=true},close(){this.open=false}});return elements.get(key)}
const context=vm.createContext({console,document:{querySelector:element,addEventListener(){},body:{classList:{add(){},remove(){}}}},window:{open(){} }});
vm.runInContext(fs.readFileSync(__dirname+'/script.js','utf8'),context);
let count=0;function check(expr,expected){assert.equal(vm.runInContext(expr,context),expected);count++;}
check("calculateTotal({level:'middle',status:'enrolled',service:'all',subjects:[]}).total",1800);
check("calculateTotal({level:'first',status:'enrolled',stream:'science',service:'all',subjects:[]}).total",1000);
check("calculateTotal({level:'second',status:'enrolled',stream:'science',service:'specific',subjects:['math','english']}).total",850);
check("calculateTotal({level:'free',status:'independent',stream:'literature',service:'all',subjects:[]}).total",2500);
check("calculateTotal({level:'second',status:'enrolled',stream:'literature',service:'all',subjects:[]}).total",1600);
check("calculateTotal({level:'second',status:'enrolled',stream:'mathscience',service:'all',subjects:[]}).total",null);
check("calculateTotal({level:'second',status:'enrolled',stream:'science',service:'all',subjects:['english']}).total",1500);
check("calculateTotal({level:'second',status:'enrolled',stream:'literature',service:'specific',subjects:['math','arabic']}).total",500);
for(const p of ['0663104227','07 12 34 56 78','+212663104227','00212663104227'])check(`validPhone(${JSON.stringify(p)})`,true);
for(const p of ['0612','+2120663104227','0512345678','hello'])check(`validPhone(${JSON.stringify(p)})`,false);
vm.runInContext("data={...data,type:'parent',name:'ولي الأمر',phone:'0663104227',studentName:'التلميذ',city:'الرباط',level:'second',status:'enrolled',stream:'science',subjects:['math']};",context);
check("buildWhatsAppMessage(data).includes('اسم التلميذ(ة): التلميذ')",true);
check("buildWhatsAppMessage(data).includes('1500 درهم')",true);
vm.runInContext("data.stream='literature';normalizeAcademic()",context);check('data.subjects.length',0);
vm.runInContext("step=0;data.name='';data.phone='abc'",context);check('validate()',false);
vm.runInContext("data.name='أحمد';data.phone='0663104227'",context);check('validate()',true);
vm.runInContext("data.level='middle';normalizeAcademic()",context);check('data.stream','');
for(let stage=0;stage<5;stage++){vm.runInContext(`step=${stage};render()`,context);assert.ok(element('#step-content').innerHTML.length>0);count++}
console.log(count+' assertions passed (pricing, parent summary, phone validation, reset and five-stage rendering).');

const middleKeys=['math','physics','svt','french','arabic','social','islamic'];
const freeKeys=['math','physics','svt','philosophy','english','social','arabic','french','islamic'];
for(const [i,expected] of [350,650,900,1150,1400,1650,1800].entries()){
 check(`calculateTotal({level:'middle',status:'independent',service:'specific',subjects:${JSON.stringify(middleKeys.slice(0,i+1))}}).total`,expected);
}
for(const [i,expected] of [500,850,1250,1550,1900,2200,2500].entries()){
 check(`calculateTotal({level:'free',status:'independent',stream:'science',service:'specific',subjects:${JSON.stringify(freeKeys.slice(0,i+1))}}).total`,expected);
}
check("calculateTotal({level:'first',status:'enrolled',stream:'science',service:'specific',subjects:['arabic']}).total",400);
check("calculateTotal({level:'first',status:'enrolled',stream:'science',service:'specific',subjects:['french']}).total",500);
check("calculateTotal({level:'first',status:'enrolled',stream:'science',service:'specific',subjects:['arabic','social','islamic']}).total",1250);
check("calculateTotal({level:'free',status:'independent',stream:'science',service:'specific',subjects:['math','physics','svt','philosophy','english','social','arabic','french']}).total",null);
check("calculateTotal({level:'middle',status:'enrolled',service:'specific',subjects:['math','math','fake']}).total",350);
check("calculateTotal({level:'middle',status:'enrolled',service:'specific',subjects:[]}).total",0);
check("calculateTotal({level:'second',status:'enrolled',stream:'science',service:'specific',subjects:['math','english']}).discount",0);
vm.runInContext("data={...data,level:'middle',status:'enrolled',stream:'',service:'specific',subjects:['math','physics']};step=3;render()",context);
assert.ok(element('#step-content').innerHTML.includes('650'));count++;
check("buildWhatsAppMessage(data).includes('650')",true);
console.log(count+' total assertions passed, including all 14 subject-count price tiers and summary messaging.');
