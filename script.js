document.addEventListener('DOMContentLoaded', () => {

  //card options

  const cardArray = [
    {
      name: 'Christmas Stockings',
      img: 'images/christmas_stockings.png'
    },
    {
      name: 'Clouds',
      img: 'images/christmas_stockings.png'
    },
    {
      name: 'Feathers',
      img: 'images/feathers.png'
    },
    {
      name: 'Moutains',
      img: 'images/mountains.png'
    },
    {
      name: 'Gold pot at the end of the rainbow',
      img: 'images/rainbow-pot-icon.png'
    },
    {
      name: 'Random girl',
      img: 'images/random_girl.png'
    },
    {
      name: 'Running stickman',
      img: 'images/running_stickman.png'
    },
    {
      name: 'Weird plant',
      img: 'images/weird_plant.png'
    },
    {
      name: 'Background',
      img: 'images/rainbow_background.png'
    },
    {
      name: 'White tile',
      img: 'images/white.png'
    }
  ]

  //game board

  const grid = document.querySelector('.grid')

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement ('img')
      card.setAttribute('src', 'images/')
      card.setAttrribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  createBoard()
})