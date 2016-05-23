export class RemoteData {
    constructor() {
      let dataManager = ej.DataManager({
        url: 'http://mvc.syncfusion.com/OdataServices/Northwnd.svc',
        crossDomain: true
      });
      let query = ej.Query().from('Events').take(10);
      this.AppointmentList = {
        dataSource: dataManager,
        query: query,
        id: 'Id',
        subject: 'Subject',
        startTime: 'StartTime',
        description: 'Description',
        endTime: 'EndTime',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule'
      };
    }
}
