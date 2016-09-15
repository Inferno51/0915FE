/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 * 
 * DONE 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * DONE 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  email      - required, use email validation
 *	  Home Phone - use phoneUS validation
 *	  Cell Phone - use phoneUS validation
 *	  Password   - required, 8 characters, 1 lowercase, 1 uppercase, 1 digit, and 1 specal char
 *	               REGEX: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/
 *                   
 * DONE 3. Use a custom message for password pattern validation
 *
 * DONE 4. Make the color of the error text red
 *
 * DONE 5. Add a Verify Password field to the form and add validation to make 
 *    sure the 2 password fields are equal to eachother
 * 
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

 $(function(){

 	$("#addEmployeeForm").validate({
    	rules: {
	      	firstName: {
	      		required: true,
	      		minlength: 2
	      	},
	      	lastName: {
	      		required: true,
	      		minlength: 2
	      	},
	      	email: {
	      		required: true,
	      		email: true
	      	},
	      	homePhone: {
	      		phoneUS: true
	      	},
	      	cellPhone: {
	      		phoneUS: true
	      	},
	      	password: {
	      		required: true,
	      		pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/
	      	},
	      	passwordValidate: {
	      		required: true,
	      		equalTo: "#password"
	      	}
    	},
    	messages: {
    		password: {
    			required: "You must specify a password.",
    			pattern: "Your password must include 8 characters, 1 lowercase, 1 uppercase, 1 digit, and 1 specal character."
    		},
    		
    	},
    	errorClass: "text-danger"
    })
 })