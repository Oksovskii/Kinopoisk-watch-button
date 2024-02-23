const addWatchButton = () => {

    const currentUrl = window.location.href;
    const connect = document.querySelector(".styles_header__mzj3d") || document.querySelector(".styles_header__br783");
    
    const url = new URL(currentUrl);
    const link = "https://kinodivbox.github.io/kinodivbox?q="+url.pathname.match(/\d+/);
    
    const btn = document.createElement("button");
    btn.style = 'background-color: #f7f7f7';
    
    btn.className = "style_button__PNtXT style_buttonSize52__b5OBe style_buttonPrimary__ndPAb style_buttonLight____6ma style_withIconLeft___Myt9"
    btn.onclick = () => {
        window.open(link);
    };
    btn.innerHTML = "Смотреть";
    connect.appendChild(btn);

};

addWatchButton();
window.navigation.addEventListener("navigate", (event) => {
    addWatchButton();
});
