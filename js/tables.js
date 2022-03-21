/** structureData **/
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
				var country = '';
			}
			j++;
		} /** End Country and Population **/

		/** Daily People Vaccinated **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].daily_people_vaccinated != null) {
	        var daily_people_vaccinated = vaccinations[i].data[date_length].daily_people_vaccinated;
	        var last_updated_daily_people_vaccinated = vaccinations[i].data[date_length].date;
	        break;
	      }
	      date_length--;
	    } /** End Daily People Vaccinated **/

	    /** Daily People Vaccinated Per Hundred **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].daily_people_vaccinated_per_hundred != null) {
	        var daily_people_vaccinated_per_hundred = vaccinations[i].data[date_length].daily_people_vaccinated_per_hundred;
	        break;
	      }

	      date_length--;
	    } /** End Daily People Vaccinated Per Hundred **/

	    /** People Vaccinated (Single Dose) **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].people_vaccinated != null) {
	        var people_vaccinated = vaccinations[i].data[date_length].people_vaccinated;
	        var last_updated_people_vaccinated = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }/** End People Vaccinated (Single Dose) **/

	   	/** People Vaccinated Per Hundred (Sinlge Dose) **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].people_vaccinated_per_hundred != null) {
	        var people_vaccinated_per_hundred = vaccinations[i].data[date_length].people_vaccinated_per_hundred;
	        var last_updated_people_vaccinated_per_hundred = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }/** End People Vaccinated Per Hundred (Single Dose) **/

	    /** People Fully Vaccinated (Double Dose) **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].people_fully_vaccinated != null) {
	        var people_fully_vaccinated =
	          vaccinations[i].data[date_length].people_fully_vaccinated;
	        var last_updated_people_fully_vaccinated = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }/** End People Fully Vaccinated (Double Dose) **/

	    /** People Fully Vaccinated Per Hundred (Double Dose) **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].people_fully_vaccinated_per_hundred != null) {
	        var people_fully_vaccinated_per_hundred =
	          vaccinations[i].data[date_length].people_fully_vaccinated_per_hundred;
	        var last_updated_people_fully_vaccinated_per_hundred = vaccinations[i].data[date_length].date;
	        break;
	      }

	      date_length--;
	    }/** End People Fully Vaccinated Per Hundred (Double Dose) **/

	   	/** Total Boosters **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].total_boosters != null) {
	        var total_boosters =
	          vaccinations[i].data[date_length].total_boosters;
	        var last_updated_total_boosters = vaccinations[i].data[date_length].date;
	        break;
	      } else {
	      	var total_boosters = '';
	      	var last_updated_total_boosters = '';
	      }

	      date_length--;
	    }/** End Total Boosters **/

	    /** Total Boosters Per Hundred **/
	    var date_length = vaccinations[i].data.length - 1;
	    while (date_length > 0) {
	      if (vaccinations[i].data[date_length].total_boosters_per_hundred != null) {
	        var total_boosters_per_hundred =
	          vaccinations[i].data[date_length].total_boosters_per_hundred;
	        break;
	      } else {
	      	total_boosters_per_hundred = '';
	      }

	      date_length--;
	    }/** End Total Boosters Per Hundred **/

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
	    }/** End Total Vaccinations **/

	    /** Total Vaccinations Per Hundred **/
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
			population: parseFloat(population),
			last_updated_population: last_updated_population,
			daily_people_vaccinated: parseFloat(daily_people_vaccinated),
			last_updated_daily_people_vaccinated: last_updated_daily_people_vaccinated,
			daily_people_vaccinated_per_hundred: daily_people_vaccinated_per_hundred,
			people_vaccinated: people_vaccinated,
			last_updated_people_vaccinated: last_updated_people_vaccinated,
			people_vaccinated_per_hundred: people_vaccinated_per_hundred,
			people_fully_vaccinated: people_fully_vaccinated,
			last_updated_people_fully_vaccinated: last_updated_people_fully_vaccinated,
			people_fully_vaccinated_per_hundred: people_fully_vaccinated_per_hundred,
			total_boosters: total_boosters,
			last_updated_total_boosters: last_updated_total_boosters,
			total_boosters_per_hundred: total_boosters_per_hundred,
			total_vaccinations: total_vaccinations,
			last_updated_total_vaccinations: last_updated_total_vaccinations,
			total_vaccinations_per_hundred: total_vaccinations_per_hundred,

		});

	} /** End For Loop **/
} /** End structureData **/

/** buildTable **/
function buildTable(data) {
	let table = document.getElementById("myTable");
	table.innerHTML = "";
	for (i = 0; i < data.length; i++) {
		if (data[i].country != '') {
			let row = ` <tr>
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
									<p>Last Updated: ${data[i].last_updated_daily_people_vaccinated}</p>
								</div>
							${addCommas(data[i].daily_people_vaccinated_per_hundred)}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_people_vaccinated}</p>
								</div>
							${addCommas(data[i].people_vaccinated)}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_people_vaccinated}</p>
								</div>
							${data[i].people_vaccinated_per_hundred + (data[i].people_vaccinated_per_hundred > 0?'%':'')}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_people_fully_vaccinated}</p>
								</div>
							${addCommas(data[i].people_fully_vaccinated)}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_people_fully_vaccinated}</p>
								</div>
							${data[i].people_fully_vaccinated_per_hundred + (data[i].people_fully_vaccinated_per_hundred > 0?'%':'')}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_total_boosters}</p>
								</div>
							${addCommas(data[i].total_boosters)}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_total_boosters}</p>
								</div>
							${data[i].total_boosters_per_hundred + (data[i].total_boosters_per_hundred > 0?'%':'')}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_total_vaccinations}</p>
								</div>
							${addCommas(data[i].total_vaccinations)}
							</td>
							<td class="tooltip-container">
								<div class="tooltip-content">
									<p>Last Updated: ${data[i].last_updated_total_vaccinations}</p>
								</div>
							${addCommas(data[i].total_vaccinations_per_hundred)}
							</td>

						</tr>`
	  		table.innerHTML += row;

		} /** End if Statement **/
	} /** End For Loop **/
} /** End buildTable **/
