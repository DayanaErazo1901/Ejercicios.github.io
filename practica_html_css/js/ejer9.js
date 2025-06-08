        // Función principal para calcular la suma de números pares entre dos números
        document.getElementById("btnCalcular").addEventListener("click", function() {
            // Obtener elementos del DOM
            const num1Input = document.getElementById("num1");
            const num2Input = document.getElementById("num2");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const num1 = parseInt(num1Input.value);
            const num2 = parseInt(num2Input.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(num1)) {
                mostrarError("⚠️ Por favor, ingresa un número inicial válido");
                num1Input.focus();
                return;
            }
            
            if (isNaN(num2)) {
                mostrarError("⚠️ Por favor, ingresa un número final válido");
                num2Input.focus();
                return;
            }
            
            if (num1 > num2) {
                mostrarError("⚠️ El número inicial no puede ser mayor que el final");
                num1Input.focus();
                return;
            }
            
            if (num2 - num1 > 100) {
                mostrarError("⚠️ El rango no puede ser mayor a 100 números");
                return;
            }
            
            // Calcular suma de números pares
            calcularSumaPares(num1, num2);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para calcular y mostrar la suma de números pares
        function calcularSumaPares(num1, num2) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #e65100; margin-bottom: 15px; text-align: center;">➕ Suma de Números Pares del ${num1} al ${num2}</h3>`;
            
            // Variables del algoritmo
            let c = num1;           // c: Contador que va de num1 a num2
            let suma = 0;           // suma: ACUMULADOR - ¡Debe empezar en 0!
            let paresEncontrados = [];

            
            // Reglas del ciclo:
            // ANTES DEL CICLO: Inicializar suma = 0
            // CICLO: Contador c va desde num1 hasta num2
            // DENTRO DEL CICLO: Si c es par, entonces suma = suma + c
            // DESPUÉS DEL CICLO: Mostrar el valor final de suma
            
            while (c <= num2) {
                // Filtro: verificar si el número es par
                if (c % 2 === 0) {
                    paresEncontrados.push(c);
                    suma = suma + c;  // Actualizar el ACUMULADOR
                }
                c++; // Actualización: c aumenta en 1
            }
            
            // Mostrar resultado
            if (paresEncontrados.length === 0) {
                output += `<div class="no-pares">
                    <strong>ℹ️ No hay números pares en el rango del ${num1} al ${num2}</strong><br>
                    <strong>Suma total: 0</strong>
                </div>`;
            } else {
                // Mostrar la suma total (resultado principal)
                output += `<div class="suma-total">
                    <div style="font-size: 1.2em; color: #555; margin-bottom: 10px;">Suma Total:</div>
                    <div class="numero">${suma}</div>
                </div>`;
                
                // Mostrar números pares encontrados
                output += `<div style="text-align: center; margin: 15px 0;">
                    <div style="margin-bottom: 10px; color: #555; font-weight: 500;">Números pares encontrados:</div>`;
                
                paresEncontrados.forEach(par => {
                    output += `<span class="numero-par-suma">${par}</span>`;
                });
                
                output += `</div>`;
            }
            
            output += `</div>`;
            
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("num1").focus();
        });

        // Permitir navegación con Enter
        document.getElementById("num1").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("num2").focus();
            }
        });

        document.getElementById("num2").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnCalcular").click();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("num1").focus();
        });

        // Validación en tiempo real
        document.getElementById("num1").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 100) {
                this.value = 100;
            } else if (valor < -100) {
                this.value = -100;
            }
        });

        document.getElementById("num2").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 100) {
                this.value = 100;
            } else if (valor < -100) {
                this.value = -100;
            }
        });

        // Ejemplo automático con el caso que mencionaste (1 al 6)
        window.addEventListener("load", () => setTimeout(() => { 
            document.getElementById("num1").value = 1; 
            document.getElementById("num2").value = 6; 
            document.getElementById("btnCalcular").click(); 
        }, 1000));