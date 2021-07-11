/** Global Variables */
const divs = document.querySelectorAll('div')
const links = document.querySelectorAll('a');
const btn = document.getElementById('button')
const taskBar = document.getElementById('taskbar')
const testmon = document.querySelectorAll('.testmonials ul li')
const qoutes =  document.querySelectorAll('.testmonials div q')
console.log(qoutes)

// To Scroll smoothly to the specfic element
links.forEach((link) =>{
    link.addEventListener("click", ()=>{
        const linkNames = link.innerText;
        divs.forEach((item)=>{
            const dataNav = item.getAttribute("data-nav");
            if(linkNames == dataNav){
                item.scrollIntoView({behavior:"smooth"});
                links.forEach(nlink =>{
                    nlink.style.color="#fff"
                })
                link.style.color ="#2ecc71"
            }
        })
    })
})

//add active class to list

testmon.forEach((list) =>{
    const myList = list.getAttribute('data-list')
    list.addEventListener("click", (evt)=>{
        testmon.forEach(nlist =>{
            nlist.classList.remove('active')
        })
        list.classList.add('active');

        qoutes.forEach(quote =>{
            const myQuote= quote.getAttribute('data-set')
            if(myList == myQuote){
                quote.style.display='block'
            }else{
                quote.style.display='none'
            }
        })
    })
})


//To click on button
function myFunction(){
    document.documentElement.scrollTop=0;
    
}
window.addEventListener('scroll', ()=>{
    if (document.documentElement.scrollTop > 870){
        btn.style.display="block";
        taskBar.style.cssText= "position:fixed; top:0; width:100%";
    }else{
        btn.style.display="none";
        taskBar.style.position="relative";
    }

    for(const dv of divs){
        const dataNav = dv.getAttribute('data-nav')
        const rect = dv.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= 150){
            links.forEach(link =>{
                if(link.innerText == dataNav){
                    links.forEach(nlink =>{
                        nlink.style.color="#fff"
                    })
                    link.style.color ="#2ecc71"  
                }
            })
        }
    }
    
})

//Zoom in/out pic


mediumZoom('.zoom',{
    margin:-100,
    background:"linear-gradient(to right, black,blue)",
    scrollOffset:20
})

