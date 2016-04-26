import {constants} from './constants';

export class Util {

  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;
    return this._unhyphenate(name);
  }

  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  getOptions(model, properties ) {
    let bindableproperites = {};
    for (let prop of properties) {
      let value = model[this.getBindablePropertyName(prop)];
      if (this.hasValue(value)) {
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  }

  getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  }

  hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
  }

}
