const counter = document.getElementById('counter');

likesList = {}

// runCounter = (function () {
//   setInterval(function() {
//     counter.innerText++;
//   }, 1000 );
// })()

// counter.addEventListener('load', runCounter)

runCounter = setInterval( increment, 1000 )

const minusBtn = document.getElementById('-');
const plusBtn = document.getElementById('+');

minusBtn.addEventListener('click', decrement)
plusBtn.addEventListener('click', increment)

function decrement() {
  counter.innerText--
}

function increment() {
  counter.innerText++
}

const likesBtn = document.getElementById('<3')

likesBtn.addEventListener('click', addLikes)

function addLikes() {
  currentCount = counter.innerText
  currentCountId = 'likes' + currentCount

  if (likesList[currentCountId]) {
    likesList[currentCountId]++
  }
  else {
    likesList[currentCountId] = 1
  }

  if (li = document.getElementById(currentCountId)) {
    li.innerText = `${currentCount} has been liked ${likesList[currentCountId]} time(s)`
  }
  else {
    ul = document.getElementsByClassName('likes')
    let li
    li = document.createElement('li')
    ul[0].append(li)
    li.innerText = `${currentCount} has been liked ${likesList[currentCountId]} time(s)`
    li.id = currentCountId
  }
}

const pauseBtn = document.getElementById('pause')
pauseBtn.addEventListener('click', disable)

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submitComment)

function disable() {
  if (pauseBtn.innerText === 'resume') {
    runCounter = setInterval( increment, 1000 )
    pauseBtn.innerText = 'pause'
    minusBtn.disabled = false
    plusBtn.disabled = false
    likesBtn.disabled = false
    submitBtn.disabled = false
  }
  else {
    clearInterval(runCounter)
    pauseBtn.innerText = 'resume'
    minusBtn.disabled = true
    plusBtn.disabled = true
    likesBtn.disabled = true
    submitBtn.disabled = true
  }
}

function submitComment() {
  event.preventDefault()
  const commentUl = document.getElementById('comments')
  let li
  li = document.createElement('li')
  const userComment = document.getElementById('usercomment')
  li.innerText = userComment.value
  commentUl.append(li)

}
