import Component from 'wanilla-js'

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
      <Button>
      </Button>
      <Button class="rojo">
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

