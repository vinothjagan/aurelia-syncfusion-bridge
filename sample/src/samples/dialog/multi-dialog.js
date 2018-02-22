export class MultiDialog {
  constructor() {
    this.dialog1Position = { X: -225, Y: -80 };
    this.dialog2Position = { X: 235, Y: -80 };
    this.dialog3Position = { X: 0, Y: 140 };
  }
onOpen(args) {
  $('#btnOpen').hide();
  $('#basicDialog').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
