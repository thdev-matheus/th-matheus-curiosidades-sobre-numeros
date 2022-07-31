import { Data } from "./classes/classeData.js";
import { Num } from "./classes/classeNum.js";
import { Ano } from "./classes/classeAno.js";

const botaoPesquisaData = document.getElementById("botaoPesquisaData");
const botaoPesquisaNum = document.getElementById("botaoPesquisaNum");
const botaoPesquisaAno = document.getElementById("botaoPesquisaAno");

function exibeResultadoData() {
    return Data.mostraTextoData();
};

function exibeResultadoAno() {
    return Ano.mostraTextoAno()
}

function exibeResultadoNum() {
    return Num.mostraTextoNum();
}

botaoPesquisaData.addEventListener("click", exibeResultadoData);
botaoPesquisaAno.addEventListener("click", exibeResultadoAno);
botaoPesquisaNum.addEventListener("click", exibeResultadoNum);