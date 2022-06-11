function save()
{
  var content=editor.getValue();
  var filename=document.getElementById('name').value;
  var dlg = false;
alert(content);
  with(document){
    ir=createElement('iframe');
    ir.id='ifr';
    ir.location='about.blank';
    ir.style.display='none';
    body.appendChild(ir);

    with(getElementById('ifr').contentWindow.document){
      open("text/plain", "replace");
      charset = "utf-8";
      alert(content);
      write(content);
      alert(content);
      close();
      document.charset = "utf-8";
      dlg = execCommand('SaveAs', false, filename+'.txt');
    }

    body.removeChild(ir);
  }
  return dlg;
}
