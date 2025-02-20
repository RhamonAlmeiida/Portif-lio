
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let ouverlay = document.getElementById('ouverlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

ouverlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

class FormSubmit {
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button:"[data-button]",
    success: "<h1 class='succes'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",

});
FormSubmit.init();