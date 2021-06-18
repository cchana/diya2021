function sayHello() {

  var answers = {
          name: prompt("What is your name?"),
          colour: prompt("What is your favourite colour?").replace(' ', ''),
          shape: prompt("What is your favorite shape?"),
          hobby: prompt("what hobby keeps you busy?"),
          animal: prompt("what animal do you love?"),
          drink: prompt("what do you like drinking as a drink?")
      };

  document.getElementsByTagName('body')[0].style.backgroundColor = answers.colour;

  var text = ``;
  for(question in answers) {
    text += `<li>${question}: ${answers[question]}</li>`;
  }

  document.getElementById('you').innerHTML=text;
//  alert(`Hi, ${name}. Thank you for coming to my web page!`);

}
