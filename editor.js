// const resetCodeBtn = document.querySelector('.editor__reset');

var editor = ace.edit("editor");
// editor.setTheme("ace/theme/monokai");
editor.setTheme("ace/theme/xcode");
editor.session.setMode("ace/mode/javascript");
editor.resize();

codeeditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    readOnly: false
});

// executeCodeBtn.addEventListener('click', () => {
//     // Get input from the code editor
//     const userCode = codeEditor.getValue();

//     // Run the user code
//     try {
//         new Function(userCode)();
//     } catch (err) {
//         console.error(err);
//     }
// });

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  function darkmode(){
      editor.setTheme("ace/theme/monokai");
      document.getElementById('lightmodebtn').style.display = "inline-block";
      document.getElementById('darkmodebtn').style.display = "none";
  }

  function lightmode(){
    editor.setTheme("ace/theme/xcode");
    document.getElementById('darkmodebtn').style.display = "inline-block";
    document.getElementById('lightmodebtn').style.display = "none";
}

function cleareditor(){
    // document.getElementById("editor").innerHTML = "he";
    editor.setValue("//your code goes here");
}
