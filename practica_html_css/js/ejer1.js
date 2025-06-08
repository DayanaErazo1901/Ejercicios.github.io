
        // Función para mostrar errores
        function mostrarError(textoError) {
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<p style="color: red; font-weight: bold; background-color: #ffe6e6; padding: 10px; border-radius: 5px;">${textoError}</p>`;
            resultado.classList.add("show");
        }

        // Función para generar y mostrar las repeticiones
        function mostrarRepeticiones(mensaje, n) {
            const resultado = document.getElementById("resultado");
            let output = `<div style="background-color: #e6ffe6; padding: 15px; border-radius: 5px; margin-top: 10px;">`;
            output += `<h3 style="color: #2d5016; margin-bottom: 10px;">✅ Resultado: "${mensaje}" repetido ${n} veces</h3>`;
            
            // Usar un bucle while como en el ejercicio original
            let contador = 1;
            while (contador <= n) {
                output += `<p style="margin: 5px 0; padding: 5px; background-color: white; border-left: 3px solid #4CAF50;">${contador}. ${mensaje}</p>`;
                contador++;
            }
            
            output += `</div>`;
            resultado.innerHTML = output;
            resultado.classList.add("show");
        }

        // Función para limpiar formulario
        document.getElementById("btnLimpiar").addEventListener("click", function() {
            document.getElementById("numero").value = "";
            document.getElementById("mensaje").value = "";
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            resultado.classList.remove("show");
            document.getElementById("numero").focus();
        });

        // Permitir ejecutar con Enter en ambos campos
        document.getElementById("numero").addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                document.getElementById("mensaje").focus();
            }
        });

        document.getElementById("mensaje").addEventListener("keypress", function(e) {
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
            if (valor > 500) {
                this.value = 500;
            }
        });