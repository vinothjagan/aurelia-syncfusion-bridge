export class BasicUse {
  constructor() {
 this.primaryXAxis=
                           {
                               majorGridLines: { visible: false },
							   valueType:'datetime',
							   labelFormat:"MMM dd",
							   
                           } ;
						   this.primaryYAxis=
                          {
                              labelFormat: '${value}',
							  range:{min:60, max:160, interval:20}
                          };
						  this.crosshair= {
                               visible: true,
							   type:'trackball',
                               marker:
                              {
                                  shape: 'circle',

                                  size:
                                  {
                                      height: 9, width: 9
                                  },
                                  visible: true,
                                 border: {width: 1 }
                              },
                               line: {
                                   color: 'transparent'
                               }
                           };
						   this.series=series: [{
                               type: 'line',
							   name:'Product X',
                               enableAnimation: true,tooltipFormat:"#point.x#  : #point.y#",
                               style: { borderWidth: 2 },
							   tooltip :
					             {					             	 
						            format:"#point.x#  : ej.format(#point.y#,n2)"
					             },
                              },
                               {
                                   type: 'line',
								   name:'Product Y',
                                   enableAnimation: true,tooltipFormat:"#point.x#  : #point.y#",
                                   style: { borderWidth: 2 },
								   tooltip :
					                {					             	 
					            	format:"#point.x#  : ej.format(#point.y#,n2)"
				                	},
                               }

                           ];
						   this.size= { height: "400" };
						   this.legend= { visible: true };
						   this.selectedRangeSettings={
               start:"2010/5/1", end:"2011/10/1"
           };
		   this.tooltipSettings= {
                visible: true, labelFormat: "MM/dd/yyyy", backgroundColor: "gray", tooltipDisplayMode: "ondemand",
                
                    font: {
                        color: 'white',
                        family: 'Segoe UI',
                        style: 'Normal',
                        size: '12px',
                        opacity: 1,
                        weight: 'regular'
                    },
                
            };
			this.rangeSeries= [
                            {                      

                                name: 'Product A', 
                                enableAnimation: false,
                                type:'line',
                                dataSource: data.Open, xName: "XValue", yName: "YValue",
                                border: {color: 'transparent', width:2 },
								opacity: 0.5, fill: '#69D2E7', 

                            }

            ];
			this.seriesSettings= {
                type: 'column', enableAnimation: true,
            };
			

  }
  var data;
		onchartload(sender) {
            data = GetData();
            sender.detail.model.series[0].dataSource = data.Open;
			sender.detail.model.series[0].xName= "XValue";
			sender.detail.model.series[0].yName= "YValue";
            sender.detail.model.series[1].dataSource = data.Close;
			sender.detail.model.series[1].xName= "XValue";
			sender.detail.model.series[1].yName= "YValue";
        }
		
		onchartloaded(sender) {
		var chartobj = $("#container").data("ejChart");
            if (chartobj != null) {
                chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
                chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            }
            $("#container").ejChart("redraw");
        }
		
        GetData() {
            var series1 = [];
            var series2 = [];
            var value = 100;
            var value1 = 120;
            for (var i = 1; i < 730; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                var point1 = { XValue: new Date(2010, 0, i), YValue: value };
                var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            data = { Open: series1, Close: series2 };
            return data;
        }
  }