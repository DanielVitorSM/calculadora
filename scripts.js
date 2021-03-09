var input = $(".display span");
var btns = {
  btnDelete: function () {
    let text = input.text().trim();
    let html = input.html();
    if (html.indexOf("p") != -1 || text.length == 1) {
      input.text("0");
    } else if (text != "0") {
      let t = text.split(" ");
      console.log(text[t.length - 1]);
      if (text[t.length - 1] == " ") {
        t.pop();
        input.text(t.join(" "));
      } else {
        input.text(text.substring(0, text.length - 1));
      }
    }
  },
  btnNumber: function () {
    let text = input.text();
    if (text == "0") {
      input.text(this.innerHTML);
    } else {
      input.text(text + this.innerHTML);
    }
  },
  btnSum: function () {
    let value = input.text();
    if (isNumeric(value[value.length - 1])) {
      input.text(value + " + ");
    }
  },
  btnSub: function () {
    let value = input.text();
    if (isNumeric(value[value.length - 1])) {
      input.text(value + " - ");
    }
  },
  btnDiv: function () {
    let value = input.text();
    if (isNumeric(value[value.length - 1])) {
      input.text(value + " / ");
    }
  },
  btnMult: function () {
    let value = input.text();
    if (isNumeric(value[value.length - 1])) {
      input.text(value + " * ");
    }
  },
  btnPar: function () {
    let text = input.text();
    if (this.innerHTML == "(" && text[text.length - 1]) {
      input.text(text + " * (");
    } else {
      input.text(text + this.innerHTML);
    }
  },
  btnDot: function () {
    let text = input.text();
    let last = text[text.length - 1];
    let lastNumber = getLastNumbers(text).toString();
    if (last != undefined && isNumeric(last) && lastNumber.indexOf(".") == -1) {
      input.text(text + ".");
    }
  },
  btnEqual: function () {
    let value = input.text();
    input.html("<p class='green'>" + eval(value) + "</p>");
  },
};
$(document).ready(() => {
  window.addEventListener("keypress", (e) => {
    if (isNumeric(e.key)) {
      input.text(input.text() + e.key);
    }
  });
  $(".btn").map((index, element) => {
    $(element).click(btns[$(element).attr("name")]);
  });
});

function isNumeric(key) {
  if (parseInt(key)) {
    return true;
  } else {
    return false;
  }
}

function getLastNumbers(text) {
  let split = text.toString().split(" ");
  return split[split.length - 1];
}
