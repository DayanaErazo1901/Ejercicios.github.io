// Función principal para mostrar números pares
        document.getElementById("btnMostrar").addEventListener("click", function() {
            // Obtener elementos del DOM
            const numeroInput = document.getElementById("numero");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const n = parseInt(numeroInput.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(n) || n <= 0) {
                mostrarError("⚠️ Por favor, ingresa un número válido mayor a 0");
                numeroInput.focus();
                return;
            }
            
            if (n > 1000) {
                mostrarError("⚠️ El número no puede ser mayor a 1000");
                numeroInput.focus();
                return;
            }
            
            // Generar números pares
            mostrarNumerosPares(n);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para generar y mostrar los números pares
        function mostrarNumerosPares(n) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #e6ffe6; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #2d5016; margin-bottom: 15px;">🔢 Números Pares del 1 al ${n}</h3>`;
            
            // Variables del ciclo según el patrón detectado
            let c = 1; // c: Contador que recorre TODOS los números
            
            // Reglas del ciclo:
            // Ciclo: Contador c va de 1 hasta n
            output += `<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;">`;
            
            while (c <= n) {
                // Dentro del Ciclo (Filtro): Necesitamos una condición Si (c % 2 = 0)
                // El operador % (módulo) da el residuo de una división
                // Si el residuo al dividir entre 2 es 0, es par
                if (c % 2 === 0) {
                    // Solo entonces escribimos c
                    output += `<span style="
                        display: inline-block; 
                        background: linear-gradient(135deg, #48bb78, #38a169); 
                        color: white; 
                        padding: 8px 12px; 
                        border-radius: 8px; 
                        font-weight: bold;
                        min-width: 40px;
                        text-align: center;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    ">${c}</span>`;
                }
                
                c++; // Incrementar contador para recorrer todos los números
            }
            
            output += `</div>`;
            output += `</div>`;
            
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("numero").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("numero").focus();
        });

        // Permitir ejecutar con Enter
        document.getElementById("numero").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnMostrar").click();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("numero").focus();
        });

        // Validación en tiempo real para el campo número
        document.getElementById("numero").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 1000) {
                this.value = 1000;
            }
        });