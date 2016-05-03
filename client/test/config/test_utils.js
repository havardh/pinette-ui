/* eslint-env browser */
/* eslint-disable prefer-template, no-unused-vars, func-names */
/* eslint-disable no-console, prefer-arrow-callback */
import _ from 'lodash';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

export default _.merge({}, TestUtils, {
  findRenderedDOMComponentWithCss(component, expression) {
    const domNode = component.getDOMNode ? component.getDOMNode() : component;
    return domNode.parentNode.querySelector(expression);
  },

  findRenderedDOMComponentWithXpath(component, expression) {
    const domNode = component.getDOMNode ? component.getDOMNode() : component;
    const domParentNode = domNode.parentNode;
    document.body.appendChild(domParentNode);
    const result = document.evaluate(
      expression,
      domParentNode,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    document.body.removeChild(domParentNode);

    return result;
  },

  findElementByOptions(component, options) {
    let element;

    if (options.hasOwnProperty('label')) {
      element = this.findRenderedDOMComponentWithXpath(
        component,
        "//label[contains(., '" + options.label + "')]/" +
        '*[self::input or self::select or self::textarea]'
      );

      if (element === null) {
        element = this.findRenderedDOMComponentWithXpath(
          component,
          "//label[contains(., '" + options.label + "')]/../*" +
          '[self::input or self::select or self::textarea]'
        );
      }
    } else if (options.hasOwnProperty('xpath')) {
      element = this.findRenderedDOMComponentWithXpath(
        component,
        options.xpath);
    } else if (options.hasOwnProperty('css')) {
      element = this.findRenderedDOMComponentWithCss(
        component,
        options.css);
    } else if (options.hasOwnProperty('name')) {
      element = this.findRenderedDOMComponentWithXpath(
        component,
        "//*[self::input or self::select or self::textarea][@name='" + options.name + "']");
    } else if (options.hasOwnProperty('button')) {
      element = this.findRenderedDOMComponentWithXpath(
        component,
        "//button[contains(., '" + options.button + "')]");
    } else if (options.hasOwnProperty('link')) {
      element = this.findRenderedDOMComponentWithXpath(
        component,
        "//a[contains(., '" + options.link + "')]");
    } else {
      throw new Error('Missing a selector option');
    }

    if (element === null) {
      throw new Error('Expected to find an element with options ' + JSON.stringify(options));
    }

    return element;
  },

  findValue(component, options) {
    const element = this.findElementByOptions(component, options);

    if (element.nodeName.toLowerCase() === 'input' ||
        element.nodeName.toLowerCase() === 'textarea') {
      return element.value;
    } else if (element.nodeName.toLowerCase() === 'select') {
      return element.options[element.selectedIndex].text;
    } else {
      throw new Error(
        'Expected to find either input, textarea or select, but was '
        + element.nodeName.toLowerCase()
      );
    }
  },

  change(component, options) {
    if (!options.hasOwnProperty('value')) {
      throw new Error('Missing value option not found');
    }

    const element = this.findElementByOptions(component, options);

    if (element.nodeName.toLowerCase() === 'input' ||
        element.nodeName.toLowerCase() === 'textarea') {
      this.Simulate.change(element, {
        target: _.assign({}, element, { name: element.name, value: options.value }),
      });
    } else if (element.nodeName.toLowerCase() === 'select') {
      const optionWithValue = _.find(element.options, function (option) {
        if (option.text === options.value) {
          console.log(
            'Deprecation warning: Usage of text as selector for select values is deprecated.' +
            'Use name the value instead.'
          );
          return true;
        }
        return option.value === options.value;
      });

      if (typeof optionWithValue === 'undefined') {
        throw new Error('Expected to find an option with value ' + options.value);
      }

      this.Simulate.change(element, {
        target: _.assign({}, element, { name: element.name, value: optionWithValue.value }),
      });
    } else {
      throw new Error(
        'Expected to find either input, textarea or select, but was ' +
        element.nodeName.toLowerCase()
      );
    }
  },

  check(component, options) {
    const element = this.findElementByOptions(component, options);

    if (element.nodeName.toLowerCase() === 'input') {
      if (element.type === 'radio' || element.type === 'checkbox') {
        this.Simulate.change(element, { target: { name: element.name, value: element.value } });
      } else {
        throw new Error(
          'Expected to find an input of type radio or checkbox, but was ' + element.type
        );
      }
    } else {
      throw new Error('Expected to find an input, but was ' + element.nodeName.toLowerCase());
    }
  },

  isChecked(component, options) {
    const element = this.findElementByOptions(component, options);

    if (element.nodeName.toLowerCase() === 'input') {
      if (element.type === 'radio' || element.type === 'checkbox') {
        return element.checked;
      } else {
        throw new Error(
          'Expected to find an input of type radio or checkbox, but was ' + element.type
        );
      }
    } else {
      throw new Error('Expected to find an input, but was ' + element.nodeName.toLowerCase());
    }
  },

  click(component, options, e) {
    const element = this.findElementByOptions(component, options);

    this.Simulate.click(element, e);
  },

  blur(component, options) {
    const element = this.findElementByOptions(component, options);

    this.Simulate.blur(element);
  },

  focus(component, options) {
    const element = this.findElementByOptions(component, options);

    this.Simulate.focus(element);
  },

  nbsp(string) {
    return string.replace(/ /g, '\xa0');
  },

  render(componentOrElement, props) {
    return this.renderIntoDocument(componentOrElement);
  },

});
