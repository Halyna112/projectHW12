const getClass = x => {
  return document.querySelector(x);
};

function btnEdit() {
  getClass(".inner__text_content").style.display = "block";
  getClass(".inner__content_style").style.display = "none";
  getClass(".area").value = getClass(".inner__text").innerHTML;
  getClass(".colors__style").style.display = "none";

}

function btnSave() {
  getClass(".inner__text").innerHTML = getClass(".area").value;
  getClass(".inner__text_content").style.display = "none";
  getClass(".colors__style").style.display = "none";
  getClass(".choose").style.display = "none";


}
//  styles

function btnStyle() {
  getClass(".inner__content_style").style.display = "block";
  getClass(".inner__text_content").style.display = "none";
  getClass(".colors__style").style.display = "none";

}
// font size
let fontS = document.getElementsByClassName('fontSize__item');

function checkSize() {
  getClass(".inner__text").style.fontSize = event.target.value;
}
// font-family
let fontF = document.getElementById('familyF');
familyF.onchange = function () {
  getClass(".inner__text").style.fontFamily = this.value;
}

// text color
function btnTextcol() {
  getClass(".colors__style").style.display = "block";
  let list = document.getElementsByClassName('parts__item');
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      getClass(".inner__text").style.color = event.target.style.backgroundColor;
      getClass(".colors__style").style.display = "none";
    }
  }

}

// background color
function btnBgcol() {
  getClass(".colors__style").style.display = "block";
  let list = document.getElementsByClassName('parts__item');
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      getClass(".inner__text").style.backgroundColor = event.target.style.backgroundColor;
      getClass(".colors__style").style.display = "none";
    }
  }
}


//  cursive and bold styles

let boldStyle = document.getElementById('fontB');
boldStyle.onclick = function () {
  if (this.checked) {
    getClass(".inner__text").style.fontWeight = 'bold';
  } else {
    getClass(".inner__text").style.fontWeight = 'normal';

  }
}
let cursiveStyle = document.getElementById('fontC');
cursiveStyle.onclick = function () {
  if (this.checked) {
    getClass(".inner__text").style.fontStyle = 'italic';
  } else {
    getClass(".inner__text").style.fontStyle = 'normal';

  }
}

// add list or table

function btnAdd() {
  getClass(".choose").style.display = "block";
  getClass(".wrapper").style.display = "none";

}

getClass(".tabChoose").onclick = function () {

  getClass(".choose").style.display = "none";
  getClass(".table__form").style.display = "block";
}

// creation of list form

getClass(".listChoose").onclick = function () {
  let element = getClass(".choose");
  let p = document.createElement('p');
  p.innerHTML = "Count li";
  element.appendChild(p);

  let countLi = document.createElement('input');
  countLi.type = "text";
  countLi.placeholder = "Count li";
  countLi.id = "countLi";
  countLi.setAttribute("value", "");
  countLi.style.paddingRight = 245 + 'px';
  element.appendChild(countLi);

  let pp = document.createElement('p');
  pp.innerHTML = 'Type of marks';
  element.appendChild(pp);

  let array = ["circle", "disk", "square"];
  let sel = document.createElement('select');
  sel.id = "mySelect";
  sel.style.paddingRight = 245 + 'px';
  sel.style.paddingTop = 5 + 'px';

  element.appendChild(sel);

  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    sel.appendChild(option);
  }

  let btnList = document.createElement('input');
  btnList.id = 'createList';
  btnList.type = 'button';
  btnList.value = 'Create list';
  btnList.style.backgroundColor = 'green';
  btnList.style.margin = 15 + 'px';
  element.appendChild(btnList);
  let btnCrLi = document.getElementById('createList');


  // create list

  btnCrLi.onclick = function () {
    getClass(".choose").style.display = "none";
    getClass(".wrapper").style.display = "block";
    getClass(".table__form").style.display = "none";
    let amountLi = document.getElementById('countLi').value;
    let listStyle = document.getElementById('mySelect').value;
    getClass(".area").value += `<ul type="${listStyle}">`;
    for (let i = 1; i <= amountLi; i++) {
      getClass(".area").value += `<li>item ${i}</li>`
    }
    getClass(".area").value += "</ul>";
  }

}

// create table

getClass(".create").onclick = function () {
  getClass(".inner__text_content").style.display = "block";

  getClass(".wrapper").style.display = "block";
  getClass(".table__form").style.display = "none";
  let row = tableForm.countTr.value;
  let col = tableForm.countTd.value;

  let widthTd = tableForm.widthTd.value;
  let heightTd = tableForm.heightTd.value;
  let widthBorder = tableForm.widthBorder.value;
  let styleBorder = getClass('#border-style');
  let colorBorder = getClass('#border-color');
  getClass(".area").value += '<table>';
  for (let i = 0; i < row; i++) {
    getClass(".area").value += '<tr>'
    for (let j = 0; j < col; j++) {
      getClass(".area").value += `<td style="width:${widthTd}px;height:${heightTd}px;border:${widthBorder}px ${styleBorder.value} ${colorBorder.value};">TD</td>`;
    }
    getClass(".area").value += '</tr>';
  }
  getClass(".area").value += '<table>';
}