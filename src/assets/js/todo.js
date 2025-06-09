/*
Author       : Dreamstechnologies
Template Name: Smarthr - Bootstrap Admin Template
*/

(function () {
    "use strict";
	
	// Todo Strike Content
	$('.todo-item input').on('click', function(){
		$(this).parent().parent().toggleClass('todo-strike');
	});

	$('.todo-inbox-check input').on('click', function(){
		$(this).parent().parent().toggleClass('todo-strike-content');
	});

	$('.todo-list input').on('click', function(){
		$(this).parent().parent().toggleClass('todo-strike-content');
	});

})();

function callchart(data1,data2,data3, data4){

	console.log("chart called");
	console.log("data1: "+data1+", data2: "+data2+", data3: "+data3+", data4: "+data4)
		if ($('#attendance').length > 0) {
		var ctx = document.getElementById('attendance').getContext('2d');
		var mySemiDonutChart = new Chart(ctx, {
			type: 'doughnut', // Chart type
			data: {
				labels: ['Processing', 'Success', 'Failed', 'Refund'],
				datasets: [{
					label: 'Transaction',
					data: [data1, data2, data3, data4],
					backgroundColor: ['#0C4B5E', '#03C95A', '#FFC107', '#E70D0D'],
					borderWidth: 5,
					borderRadius: 10,
					borderColor: '#fff', // Border between segments
					hoverBorderWidth: 0,   // Border radius for curved edges
					cutout: '60%',
				}]
			},
			options: {
				rotation: -100,
				circumference: 200,
				layout: {
					padding: {
						top: -20,    // Set to 0 to remove top padding
						bottom: -20, // Set to 0 to remove bottom padding
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false // Hide the legend
					}
				},
			}
		});
	}
}