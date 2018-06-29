const counter = document.getElementById('counter');
const minusBtn = document.getElementById('-');
const plusBtn = document.getElementById('+');
const likesBtn = document.getElementById('<3')
const submitBtn = document.getElementById('submit')
const pauseBtn = document.getElementById('pause')
runCounter = setInterval( increment, 1000 )
likesList = {}

pauseBtn.addEventListener('click', disable)
submitBtn.addEventListener('click', submitComment)
minusBtn.addEventListener('click', decrement)
plusBtn.addEventListener('click', increment)
likesBtn.addEventListener('click', addLikes)


function decrement() {
  counter.innerText--
}


function increment() {
  counter.innerText++
}


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
