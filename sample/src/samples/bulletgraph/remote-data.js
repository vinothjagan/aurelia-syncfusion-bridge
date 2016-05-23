export class BasicUse {
constructor() {
  this.height=400;
  this.qualitativeRangeSize=320;
  this.quantitativeScaleLength=475;
  this.tooltipSettings={visible=true}
  this.orientation=ej.datavisualization.BulletGraph.Orientation.Vertical;
  this.flowDirection=ej.datavisualization.BulletGraph.FlowDirection.Forward;
  this.quantitativeScaleSettings= {
                location: { x: 110, y: 25 },
                minimum: 0,
                maximum: 10,
                interval: 1,
                minorTicksPerInterval: 4,
                majorTickSettings:{width:1, size: 13, stroke: 'gray'},
                minorTickSettings: { width: 1, size: 5, stroke: 'gray' },
                labelSettings: { offset: 14, size: 10 }
            };
			this.fields={
                dataSource: localData, category: "category",
                featureMeasures: "value",
                comparativeMeasure: "comparativeMeasureValue"
            };
			this.qualitativeRanges=[{
                rangeEnd: 4.3
            }, {
                rangeEnd: 7.3
            }, {
                rangeEnd: 10
            }];
			this.captionSettings= {textAngle: -90,
                location: { x: 40, y: 210 }, 
				text: "Revenue YTD", 
				font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', fontWeight: 'regular', opacity: 1 },
                subTitle: {
                    textAngle: -90,
                    text: "$ in Thousands", location: { x: 55, y: 210 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal ', size: '12px', fontWeight: 'regular', opacity: 1 } //'#707070'
                           }
				}
  
  }
   localData = [
                {
                    value: 30.4000, comparativeMeasureValue: 12,
                    category: 12
                },
                {
                    value: 31.2000, comparativeMeasureValue: 30,
                    category: 17
                },
                {
                    value: 24.0000, comparativeMeasureValue: 15,
                    category: 7
                },
                {
                    value: 39.4000, comparativeMeasureValue: 15,
                    category: 62
                },
                {
                    value: 25.6000, comparativeMeasureValue: 6,
                    category: 32
                },
                {
                    value: 35.1000, comparativeMeasureValue: 25,
                    category: 27
                },
                {
                    value: 26.2000, comparativeMeasureValue: 15,
                    category: 53
                },
                {
                    value: 19.2000, comparativeMeasureValue: 21,
                    category: 55
                },
                {
                    value: 27.2000, comparativeMeasureValue: 40,
                    category: 60
                },
                {
                    value: 18.6000, comparativeMeasureValue: 9,
                    category: 14
                }];
				}