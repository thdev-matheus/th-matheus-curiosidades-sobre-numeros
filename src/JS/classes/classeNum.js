import { Modal } from "./classeModal.js"

class Num {
    static pegarInfoNum(num) {
        const url = `http://numbersapi.com/${num}/trivia`;
        return fetch(url)
            .then(response => {
                return response.text();
            });
    };

    static async mostraTextoNum() {
        const inputNum = document.getElementById("inputNum");
        const conteudoNum = document.getElementById("conteudoNum");
        
        if(inputNum.value === '') {
            Modal.mostraModal();
        } else {
            let texto = await this.pegarInfoNum(inputNum.value);
            conteudoNum.innerText = texto;
        };
    };
};

export { Num };