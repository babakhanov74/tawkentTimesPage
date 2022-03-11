const dark = document.querySelector('.moon');
const users = document.querySelector('.header .users');
const main = document.querySelector('main');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const navBtm = document.querySelector('.nav_bottom');
const headerMain = document.querySelector('.header_main');
const user = document.querySelector('.black .container .navbar .right_nav .user');
const btn = document.querySelector('.section_two button');
const menuIcon = document.querySelector('.black .container .navbar .right_nav .menuu');
const menu = document.querySelector('.header .menu');
const bgCard = document.querySelector('.big_card')
const men = document.querySelector('.oddiy')
const menImg = document.querySelector('.men .img')
const woMen = document.querySelector('.oddiyy')
const woMenImg = document.querySelector('.women .img')

dark.addEventListener( 'click', function(){
    if(body.classList.contains('active')){
        body.classList.remove('active')
        btn.classList.remove('black')
        bgCard.classList.remove('active')
        $(".moon").html(' <ion-icon name="moon-outline" class="dark"></ion-icon>')
       
    }
    else{
        body.classList.add('active')
        btn.classList.add('black')
        bgCard.classList.add('active')
        $(".moon").html(' <ion-icon class="dark" name="sunny-outline"></ion-icon>')
    }
    
})

$('.black .container .navbar .right_nav .menuu').click(function(){
    $('.header .menu').toggleClass('show')
})

$('.black .container .navbar .right_nav .search').click(function(){
    $('.header .searchs').toggleClass('nones')
})




$('.black .container .navbar .left_nav .launge .lange').click(function(){
    $('.black .container .navbar .left_nav .launge .eng').toggleClass('shows')
    
})


user.addEventListener( 'click', function(){
    if(users.classList.contains('none')){
        users.classList.remove('none')
        main.classList.add('none')
        footer.classList.add('none')
        headerMain.classList.add('none')
        navBtm.classList.add('none')
        this.classList.add('red')
    }
    else{
        users.classList.add('none')
        main.classList.remove('none')
        footer.classList.remove('none')
        headerMain.classList.remove('none')
        navBtm.classList.remove('none')
        this.classList.remove('red')
    }

    
})
men.addEventListener("click",function(){
    if(men.classList.contains('oddiy')){
        this.classList.add('qizil')
        this.classList.remove("oddiy")
        $(".qizil .img").html('<img src="images/menu/Man.png" alt=""> ')

    }
    else{
        this.classList.remove('qizil')
        this.classList.add("oddiy")
        $(".oddiy .img").html('<img src="images2/SPORT/Man.svg" alt="">')
        woMen.classList.add('qizilt')
        woMen.classList.remove("oddiyy")
        $(".qizilt .img").html('  <img src="images2/SPORT/Women.svg" alt=""> ')
    }
})
woMen.addEventListener("click",function(){
    if(woMen.classList.contains('oddiyy')){
        this.classList.add('qizilt')
        this.classList.remove("oddiyy")
        $(".qizilt .img").html('  <img src="images2/SPORT/Women.svg" alt=""> ')
    }
    else{
        this.classList.d('qizilt')
        this.classList.add("oddiyy")
        $(".oddiyy .img").html(' <img src="images/menu/Women.png" alt="">')
        men.classList.add('qizil')
        men.classList.remove("oddiy")
        $(".qizil .img").html('<img src="images/menu/Man.png" alt=""> ')
    }
})