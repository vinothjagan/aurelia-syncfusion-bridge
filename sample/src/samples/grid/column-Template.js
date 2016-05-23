import "./jsondata.min.js"
export class columnTemplate {
  constructor() {
     this.EmployeesList = ej.DataManager(window.employeeView).executeLocal(ej.Query().take(8));
     this.page = { pageSize: 4};
   }
}
