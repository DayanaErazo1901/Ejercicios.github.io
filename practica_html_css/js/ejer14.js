        // Actualizar visualización de la operación
        function actualizarOperacion() {
            const factor1 = document.getElementById("factor1").value || "_";
            const factor2 = document.getElementById("factor2").value || "_";
            document.getElementById("operacionVisual").textContent = `${factor1} × ${factor2} = ?`;
        }

        // Event listeners para actualizar la operación
        document.getElementById("factor1").addEventListener("input", actualizarOperacion);
        document.getElementById("factor2").addEventListener("input", actualizarOperacion);

        // Función principal para calcular multiplicación por sumas sucesivas
        document.getElementById("btnCalcular").addEventListener("click", function() {
            // Obtener elementos del DOM
            const factor1Input = document.getElementById("factor1");
            const factor2Input = document.getElementById("factor2");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const a = parseInt(factor1Input.value);
            const b = parseInt(factor2Input.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(a) || isNaN(b)) {
                mostrarError("⚠️ Por favor, ingresa ambos números");
                return;
            }
            
            if (a < 0 || b < 0) {
                mostrarError("⚠️ Los números deben ser positivos");
                return;
            }
            
            if (a > 100 || b > 100) {
                mostrarError("⚠️ Los números no pueden ser mayores a 100");
                return;
            }
            
            // Calcular multiplicación por sumas sucesivas
            calcularMultiplicacion(a, b);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p class="error">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para calcular multiplicación por sumas sucesivas
        function calcularMultiplicacion(a, b) {
            const resultado = document.getElementById("resultado");
            
            // Calcular usando sumas sucesivas
            let resultadoFinal = 0;
            for (let i = 0; i < b; i++) {
                resultadoFinal += a;
            }
            
            // Mostrar solo el resultado final
            let output = `<div class="resultado-final">
                <div style="font-size: 1.5em; margin-bottom: 10px;"> Resultado</div>
                <div style="font-size: 1.2em; color: #2e7d32; margin-bottom: 10px;">
                    ${a} × ${b} = ${resultadoFinal}
                </div>
                <div class="numero-grande">${resultadoFinal}</div>
            </div>`;
            
            resultado.innerHTML = output;
            resultado.classList.add("show");
            
            // Actualizar visualización final
            document.getElementById("operacionVisual").textContent = `${a} × ${b} = ${resultadoFinal}`;
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("factor1").value = "";
            document.getElementById("factor2").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("operacionVisual").textContent = "_ × _ = ?";
            document.getElementById("factor1").focus();
        });

        // Permitir calcular con Enter
        document.getElementById("factor1").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("factor2").focus();
            }
        });

        document.getElementById("factor2").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnCalcular").click();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("factor1").focus();
        });

        // Validación en tiempo real
        document.getElementById("factor1").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 100) {
                this.value = 100;
            } else if (valor < 0 && this.value !== "") {
                this.value = 0;
            }
        });

        document.getElementById("factor2").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 100) {
                this.value = 100;
            } else if (valor < 0 && this.value !== "") {
                this.value = 0;
            }
        });