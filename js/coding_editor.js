// const resetCodeBtn = document.querySelector('.editor__reset');

// var editor = ace.edit("editor");
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor", {
  wrap: true,
});
editor.setOptions({
  enableBasicAutocompletion: true,
});

// editor.setTheme("ace/theme/monokai");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/c_cpp");
editor.resize();
editor.setOption("showPrintMargin", false);

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

function darkmode() {
  //   editor.setTheme("ace/theme/monokai");
  editor.setTheme("ace/theme/dracula");
  document.getElementById("lightmodebtn").style.display = "inline-block";
  document.getElementById("darkmodebtn").style.display = "none";
}

function lightmode() {
  editor.setTheme("ace/theme/xcode");
  document.getElementById("darkmodebtn").style.display = "inline-block";
  document.getElementById("lightmodebtn").style.display = "none";
}

function cleareditor() {
  // document.getElementById("editor").innerHTML = "he";
  // editor.setValue("/*your code goes here*/");
  let a = document.getElementById("Codelang").value;

  if (a == "Py") {
    editor.setValue("#your code goes here");
  } else {
    editor.setValue("/*your code goes here*/");
  }
}

function fnchange() {
  var lang = document.getElementById("Codelang").value;
  // alert(lang);

  if (lang == "C") {
    editor.session.setMode("ace/mode/c_cpp");
    // alert("1");
  } else if (lang == "Cpp") {
    editor.session.setMode("ace/mode/c_cpp");
    // alert("2");
  } else if (lang == "Py") {
    editor.session.setMode("ace/mode/python");
    // alert("3");
  } else {
    editor.session.setMode("ace/mode/java");
    // alert("4");
  }
}
