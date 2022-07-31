import { Modal } from "./classeModal.js"

class Data {
    static gerarURL(dataStr) {
        let dataSeparada = dataStr.split("-");
        return `http://numbersapi.com/${dataSeparada[1]}/${dataSeparada[2]}/date`;
    };

    static pegarInfoData(data) {
        const url = this.gerarURL(data);
        return fetch(url)
            .then(response => {
                return response.text();
            });
    };

    static async mostraTextoData() {
        const inputData = document.getElementById("inputData");
        const conteudoData = document.getElementById("conteudoData");
        
        if(inputData.value === '') {
            Modal.mostraModal();
        } else {
            let texto = await this.pegarInfoData(inputData.value);
            conteudoData.innerText = texto;
        };
    };
};

export { Data };