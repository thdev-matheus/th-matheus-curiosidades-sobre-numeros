import { Modal } from "./classeModal.js"

class Ano {
    static pegarInfoAno(num) {
        const url = `http://numbersapi.com/${num}/year`;
        return fetch(url)
            .then(response => {
                return response.text();
            });
    };

    static async mostraTextoAno() {
        const inputAno = document.getElementById("inputAno");
        const conteudoAno = document.getElementById("conteudoAno");
        
        if(inputAno.value === '') {
            Modal.mostraModal();
        } else {
            let texto = await this.pegarInfoAno(inputAno.value);
            conteudoAno.innerText = texto;
        };
    };
};

export { Ano };