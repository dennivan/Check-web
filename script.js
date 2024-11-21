function handleClick(answer) {
  const resultDiv = document.getElementById("result");
  if (answer === 'yes') {
    resultDiv.innerHTML = "Đừng có lừa tôi.";
  } else {
    resultDiv.innerHTML = "Đùa tao hả? Thằng thua cuộc!";
  }
}
