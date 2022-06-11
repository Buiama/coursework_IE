var editor = ace.edit("code");
editor.setTheme("ace/theme/textmate");//twilight
editor.getSession().setMode("ace/mode/c_cpp");
editor.setShowPrintMargin(false);
editor.setOptions({
  maxLines: Infinity,
  fontSize:"12pt",
});
editor.$blockScrolling=Infinity;