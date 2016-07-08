System.register(['./events', '../common/util', '../common/decorators'], function (_export) {
  'use strict';

  var getEventOption, Util, delayed, firstValue, WidgetBase;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_events) {
      getEventOption = _events.getEventOption;
    }, function (_commonUtil) {
      Util = _commonUtil.Util;
    }, function (_commonDecorators) {
      delayed = _commonDecorators.delayed;
    }],
    execute: function () {
      firstValue = {};

      WidgetBase = (function () {
        function WidgetBase() {
          _classCallCheck(this, WidgetBase);
        }

        WidgetBase.prototype.createWidget = function createWidget(option) {
          var _this = this;

          this.allOption = this.getWidgetOptions(option.element);
          if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
          }
          this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
          if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
          }
          if (this.isEditor) {
            this.widget.model._change = function (evt) {
              if ('eValue' in _this) {
                _this[_this.util.getBindablePropertyName('value')] = evt.value;
              }
            };
          }
        };

        WidgetBase.prototype.createTwoWays = function createTwoWays() {
          var model = this.allOption;
          var twoWays = this.twoWays;
          var len = twoWays.length;
          for (var i = 0; i < len; i++) {
            var prop = twoWays[i];
            ej.createObject(prop, this.addTwoways(prop), model);
          }
        };

        WidgetBase.prototype.addTwoways = function addTwoways(prop) {
          var model = this;
          var value = firstValue;
          return function (newVal, isApp) {
            if (value === firstValue) {
              var viewModelProp = model.util.getBindablePropertyName(prop);
              value = model[viewModelProp];
              if (value === undefined) {
                value = this.defaults[prop];
              }
              return value;
            }
            if (newVal === undefined) {
              return value;
            }
            if (value === newVal) {
              return null;
            }
            value = newVal;
            if (!isApp && model.util.hasValue(newVal)) {
              var viewModelProp = model.util.getBindablePropertyName(prop);
              model[viewModelProp] = newVal;
            }
            return null;
          };
        };

        WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
          var propOptions = undefined;
          if (this.ejOptions) {
            propOptions = this.ejOptions;
          } else {
            propOptions = this.util.getOptions(this, this.controlProperties);
          }
          var eventOption = getEventOption(element);
          if (this.hasChildProperty) {
            this.getChildProperties(propOptions);
          }
          return Object.assign({}, propOptions, eventOption);
        };

        WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
          var PropertyName = this.childPropertyName;
          var childCollection = this[PropertyName];
          var len = childCollection.length;
          if (len) {
            options[PropertyName] = [];
            var childProperties = childCollection[0].controlProperties;
            for (var i = 0; i < len; i++) {
              options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
            }
          }
        };

        WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          if (this.widget) {
            var modelValue = undefined;
            var prop = this.util.getControlPropertyName(this, property);
            if (prop) {
              if (prop !== 'options') {
                modelValue = this.widget.model[prop];
                var isTwoway = typeof modelValue === 'function';
                if (isTwoway) {
                  modelValue = modelValue();
                }
                if (modelValue !== newValue) {
                  if (isTwoway) {
                    newValue = this.addTwoways(prop);
                  }
                  this.widget.option(prop, newValue);
                }
              } else {
                this.widget.option(newValue);
              }
            }
          }
        };

        WidgetBase.prototype.detached = function detached() {
          if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
          }
          if (this.widget) {
            this.widget.destroy();
          }
        };

        _createDecoratedClass(WidgetBase, [{
          key: 'attached',
          decorators: [delayed()],
          value: function attached() {
            if (this.templateProcessor) {
              this[this.childPropertyName].forEach(function (template) {
                return template.setTemplates();
              });
            }
            this.util = new Util();
            this.createWidget({ element: this.element });
          }
        }]);

        return WidgetBase;
      })();

      _export('WidgetBase', WidgetBase);
    }
  };
});
//# sourceMappingURL=../dist/dev/common/widget-base.js.map
