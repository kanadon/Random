var i, j, currentDay, row;
var arr = [];

function GetCalendarArray(year, month, startDay) {
  var firstDate = new Date(year, month, 1);
  var firstDay = firstDate.getDay();
  var lastDate = new Date(year, month + 1, 0);
  var lastDayOfMonth = lastDate.getDate();
  var dif = Math.abs(firstDay - startDay);
  var padding = firstDay >= startDay ? firstDay - startDay : 7 - dif;
  var currentDayOfMonth = 1 - padding;
  var totalWeeks = Math.ceil((lastDayOfMonth + padding) / 7);

  for (i = 0; i < totalWeeks; i++) {
    row = [];

    for (j = 1; j <= 7; j++) {
      row.push(new Date(year, month, currentDayOfMonth).getDate());
      currentDayOfMonth++;
    }

    arr.push(row);
  }

  return arr;
}