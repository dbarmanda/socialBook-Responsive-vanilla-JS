console.log('index.js included!')


// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messageNotifications = document.querySelector('#messages-notifications');

const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = messages.querySelector('#message-search');

//Theme/Display customization

const theme = document.querySelector('#theme-menu');
const themeModal = document.querySelector('.customize-theme');


//grab the root variables

var root = document.querySelector(':root');

const fontSizes = document.querySelectorAll('.choose-size span')

const colorPallete = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


    // =============== SIDEBAR ================== 
        // helper to remove all other active classes for click event
    const changeActiveItems = function(){
        menuItems.forEach(item =>{
            item.classList.remove('active');
        })
    }

    //------ giving active class and action
    menuItems.forEach((item) =>{
        item.addEventListener('click', () => {

            changeActiveItems();

            item.classList.add('active');

            if(item.id != 'notifications'){
                document.querySelector('.notifications-popup').style.display = 'none';
            }
            else{
                document.querySelector('.notifications-popup').style.display = 'block';

                document.querySelector('#notifications .notifications-count').style.display = 'none';
            }
        })
    })

    // ==================== MESSAGES =======================

    // search chats -user Name

    const searchMessage = () =>{
        const val = messageSearch.value.toLowerCase();
        // console.log(val);

        message.forEach(chat => {
            let name = chat.querySelector('h5').textContent.toLowerCase();

            if(name.indexOf(val)!= -1){
                chat.style.display = 'flex';

            }
            else{
                chat.style.display = 'none';
            }

            
        })
    }


    messageSearch.addEventListener('keyup', searchMessage);  /*   */

    // highlighting messages card when message menu-item is clicked 
    messageNotifications.addEventListener('click', ()=>{
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        messageNotifications.querySelector('.notifications-count').style.display = 'none';
        setTimeout(() => {
            messages.style.boxShadow = 'none';
        }, 2000);
    })
    

    // ----------- THEME/DISPLAY CUSTOMIZE MENU ITEM ----------

    // function openThemeModal(){
    //     themeModal.style.display = 'grid';
    // }


    // open model when clicked on menu-item 
    const openThemeModal = ()=>{
        themeModal.style.display = 'grid';
    }

    
    //close modal when clicked outside customize-card *****************
    const closeThemeModal = (e)=>{
        if(e.target.classList.contains('customize-theme')){
            themeModal.style.display="none";
        }
    }
    themeModal.addEventListener('click', closeThemeModal);

    theme.addEventListener('click', openThemeModal);
    

    // ------------ FONTS ---------------
    // We used "rem" for all our font fontSizes, so changing root Element("html") font size will help us better 

    const removeSizeSelector = () =>{
        fontSizes.forEach(size =>{
            size.classList.remove('active');
        })
    }

    fontSizes.forEach(size => {

        let fontSize;

        size.addEventListener('click', ()=>{

            removeSizeSelector();
            size.classList.toggle('active');            
            if(size.classList.contains('font-size-1')){
                fontSize = '10px';
                root.style.setProperty('--sticky-top-left', '5.4rem');
                root.style.setProperty('--sticky-top-right', '5.4rem');
            }
            else if(size.classList.contains('font-size-2')){
                fontSize = '13px';
                root.style.setProperty('--sticky-top-left', '5.4rem');
                root.style.setProperty('--sticky-top-right', '-7rem');
            }
            else if(size.classList.contains('font-size-3')){
                fontSize = '16px';
                root.style.setProperty('--sticky-top-left', '-2rem');
                root.style.setProperty('--sticky-top-right', '-17rem');
            }
            else if(size.classList.contains('font-size-4')){
                fontSize = '19px';
                root.style.setProperty('--sticky-top-left', '-5rem');
                root.style.setProperty('--sticky-top-right', '-25rem');
            }
            else if(size.classList.contains('font-size-5')){
                fontSize = '22px';
                root.style.setProperty('--sticky-top-left', '-10rem');
                root.style.setProperty('--sticky-top-right', '-33rem');
            }
    
        // changing font size of root element 
            document.querySelector('html').style.fontSize = fontSize;

        })

       
    })


    // ----------- remove previously active primary color class 'active'

    const removePrimary = ()=>{
        colorPallete.forEach(color =>{
            color.classList.remove('active');
        })
    }


    // =============== Change primary colors ===========

    colorPallete.forEach(color =>{

        color.addEventListener('click',()=>{

            removePrimary();
            let primaryHue;

            if(color.classList.contains('color-1')){
                primaryHue = 252;
            }
            else if(color.classList.contains('color-2')){
                primaryHue = 52;
            }
            else if(color.classList.contains('color-3')){
                primaryHue = 352;
            }
            else if(color.classList.contains('color-4')){
                primaryHue = 152;
            }
            else if(color.classList.contains('color-5')){
                primaryHue = 202;
            }

            color.classList.add('active');
            root.style.setProperty('--primary-color-hue', primaryHue);
        })
    })

    // ================ CHANGING THE BACKGROUND ===============


    let lightColorLightness;
    let darkColorLightness;
    let whiteColorLightness;

    const changeBG = ()=>{
        root.style.setProperty('--light-color-lightness',lightColorLightness);
        
        root.style.setProperty('--dark-color-lightness',darkColorLightness);
        
        root.style.setProperty('--white-color-lightness',whiteColorLightness);
    }


    bg1.addEventListener('click', ()=>{
        

        bg1.classList.add('active');             

        bg2.classList.remove('active');
        bg3.classList.remove('active');

        window.location.reload(); //reloading the page only
    }) 



    bg2.addEventListener('click', ()=>{
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';


        bg2.classList.add('active');

        bg1.classList.remove('active');
        bg3.classList.remove('active');

        changeBG();
    })

    bg3.addEventListener('click', ()=>{
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';


        bg3.classList.add('active');

        bg1.classList.remove('active');
        bg2.classList.remove('active');

        changeBG();
    })