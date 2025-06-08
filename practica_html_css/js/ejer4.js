
        // Función principal para mostrar múltiplos
        document.getElementById("btnMostrar").addEventListener("click", function() {
            // Obtener elementos del DOM
            const multiploInput = document.getElementById("multiplo");
            const numeroInput = document.getElementById("numero");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const multiplo = parseInt(multiploInput.value);
            const n = parseInt(numeroInput.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(multiplo) || multiplo <= 0) {
                mostrarError("⚠️ Por favor, ingresa un número base válido mayor a 0");
                multiploInput.focus();
                return;
            }
            
            if (isNaN(n) || n <= 0) {
                mostrarError("⚠️ Por favor, ingresa un número límite válido mayor a 0");
                numeroInput.focus();
                return;
            }
            
            if (n > 1000) {
                mostrarError("⚠️ El número límite no puede ser mayor a 1000");
                numeroInput.focus();
                return;
            }
            
            // Generar múltiplos
            mostrarMultiplos(multiplo, n);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para generar y mostrar los múltiplos
        function mostrarMultiplos(multiplo, n) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #e6f3ff; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #1a365d; margin-bottom: 15px;">🔢 Múltiplos de ${multiplo} hasta ${n}</h3>`;
            
            // Variables del ciclo según el patrón detectado
            let c = 1; // c: Contador que recorre de 1 a n
            let contadorMultiplos = 0; // Para contar cuántos múltiplos encontramos
            
            // Reglas del ciclo:
            // Inicio: c empieza en 1
            // Condición: Repetir mientras c sea menor o igual que n
            // Filtro: Si (c % multiplo === 0), entonces mostramos c
            // Actualización: c aumenta en 1 en cada repetición
            
            output += `<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px;">`;
            
            while (c <= n) {
                // Filtro: Verificar si c es múltiplo del número base
                if (c % multiplo === 0) {
                    // La acción es "Escribir el múltiplo encontrado"
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
                    
                    contadorMultiplos++;
                }
                
                c++; // Actualización: c aumenta en 1
            }
            
            output += `</div>`;
            
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("multiplo").value = "";
            document.getElementById("numero").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("multiplo").focus();
        });

        // Permitir ejecutar con Enter
        document.getElementById("numero").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnMostrar").click();
            }
        });

        document.getElementById("multiplo").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("numero").focus();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("multiplo").focus();
        });

        // Validación en tiempo real para los campos numéricos
        document.getElementById("numero").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 1000) {
                this.value = 1000;
            }
        });

        document.getElementById("multiplo").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 100) {
                this.value = 100;
            }
        });
