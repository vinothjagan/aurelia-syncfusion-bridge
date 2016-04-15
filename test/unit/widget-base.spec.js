import './setup';
import {WidgetBase} from 'src/common/widget-base';
import {constants} from 'src/common/constants';
import {Util} from 'src/common/util';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import 'ej.button.min';
describe('Events', () => {
  let widgetBase;
  let util;
  let  element:Element;
  beforeEach(() => {
    initialize();
    widgetBase = new WidgetBase();
    widgetBase.controlProperties = ['contentType', 'text', 'cssClass', 'enabled', 'enableRTL'];
    widgetBase.controlName = 'ejButton';
    widgetBase.ejText = 'Testtext';
    widgetBase.util = new Util();
    element = DOM.createElement('button');
    element.setAttribute('ej-button', 'ej-text:Testtext;enabled:false');
    element.setAttribute('id', 'button');
    element.setAttribute('ej-on-click.delegate', '');
    widgetBase.createWidget({element: element});
  });
  it('Widget created properly', ()=>{
    let result = widgetBase.widget.pluginName;
    expect(result).toBe('ejButton');
  });
  it('Widget model values set properly', ()=>{
    let result = widgetBase.widget.model.text;
    expect(result).toBe(widgetBase.ejText);
  });
  it('Widget event binded properly', ()=>{
    let result = widgetBase.util.hasValue(widgetBase.widget.model.click);
    expect(result).toBe(true);
  });
  it('Property changed changes model value properly', ()=>{
    widgetBase.propertyChanged('ejText', 'Changed', 'Testtext');
    expect(widgetBase.widget.model.text).toBe('Changed');
  });
});
