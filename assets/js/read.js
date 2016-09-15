/**
 * Use DataTables to enhance the functionality of the table on this page.
 *
 * ** NOTE ** All extentsions are availabile in your code already.
 *            You only need to include the javascript and css listed below
 *
 * Here's what this you will need to do:
 * 
 * DONE 1. Inlclude the following DataTables css in layout.ejs
 *    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs/dt-1.10.12/b-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.css"/>
 * 
 * DONE 2. Include the following DataTables JavaScript in layout.ejs
 *    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/b-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.js"></script>
 *
 * DONE 3. Using the DataTables plugin render the table on the page as a DataTable
 *
 * DONE 4. Use the buttons extention to enable the copy, csv, excel, pdf, and print
 *
 * DONE 5. Use the colReorder Plugin to add the ability to reorder columns
 *
 * DONE 6. The table should be able to scroll horizontal
 * 
 * DONE 7. Use any other features you find interesting
 *
 * Here's the documentation you need:
 * https://datatables.net/
 * https://datatables.net/extensions/buttons/examples/
 * https://datatables.net/extensions/colreorder/examples/
 * https://datatables.net/examples/basic_init/scroll_x.html
 *
 */

 $(function(){

 	$(document).ready(function(){
    	$('#employeeTable').DataTable({
    		dom:'Bfrtip',
    		buttons: [
    			'copy', 'csv', 'excel', 'print'
    		],
    		colReorder: true,
    		"scrollX": true,
    		"columnDefs": [
	            {
	                "targets": [ 6 ],
	                "visible": false,
	                "searchable": false
	            } 
        	]
    	});
	});

 })