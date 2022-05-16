function calculate_age() {
  let yourAge = document.getElementById('enterAge').value;

  let earlyYears = 21;

  yourAge -= 2;

  let laterYears = yourAge;
  laterYears *= 4;

let ageResult = earlyYears + laterYears

  console.log(ageResult);

  document.getElementById('age').innerHTML = 'Your are ' + ageResult + '  years old in dog years!'
}
