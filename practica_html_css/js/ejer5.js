// Función principal para mostrar tabla de sumar
        document.getElementById("btnMostrar").addEventListener("click", function() {
            // Obtener elementos del DOM
            const numTablaInput = document.getElementById("numTabla");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const numTabla = parseInt(numTablaInput.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(numTabla) || numTabla <= 0) {
                mostrarError("⚠️ Por favor, ingresa un número válido mayor a 0");
                numTablaInput.focus();
                return;
            }
            
            if (numTabla > 20) {
                mostrarError("⚠️ El número no puede ser mayor a 20");
                numTablaInput.focus();
                return;
            }
            
            // Generar tabla de sumar
            mostrarTabla(numTabla);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para generar y mostrar la tabla de sumar
        function mostrarTabla(numTabla) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #2e7d32; margin-bottom: 15px; text-align: center;">➕ Tabla del ${numTabla} (Sumar)</h3>`;
            
            // Variables del ciclo según el patrón detectado
            let c = 1; // c: Contador que va de 1 a 12
            
            // Reglas del ciclo:
            // Inicio: c empieza en 1
            // Condición: Repetir mientras c sea menor o igual que 12
            // Acción: calcular y mostrar numTabla + c = resultado
            // Actualización: c aumenta en 1 en cada repetición
            
            while (c <= 12) {
                // La acción es "calcular y mostrar una suma"
                // numTabla es fijo, c es lo que cambia en cada iteración
                const resultadoSuma = numTabla + c;
                
                output += `<div style="
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    padding: 8px 15px; 
                    margin: 5px 0; 
                    background-color: white; 
                    border-radius: 8px; 
                    border-left: 4px solid #4caf50;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                ">
                    <span style="font-weight: bold; color: #2e7d32;">${numTabla} + ${c}</span>
                    <span style="font-weight: bold; color: #666;">=</span>
                    <span style="font-weight: bold; color: #1976d2; font-size: 1.1em;">${resultadoSuma}</span>
                </div>`;
                
                c++; // Actualización: c aumenta en 1
            }
            
            output += `</div>`;
            
            // Asignar el HTML generado al elemento resultado
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("numTabla").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("numTabla").focus();
        });

        // Permitir ejecutar con Enter
        document.getElementById("numTabla").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnMostrar").click();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("numTabla").focus();
        });

        // Validación en tiempo real para el campo número
        document.getElementById("numTabla").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 20) {
                this.value = 20;
            }
        });