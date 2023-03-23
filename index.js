// Remember to import the data and Dog class!
import {dogs} from './data.js'
import {Dog} from './Dog.js'

function getNewDog() {
    const nextDog = dogs.shift()
    return nextDog ? new Dog(nextDog) : {}
}

document.getElementById('reject-btn').addEventListener('click', ()=>{
    if (!dogProfile.hasBeenLiked) {
        document.getElementById('nope-badge').classList.toggle('hidden')
        dogProfile.hasBeenSwiped = true
    if (dogs.length > 0) {
             setTimeout(()=>{
                dogProfile = getNewDog()
                render() }, 1000)
                dogProfile.hasBeenSwiped = true
    }
    
    else if (dogs.length == 0) {
        setTimeout(()=>{document.getElementById('dog-img').innerHTML = 
            `<div class="dog-img no-match">
               <h3>NO MATCH FOUND! ☹</h3>
             </div>`
             document.getElementById('reject-btn').classList.add('hidden')
             document.getElementById('like-btn').classList.add('hidden')},1000)
    }
    }
    
})

document.getElementById('like-btn').addEventListener('click', ()=>{
     
     if (!dogProfile.hasBeenSwiped && document.getElementById('like-badge').classList.contains('hidden')) {
         document.getElementById('like-badge').classList.toggle('hidden')
         dogProfile.hasBeenLiked = true
     }
     else if (!dogProfile.hasBeenSwiped && !document.getElementById('like-badge').classList.contains('hidden')) {
         document.getElementById('like-badge').classList.toggle('hidden')
         dogProfile.hasBeenLiked = false
     }
})

let dogProfile = getNewDog()
function render() {
    document.getElementById('dog-img').innerHTML = dogProfile.getDogHtml()
}
render()
