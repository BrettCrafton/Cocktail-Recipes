//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', () => {
  getDrink()
  removeHidden()
})
document.getElementById('buttonNext').addEventListener('click', nextSlide)
document.getElementById('buttonPrev').addEventListener('click', prevSlide)

let drinkArrPictures= []
let drinkArrNames=[]
let drinkArrInstructions=[]
let drinkArrIngredients=[]
let n = 0
let slideStart = 1

function removeHidden(){
  document.getElementById('buttonNext').classList.remove('hidden')
  document.getElementById('buttonPrev').classList.remove('hidden')
}

function getDrink(){
  let drinkInput = document.querySelector('input').value
  n = 0
  slideStart = 1
  drinkArrPictures= []
  drinkArrNames=[]
  drinkArrInstructions=[]
  drinkArrIngredients=[]

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      console.log(data.drinks[0])
      data.drinks.forEach(x => drinkArrPictures.push(x.strDrinkThumb))
      data.drinks.forEach(x => drinkArrNames.push(x.strDrink))
      data.drinks.forEach(x => drinkArrInstructions.push(x.strInstructions))

      data.drinks.forEach(x => drinkArrIngredients.push([x.strIngredient1, x.strIngredient2, x.strIngredient3, x.strIngredient4, x.strIngredient5, x.strIngredient6, x.strIngredient7, x.strIngredient8, x.strIngredient9, x.strIngredient10, x.strIngredient11, x.strIngredient12, x.strIngredient13, x.strIngredient14, x.strIngredient15]))

      console.log(drinkArrPictures)
      document.querySelector('img').src = data.drinks[n].strDrinkThumb
      document.getElementById('name').innerText = "Name: " + drinkArrNames[n]
      document.querySelector('h3').innerText = data.drinks[n].strInstructions
      document.querySelector('h4').innerText = drinkArrIngredients[n].filter(x => x != null && x != "").map(x => "\u2022" + " " + x).join("\n")
    })
      .catch(err => {
          console.log(`error ${err}`)
      });
  document.getElementById('numberOfSlide').innerText = slideStart + " / " + "\u221E"        
}

function nextSlide(){
  n == drinkArrPictures.length -1? n:  n++
  slideStart == drinkArrPictures.length? slideStart:  slideStart++
  document.querySelector('img').src = drinkArrPictures[n]
  document.getElementById('name').innerText = "Name: " +  drinkArrNames[n]
  document.querySelector('h3').innerText = drinkArrInstructions[n]
  document.querySelector('h4').innerText = drinkArrIngredients[n].filter(x => x != null && x != "").map(x => "\u2022" + " " + x).join("\n")
  document.getElementById('numberOfSlide').innerText = slideStart + " / " + drinkArrPictures.length 
}

function prevSlide(){
  n == 0? n:  n--
  slideStart == 1? slideStart:  slideStart--
  document.querySelector('img').src = drinkArrPictures[n]
  document.getElementById('name').innerText = "Name: " +  drinkArrNames[n]
  document.querySelector('h3').innerText = drinkArrInstructions[n]
  document.querySelector('h4').innerText = drinkArrIngredients[n].filter(x => x != null && x != "").map(x => "\u2022" + " " + x).join("\n")
  document.getElementById('numberOfSlide').innerText = slideStart + " / " + drinkArrPictures.length 
}

