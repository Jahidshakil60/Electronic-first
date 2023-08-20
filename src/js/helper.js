export function handleNavClick(element,navElement,searchElement,inputElement, crossElement) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
   
  }
  element.addEventListener('click', () => {

    if(navElement.style.display == ''){
      navElement.style.display = 'block'
    }else{
      navElement.style.display = ''
    }
  })

  searchElement.addEventListener('click',()=>{
    // searchElement.style.width = '100%'
    // searchElement.style.borderRadius = '20px'

    if(inputElement.style.display == ''){
      inputElement.style.display = 'block'
      crossElement.style.display='block'
    }else{
      inputElement.style.display = ''
      crossElement.style.display=''
    }
  })

  setCounter(0)
}
