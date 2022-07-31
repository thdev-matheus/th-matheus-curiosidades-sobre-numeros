class Modal {
    static escondeModal() {
        const containerModal = document.getElementById("containerModal");
        containerModal.classList.remove("mostrar");
    };

    static mostraModal() {
        const containerModal = document.getElementById("containerModal");
        const botaoModal = document.getElementById("botaoModal");
        
        containerModal.classList.add("mostrar");
        botaoModal.addEventListener("click", () => {this.escondeModal()});
    };
};

export { Modal };