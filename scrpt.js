window.onload = () => {

    var banner = document.createElement('div');
    banner.classList.add('banner')
    document.querySelector('main').append(banner);

    var banner_info = document.createElement('div');
    banner_info.classList.add('bannerinfo');
    banner_info.innerHTML = `
<h1>Infinite Loop</h1>
<p>
Bootstrap 4.0 Parallax Theme
Free HTML Template by TOOPLATE
</p>
`
    banner.append(banner_info);
    document.querySelector('main').append(banner)

    var downbtn = document.createElement('a');
    downbtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`
    downbtn.style.fontSize = '50px'
    downbtn.style.padding = '10px'
    downbtn.style.color = 'white'
    downbtn.style.display = 'block'
    downbtn.href = '#whatwedo'
    banner.append(downbtn)


    var whatwedo = document.createElement('div');
    whatwedo.classList.add('whatwedo')
    whatwedo.setAttribute('id', 'whatwedo')
    whatwedo.innerHTML = `
    <div>
    <h1>What We Do</h1>
    <p>This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us.
    If you have any question, you can contact us or chat with us on our <a href = "#">Tooplate
    Facebook page.</a></p>
    </div>
    <div class="what_we_do_options"></div>
   
`
    whatwedo.style.display = 'flex'
    whatwedo.style.flexDirection = 'column'
    whatwedo.style.gap = '15px'
    whatwedo.style.color = 'grey'
    document.querySelector('main').append(whatwedo)

    var whatwedodata = [
        {
            name: 'Market Analysis',
            description: 'Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.',
            icon: '<i class="far fa-3x fa-chart-bar text-center tm-icon"></i>',
        },
        {
            name: 'Fast Support',
            description: `Credit goes to <a href = "#">Pexels</a> website for all images used in this template. Cras condimentum mi et sapien dignissim luctus`,
            icon: '<i class="far fa-3x fa-comment-alt text-center tm-icon"></i>',
        },
        {
            name: 'Top Security',
            description: 'You have no authority to post this template as a ZIP file on your template collection websites. You can use this template for your commercial websites.',
            icon: '<i class="fas fa-3x fa-fingerprint text-center tm-icon"></i>',
            button: 'Learn More'
        },
        {
            name: 'Social Work',
            description: `You can change <a href = "#">Font Awesome icons</a> by either fas or far in the HTML codes. For Examples:`,
            icon: '<i class="fas fa-3x fa-users text-center tm-icon"></i>',
            button: 'Details'
        }
    ]



    whatwedodata.map((e) => {
        const what_we_do_option = document.createElement('div');
        what_we_do_option.classList.add('what_we_do_option')
        what_we_do_option.innerHTML = `
    <h1> ${e.icon} ${e.name}</h1>
    <p>${e.description}</p>
    ${e.button ? `<button>${e.button}</button>` : ''}
    `
        document.querySelector('.what_we_do_options').append(what_we_do_option)

    })

    var testimonial_container = document.createElement('div');
    testimonial_container.classList.add('testimonial_container');
    testimonial_container.innerHTML = `
    <h1>Testimonials</h1>
    <p>Nulla dictum sem non eros euismod, eu placerat tortor lobortis. Suspendisse id velit eu libero pellentesque interdum. Etiam quis congue eros.</p>
    <div class="testimonial_box"></div>
`
    document.querySelector('main').append(testimonial_container)



    var testimonials = [
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-01.jpg',
            info: 'This background image includes a semi-transparent overlay layer.This section also has a parallax image effect.',
            name: 'Catherine Win (Designer)'
        },
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-02.jpg',
            info: 'Testimonial section comes with carousel items. You can use Infinite Loop HTML CSS template for your websites.',
            name: 'Dual Rocker (CEO)'
        },
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-03.jpg',
            info: 'Nulla finibus ligula nec tortor convallis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus',
            name: 'Sandar Soft (Marketing)'
        }
    ]


    testimonials.map((x) => {
        const testimonial = document.createElement('div');
        testimonial.classList.add('testimonial')
        testimonial.innerHTML = `
    <img src="${x.img}"/>
    <p>${x.info}</p>
    <span>${x.name}</span>
    `
        document.querySelector('.testimonial_box').append(testimonial)
    })

    var gallerycontainer = document.createElement('div');
    gallerycontainer.classList.add('gallerycontainer')

    gallerycontainer.innerHTML = `  
    <h1>Gallery</h1>
    <p>Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.</p>
    <div class="gallery_box"></div>
`
    document.querySelector('main').append(gallerycontainer)

    var gallery = [
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-01.jpg',
            description: 'Physical Health EXERCISE!'
        },
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-02.jpg',
            description: 'Rainon Glass SECOND IMAGE'
        },
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-03.jpg',
            description: 'SEAVIEW MEGACITY'
        },
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-04.jpg',
            description: 'DREAMGIRL THOUGHTS'
        },
        {
            img: 'https://www.tooplate.com/templates/2117_infinite_loop/img/gallery-tn-05.jpg',
            description: 'WORKSTATION OFFICES'
        }
    ]
    gallery.map((v) => {
        const gallerys = document.createElement('div');
        gallerys.classList.add('gallerys');
        gallerys.innerHTML = `
        <img src = "${v.img}"/>
        <div><p>${v.description}</p></div>
        
    `
        document.querySelector('.gallery_box').append(gallerys)
    })

    var count = 1
    document.querySelector('.menu_btn').addEventListener('click', () => {
        count++
        document.querySelector('.menu_btn').innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        `
        if (count % 2 == 0) {
            document.querySelector('nav').classList.add('navopen')
        } else {
            document.querySelector('nav').classList.remove('navopen')
            document.querySelector('.menu_btn').innerHTML = `
            <i class="fa-solid fa-bars"></i>
            `
        }
    })
    window.addEventListener('scroll',()=>{
        var scrolly = window.scrollY
        if(scrolly > 300){
            document.querySelector('header').style.backgroundColor = '#357'
        }else{
            document.querySelector('header').style.backgroundColor = 'transparent'
        }
    })



}