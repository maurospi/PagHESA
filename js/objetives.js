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

        // Mostrar solo el servicio 1
        function toggleobjetivos() {
            const service1 = document.getElementById("service");

            service1.style.display = "block";
            setTimeout(() => {
                service1.style.opacity = "1"; // Desvanecer al mostrarse
            }, 10);
        }

        // Mostrar solo el servicio 2
        function toggleobjetivose() {
            const service2 = document.getElementById("servicewrite");

            service2.style.display = "block";
            setTimeout(() => {
                service2.style.opacity = "1"; // Desvanecer al mostrarse
            }, 10);
        }

        // Mostrar ambos servicios
        function toggleambos() {
            const service1 = document.getElementById("service");
            const service2 = document.getElementById("servicewrite");

            service1.style.display = "block";
            service2.style.display = "block";

            setTimeout(() => {
                service1.style.opacity = "1"; // Desvanecer al mostrarse
                service2.style.opacity = "1"; // Desvanecer al mostrarse
            }, 10);
        }

        // Ocultar solo el servicio 1
        function ocultarvideoobjetivo() {
            const service1 = document.getElementById("service");

            service1.style.opacity = "0"; // Desvanecer al ocultarse
            setTimeout(() => {
                service1.style.display = "none"; // Ocultar el contenido después de la animación
            }, 500); // Espera el tiempo de la animación de opacidad
        }

        // Ocultar solo el servicio 2
        function ocultartextoobjetivo() {
            const service2 = document.getElementById("servicewrite");

            service2.style.opacity = "0"; // Desvanecer al ocultarse
            setTimeout(() => {
                service2.style.display = "none"; // Ocultar el contenido después de la animación
            }, 500); // Espera el tiempo de la animación de opacidad
        }

        // Ocultar ambos servicios
        function ocultarambos() {
            const service1 = document.getElementById("service");
            const service2 = document.getElementById("servicewrite");

            service1.style.opacity = "0";
            service2.style.opacity = "0";

            setTimeout(() => {
                service1.style.display = "none"; // Ocultar el contenido después de la animación
                service2.style.display = "none"; // Ocultar el contenido después de la animación
            }, 500); // Espera el tiempo de la animación de opacidad

            document.getElementById("ocultarambos").style.display = "none";
            document.getElementById("toggleambos").style.display = "inline-block";
        }
        