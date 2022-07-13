/*As a user, I should see the timer increment every second once the page has loaded-domcontentloaded.--setinterval settimeout
As a user, I can manually increment and decrement the counter using the plus and minus buttons.
As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
As a user, I can pause the counter, which should:

pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume"
As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.

As a user, I can leave comments on my gameplay*/
const likeObj = {}
const likeStatement = []
const likes = document.querySelector("ul.likes")

//counting starting when the page loaded so domcontentloaded needed
document.addEventListener("DOMContentLoaded", ()=>{
    clockInıt = setInterval(()=>{
        document.querySelector("h1#counter").innerHTML = parseInt(document.querySelector("h1#counter").innerHTML) +1
    }, 1000) //increment every second

//pause and resume
    document.querySelector("button#pause").addEventListener("click", ()=>{
 let pauseButton = document.getElementById("pause");

 if(document.querySelector("button#pause").className !== "paused"){
    const buttons = document.querySelectorAll("button")

    pauseButton.innerHTML = "resume";
    pauseButton.classList.add("paused")
    clearInterval(clockInıt);
    buttons[0].setAttribute("disabled", " ");
    buttons[1].setAttribute("disabled", " ");
    buttons[2].setAttribute("disabled", " ");
    buttons[3].setAttribute("disabled", " ");
 }else if (document.querySelector("button#pause").className === "paused"){
    const buttons = document.querySelectorAll("button")

    pauseButton.innerHTML = "pause";
    pauseButton.classList.remove("paused")
    clearInterval(clockInıt);
    buttons[0].removeAttribute("disabled");
    buttons[1].removeAttribute("disabled");
    buttons[2].removeAttribute("disabled");
    buttons[3].removeAttribute("disabled");

    clockInıt = setInterval(()=>{
        document.querySelector("h1#counter").innerHTML = parseInt(document.querySelector("h1#counter").innerHTML) +1
    }, 1000)
 }
    })

    let plusBtn = document.querySelector("button#plus")
    plusBtn.addEventListener("click", plusHandler)

    function plusHandler(){
        document.querySelector("h1#counter").innerHTML = parseInt(document.querySelector("h1#counter").innerHTML) +1
    }

    //Minus events//

let minusBtn = document.querySelector('button#minus')
minusBtn.addEventListener('click', minusHandler)

function minusHandler (){
  document.querySelector('h1#counter').innerHTML = parseInt(document.querySelector('h1#counter').innerHTML) - 1
}



//Comment event//


const commentForm = document.querySelector('form')
commentForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let formInput = document.getElementById('comment-input');
  commentHandler(e.target.comment.value)
   console.log(e.target.comment.value)})

function commentHandler (inputText) {
  let p = document.createElement('p');
  p.innerHTML = inputText;
  const comments = document.getElementById('list')
  comments.append(p)
}

//Like events//

let likeBtn = document.querySelector('button#heart')
likeBtn.addEventListener('click', ()=>{
let counter = document.querySelector('h1#counter').innerHTML;
let likeNum;
let number = document.querySelector('h1#counter').innerHTML;
likeCounter()
renderLikes(likeObj)

function likeCounter (){
if(`${counter}` in likeObj){
  likeObj[`${counter}`] = likeObj[`${counter}`] + 1
console.log('key was found')
console.log(`${counter}`, " has been liked ", likeObj[`${counter}`], " times!")


} else {
  likeObj[`${counter}`]=1;
  console.log('original key');

}}

function renderLikes(){
  likes.innerHTML = ""
  for (let key in likeObj){
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${likeObj[key]} times.`
    likes.append(li)
  }
}
})
})