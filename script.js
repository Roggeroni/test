/* =================================================
   EŁK I OKOLICE
   JavaScript
================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================================
           POBIERAMY LINKI
        ========================================== */

        const links =
            document.querySelectorAll(
                ".link-card"
            );



        /* =========================================
           EFEKT KLIKNIĘCIA
        ========================================== */

        links.forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function () {


                        link.classList.add(
                            "clicked"
                        );


                        setTimeout(
                            function () {

                                link.classList.remove(
                                    "clicked"
                                );

                            },
                            250
                        );


                    }
                );


            }
        );



        /* =========================================
           PARALLAX TŁA
           
           Działa tylko na komputerze.
        ========================================== */

        const background =
            document.querySelector(
                ".background"
            );


        if (
            window.innerWidth > 768 &&
            background
        ) {


            document.addEventListener(
                "mousemove",
                function (event) {


                    const x =
                        (
                            event.clientX /
                            window.innerWidth
                        ) - 0.5;


                    const y =
                        (
                            event.clientY /
                            window.innerHeight
                        ) - 0.5;


                    background.style.transform =
                        `
                        scale(1.08)
                        translate(
                            ${x * 10}px,
                            ${y * 10}px
                        )
                        `;


                }
            );


        }



        /* =========================================
           OBSŁUGA KLAWIATURY
        ========================================== */

        links.forEach(
            function (link) {


                link.addEventListener(
                    "keydown",
                    function (event) {


                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {


                            link.classList.add(
                                "clicked"
                            );


                            setTimeout(
                                function () {

                                    link.classList.remove(
                                        "clicked"
                                    );

                                },
                                250
                            );


                        }


                    }
                );


            }
        );


    }
);