function untickCheckBox(){
    let unchecked = document.querySelectorAll(".untick")
    // console.log(unchecked.length)
    for(let i=0 ; i<unchecked.length ; i++){
        unchecked[i].checked = false;
    }
    return false;
}