function save(filename)
{
  var content=editor.getValue();
  alert(content);
  var filename=document.getElementById('name').value;
  var dlg = false;

      open("text/plain", "replace");
      charset = "utf-8";
      write(content);
      close();
      document.charset = "utf-8";
      dlg = execCommand('SaveAs', false, filename+'.txt');
  
  return dlg;
}
