export class BasicUse {
  constructor() {
   
    this.commonSeriesOptions = { 
	    tooltip: { visible: true }
	};
	this.primaryXAxis=
            {
                title: { text: "Month" }
            };
			this.primaryYAxis=
            {
               title: { text: "Unit Sold" }
            };
		this.axes=[
                {
                    majorGridLines:
                    {
						visible: false
                    },
                    orientation: 'Vertical',
                    opposedPosition: true,
                    axisLine: { visible: false },
                    rangePadding: 'normal',
                    name: 'yAxis',
                    labelFormat: '${value}',
                    title: { text: "Total Transactions" }
                }
            ];
			this.series=[{
                    points: [{ x: "Jan", y: 45 }, { x: "Feb", y: 100 }, { x: "March", y: 25 },
							 { x: "April", y: 100 }, { x: "May", y: 85 }, { x: "June", y: 140 }],
                    fill:"#69D2E7",
                    name: 'Unit Sold', 
					type: 'column', 
					enableAnimation: true,
                    tooltip: 
					{
						format: "#point.x# <br/> Unit Sold : #point.y# <br/>"
					}
                },				
				{
                    points: [{ x: "Jan", y: 10}, { x: "Feb", y: 30 }, { x: "March", y: 10 },
							 { x: "April", y: 70}, { x: "May", y: 50 }, { x: "June", y: 140 }],
					name: 'Total Transaction', 
					type: 'line', 
					enableAnimation: true, 
					yAxisName: 'yAxis',                    
					tooltip:
					{
						format: "#point.x# <br/> Profit : #point.y# <br/>" 
					},
                    marker:
                    {
                        shape: 'circle',
                        size:
                        {
                            height: 8, width: 8
                        },
                        visible: true
                    },
                    border:{width: 2 }
				}
            ];			
	this.size={
	  width:'900px',
	  height:'600px'
	  
	};
	 this.title = {
	    text: 'Sales Report '
	 };
	 this.legend={
	  visible: true,
				font: { size: '15px' }, 
				shape: 'seriesType',
				position: 'Top',
				itemStyle: { width: 15, height: 15 } 
	 };
	 
	
  }
}
