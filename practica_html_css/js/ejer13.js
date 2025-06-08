        // Función principal para verificar si un número es primo
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
            
            if (num < 2) {
                mostrarError("⚠️ Los números primos empiezan desde 2");
                numeroInput.focus();
                return;
            }
            
            if (num > 1000) {
                mostrarError("⚠️ El número no puede ser mayor a 1000");
                numeroInput.focus();
                return;
            }
            
            // Verificar si es primo
            verificarPrimo(num);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p class="error">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para verificar si un número es primo
        function verificarPrimo(num) {
            const resultado = document.getElementById("resultado");
            
            // Calcular si es primo
            let cantDivisores = 0;
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    cantDivisores++;
                }
            }
            
            const esPrimo = cantDivisores === 2;
            
            // Mostrar solo el resultado final
            let output = '';
            
            if (esPrimo) {
                output = `<div class="resultado-primo">
                    <div style="font-size: 1.5em; margin-bottom: 10px;">✅ ¡ES PRIMO!</div>
                    <div class="numero-grande es-primo">${num}</div>
                    <div style="font-size: 1.1em; color: #2e7d32; margin-top: 10px;">
                        Tiene exactamente <strong>2 divisores</strong>
                    </div>
                </div>`;
            } else {
                output = `<div class="resultado-no-primo">
                    <div style="font-size: 1.5em; margin-bottom: 10px;">❌ NO ES PRIMO</div>
                    <div class="numero-grande no-es-primo">${num}</div>
                    <div style="font-size: 1.1em; color: #c62828; margin-top: 10px;">
                        Tiene <strong>${cantDivisores} divisores</strong>
                    </div>
                </div>`;
            }
            
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
            } else if (valor < 2 && this.value !== "") {
                this.value = 2;
            }
        });