        // Función principal para realizar división por restas sucesivas
        document.getElementById("btnCalcular").addEventListener("click", function() {
            // Obtener elementos del DOM
            const dividendoInput = document.getElementById("dividendo");
            const divisorInput = document.getElementById("divisor");
            const resultado = document.getElementById("resultado");
            
            // Obtener y procesar valores
            const dividendoOriginal = parseInt(dividendoInput.value);
            const divisor = parseInt(divisorInput.value);
            
            // Limpiar resultados anteriores
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            
            // Validaciones
            if (isNaN(dividendoOriginal) || isNaN(divisor)) {
                mostrarError("⚠️ Por favor, ingresa números válidos en ambos campos");
                return;
            }
            
            if (dividendoOriginal < 1 || divisor < 1) {
                mostrarError("⚠️ Los números deben ser mayores a 0");
                return;
            }
            
            if (divisor === 0) {
                mostrarError("⚠️ No se puede dividir entre cero");
                return;
            }
            
            if (dividendoOriginal > 100 || divisor > 50) {
                mostrarError("⚠️ Usa números más pequeños para mejor visualización");
                return;
            }
            
            // Realizar división por restas sucesivas
            realizarDivisionPorRestas(dividendoOriginal, divisor);
        });

        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p class="error">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función principal de división por restas sucesivas
        function realizarDivisionPorRestas(dividendoOriginal, divisor) {
            const resultado = document.getElementById("resultado");
            
            // Variables según la estructura del ejercicio
            let dividendo = dividendoOriginal; // Copia para modificar
            let cociente = 0; // Contador de restas (empieza en 0)
            
            // CICLO WHILE: Mientras dividendo >= divisor
            while (dividendo >= divisor) {
                dividendo = dividendo - divisor;
                cociente++;
            }
            
            // El residuo es lo que queda en dividendo
            const residuo = dividendo;
            
            // Construir el resultado HTML (solo respuesta)
            let output = `
                <div class="division-formula">
                    ${dividendoOriginal} ÷ ${divisor} = ${cociente} (residuo ${residuo})
                </div>
                
                <div class="resultado-final">
                    <h4>Resultado:</h4>
                    <div class="cociente-residuo">
                        <div class="valor">
                            <div class="valor-numero">${cociente}</div>
                            <div class="valor-etiqueta">Cociente</div>
                        </div>
                        <div class="valor">
                            <div class="valor-numero">${residuo}</div>
                            <div class="valor-etiqueta">Residuo</div>
                        </div>
                    </div>
                </div>
            `;
            
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("dividendo").value = "";
            document.getElementById("divisor").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("dividendo").focus();
        });

        // Permitir calcular con Enter
        document.getElementById("dividendo").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("divisor").focus();
            }
        });

        document.getElementById("divisor").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("btnCalcular").click();
            }
        });

        // Enfocar el primer campo al cargar la página
        window.addEventListener("load", function() {
            document.getElementById("dividendo").focus();
        });

        // Validación en tiempo real
        document.getElementById("dividendo").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 100) {
                this.value = 100;
            }
        });

        document.getElementById("divisor").addEventListener("input", function() {
            const valor = parseInt(this.value);
            if (valor > 50) {
                this.value = 50;
            }
        });