(function() {
const novem = () =>{
/*novem code editor ui interface builds */
//u.build("html",``);
/*forcing the body style*/
u("body").style({
border: "0px",
height: "100vh",
width: "100%",
margin: "0px",
padding: "0px",
boxSizing: "border-box"})
/**/
var editor = ace.edit("editor");
  editor.setOptions({
       theme: "ace/theme/ambiance",
       mode: "ace/mode/javascript",
       /*autoScrollEditorIntoView: true,*/
       enableSnippets: true,
       enableLiveAutocompletion: true,
       enableBasicAutocompletion: true
   });
//console.log()
/*u.fullScreen().set()*/





  
let p = get(".content");
let menu = get(".shadow");
const global =  u("#global")
u(".ace_text-input").on("focus", () =>{
/*u.$("#editor").style({top:"12%"})*/
p.classList.remove("show");
/*console.log("hey")*/
menu.style.transform = "scale(0)";
});
get(".ace_text-input").onblur = ()=>{u("#editor").style({top:"5%"})}
let k = 1;
function show(){
k++;
if(k > 1){ k = 0 };
menu.style.transform = "scale("+k+")"
}
function toggle(){
k++;
if(k > 1){ k = 0 };
/*u.$(".content").addClass("show")*/
p.classList.toggle("show");
}
u("#more").on("click", show)
u("#klicker").on("click", toggle)
/*for opening the settings menu */
u("#settings").on("click",()=>
u(".settings").style({transform: "scale(1)"})
)
/*for closing the settings menu */
u("#morex").on("click",()=>
u(".settings").style({transform: "scale(0)"})
)


/*since all the layout has been built 
it's time to standardize it 
to responsive relationships across various 
viewports */

};
/*for optimising the novem editor*/
cache(novem)
startCache()
})()