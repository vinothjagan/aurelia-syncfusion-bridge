import {getEventOption} from './events';
import {TaskQueue} from 'aurelia-task-queue';
export class WidgetBase {

/**
* To Create an widget
* @param option Object which contains  Element in which  widget will be created
*/
  createWidget(option) {
    let allOption = this.getWidgetOptions(option.element);
    this.widget = jQuery($(option.element))[this.controlName](allOption).data(this.controlName);
  }

/**
* To get property and event options from the element
* @param element Element from which options are acquired
*/
  getWidgetOptions(element) {
    let propOptions = this.util.getOptions(this);
    let eventOption = getEventOption(element);
    return Object.assign({}, propOptions, eventOption);
  }

  attached() {
    this.createWidget({ element: this.element });
  }
/**
 * To change widget model value
 * @param property The viewModel property name
 * @param newValue New value of the property
 * @param oldvalue Pld value of the property
 */
  propertyChanged(property, newValue, oldValue) {
    if(this.widget) {
      let prop = this.util.getControlPropertyName(this, property);
      if(prop) {
        this.widget.option(prop, newValue);
      }
    }
  }
  detached() {
    this.widget.destroy();
  }
}
