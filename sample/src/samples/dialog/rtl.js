export class Rtl {
  constructor() {
    this.tooltip = { close: 'بند کریں' };
  }
onOpen(args) {
  $('#btnOpen').hide();
  $('#rtlDialog').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
