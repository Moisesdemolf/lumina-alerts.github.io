function simple() {
        msg({
            text:'hola, mundo!',
        });
    }
    
    function msgl() {
        msg({
          theme: 'success',
          title: 'Felicidades',
          text: 'Has creado un mensaje de alerta algo simple, pero hermoso.'
        });
    }
    
    function completo() {
        msg({
          theme: 'none', 
          text: 'Soy lumina alerts, libreria de alerts de javascript <br><b>Bienvenido</b>',
          title: "Hola" ,
          icon: 'bomm.png',
          img: 'favicon.jpg', 
          cancelBTN: true,
          confirmBTN: true,
          confirmTXT: 'Aceptar',
          confirmCLICK: 'mensaje2()',
          cancelCLICK: 'mensaje1()',
          input: "text",
          placeholder: "Escribe un texto"
          });
    }
    function mensaje2(){
      msg({
        theme: 'success',
        text: 'su texto es: ' + intext()
      });
    }
    function mensaje1(){
      msg({
        theme: 'error',
        text: 'Cerrastes el alerta'
      })
    }
    
    function none() {
        msg({
          theme:'none',
          text: "ejemplo del tema none"
          });
    }
    
    function info() {
        msg({
          theme:'info',
          text: "ejemplo del tema info"
          });
    }
    
    function success() {
        msg({
          theme:'success',
          text: "ejemplo del tema success"
          });
    }
    
    function error(){
      msg({
            theme: 'error',
            text: "ejemplo de codigo del tema error"
    });
    }
    
    function warning(){
      msg({
            theme: 'warning',
            text: "ejemplo de codigo del tema warning"
    });
    }
    
    function ios(){
      msg({
            theme:'ios',
            text: "ejemplo de codigo del tema ios"
    });
    }
    
    function android(){
      msg({
            theme: 'android',
            text: "ejemplo de codigo del tema android"
    })
    }

    function left1(){
      msg({
        position: 'top-left',
        text: 'esta pocisión es top left'
});
    }