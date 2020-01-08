function insert(num){
  document.form.text.value = document.form.text.value+num;
}

function equal(){
  var exp = document.form.text.value;
  if(exp){
    document.form.text.value = eval(exp);
  }
}

function clearAll(){
  document.form.text.value="";
}

function clearOne(){
  var exp = document.form.text.value;
  document.form.text.value = exp.substring(0,exp.length-1);
}
