"use strict";

class Reservation {
  constructor() {
    this.arrayPerson = [];
    this.wait = 1;
  }

  saveData() {
    let reserve = this.readData();
    if (this.validfield(reserve)) {
      this.addDatareserve(reserve);
    }
    this.listTable();
    this.cancelEvent();
  }

  listTable() {
    let tableResult                 = document.querySelector('.table-result');
    tableResult.innerText           = '';
    this.wait++

    for(let i = 0; i < this.arrayPerson.length; i++) {
      let tr                       = tableResult.insertRow();
      let td_token                 = tr.insertCell();
      let td_name                  = tr.insertCell();
      let td_password              = tr.insertCell();
      let td_destination           = tr.insertCell();
      let td_action                = tr.insertCell();

      td_token.innerText           = this.arrayPerson[i].password;
      td_name.innerText            = this.arrayPerson[i].name;
      td_password.innerText        = this.arrayPerson[i].numberPerson;
      td_destination.innerText     = this.arrayPerson[i].destinationTable;
      td_destination.style.color   = 'red';

    function createButton(indexDaLinha) {
      let btn = document.createElement('BUTTON');
      btn.style.backgroundColor    = 'red';
      btn.style.color              = 'white';
      btn.style.padding            = '4px';
      btn.style.border             = '1px solid transparent';
      btn.style.borderRadius       = '10px';

      let lbl = document.createTextNode("editar");        
      btn.appendChild(lbl);   
      btn.onclick = function()
      {
        let info = prompt('Digite o destino da mesa:');
        reserve.arrayPerson[indexDaLinha].destinationTable = info;
        btn.style.display           = 'none';
        td_destination.innerText    = info;
        td_destination.style.color  = 'Green';
        function createButtonTwo() {
          let btn = document.createElement('p');
          let lbl = document.createTextNode("concluido");
          btn.style.backgroundColor = 'green';
          btn.style.color           = 'white';
          btn.style.padding         = '4px';
          btn.style.border          = '1px solid transparent';
          btn.style.borderRadius    = '10px';  
          btn.appendChild(lbl);
  
          btn.onclick = function()
          {
            
          }
          td_action.appendChild(btn);
        }
        createButtonTwo()
      }
      td_action.appendChild(btn);
}

createButton(i);

    }
  }

  addDatareserve(reserve) {
    this.arrayPerson.push(reserve);
  }

  readData() {
    let reserve = {};

    reserve.waiting             = document.querySelector(".waiting");
    reserve.name                = document.querySelector(".name").value;
    reserve.numberPerson        = document.querySelector(".person-number").value;
    reserve.password            = document.querySelector(".password").value;
    reserve.waiting.innerHTML   = this.wait;
    reserve.destinationTable    = 'em espera';

    return reserve;
  }

  validfield(reserve) {
    let msg = "";

    if (
      reserve.name              === ""     ||
      reserve.numberPerson      === ""     ||
      reserve.password          === ""
    ) 
    {
      msg                       += "- preencha todos os campos corretamente!. \n";
    }

    if (msg !== "") {
      alert(msg);
      return false;
    }
    return true;
  }

  cancelEvent() {
    document.querySelector('.name').value            = '';
    document.querySelector('.person-number').value   = '';
    document.querySelector('.password').value        = '';
  }
}

let reserve = new Reservation();
const btnSalvar = document.querySelector(".btn-save");

btnSalvar.addEventListener("click", () => {
  reserve.saveData();
});
