$("th").on("click", function (evt) {
	if (evt.target.id == "th_number") {
		return;
	}
  let column = $(this).data("colname");
  let order = $(this).data("order");
  let text = $(this).html();
  // text = text.substring(0, text.length - 1);
  if (order == "desc") {
    tableData = tableData.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    $(this).data("order", "asc");
    // text += " ";
  } else {
    tableData = tableData.sort((a, b) => (a[column] < b[column] ? 1 : -1));
    $(this).data("order", "desc");
    // text += " ";
  }

  // $(this).html(text);
  buildTable(tableData);
});

$("#search-input").on("keyup", function () {
  let value = $(this).val();
  let data = searchTable(value);
  buildTable(data);
});

function searchTable(value) {
  let filteredData = [];

  for (let i = 0; i < tableData.length; i++) {
    value = value.toLowerCase();
    let name = tableData[i].country.toLowerCase();

    if (name.includes(value)) {
      filteredData.push(tableData[i]);
    }
  }
  return filteredData;
}

function addCommas(value) {
  value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return value;
}

$('.table-information-btn').on('click', function() {
  if ($('body').hasClass('table-information--active')) {
    $('body').removeClass('table-information--active');
    $('.table-information').slideUp(300);
  } else {
    $('body').addClass('table-information--active');
    $('.table-information').slideDown(300);
  }
});

