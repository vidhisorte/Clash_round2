document.getElementById("cfile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    editor.setValue(fr.result);
  };

  fr.readAsText(this.files[0]);
});
