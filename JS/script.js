
c=0
function add_note(){
    var d =new Date()
    var weekDAYS=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
    var DAY = d.getDate()
    var MON = d.getMonth()
    var year = d.getFullYear()
    var dayw=weekDAYS[d.getDay()]
    c++
    key = "a"+c
    console.log(key)
if(document.getElementById("inputVAL").value!=""){
    var a=document.getElementById("inputVAL").value
document.getElementById("groupe2").innerHTML+="<div ondblclick='deleteNote(this)' id='"+key+"'><textarea class='t2' placeholder='Note title'>"+dayw+'\r\n'+DAY+"/"+MON+"/"+year+"</textarea> <textarea class='t1'>"+a+" </textarea> </div>"
document.getElementById("inputVAL").value=""

}else{
    alert("Add some notes 🆗")
}
}

function deleteNote(idDiv){
    var id = idDiv.id
    document.getElementById(id).remove()
    console.log("text")
}