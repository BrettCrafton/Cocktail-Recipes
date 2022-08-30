# Cocktail Recipes

Lookup cocktail recipes with ingredients and instructions. Searchable by direct name, or type.

Live Project at: <a href="https://brettcrafton.com/Portfolio/Bar%20API/index.html" target="_blank" rel="noreferrer"> https://brettcrafton.com/Portfolio/Bar%20API/index.html </a>

<a href="https://brettcrafton.com/Portfolio/Bar%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Cocktail%20Recipe%20gif.gif?raw=true" alt="project example"/> </a>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Utilized the API from https://www.thecocktaildb.com.

User's text entry into input field is saved into variable and added to end of URL for fetch request to API. API fetch request data saved into variable object on user search. Variable updated with each user search. Use dot notation and parsing though arrays with the carousel to render the object data to the DOM. Background and styling for looks. 

## Optimizations:

Make OOP. Load all data initially for parsing without a search from user. Possibly make carousel rotate at end to beginning/beginning to end instead of limited (like my Harry Potter carousel). Correct first slide to show 1/qty on intitial search instead of infinity. With time, make more responsive like shrink image size on different viewports. Could make a real-time search bar/results. Simple but not recommended is use keypress event listener instead of on click of "search". More appropriate way would be to build out function on keyup or similar design. Would need to build better filter parameters to do this as well.

## Lessons Learned:

Fetch requests. Interacting with JSON API data. Filtering/utilizing that JSON data. Some new style and transparency options in CSS. Light text looks much better when you overlay your background picture with an opaque black gradient (obviously, but actually doing was a first).

## APP Use:

Searchable by direct name, or type. Click search for all data or enter text to search by. 

Will provide following data if in API:

<ul>
  <li>Name</li>
  <li>Image</li>
  <li>Ingredients</li>
  <li>Instructions</li>
</ul>

## Other Projects:

**You Can't Afford Rent:** https://github.com/BrettCrafton/You-Cant-Afford-Rent

**Magical World of Harry Potter:** https://github.com/BrettCrafton/Magical-World-of-Harry-Potter
<a href="https://brettcrafton.com/Portfolio/Harry%20Potter/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Harry%20Potter%20gif.gif?raw=true" alt="project example"/> </a>


**Rick and Morty Parasite Detector:** https://github.com/BrettCrafton/Rick-and-Morty-Parasite-Detector
<a href="https://brettcrafton.com/Portfolio/Rick-and-Morty/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Rick%20and%20Morty%20gif.gif?raw=true" alt="project example"/> </a>


**NASA APOD:** https://github.com/BrettCrafton/NASA-APOD
<a href="https://brettcrafton.com/Portfolio/NASA%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/NASA%20APOD%20gif.gif?raw=true" alt="project example"/> </a>
