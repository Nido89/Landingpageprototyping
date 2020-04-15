const hamburger_checkbox = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const navbar_items = document.getElementsByClassName('navbar__link');
const sections = document.getElementsByClassName('section');


hamburger_checkbox.addEventListener("change",function(){
    navbar.classList.toggle('active');
});

function menuColorChanger (){
    for (let section of sections ) {

        //SB for section boundary bottom,top,xy and height
        let sb = section.getBoundingClientRect();
        for(let item of navbar_items){
            let ib = item.getBoundingClientRect();

            if(ib.y >= sb.y && ib.y+ib.height <= sb.y+sb.height){
                let color = section.dataset.color;
                switch (color) {
                    case 'dark':
                        item.classList.add('dark');
                        
                        break;
                    case 'light':
                        break;
                    item.classList.remove('light')
                }
            }
        }
        
    }
}

document.addEventListener('scroll',menuColorChanger);