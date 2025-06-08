        // Función principal para mostrar números pares entre dos números
        document.getElementById("btnMostrar").addEventListener("click", function() {
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
            
            // Generar secuencia de números pares
            mostrarPares(num1, num2);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para generar y mostrar la secuencia de números pares
        function mostrarPares(num1, num2) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #e65100; margin-bottom: 15px; text-align: center;">🔢 Números Pares del ${num1} al ${num2}</h3>`;
            
            // Variables del ciclo
            let c = num1; // c: Contador que va de num1 a num2
            let paresEncontrados = [];
            
            // Reglas del ciclo:
            // Inicio: c empieza en el valor num1
            // Condición: Repetir mientras c sea menor o igual que num2
            // Filtro: Si c % 2 = 0, entonces es par y lo mostramos
            // Actualización: c aumenta en 1 en cada repetición
            
            while (c <= num2) {
                // Filtro: verificar si el número es par
                if (c % 2 === 0) {
                    paresEncontrados.push(c);
                    output += `<span class="numero-par">${c}</span>`;
                }
                c++; // Actualización: c aumenta en 1
            }
            
            // Si no se encontraron números pares
            if (paresEncontrados.length === 0) {
                output += `<div class="no-pares">
                    <strong>ℹ️ No hay números pares en el rango del ${num1} al ${num2}</strong>
                </div>`;
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
                document.getElementById("btnMostrar").click();
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

        // Ejemplo automático comentado
        // window.addEventListener("load", () => setTimeout(() => { 
        //     document.getElementById("num1").value = 8; 
        //     document.getElementById("num2").value = 15; 
        //     document.getElementById("btnMostrar").click(); 
        // }, 1000));