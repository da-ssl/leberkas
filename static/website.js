function sendData() {
    if (document.getElementById('input-disclaimer').checked == false) {
    alert("Sie müssen den Disclaimer akzeptieren, um fortzufahren")}
    //let vname = document.getElementById('input-vname').value
    let visitors = document.getElementById('input-visitors-total').value
    //let visitors_children = document.getElementById('input-visitors-children').value
    //let visitors_parents = document.getElementById('input-visitors-parents').value
    console.log(document.getElementById('input-visitors-total').value)
    if(document.getElementById('input-visitors-total').value === "") {
        console.log("Total visitors is null")
        document.getElementById('input-visitors-total').classList.remove("is-valid")
        document.getElementById('input-visitors-total').classList.add("is-invalid")
        document.getElementById('input-visitors-total-invalid').style.display="block"
    }

}

function updateInvalid(element, strElAlert)
{
    if (element.value != "") {
        element.classList.remove('is-invalid')
        document.getElementById(strElAlert).style.display="none"
    }
}