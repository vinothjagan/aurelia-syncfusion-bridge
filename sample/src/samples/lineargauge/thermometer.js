export class BasicUse {
  constructor() {
  this.scales=[{
                    type: "thermometer", backgroundColor: "transparent", minimum: -10, maximum: 110, minorIntervalValue: 5, scaleBarSize: 20, position: { x: 50, y: 18 }, length: 355, border: { width: 0.5 },
                    showCustomLabels: true,
                    markerPointers: [{ opacity: 0 }],
                    barPointers: [{
                        width: 10, distanceFromScale: -0.5,
                        value: 100, backgroundColor: "#DB3738"
                    }],
                    labels: [{
                        placement: "near", font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }
                    }, {
                        placement: "far",
                        distanceFromScale: { x: 10 }
                    }],
                    ticks: [{
                        type: "majorinterval", height: 8, width: 1, color: "#8c8c8c"
                    }, {
                        type: "minorinterval", height: 4, width: 1, color: "#8c8c8c"
                    }, {
                        type: "majorinterval", placement: "far", height: 8, width: 1, color: "#8c8c8c"
                    }, {
                        type: "minorinterval", placement: "far", height: 4, width: 1, color: "#8c8c8c"
                    }],
                    customLabels: [{
                        value: "(� C)",
                        position: { x: 44, y: 104 },
                        font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "bold" }, color: "#666666"
                    }, {
                        value: "(� F)",
                        position: { x: 56, y: 104 },
                        font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "bold" }, color: "#666666"
                    },
                    {
                        position: { x: 51, y: 104 },
                        font: { size: "13px", fontFamily: "Segoe UI", fontStyle: "bold" },
                        color: "#666666"
                    }]
                }]
           
  }}