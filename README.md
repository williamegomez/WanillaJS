# Wanilla JS

A easy to use vanilla library to create components like Vue JS and React JS.


Simple component:
```
import Component from 'wanilla-js'

function Text() {
  Component.call(this,{
    template: 
    `<span>Hi everyone</span>`,
    components: []
  },
  arguments)
}
```

Render in HTML:
```
<span>Hi everyone</span>
```

Component based on a primary one:
```
function Button() {
  Component.call(this,{
    template: 
    `<button class="btn">
      <Text></Text>
    </button>`,
    components: [
      Text
    ]
  },
  arguments)
}
```

Render in HTML:

```
<button class="btn-list btn">
  <span></span>
</button>
```

A bigger component passing props to its childrens:
```
function List() {
  Component.call(this,{
    template: 
    `<ul>
      <li class="item-list">
        <Button class="btn-list" data="btnLogin"></Button>
      </li>
      <li class="item-list">
        <Button class="btn-list" data="btnLogout">
        </Button>
      </li>
      <li class="item-list">
        <Button class="btn-list" data="btnHelp">
        </Button>
      </li>
    </ul>
    `,
    components: [
      Button
    ],
    data: {
      btnLogin: {
        text: "Login"
      },
      btnLogout: {
        text: "Logout"
      },
      btnHelp: {
        help: "Do you need help?"
      }
    }
  },
  arguments)
}

var listButtons = new List()
```

Render in HTML:

```
<ul>
  <li class="item-list">
    <button class="btn-list btn">
      <span></span>
    </button>
  </li>
  <li class="item-list">
    <button class="btn-list btn">
      <span></span>
    </button>
  </li>
  <li class="item-list">
    <button class="btn-list btn">
      <span></span>
    </button>
  </li>
</ul>
```