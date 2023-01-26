// Burger Menu

const navToggle = document.querySelector('.mobile-nav__toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute('data-visible');
})

// Carousel Gallery
const controlRight = document.querySelector('.control--right');
const controlLeft = document.querySelector('.control--left');
const gallery = document.querySelector('.gallery-show');

controlRight.addEventListener("click", event => {
    gallery.scrollLeft += 2000;
    controlRight.style.display = 'none';
    controlLeft.style.display = 'block';
});

controlLeft.addEventListener("click", event => {
    gallery.scrollLeft -= 2000;
    controlLeft.style.display = 'none';
    controlRight.style.display = 'block';
});

gallery.addEventListener("scroll", event => {
    let maxScroll = gallery.scrollWidth-document.querySelector('.container').scrollWidth;
    if (gallery.scrollLeft == maxScroll) {
        controlRight.style.display = 'none';
        controlLeft.style.display = 'block';
    }
})

gallery.addEventListener("scroll", event => {
    if (gallery.scrollLeft == 0) {
        controlLeft.style.display = 'none';
        controlRight.style.display = 'block';
    }
});


// Intersection observer

class Sellers {
    
    constructor(observer) {
        this.observer = observer
        this.init()
    }
    
    init() {
        const targets = document.querySelectorAll('.sellers-list li');
        
        targets.forEach(li => {
            this.observer.observe(li)
        })
    }
}


class Features {
    
    constructor(observer) {
        this.observer = observer
        this.init()
    }
    
    init() {
        const targets = document.querySelectorAll('.best-feature li');
        
        targets.forEach(li => {
            this.observer.observe(li)
        })
    }
}

class Blogs {
    
    constructor(observer) {
        this.observer = observer
        this.init()
    }
    
    init() {
        const targets = document.querySelectorAll('.blog-list li');
        
        targets.forEach(li => {
            this.observer.observe(li)
        })
    }
}

var options = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback(entries) {
    entries.filter(el => {
        if(el.isIntersecting) {
            el.target.classList.add('visible');
        }
    })
}

let observer = new IntersectionObserver(callback, options);

const sellers = new Sellers(observer);
const features = new Features(observer);
const blogs = new Blogs(observer);