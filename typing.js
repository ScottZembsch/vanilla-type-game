const words = 'whisper feign vegetable mature referee transport qualified dentist reign eyebrow inflate sunrise satisfied in the tranquil depths of a celestial symphony a radiant cascade of butterflies dances in harmony with the whispering breeze the horizon a mirage of opulent nebulae creates an ephemeral lagoon of ethereal serendipity a kaleidoscope of colors like a jubilee of sonnets enchants the atmosphere while the sun sets in a velvety cascade of vermilion and azure solitude becomes a radiant enigma and as twilight falls a luminous prism of synchrony unfolds each word in this cosmic tapestry is like a quasar a tiny spark in the vastness of linguistic space contributing to the poetic mosaic of this surreal and enchanting paragraph'.split(' ');


function addClass(el,name){
   el.classList.add(name);
};

function removeClass(el,name){
  el.classList.remove(name);
}

function randomWord(){
  const randomIndex = Math.ceil(Math.random() * words.length);
  return words[randomIndex]
}

function formatWord(word){
  return `<div class="word">
    <span class="letter">
      ${word.split('').join('</span><span class="letter">')}
    </span>
  </div>`;
}

function newGame(){
  document.getElementById('words').innerHTML = '';
  for (let i = 0; i < 200; i++){
    document.getElementById('words').innerHTML += formatWord(randomWord());
  }
  console.log('test')
  addClass(document.querySelector('.word'),'current');
  addClass(document.querySelector('.letter'),'current');
}

document.getElementById('game').addEventListener('keyup', (e) => {
  const key = e.key;

})
 


newGame();