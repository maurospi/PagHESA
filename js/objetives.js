//        function toggleobjetivos() {
//            const service = document.getElementById("service");
//      
//            // Alternar la visibilidad de la sección y la opacidad al hacer clic una sola vez
//            if (service.style.display === "none" || service.style.display === "") {
//                service.style.display = "block";
//                setTimeout(() => {
//                    service.style.opacity = "1";
//                }, 10); // Espera un pequeño tiempo para que el cambio de display sea procesado
//            } else {
//                service.style.opacity = "0";
//                setTimeout(() => {
//                    service.style.display = "none";
//                }, 500); // Espera el tiempo de la animación de opacidad
//            }
//        }
//
//        function toggleobjetivose() {
//            const service = document.getElementById("servicewrite");
//      
//            // Alternar la visibilidad de la sección y la opacidad al hacer clic una sola vez
//            if (service.style.display === "none" || service.style.display === "") {
//                service.style.display = "block";
//                setTimeout(() => {
//                    service.style.opacity = "1";
//                }, 10); // Espera un pequeño tiempo para que el cambio de display sea procesado
//            } else {
//                service.style.opacity = "0";
//                setTimeout(() => {
//                    service.style.display = "none";
//                }, 500); // Espera el tiempo de la animación de opacidad
//            }
//        }
//
//        function ocultarvideoobjetivo() {
//            const service = document.getElementById("service");
//
//            // Ocultar la sección con efecto de desvanecimiento
//            service.style.opacity = "0"; 
//            setTimeout(() => {
//                service.style.display = "none"; // Ocultar el contenido después de la animación
//            }, 500); // Espera el tiempo de la animación de opacidad
//        }
//
//        function ocultartextoobjetivo() {
//            const service = document.getElementById("servicewrite");
//
//            // Ocultar la sección con efecto de desvanecimiento
//            service.style.opacity = "0"; 
//            setTimeout(() => {
//                service.style.display = "none"; // Ocultar el contenido después de la animación
//            }, 500); // Espera el tiempo de la animación de opacidad
//        }
//
//        function ocultartodoobjetivo() {
//            const service = document.getElementById("service, servicewrite");
//
//            // Ocultar la sección con efecto de desvanecimiento
//            service.style.opacity = "0"; 
//            setTimeout(() => {
//                service.style.display = "none"; // Ocultar el contenido después de la animación
//            }, 500); // Espera el tiempo de la animación de opacidad
//        }
//
//        function ocultarServicios() {
//            const service1 = document.getElementById("servicewrite");
//            const service2 = document.getElementById("service");
//
//            // Ocultar las secciones con efecto de desvanecimiento
//            service1.style.opacity = "0"; 
//            service2.style.opacity = "0"; 
//            
//            setTimeout(() => {
//                service1.style.display = "none"; // Ocultar la sección después de la animación
//                service2.style.display = "none"; // Ocultar la sección después de la animación
//            }, 500); // Espera el tiempo de la animación de opacidad
//        }
//

        // Mostrar/ocultar el video de objetivos (servicio 1)
        function toggleobjetivos() {
            const service1 = document.getElementById("servicio");
            if (!service1) return;

            const isHidden = service1.style.display === "none" || getComputedStyle(service1).display === "none";
            if (isHidden) {
                service1.style.display = "block";
                window.setTimeout(function () {
                    service1.style.opacity = "1";
                }, 10);
            } else {
                service1.style.opacity = "0";
                window.setTimeout(function () {
                    service1.style.display = "none";
                }, 250);
            }
        }

        // Mostrar/ocultar los objetivos escritos (servicio 2)
        function toggleobjetivose() {
            const service2 = document.getElementById("servicio-escrito");
            if (!service2) return;

            const isHidden = service2.style.display === "none" || getComputedStyle(service2).display === "none";
            if (isHidden) {
                service2.style.display = "block";
                window.setTimeout(function () {
                    service2.style.opacity = "1";
                }, 10);
            } else {
                service2.style.opacity = "0";
                window.setTimeout(function () {
                    service2.style.display = "none";
                }, 250);
            }
        }

        // Mostrar ambos servicios
        function toggleambos() {
            const service1 = document.getElementById("servicio");
            const service2 = document.getElementById("servicio-escrito");

            if (service1) {
                service1.style.display = "block";
                setTimeout(() => {
                    service1.style.opacity = "1";
                }, 10);
            }
            if (service2) {
                service2.style.display = "block";
                setTimeout(() => {
                    service2.style.opacity = "1";
                }, 10);
            }
        }

        // Ocultar solo el servicio 1 (video)
        function ocultarvideoobjetivo() {
            const service1 = document.getElementById("servicio");
            if (!service1) return;

            service1.style.opacity = "0";
            window.setTimeout(function () {
                service1.style.display = "none";
            }, 250);
        }

        // Ocultar solo el servicio 2 (escrito)
        function ocultartextoobjetivo() {
            const service2 = document.getElementById("servicio-escrito");
            if (!service2) return;

            service2.style.opacity = "0";
            window.setTimeout(function () {
                service2.style.display = "none";
            }, 250);
        }

        // Ocultar ambos servicios
        function ocultarambos() {
            const service1 = document.getElementById("servicio");
            const service2 = document.getElementById("servicio-escrito");

            if (service1) {
                service1.style.opacity = "0";
                window.setTimeout(function () {
                    service1.style.display = "none";
                }, 250);
            }

            if (service2) {
                service2.style.opacity = "0";
                window.setTimeout(function () {
                    service2.style.display = "none";
                }, 250);
            }

            const btnOcultar = document.getElementById("ocultarambos");
            if (btnOcultar) btnOcultar.style.display = "none";
            
            const btnToggle = document.getElementById("toggleambos");
            if (btnToggle) btnToggle.style.display = "inline-block";
        }
        