        // Función principal para verificar si un número es perfecto
        document.getElementById("btnVerificar").addEventListener("click", function() {
            // Obtener elementos del DOM
            const numeroInput = document.getElementById("numero");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valor
            const num = parseInt(numeroInput.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(num)) {
                mostrarError("⚠️ Por favor, ingresa un número válido");
                numeroInput.focus();
                return;
            }
            
            if (num < 1) {
                mostrarError("⚠️ El número debe ser mayor que 0");
                numeroInput.focus();
                return;
            }
            
            if (num > 1000) {
                mostrarError("⚠️ El número no puede ser mayor a 1000");
                numeroInput.focus();
                return;
            }
            
            // Verificar si es número perfecto
            verificarNumeroPerfecto(num);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para verificar si un número es perfecto
        function verificarNumeroPerfecto(num) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #e65100; margin-bottom: 15px; text-align: center;">Verificación de Número Perfecto: ${num}</h3>`;
            
            // Variables del algoritmo
            let i = 1;                    // i: Contador que probará ser divisor (desde 1 hasta num-1)
            let suma = 0;                 // suma: Acumulador que guarda la suma de divisores propios
            let divisoresPropios = [];    // Array para guardar divisores propios (sin el número mismo)
            
            // Reglas del ciclo:
            // ANTES: suma = 0
            // CICLO: Contador i va desde 1 hasta num-1 (divisores propios)
            // DENTRO DEL CICLO (FILTRO): Si num % i = 0, entonces suma = suma + i
            // DESPUÉS: Comparar: Si suma = num, es perfecto. Si no, no lo es.
            
            while (i < num) {  // Nota: i < num (no i <= num) para excluir el número mismo
                // Filtro: verificar si i es divisor de num
                if (num % i === 0) {
                    divisoresPropios.push(i);    // i es divisor propio, lo guardamos
                    suma = suma + i;             // Acumulamos el divisor en la suma
                }
                i++; // Actualización: i aumenta en 1
            }
            
            // Verificar si es perfecto: comparar suma con el número original
            const esPerfecto = (suma === num);
            
            // Mostrar resultado
            if (divisoresPropios.length === 0) {
                output += `<div class="resultado-no-perfecto">
                    <div style="font-size: 1.5em; margin-bottom: 10px;">❌ No es Perfecto</div>
                    <div class="numero">${num}</div>
                    <div style="margin-top: 15px;">No tiene divisores propios</div>
                </div>`;
            } else {
                // Mostrar resultado principal
                if (esPerfecto) {
                    output += `<div class="resultado-perfecto">
                        <div style="font-size: 1.5em; margin-bottom: 10px;">✅ ¡ES PERFECTO!</div>
                        <div class="numero">${num}</div>
                        <div style="margin-top: 15px;">La suma de sus divisores propios es igual al número</div>
                    </div>`;
                } else {
                    output += `<div class="resultado-no-perfecto">
                        <div style="font-size: 1.5em; margin-bottom: 10px;">❌ No es Perfecto</div>
                        <div class="numero">${num}</div>
                        <div style="margin-top: 15px;">La suma de sus divisores propios NO es igual al número</div>
                    </div>`;
                }
                
                // Mostrar divisores propios encontrados
                output += `<div style="text-align: center; margin: 15px 0;">
                    <div style="margin-bottom: 10px; color: #555; font-weight: 500;">Divisores propios encontrados:</div>`;
                
                divisoresPropios.forEach(divisor => {
                    output += `<span class="divisor-propio">${divisor}</span>`;
                });
                
                output += `</div>`;
                

            }
            
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

        // Permitir calcular con Enter
        document.getElementById("numero").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnVerificar").click();
            }
        });

        // Enfocar el campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("numero").focus();
        });

        // Validación en tiempo real
        document.getElementById("numero").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 1000) {
                this.value = 1000;
            } else if (valor < 1 && this.value !== "") {
                this.value = 1;
            }
        });