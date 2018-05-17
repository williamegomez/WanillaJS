import Component from './../distribution'

function Text() {
  Component.call(this,{
    template: 
    `<span>Hi everyone</span>`,
    components: []
  },
  arguments)
}

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
console.log(listButtons.node)

