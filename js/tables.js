function structureData() {
  tableData = [];
  for (let i = 0; i < vaccinations.length; i++) {

    /** Population **/
    let x = 0;
    while (x < populations.length) {
      if (populations[x].countryiso3code == vaccinations[i].iso_code) {
        var population = populations[x].value;
        break;
      } else {
        var population = "";
      }
      x++;
    }

    /** Daily People Vaccinated **/
    var date_length = vaccinations[i].data.length - 1;
    while (date_length > 0) {
      if (vaccinations[i].data[date_length].daily_people_vaccinated != null) {
        var daily_people_vaccinated = vaccinations[i].data[date_length].daily_people_vaccinated;
        var last_updated_daily_people_vaccinated = vaccinations[i].data[date_length].daily_people_vaccinated;
        break;
      }

      date_length--;
    }

    /**

    /** Single Dose **/
    var date_length = vaccinations[i].data.length - 1;
    while (date_length > 0) {
      if (vaccinations[i].data[date_length].people_vaccinated != null) {
        var single_dose = vaccinations[i].data[date_length].people_vaccinated;
        var last_updated_single_dose = vaccinations[i].data[date_length].date;
        break;
      }

      date_length--;
    }

    /** Double Double **/
    var date_length = vaccinations[i].data.length - 1;
    while (date_length > 0) {
      if (vaccinations[i].data[date_length].people_fully_vaccinated != null) {
        var double_dose =
          vaccinations[i].data[date_length].people_fully_vaccinated;
        var last_updated_double_dose = vaccinations[i].data[date_length].date;
        break;
      }

      date_length--;
    }

    /** Formatting **/
    if (population == "") {
      single_dose_percent = "";
      double_dose_percent = "";
    } else {
      single_dose_percent = parseFloat(((single_dose / population) * 100).toFixed(2));
      double_dose_percent = parseFloat(((double_dose / population) * 100).toFixed(2));
    }
    tableData.push({
      country: vaccinations[i].country,
      population: population,
      daily_people_vaccinated: daily_people_vaccinated,
      last_updated_daily_people_vaccinated: last_updated_daily_people_vaccinated,
      last_updated_single_dose: last_updated_single_dose,
      single_dose: single_dose,
      single_dose_percent: single_dose_percent,
      last_updated_double_dose: last_updated_double_dose,
      double_dose: double_dose,
      double_dose_percent: double_dose_percent,
    });
  }
}

$("th").on("click", function () {
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

  $(this).html(text);
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

function buildTable(data) {
  let table = document.getElementById("myTable");

  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                      <td>${i + 1}</td>
	                    <td>${data[i].country}</td>
	                    <td>${addCommas(data[i].population)}</td>
                      <td>${addCommas(data[i].daily_people_vaccinated)}</td>
	                    <td class="tooltip-container">
    	                		<div class="tooltip-content">
    	                			<p>Last Updated: ${changeDateFormat(data[i].last_updated_single_dose)}</p>
    	                		</div>
	                		   ${data[i].single_dose_percent + (data[i].single_dose_percent > 0?'%':'')}
	                    </td>
	                    <td class="tooltip-container">
	                	
  	                		<div class="tooltip-content">
  	                			<p>Last Updated: ${changeDateFormat(data[i].last_updated_double_dose)}</p>
  	                		</div>
	                		  ${data[i].double_dose_percent + (data[i].double_dose_percent > 0?'%':'')}
	                    </td>
	               </tr>`;
    table.innerHTML += row;
  }
}

function addCommas(value) {
	value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return value;
  }

  function changeDateFormat(value) {
	var oldDate = value.split("-");
	var newDate = oldDate[1] + "-" + oldDate[2] + "-" + oldDate[0];
	return newDate;
}