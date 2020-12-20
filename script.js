let sceneOne = document.querySelector(`#one`)
let sceneTwo = document.querySelector(`#two`)
let sceneThree = document.querySelector(`#three`)
let sceneFour= document.querySelector(`#four`)



let audioOne = document.querySelector(`#audioOne`)
let audioTwo = document.querySelector(`#audioTwo`)
let audioThree = document.querySelector(`#audioThree`)
let audioFour = document.querySelector(`#audioFour`)
let audioFour = document.querySelector(`#audioFive`)




// Function 1
let playUnder_the_water = function () {
    return audioOne.paused ? audioOne.play() : audioOne.pause();
}
sceneOne.addEventListener(`click`, playUnder_the_water)

// Function 2
let playforest = function () {
    return audioTwo.paused ? audioTwo.play() : audioTwo.pause();
}
sceneTwo.addEventListener(`click`, playforest)

// Function 3
let playkeyboard = function () {
    return audioThree.paused ? audioThree.play() : audioThree.pause();
}
sceneThree.addEventListener(`click`, playkeyboard)

// Function 4
let play_stream_water = function () {
    return audioFour.paused ? audioFour.play() : audioFour.pause();
}
sceneFour.addEventListener(`click`, play_stream_water)

// Function 5
let play_whitenoise = function () {
    return audiofive.paused ? audioFive.play() : audioFive.pause();
}
scenefive.addEventListener(`click`, play_whitenoise)

