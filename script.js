$(function() {

  // call the tablesorter plugin
  $('table').tablesorter({ theme : 'blue' });

  $('button.applyid').click(function() {
    // This method adds the 'columns' widget & sorts the table to make it visible
    $('table')
      .trigger('applyWidgetId', 'columns')
      .trigger('sorton', [ [[0,0]] ]);
    return false;
  });

$("#table1").trigger("sorton", [ [[0,1]] ]);
  
  $('button.apply').click(function() {
    // This method reapplies the widgets listed in table.config.widgets
    // it won't appear to do anything unless we add 'zebra' to the widgets option
    $('table').data('tablesorter').widgets = ['zebra'];
    $('table').trigger('applyWidgets');
    return false;
  });

  $('button.remove').click(function() {
    // This method removes both the zebra & columns widget entirely
    $('table').trigger('removeWidget', 'zebra columns');
    return false;
  });

});
