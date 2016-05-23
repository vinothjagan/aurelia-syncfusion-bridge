export class BasicUse {
  constructor() {
  this.scales=[{
                showRanges: true,showTicks:false, showIndicators: true, startAngle: 120, sweepAngle: 300, radius: 80, size: 1,
                showScaleBar: false, minimum: 0, maximum: 100, majorIntervalValue: 10, minorIntervalValue: 10,
                border: {
                    width: 0.5,
                },
                customLabels: [{
                    value: "SPORTS", position: { x: 350, y: 280 }, color: "#333333", font: {fontFamily:"Segoe UI",fontStyle:"Bold", size: "24px" }
                }, {
                    value: "Fan Ratio", position: { x: 350, y: 310 }, color: "#333333", font: { fontFamily: "Segoe UI", size: "18px" }
                }, {
                    value: "(in million)", position: { x: 350, y: 330 }, color: "#333333", font: { fontFamily: "Segoe UI", size: "12px" }
                }],
                labels: [{
                    color: "transparent"
                }],
                ranges: [{
                    distanceFromScale: -73, size: 40, startValue: 0, endValue: 80, backgroundColor: "#bc4b4b", border: { color: "#bc4b4b", width: 2 }
                }, {
                    distanceFromScale: -132, size: 40, startValue: 0, endValue: 70, backgroundColor: "#21a56f", border: { color: "#21a56f", width: 2 }
                }, {
                    distanceFromScale: -190, size: 40, startValue: 0, endValue: 90, backgroundColor: "#2bafbc", border: { color: "#2bafbc", width: 2 }
                }],
                pointers: [{
                    type: "marker", markerType: "image", value: 80, distanceFromScale: 15, placement: "far", length: 43, width: 43, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "13.2.0.29/themes/web/images/gauge/golfball.png",
                   
                },{
                    type: "marker", markerType: "image", value: 70, distanceFromScale: 74, placement: "far", length: 43, width: 43, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "13.2.0.29/themes/web/images/gauge/basketball.png",
                    
                },{
                    type: "marker", markerType: "image", value: 90, distanceFromScale: 131, placement: "far", length: 43, width: 43, backgroundColor: "transparent", border: { width: 0, color: "transparent" }, imageUrl: "13.2.0.29/themes/web/images/gauge/football.png",
                   
                }],
                indicators:[
                {
                    height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
                }, {
                    height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
                }, {
                    height: 10, width: 10, type: "text", textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: "", textColor: "#8c8c8c", font: { size: "12px" } }]
                }]
            }];
  
  }}