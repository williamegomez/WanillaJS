"use strict";

import domTreeCreator from 'dom-tree-creator'

module.exports = function component ({template = '', components = []}) {
  function appendNodes (node, children, componentsName, components) {
    children.forEach((el) => {
      var index = componentsName.indexOf(el.parent)
      if (index !== -1) {
        var child = new components[index]()
        node.appendChild(child.node)
      } else{
        var child = document.createElement(el.parent)
        node.appendChild(child)
        if (el.children.length) appendNodes(child, el.children)
      }
    })
  }

  this.createNode = function () {
    var index = this.componentsName.indexOf(this.domTree[0].parent)
    if (index !== -1) {
      var el = new this.components[index]()
      return el.node
    }
    else {
      return document.createElement(this.domTree[0].parent);
    }
  }
  
  this.template = template
  this.components = components
  this.componentsName = components.map(value => value.name)
  this.domTree = domTreeCreator(template)

  if (this.domTree.length > 1) {
    throw 'Template only must contain a parent node'
  }
  else {
    this.children = this.domTree[0].children
    this.node = this.createNode()
    if (this.children.length) appendNodes(this.node, this.children, this.componentsName, this.components)
  }
}


