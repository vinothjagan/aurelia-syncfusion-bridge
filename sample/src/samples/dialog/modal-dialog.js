export class ModalDialog {
onOpen(args) {
  $('#btnOpen').hide();
  $('#lognForm').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
