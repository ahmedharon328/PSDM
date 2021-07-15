/** Global Variables */
const divs = document.querySelectorAll('div')
const links = document.querySelectorAll('a');
const btn = document.getElementById('button')
const taskBar = document.getElementById('taskbar')
const testmon = document.querySelectorAll('.testmonials ul label span')
const qoutes =  document.querySelectorAll('.testmonials div q')
const myButton = document.getElementById('myButton');
const input = document.querySelectorAll('.testmonials input')
console.log(input[1])


const view = ()=>{
    const span = document.querySelectorAll('.tech div span');
    span.forEach((item)=>{
        var width = 1;
        var itemWidth = item.style.width
        var noPrecent = itemWidth.replace("%",'')
       var id = setInterval(() => {
            if (width >= noPrecent ){
                clearInterval(id)
            }
            else{
                width ++;
                item.innerHTML = width*1 +'%'
            }       
            }, 50);
        item.style.display="block"
    })
    const button = document.getElementById('doSomething').disabled = true
}


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
testmon.forEach((span) =>{
    const myspan = span.getAttribute('data-radio')
    span.addEventListener("click", (evt)=>{
        qoutes.forEach(quote =>{
            const myQuote= quote.getAttribute('data-set')
            if(myspan == myQuote){
                quote.style.display='block'
            }else{
                quote.style.display='none'
            }
        })
    })
})

function clicked(){
var counter = 1
    setInterval(() => {
        document.getElementById('radio'+counter).checked = true
        if(input[0].checked ){
            qoutes[3].style.display="none"
            qoutes[0].style.display="block"
        }else if(input[1].checked ){
            qoutes[0].style.display="none"
            qoutes[1].style.display="block"
        }else if(input[2].checked){
            qoutes[1].style.display="none"
            qoutes[2].style.display="block"
        }else if(input[3].checked){
            qoutes[2].style.display="none"
            qoutes[3].style.display="block"
        }
        counter++
        if(counter > 4){
            counter = 1
        } 
    }, 3000);
}

clicked()


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

