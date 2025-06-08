// Función principal para mostrar tabla de multiplicar con rango
        document.getElementById("btnMostrar").addEventListener("click", function() {
            // Obtener elementos del DOM
            const numTablaInput = document.getElementById("numTabla");
            const inicioInput = document.getElementById("inicio");
            const finInput = document.getElementById("fin");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const numTabla = parseInt(numTablaInput.value);
            const inicio = parseInt(inicioInput.value);
            const fin = parseInt(finInput.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(numTabla) || numTabla <= 0) {
                mostrarError("Por favor, ingresa un número válido para la tabla");
                numTablaInput.focus();
                return;
            }
            
            if (isNaN(inicio) || inicio <= 0) {
                mostrarError("Por favor, ingresa un valor de inicio válido");
                inicioInput.focus();
                return;
            }
            
            if (isNaN(fin) || fin <= 0) {
                mostrarError("Por favor, ingresa un valor final válido");
                finInput.focus();
                return;
            }
            
            if (inicio > fin) {
                mostrarError("El valor de inicio no puede ser mayor que el final");
                inicioInput.focus();
                return;
            }
            
            if (fin - inicio > 20) {
                mostrarError("El rango no puede ser mayor a 20 operaciones");
                return;
            }
            
            // Generar tabla de multiplicar con rango
            mostrarTablaRango(numTabla, inicio, fin);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para generar y mostrar la tabla de multiplicar con rango variable
        function mostrarTablaRango(numTabla, inicio, fin) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #e65100; margin-bottom: 15px; text-align: center;">✖️ Tabla del ${numTabla} (del ${inicio} al ${fin})</h3>`;
            
            // Variables del ciclo según el patrón detectado
            let c = inicio; // c: Contador que va de inicio a fin
            
            // Reglas del ciclo:
            // Inicio: c empieza en el valor "inicio"
            // Condición: Repetir mientras c sea menor o igual que "fin"
            // Acción: calcular y mostrar numTabla × c = resultado
            // Actualización: c aumenta en 1 en cada repetición
            
            while (c <= fin) {
                // La acción es "calcular y mostrar una multiplicación"
                // numTabla es fijo, c es lo que cambia en cada iteración
                const resultadoMultiplicacion = numTabla * c;
                
                output += `<div style="
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    padding: 10px 15px; 
                    margin: 5px 0; 
                    background-color: white; 
                    border-radius: 8px; 
                    border-left: 4px solid #ff9800;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                ">
                    <span style="font-weight: bold; color: #e65100;">${numTabla} × ${c}</span>
                    <span style="font-weight: bold; color: #666;">=</span>
                    <span style="font-weight: bold; color: #1976d2; font-size: 1.1em;">${resultadoMultiplicacion}</span>
                </div>`;
                
                c++; // Actualización: c aumenta en 1
            }
            
            output += `</div>`;
            
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("numTabla").value = "";
            document.getElementById("inicio").value = "";
            document.getElementById("fin").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("numTabla").focus();
        });

        // Permitir navegación con Enter
        document.getElementById("numTabla").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("inicio").focus();
            }
        });

        document.getElementById("inicio").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("fin").focus();
            }
        });

        document.getElementById("fin").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnMostrar").click();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("numTabla").focus();
        });

        // Validación en tiempo real
        document.getElementById("numTabla").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 20) {
                this.value = 20;
            }
        });

        document.getElementById("inicio").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 50) {
                this.value = 50;
            }
        });

        document.getElementById("fin").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 50) {
                this.value = 50;
            }
        });