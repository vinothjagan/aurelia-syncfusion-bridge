import {Aurelia} from 'aurelia-framework';
import {EjConfigBuilder} from './config-builder';

export function configure(aurelia: Aurelia, configCallback?: (builder: EjConfigBuilder) => void) {
  let builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  aurelia.globalResources(builder.globalResources);
}
