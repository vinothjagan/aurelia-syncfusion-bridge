export class BasicUse {
  constructor() {
    this.width="100%";
    this.fields={ text: "ContactName", key: "SupplierID" };
    this.filterType= ej.filterType.StartsWith;
    this.dataManger = ej.DataManager({
                url: "http://mvc.syncfusion.com/Services/Northwnd.svc/"
            });
    this.query = ej.Query().from("Suppliers").select("SupplierID", "ContactName");
   
  }
  
}
