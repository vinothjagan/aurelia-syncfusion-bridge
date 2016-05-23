export class BasicUse {
  constructor() {
   this.primaryXAxis=
            {
                majorGridLines: { visible: false },
				valueType:'datetime',
				labelFormat:'dd, hh:mm'
			};
			this.primaryYAxis=
            {
      			range:{min:1000, max:1006, interval:1}
            };
			this.series= 
			[
				{
                    type: 'line',
                    enableAnimation: false,
					fill: "#E46455", opacity:0.8
                },
				{
                    type: 'line',
                    enableAnimation: false,
					opacity:0.8
                 }
			];
			this.size= { height: "600" };
            this.legend= { visible: false};
	}
	
	
   
	
    onchartload(sender) 
	{
		var chart = $("#verticalchart").ejChart('instance');
		 var count = 0; var chartobj,intervalId;
		for(var i=0;i<50;i=i+1)
		{
	     this.AddPoint(sender.detail.model.series[0],0, 1000);
	     this.AddPoint(sender.detail.model.series[1],0, 1001);
		}
        chartobj = chart;
       //intervalId = window.setInterval((this.OnRefresh(count)), 20);
       
        setInterval(()=>{
           OnRefresh() 
	{	var chart = $("#verticalchart").ejChart('instance'),
	  chartobj = chart;
        if (chartobj.model.series[0].points.length > 50)
		{
            chartobj.model.series[0].points.splice(0, 2);
			chartobj.model.series[1].points.splice(0, 2);
            count += 2;
        }
        this.AddPoint(chartobj.model.series[0], count, 1000);
		this.AddPoint(chartobj.model.series[1], count, 1001);
		
		chartobj.model.colors =["#E94649", "#F6B53F"];
        $("#verticalchart").ejChart("redraw");
    }	
       }, 20);
    }
	
	AddPoint(series, count, value) 
	{
        if (series.points == undefined)
            series.points = [];			
        series.points[series.points.length] = { x:new Date(1500, series.points.length+count , series.points.length+count) , y: this.getRandomNum(value) };
    }
	
    getRandomNum(value) 
	{	    
	    var value2 = 1002;
		if((Math.random() + value2) < 1004.85)
		{
		    var random = Math.random();
            value += (random+2);            
		}
		else
        {
            var random = Math.random();
            value -= (random+2);                   
        }    
       return value;
    }
	}