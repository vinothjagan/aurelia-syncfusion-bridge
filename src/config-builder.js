/**
* Plugin configuration builder
*/
export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll() : EjConfigBuilder {
    this.ejClickCounter().ejButton().ejMenu();
    return this;
  }

   /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): EjConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }


  ejClickCounter(): EjConfigBuilder {
    this.resources.push('./clickcounter/clickcounter');
    return this;
  }
  ejButton(): EjConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }
  
  ejMenu(): EjConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }
}
