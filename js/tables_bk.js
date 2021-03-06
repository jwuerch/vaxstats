function structureData() {
	tableData = [];

	for (i = 0; i < vaccinations.length; i++) {

		/** Country and Population **/
		let j = 0;
		while (j < populations.length) {
			if (populations[j].iso_code == vaccinations[i].iso_code) {
				var country = populations[j].entity;
				var population = populations[j].population;
				var last_updated_population = populations[j].year;
				break;
			} else {
				var country ='';
			}

			j++;
		}
		var population = parseFloat(population);


		  /** Daily People Vaccinated **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].daily_people_vaccinated != null) {
	        var daily_people_vaccinated = vaccinations[i].data[date_length].daily_people_vaccinated;
	        var last_updated_daily_people_vaccinated = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }

      /** Daily People Vaccinated Per 100 **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].daily_people_vaccinated_per_hundred != null) {
	        var daily_people_vaccinated_per_hundred = vaccinations[i].data[date_length].daily_people_vaccinated_per_hundred;
	        var last_updated_daily_people_vaccinated_per_hundred = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }

	    /** Daily Vaccinations **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	    	if (vaccinations[i].data[date_length].daily_vaccinations != null) {
	    		var daily_vaccinations = vaccinations[i].data[date_length].daily_vaccinations;
	    		var last_updated_daily_vaccinations = vaccinations[i].data[date_length].date;
	    	}

	    	date_length--;
	    }

	    /** Daily Vaccinations Per Million **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	    	if (vaccinations[i].data[date_length].daily_vaccinations_per_million != null) {
	    		var daily_vaccinations_per_million = vaccinations[i].data[date_length].daily_vaccinations_per_million;
	    	}

	    	date_length--;
	    }

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
	    var single_dose = parseFloat(single_dose);
	    var single_dose_percent = parseFloat(((single_dose / population) * 100).toFixed(2));

	    /** Single Dose Per 100 **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].people_vaccinated_per_hundred != null) {
	        var single_dose_per_hundred = vaccinations[i].data[date_length].people_vaccinated_per_hundred;
	        var last_updated_single_dose_per_hundred = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }

	    /** Double Dose **/
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
	    var double_dose = parseFloat(double_dose);
	    var double_dose_percent = parseFloat(((double_dose / population) * 100).toFixed(2));

	    /** Double Dose Per 100 **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].people_fully_vaccinated_per_hundred != null) {
	        var double_dose_per_hundred =
	          vaccinations[i].data[date_length].people_fully_vaccinated_per_hundred;
	        var last_updated_double_dose_per_hundred = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }

	    /** Total Boosters **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].total_boosters != null) {
	        var total_boosters =
	          vaccinations[i].data[date_length].total_boosters;
	        var last_updated_total_boosters = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }

	    /** Total Boosters Per 100 **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].total_boosters_per_hundred != null) {
	        var total_boosters_per_hundred =
	          vaccinations[i].data[date_length].total_boosters_per_hundred;
	        break;
	      }

	      date_length--;
	    }

	    /** Total Vaccinations **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].total_vaccinations != null) {
	        var total_vaccinations =
	          vaccinations[i].data[date_length].total_vaccinations;
	        var last_updated_total_vaccinations = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }

	    /** Total Vaccinations Per 100 **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].total_vaccinations_per_hundred != null) {
	        var total_vaccinations_per_hundred =
	          vaccinations[i].data[date_length].total_vaccinations_per_hundred;
	        var last_updated_total_vaccinations_per_hundred = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }


		tableData.push({
			country: country,
			population: population,
			last_updated_population: last_updated_population,
			daily_people_vaccinated: daily_people_vaccinated,
			last_updated_daily_people_vaccinated: last_updated_daily_people_vaccinated,
			daily_people_vaccinated_per_hundred: daily_people_vaccinated_per_hundred,
			last_updated_daily_people_vaccinated_per_hundred: last_updated_daily_people_vaccinated_per_hundred,
			daily_vaccinations: daily_vaccinations,
			last_updated_daily_vaccinations: last_updated_daily_vaccinations,
			daily_vaccinations_per_million: daily_vaccinations_per_million,
			single_dose: single_dose,
			single_dose_percent: single_dose_percent,
			single_dose_per_hundred: single_dose_per_hundred,
			last_updated_single_dose: last_updated_single_dose,
			double_dose: double_dose,
			double_dose_percent: double_dose_percent,
			double_dose_per_hundred: double_dose_per_hundred,
			last_updated_double_dose: last_updated_double_dose,
			total_boosters: total_boosters,
			total_boosters_per_hundred: total_boosters_per_hundred,
			last_updated_total_boosters: last_updated_total_boosters,
			total_vaccinations: total_vaccinations,
			total_vaccinations_per_hundred: total_vaccinations_per_hundred,

		});
	}
}

function buildTable(data) {

  let table = document.getElementById("myTable");
  table.innerHTML = "";
  for (i = 0; i < data.length; i++) {
  	if (data[i].country != '') {

	  	let row = `<tr>
	  				<td>${i + 1}</td>
	  				<td>${data[i].country}</td>
	  				<td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_population}</p>
	  					</div>
	  					${addCommas(data[i].population)}
	  				</td>
	  			  <td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_daily_people_vaccinated}</p>
	  					</div>
	  					${addCommas(data[i].daily_people_vaccinated)}
	  				</td>
	  				<td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_daily_people_vaccinated_per_hundred}</p>
	  					</div>
	  					${data[i].daily_people_vaccinated_per_hundred}
	  				</td>
	  				<td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_daily_vaccinations}
	  					</div>
	  					${data[i].daily_vaccinations}
	  				</td>
	  				<td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_single_dose}</p>
	  					</div>
	  					${addCommas(data[i].single_dose)}
	  				</td>
	  				<td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_single_dose}</p>
	  					</div>
	  					${data[i].single_dose_percent + (data[i].single_dose_percent > 0?'%':'')}
	  				</td>
	  				 <td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_double_dose}</p>
	  					</div>
	  					${addCommas(data[i].double_dose)}
	  				</td>
	  				<td class="tooltip-container">
	  					<div class="tooltip-content">
	  						<p>Last Updated: ${data[i].last_updated_double_dose}</p>
	  					</div>
	  					${data[i].double_dose_percent + (data[i].double_dose_percent > 0?'%':'')}
	  				</td>
	  				</tr>`;
	  	table.innerHTML += row;
	  }

  }
}

$(".th-click").on("click", function () {
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

function addCommas(value) {
	value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return value;
 }