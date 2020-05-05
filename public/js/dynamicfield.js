var counter = 0;

function addInput(divName){
    let temp = counter + 1;
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Key " + (temp) + " : <input type='text' name='key"+temp+"'> value "+ (temp) + " : <input type='text' name='val"+temp+"'><br><br>";
    document.getElementById(divName).appendChild(newdiv);
    counter++;
}