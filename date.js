const hamburger = document.querySelector('.hamburger')
const burg1 = document.querySelector('.burg1')
const burg2 = document.querySelector('.burg2')
const burg3 = document.querySelector('.burg3')
const dayel = document.getElementById('day')
const timeEl = document.getElementById('time')

hamburger.addEventListener('click', () => {

   const hamburgerMenu = document.querySelector('.hamburger-menu')
   hamburgerMenu.classList.toggle('active')
   burg1.classList.toggle('active')
   burg2.classList.toggle('active')
   burg3.classList.toggle('active')
})

const newDate = new Date()
console.log(newDate)
const day = newDate.getUTCDay()
let hour = newDate.getHours()
let minutes = newDate.getMinutes()

function fomartDate() {
   if (day === 1) {
      dayel.textContent = "Monday"
   }
   else if (day === 2) {
      dayel.textContent = "Tuesday"
   }
   else if (day === 3) {
      dayel.textContent = "Wednesday"
   }
   else if (day === 4) {
      dayel.textContent = "Thursday"
   }
   else if (day === 5) {
      dayel.textContent = "Friday"
   }
   else if (day === 6) {
      dayel.textContent = "Saturday"
   }
   else {
      dayel.textContent = "Sunday"
   }
}
function fomartTime() {
   const meridian = hour > 12 ? "PM" : "AM"
   console.log(meridian)

   hour = hour % 12 || 12

   if (hour < 10) {
      hour = "0" + hour
   }
   if (minutes < 10) {
      minutes = '0' + minutes
   }
   timeEl.textContent = `${hour}:${minutes} ${meridian}`
}
fomartTime()
fomartDate()