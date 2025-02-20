const initialCoins = 20
let currentCoins = initialCoins


const alcancia = document.getElementById('alcancia')
const coinsContainer = document.querySelector('.coins')
const coinValue = document.querySelector('.coin-value')

alcancia.addEventListener('click',()=>{
  if(currentCoins > 0){
  alcancia.classList.add('jump')

  setTimeout(()=>{
    alcancia.classList.remove('jump')
  }, 500  )



  // crear monedas
  const coin = document.createElement('div')
  coin.classList.add('coin')
  coinsContainer.appendChild(coin)
  setTimeout(()=>{
    coin.remove()
  }, 500) 
 
  // actualizar valor de  la maoneda
  
  currentCoins -= 1
  coinValue.textContent = currentCoins
}else{
  alert('No tienes monedas')
}
})



