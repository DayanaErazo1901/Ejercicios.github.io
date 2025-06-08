function validarEdad(){
    debugger
    let nom = "",eda=0,suel=0
    nom = document.getElementById("nombre") 
    nom = nom.value
    eda = document.getElementById("edad").value
    eda = parseInt(eda)
    suel = parseFloat(document.getElementById("sueldo").value)
    if(eda >= 18){
        document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${nom} eres mayor de edad y tu sueldo es ${suel}`;
        //alert(`${nom} eres mayor de edad y tu sueldo es ${suel}`)
    }else{
        document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${nom} eres menor de edad y tu sueldo es ${suel}`;
        //alert(`${nom} eres menor de edad y tu sueldo es ${suel}`)
    }
    // console.log(nom)
    // console.log(nom.id," " + nom.value)
}