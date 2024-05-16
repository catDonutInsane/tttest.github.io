customElements.define('map-card', class extends HTMLElement {
    
    connectedCallback() {
      this.attachShadow({mode: 'open'});
      var oldScript = document.getElementById('q'); 
      var timestamp = new Date().getTime();
         

      let script = document.createElement('script')
      script.type= "module"
      script.src = "src/index.js?"+timestamp
      script.id = "q"
    
      if(oldScript){
        oldScript.parentNode.replaceChild(script, oldScript); 
      }else{
        document.body.append(script)
      }
      
    }
    
  });
