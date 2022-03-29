const sec = document.querySelector('.s'),
     min = document.querySelector('.m'),
     hour = document.querySelector('.h'),
     minNum = document.querySelector('.minutes'),
     hourNum = document.querySelector('.hours')
     
    let nol = 0
    
     
function clock() {
    let time = new Date(),
    secArr = time.getSeconds() * 6,
    minArr = time.getMinutes() * 6,
    hourArr = time.getHours() * 30
     nol= nol + 0.5
     
    sec.style.transform = `rotate(${nol}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000/12);

  
    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}
  clock()
  
  const tabsItem = document.querySelectorAll('.tabsItem'),
        tabsContentItem = document.querySelectorAll('.tabsContentItem')
        for (let i = 0; i < tabsItem.length; i++) {
            tabsItem[i].addEventListener('click', function() {
                for (let j = 0; j < tabsItem.length; j++) {
                    tabsItem[j].classList.remove('active')
                    tabsContentItem[j].classList.remove('active')
                    
                }
                tabsItem[i].classList.add('active')
                tabsContentItem[i].classList.add('active')
            })
            
        }
        
        const secund = document.querySelector('.stopwatch__seconds'),
                minut = document.querySelector('.stopwatch__minutes'),
                soat = document.querySelector('.stopwatch__hours'),
                start = document.querySelector('.stopwatch__btn'),
                indic = document.querySelector('.tabsLink__span')
                
                let secun = 0,
                 minute = 0,
                 soate= 0,
                 son = 0,
                 inter
                
                 function clearall() {
                      
                    secund.innerHTML = 0
                    minut.innerHTML =0
                    soat.innerHTML =  0
                    secun = 0
                    minute = 0
                    soate= 0
                    son= 0
                    start.innerHTML = "start"
                    indic.classList.remove('active')
                    indic.classList.remove('active_clear')
                  }
                    
                
                    start.addEventListener('click', function() {
                             son++
                                       
                        if (son==1) {
                            clearInterval(inter) 
                            inter = setInterval(secundomer, 1000)
                              
                           
                             indic.classList.add('active')
                                 start.innerHTML = "stop"
                             }
                             
                        else if (son==2) {
                            clearInterval(inter) 
                            indic.classList.add('active_clear')
                                start.innerHTML = "clear"
                        }
                         else if (son==3) {
                                     clearInterval(inter)
                                clearall()
                                }
                    })   
              
                 function secundomer(){  
                    secun++
                    if (secun == 60) {
                        minute++, secun = 0
                    }
                        if (minute == 60) {
                            soate++, minute = 0
                        }  
                            if (soate == 24) {
                                soate = 0
                            }                            
                            secund.innerHTML = secun
                            minut.innerHTML = minute
                            soat.innerHTML =  soate
                        } 
               
                 