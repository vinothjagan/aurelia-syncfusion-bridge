export class EjButton {
  textValue = 'Click Here';
  changeText() {
    $('#button').data('ejButton').option('text', 'Clicked');
  }
}
