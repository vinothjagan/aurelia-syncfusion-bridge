export class BasicUse {
  constructor() {
    
  }
onOpen(args){
    $("#btnOpen").hide();
    $("#lognForm").ejDialog("open");
}
 onDialogClose(args) {
            $("#btnOpen").show();
        }
}
