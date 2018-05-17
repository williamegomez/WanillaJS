"use strict";

var _domTreeCreator = require('dom-tree-creator');

var _domTreeCreator2 = _interopRequireDefault(_domTreeCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function component(_ref) {
  var _ref$template = _ref.template,
      template = _ref$template === undefined ? '' : _ref$template,
      _ref$components = _ref.components,
      components = _ref$components === undefined ? [] : _ref$components;

  function setAttributeHTML(node, attributes) {
    attributes.forEach(function (att) {
      var previous = node.getAttribute(att.attributeName);
      if (previous) {
        node.setAttribute(att.attributeName, att.attributeValue + ' ' + previous);
      } else {
        node.setAttribute(att.attributeName, att.attributeValue);
      }
    });
  }

  function appendNodes(node, children, componentsName, components) {
    children.forEach(function (el, index) {
      var index = componentsName.indexOf(el.parent);
      if (index !== -1) {
        var child = new components[index]();
        node.appendChild(child.node);
        child.attributes = el.attributes;
        child.setAttributesObject();
      } else {
        var child = document.createElement(el.parent);
        node.appendChild(child);
        setAttributeHTML(child, el.attributes);
        if (el.children.length) appendNodes(child, el.children);
      }
    });
  }

  this.setAttributesObject = function () {
    var _this = this;

    this.attributes.forEach(function (att) {
      var previous = _this.node.getAttribute(att.attributeName);
      if (previous) {
        _this.node.setAttribute(att.attributeName, att.attributeValue + ' ' + previous);
      } else {
        _this.node.setAttribute(att.attributeName, att.attributeValue);
      }
    });
  };

  this.createNode = function () {
    var index = this.componentsName.indexOf(this.domTree[0].parent);
    if (index !== -1) {
      var el = new this.components[index]();
      el.attributes = this.domTree[0].attributes;
      el.setAttributesObject();
      return el.node;
    } else {
      var el = document.createElement(this.domTree[0].parent);
      setAttributeHTML(el, this.domTree[0].attributes);
      return el;
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
    this.attributes = this.domTree[0].attributes;
    this.node = this.createNode();
    if (this.children.length) appendNodes(this.node, this.children, this.componentsName, this.components);
  }
};