class Model {
    constructor () {
    this.idno = " ";
    this.newName = " ";
    this.emailid = " ";
    this.phoneno = " ";
    this.id = this.idno;
    this.name = this.newName;
    this.email = this.emailid;
    this.phone = this.phoneno;
    }
    }

    class Controller {
     constructor(model) {
     this.model = model;
     }
     get modelName() {
     this.model.name = this.model.newName;
     return this.model.name;
     }
     get modelId() {
     this.model.id = this.model.idno;
     return this.model.id;
     }
     get emailId() {
     this.model.email = this.model.emailid;
     return this.model.email;
     }
     get phoneId() {
     this.model.phone = this.model.phoneno;
     return this.model.phone;
     }
     handleEvent(e) {
     e.stopPropagation();
     this.changeHandler();
     }
     
      changeHandler() {

      // MODEL //
        this.model.newName = this.view.newName.value;
        this.model.idno = this.view.idno.value;
        this.model.emailid = this.view.emailid.value;
        this.model.phoneno = this.view.phoneno.value;


      // VIEW //
        this.view.name.innerHTML=this.modelName;
        this.view.id.innerHTML=this.modelId;
        this.view.email.innerHTML=this.emailId;
        this.view.phone.innerHTML=this.phoneId;
        this.view.newName.value = "";
        this.view.idno.value = "";
        this.view.emailid.value = "";
        this.view.phoneno.value = "";
      }
      
    }
    
    class View {
      constructor(controller) {
      this.controller = controller;

      this.name = document.getElementById('name');
      this.id = document.getElementById('id');
      this.email = document.getElementById('email');
      this.phone = document.getElementById('phone');

      this.name.innerText = controller.modelName;
      this.id.innerText = controller.modelId;
      this.email.innerText = controller.emailId;
      this.phone.innerText = controller.phoneId;

      this.newName = document.getElementById('newName');
      this.idno = document.getElementById('idno');
      this.emailid = document.getElementById('emailid');
      this.phoneno = document.getElementById('phoneno');

      // UPDATE //
      this.changeBtn = document.getElementById('changeNameButton');
      this.changeBtn.addEventListener('click', controller);
      controller.view = this;

      }
    }
    
    function main () {
    const model = new Model();
    const controller = new Controller(model);
    const view = new View(controller);
    }
    
    main();

