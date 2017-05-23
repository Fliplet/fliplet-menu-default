Fliplet.Widget.onSaveRequest(function () {
  Fliplet.Widget.save({
    foo: $('input').val()
  }).then(function () {
    Fliplet.Widget.complete();
  });
});