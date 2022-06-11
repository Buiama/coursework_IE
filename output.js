function run() {
  
  var i = editor.getValue();
  // Команда для компиляции на удаленном сервере
  let cmd = "g++ -Wall main.cpp -o main_prog && echo 'Compilation: SUCCESS."
      + "\n' && ./main_prog && echo \"\nExit code: $?\"";
      
  var output = $("#output");
  
  output.text('Compiling...');
  var to_compile = {
    "src": i,
    "cmd": cmd,
  };

  output.text("Executing... Please wait.");
  
  $.ajax({
    url: "https://coliru.stacked-crooked.com/compile",
    type: "POST",
    data: JSON.stringify(to_compile),
    contentType:"text/plain; charset=utf-8",
    dataType: "text"
  }).done(function(data) {
    output.text(data);
  }).fail(function(data) {
    output.text("Error: " + data);
  });
};
