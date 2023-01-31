class User {
  constructor(id, name, age, email, password) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

const users = [
  new User(1, "Danisa Rivero", 21, "dani@gmail.com", "juanchope"),
  new User(2, "Bartolo Garcia", 35, "batm@gmail.com", "123456"),
  new User(3, "Laura Rascame", 16, "lau@gmail.com", "85201"),
  new User(4, "Monica Galindo", 40, "moni@gmail.com", "94440"),
  new User(5, "Estaban Quito", 28, "estban@gmail.com", "106103"),
];

const login = (e) => {
  //! PREVENIMOS EL COMPORTAMIENDO POR DEFECTO
  e.preventDefault();
  //! CAPTURAMOS LA INFORMACIÓN
  //? Identificar los inputs
  //? Selecciono los inputs desde JS
  const email = document.getElementById("values-email").value;
  const password = document.getElementById("values-email").value;
  const userFound = users.find(user => user.email === email);
  if (userFound) {
    const isOk= userFound.password===password;
    if (isOk) {
      alertMessage('entró')
    } else {
      alert("contraseña erronea","form");
    }
  } else {
    alertMessage("email incorrecto","form");
  }
};


function alertMessage (message){
  let alertMessage = document.createElement('div')
  alertMessage.classList.add('alert','alert-danger');
  alertMessage.setAttribute('role','alert')
  alertMessage.innerText = message;
  let container = document.querySelector(queryContainer);
  container.appendChild(alertMessage)
  setTimeout(()=>{
    alertMessage.remove()
  },2000
  )
}
