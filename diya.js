function sayHello() {

  var name = prompt("What is your name?"),
      colour = prompt("What is your favourite colour?");

  document.getElementsByTagName('body')[0].style.backgroundColor = colour;

  alert(`Hi, ${name}. Thank you for coming to my web page!`);

}
