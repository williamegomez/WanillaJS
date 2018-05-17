import Component from './../distribution'

function Button() {
  Component.call(this,{
    template: 
    `<li class="itemList">
      <span>Hola a todos</span>
    </li>`,
    components: []
  })
}

function Cta() {
  Component.call(this,{
    template: 
    `<Button class="container">
      <Button class="1">
      </Button>
      <Button class="2">
      </Button>
    </Button>`,
    components: [
      Button
    ]
  })
}

var btnLogin = new Button()
console.log(btnLogin.node)

var btnLogin = new Cta()
console.log(btnLogin.node)

