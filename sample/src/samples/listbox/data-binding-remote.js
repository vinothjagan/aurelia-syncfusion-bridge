export class BasicUse {
  constructor() {
     // declaration
     this.fields={ text: "CustomerID" };
     this.dataManger = ej.DataManager({
                url: "http://mvc.syncfusion.com/Services/Northwnd.svc/"
            });
     // Query creation
     this.query = ej.Query().from("Customers").take(10);
     
  }
}
