const listRequests = document.querySelectorAll(".card-request");
const requestNumber = document.querySelector(".card-number-1");
const connectionNumber = document.querySelector(".card-number-2");

let connectionNumberVar = 324;
let connectionRequests = 2;

const nameText = document.querySelector("#info h1");

function accept(index) {
  listRequests[index].remove();
  connectionRequests--;
  requestNumber.innerText = connectionRequests;
  connectionNumberVar++;
  connectionNumber.innerText = connectionNumberVar;
}

function decline(index) {
  listRequests[index].remove();
  connectionRequests--;
  requestNumber.innerText = connectionRequests;
}

function changeName() {
  nameText.innerText = "Renato Garay";
}
