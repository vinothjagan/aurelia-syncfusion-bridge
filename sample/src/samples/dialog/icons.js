export class Icons {
  constructor() {
    this.actionButtons = ['close', 'collapsible', 'maximize', 'minimize', 'pin'];
  }
onOpen(args) {
  $('#btnOpen').hide();
  $('#dialogIcon').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
