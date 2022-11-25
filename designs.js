
//function makeGrid()
function makeGrid(x, y){
  for (var i = 0; i < x; i++){
    $('table').append('<tr></tr>');
    for (var j = 0; j < y; j++){
      $('tr:last').append('<td></td>');
      $('td').attr("class", 'cells');
    }
  }
}
// Select size input
// Size is submitted by the user, call makeGrid()
  $('#sizePicker').submit(function (event){
    event.preventDefault();
    $('tr').remove();// Reset previous grid

    let rows = $('#inputHeight').val();
    let columns = $('#inputWidth').val();
    makeGrid(rows, columns);


// Select color input& remove
    $('.cells').click(function(event){
      let color = $('#colorPicker').val();

      if ($(event.target).attr('style')){
         $(event.target).removeAttr('style')
      }
      else{
          $(event.target).css('background-color', color);
      }

    })
  });

  $(document).ready(function() {
      $('#example').DataTable( {
          ajax:           "../data/2500.txt",
          deferRender:    true,
          scrollY:        200,
          scrollCollapse: true,
          scroller:       true
      } );
  } );
