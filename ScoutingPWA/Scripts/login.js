const $input = document.getElementById('input')
const $enter = document.getElementById('enter')

$enter.addEventListener('click', () => {
  window.location.href = `file:///C:/Users/river/Desktop/ScoutingPWA/MatchScouting.html#${$input.value}`
})
