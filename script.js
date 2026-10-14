console.log("eChamp carregado com sucesso!");

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});