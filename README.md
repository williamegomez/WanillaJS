# Wanilla JS

A easy to use vanilla library to create components like Vue JS and React JS.


```
import component from 'wanilla-js'

function Button() {
  component.call(this,{
    template: 
    `<li>
      <span>Hola a todos</span>
    </li>`,
    components: []
  })
}

function Cta() {
  component.call(this,{
    template: 
    `<div>
      <Button class="btn btn-active">
      </Button>
      <Button class="btn btn-active">
      </Button>
    </div>`,
    components: [
      Button
    ]
  })
}

var btnLogin = new Button()
console.log(btnLogin.node)

var btnLogin = new Cta()
console.log(btnLogin.node)
```

Results in console:

Button component:
```
<li>
    <span></span>
</li> 
```

Cta component:
```
<div>
    <li>
        <span></span>
    </li>
    <li>
        <span></span>
    </li>
</div>
```