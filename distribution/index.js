"use strict";

var _domTreeCreator = require('dom-tree-creator');

var _domTreeCreator2 = _interopRequireDefault(_domTreeCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function component(_ref) {
  var _ref$template = _ref.template,
      template = _ref$template === undefined ? '' : _ref$template,
      _ref$components = _ref.components,
      components = _ref$components === undefined ? [] : _ref$components;

  function appendNodes(node, children, componentsName, components) {
    children.forEach(function (el) {
      var index = componentsName.indexOf(el.parent);
      if (index !== -1) {
        var child = new components[index]();
        node.appendChild(child.node);
      } else {
        var child = document.createElement(el.parent);
        node.appendChild(child);
        if (el.children.length) appendNodes(child, el.children);
      }
    });
  }

  this.createNode = function () {
    var index = this.componentsName.indexOf(this.domTree[0].parent);
    if (index !== -1) {
      var el = new this.components[index]();
      return el.node;
    } else {
      return document.createElement(this.domTree[0].parent);
    }
  };

  this.template = template;
  this.components = components;
  this.componentsName = components.map(function (value) {
    return value.name;
  });
  this.domTree = (0, _domTreeCreator2.default)(template);

  if (this.domTree.length > 1) {
    throw 'Template only must contain a parent node';
  } else {
    this.children = this.domTree[0].children;
    this.node = this.createNode();
    if (this.children.length) appendNodes(this.node, this.children, this.componentsName, this.components);
  }
};