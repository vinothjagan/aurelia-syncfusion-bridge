export class BasicUse {

  constructor() {
    this.commonSeriesOptions = { 
	            
              enableAnimation: true,
                    name: 'Server',
                    type: 'line'
	  };
	this.size={
	  width:'900px',
	  height:'600px'
	  
	};
	 this.title = {
	    text: 'Server CPU Load'
	 };
	 this.legend={
	    visible: true, 
	};
	this.zooming ={
	  enable: true, 
				type: 'x,y', 
				enableMouseWheel: true,
				enableScrollbar:true
	},
	 
	this.primaryXAxis= { 
	   title: { text: 'Date' },
				valueType:'datetime'
	};
	this.primaryYAxis=
            {
                title: { text: 'CPU Load' },
                labelFormat: '{value}%'  
            };
  }
  onchartload(sender) 
	{
		//debugger;
        var data = this.GetData();
        sender.detail.model.series[0].dataSource = data.Open;
	    sender.detail.model.series[0].xName= "XValue"; 
		sender.detail.model.series[0].yName= "YValue";
    }
	
   GetData()
	{
        var series1 = [];
        var value = 100;
        for (var i = 1; i < 250; i++)
		{
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            var point = { XValue: new Date(1970, i+2, i), YValue: value };
            series1.push(point);
        }
        var data = { Open: series1 };
        return data;
	}
}
