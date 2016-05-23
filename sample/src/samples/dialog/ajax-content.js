export class AjaxContent {
  constructor() {
    
  }
onOpen(args){
    $("#btnOpen").hide();
    $("#ajaxDialog").ejDialog("open");
}
 onDialogClose(args) {
            $("#btnOpen").show();
        }
}
