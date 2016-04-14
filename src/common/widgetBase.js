import {getEventOption} from './events';
import {TaskQueue} from 'aurelia-task-queue';
export class WidgetBase {

  createWidget(option) {
    let allOption = this.getWidgetOptions(option.element);
    this.widget = jQuery($(option.element))[this.controlName](allOption).data(this.controlName);
  }

  getWidgetOptions(element) {
    let propOptions = this.util.getOptions(this);
    let eventOption = getEventOption(element);
    return Object.assign({}, propOptions, eventOption);
  }

  attached() {
    this.createWidget({ element: this.element });
  }
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
