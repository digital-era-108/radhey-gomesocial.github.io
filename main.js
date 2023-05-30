// Sidebar Start

// theme custom variales

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.custom-theme');

// font size
const fontSizes = document.querySelectorAll('.choose-size span');

// fix the sticky top right
var root = document.querySelector(':root');

// colors variables
const colors = document.querySelectorAll('.choose-color span');

// background variables
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// Message Variables

const messageNotification = document.querySelector('#msg');
const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message');
const messageSerach = document.querySelector('#msg-search');





const menuItem = document.querySelectorAll('.menu-item');

// remove active class from all menu items
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}

menuItem.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');

        // console.log(item,'i am side bar print');

        if(item.id != 'nft'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#nft .nft-count').style.display = 'none';
        }
    })
})

// ------------------- Sidebar End


// search bar

const searchMessage  = () => {
    const val = messageSerach.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}


messageSerach.addEventListener('keyup', searchMessage)


// ------------------- Messages Start
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.msg-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1000);
})

// Theme Customization

//open modal
const openthemeModal = () => {
    themeModal.style.display = 'grid';
}


// close model
const closeThemeModal = (e) => {
    if(e.target.classList.contains('custom-theme')){
        themeModal.style.display = 'none';
        console.log(e)
    }
}

themeModal.addEventListener('click',closeThemeModal);



theme.addEventListener('click',openthemeModal);



// font 

// remove active class from spans or fonts size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click',() => {

        removeSizeSelector(); 
        let fontSize;
        size.classList.toggle('active');
        
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');

        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');

        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');

        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');

        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }

    // change font size of the root html elements
    document.querySelector('html').style.fontSize = fontSize;
    })

})


// change primary colors

// remove active form colors
const changeActiveColor = () =>{ 
    colors.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}



colors.forEach(color => {
    color.addEventListener('click',() => {
        
        changeActiveColor();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})




// change backgorund color

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}


Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();
})


Bg1.addEventListener('click', () => {

    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();
})


Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBG();
})
 