function numeroMayor(){
    debugger;
    // declarar e inicializar variables
    let num1=0,num2=0,resp=""
    // obtener los valores de los campos del formulario mediante id
    num1 = document.getElementById("num1").value
    num1 = parseInt(num1)
    num2 = parseInt(document.getElementById("num2").value)
    // validar si la persona es mayor de edad
    resp = document.getElementById("resultado")
    if (num1 >= num2) {
        resp.innerHTML = num1 + " es mayor que " + num2
      
    } else {
        resp.innerHTML = num2 + " es mayor que " + num1
       
    }
    // console.log(edad)
    // console.log(edad.id, " ",edad.value)
}