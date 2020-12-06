
export class BoxHomePage {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.prix = data.prix;
        this.lienImg = data.lienImg;
        this.description = data.description;
        this.idHTML = `box-home-${this.id}`;
        this.template = document.importNode(document.querySelector("#box-home-page-template").content, true);
        this.corps = this.template.querySelector(".box-card-container");
        this.btnImg = undefined;
        this.btnAjoutPanier = undefined;
    }
    Affiche(){
        console.log(this);
    }
    InitContenuHTML(){
        let boxHome = this.corps;
        boxHome.setAttribute('id', this.idHTML);
        this.btnAjoutPanier = boxHome.querySelector('.btn-add-panier');
        boxHome.querySelector('a').setAttribute('id', `${this.idHTML}-img`);
        boxHome.querySelector('a > img').setAttribute('src', `${this.lienImg}`);
        boxHome.querySelector('a > img').setAttribute('alt', `box-${this.title}`);
        boxHome.querySelector('.box-title').textContent = `${this.title}`;
        boxHome.querySelector('.box-prix > span').textContent = `${this.prix}`;
        this.EventInfoBox();
        this.EventAjoutPanier();
    }
    GetHTML(){
		return this.corps;
    }
    EventAjoutPanier(){
        this.btnAjoutPanier.addEventListener('click', () => {
            //SpiinerON
            this.UpdatePanier();
            //SPinnerOFF
        });
    }
    EventInfoBox(){
        this.btnImg.addEventListener('click', (e) => {
            e.preventDefault();
            this.UpdateCurrentBoxInfo();
            window.location.href = "infoBox.html";
        })
    }
    UpdatePanier(){
        alert('Dans UpdatePanier');
    }
    UpdateCurrentBoxInfo(){
        alert('Dans UpdatePanier');
    }
}
