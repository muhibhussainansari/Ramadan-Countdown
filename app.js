// var date = new Date()
// var rightNow = date.getTime()
// var ramadan = new Date('11 March, 2024').getTime()
// var result = (ramadan - rightNow); 

// var days = document.querySelector('#days')
// var hours = document.querySelector('#hours')
// var min = document.querySelector('#min')
// var sec = document.querySelector('#sec')


// var convert_days = (result / (1000 * 60 * 60 * 24) % 365)
// var days_result = Math.floor(convert_days)
// days.innerHTML = days_result

// var convert_hours = (result / (1000 *60 * 60) % 24)
// var hours_result = Math.floor(convert_hours)
// hours.innerHTML = hours_result

// var convert_mins = (result / (1000 *60) % 60)
// var mins_result = Math.floor(convert_mins)
// min.innerHTML = mins_result

// var convert_sec = (result / (1000 * 60) % 60)
// var sec_result = Math.floor(convert_sec)
// sec.innerHTML = sec_result

setInterval(function(){
var date = new Date()
var rightNow = date.getTime()
var ramadan = new Date('11 March, 2024').getTime()
var result = (ramadan - rightNow); 

var days = document.querySelector('#days')
var hours = document.querySelector('#hours')
var min = document.querySelector('#min')
var sec = document.querySelector('#sec')


var convert_days = (result / (1000 * 60 * 60 * 24))
var days_result = Math.floor(convert_days)
days.innerHTML = days_result

var convert_hours = (result % (1000 *60 * 60 * 24 ) / (1000 *60 * 60))
var hours_result = Math.floor(convert_hours)
hours.innerHTML = hours_result

var convert_mins = (result % (1000 *60 * 60) / (1000 * 60))
var mins_result = Math.floor(convert_mins)
min.innerHTML = mins_result

var convert_sec = (result % (1000 * 60) / (1000))
var sec_result = Math.floor(convert_sec)
sec.innerHTML = sec_result

},1000)

    // sec_result--
    // sec.innerHTML = sec_result
    // if(sec_result == 0){
    //     sec_result = 60
    //     sec.innerHTML = sec_result
    //     var abc1 = mins_result - 1
    //     min.innerHTML = abc1
    // }
    // else if (mins_result == 0){
    //     mins_result = 60
    //     min.innerHTML = mins_result
    //     var abc2 = hours_result - 1
    //     hours.innerHTML = abc2
    // }
    // else if (hours_result == 0){
    //     hours_result = 60
    //     hours.innerHTML = hours_result
    //     var abc3 = days_result - 1
    //     days.innerHTML = abc3
    // }

