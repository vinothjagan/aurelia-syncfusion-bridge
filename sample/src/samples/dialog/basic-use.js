export class BasicUse {
  constructor() {
    
  }
onOpen(args){
    $("#btnOpen").hide();
    $("#basicDialog").ejDialog("open");
}
 onDialogClose(args) {
            $("#btnOpen").show();
        }
}
