
window.onload = function(){
    changeView('home');
}
function changeView(param){
    var values = {
        'home': ['A New Way To Manage Your Funds','  Finalyst Helps You<ul><li>Keep in check your expenditures.</li><li>Keep your investments in track.</li><li>A graphical representation of all financial transactions.</li><li>Analyse all different kinds of taxes and additional fee.</li><li>Montly PnL report with insights.</li><li>AI suggestions for next investemnts.</li></ul>'],
        'about':['Know More About Finalyst','Finalyst Is An Initiative Started By People Who Believe Personal Finance Is A Key To A Better Life <ul><li>A Bootstrapped Startup That Helps You Make Better Financial Decisions.</li><li>An Easy To Use Interface For People In All Walks Of Life.</li><li>Both Android and iOS Compatibilty.</li><li>Analyse all different kinds of taxes and additional fee.</li></ul>']
    }
    var head  = document.querySelector(".content h3");
    head.innerHTML = values[param][0];

    var body = document.querySelector(".content p");
    body.innerHTML = values[param][1];

    var img = document.querySelector("#right-body img");
    img.src = "./assets/"+param+".png";

}