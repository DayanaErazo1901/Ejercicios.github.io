        // Función principal para calcular la suma de divisores
        document.getElementById("btnCalcular").addEventListener("click", function() {
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
            
            // Calcular suma de divisores
            calcularSumaDivisores(num);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para calcular y mostrar la suma de divisores
        function calcularSumaDivisores(num) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #e65100; margin-bottom: 15px; text-align: center;">Suma de Divisores de ${num}</h3>`;
            
            // Variables del algoritmo
            let i = 1;              // i: Contador que probará ser divisor (desde 1 hasta num)
            let suma = 0;           // suma: Acumulador que guarda la suma de divisores encontrados
            let divisores = [];     // Array para mostrar el proceso
            let procesoSuma = [];   // Array para mostrar paso a paso la suma
            
            // Reglas del ciclo:
            // ANTES: suma = 0
            // CICLO: Contador i va desde 1 hasta num
            // DENTRO DEL CICLO (FILTRO): Si num % i = 0, entonces suma = suma + i
            // DESPUÉS: Mostrar suma
            
            while (i <= num) {
                // Filtro: verificar si i es divisor de num
                if (num % i === 0) {
                    divisores.push(i);      // i es divisor, lo guardamos para mostrar
                    suma = suma + i;        // Acumulamos el divisor en la suma
                }
                i++; // Actualización: i aumenta en 1
            }
            
            // Mostrar resultado
            if (divisores.length === 0) {
                output += `<div class="no-divisores">
                    <strong>ℹ️ No se encontraron divisores para ${num}</strong>
                </div>`;
            } else {
                // Mostrar resultado final
                output += `<div class="resumen-total">
                    <div style="font-size: 1.2em; color: #555; margin-bottom: 10px;">Suma Total de Divisores:</div>
                    <div class="numero">${suma}</div>
                </div>`;
                
                // Mostrar divisores encontrados
                output += `<div style="text-align: center; margin: 15px 0;">
                    <div style="margin-bottom: 10px; color: #555; font-weight: 500;">Divisores encontrados:</div>`;
                
                divisores.forEach(divisor => {
                    output += `<span class="divisor">${divisor}</span>`;
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
                document.getElementById("btnCalcular").click();
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

        // Ejemplo automático con el caso que mencionaste (número 6)
        window.addEventListener("load", () => setTimeout(() => { 
            document.getElementById("numero").value = 6; 
            document.getElementById("btnCalcular").click(); 
        }, 1000));
