export class Dog {
            constructor(data) {
                Object.assign(this, data)
            }
            
            getDogHtml() {
                const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
                return `<div id="dog-img" class="dog-img" style="background: url(${avatar});                            background-size: cover;">
                            <img id="like-badge" class="like badge hidden" src="images/badge-like.png">
                            <img id="nope-badge" class="nope badge hidden" src="images/badge-nope.png">  
                            <div class="dog-desc"> 
                            <p class="name">${name}, ${age}</p>
                            <p class="bio">${bio}</p>
                            </div>
                        </div>`
            }    
        }