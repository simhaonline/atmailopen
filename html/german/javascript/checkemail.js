function check_email(form)	{

var email;

try {
email = form.value;	
} catch(e) {
	return true;
}

if (email)	{
	if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1)	{
			alert('Bitte geben Sie eine gültige E-Mailadresse an.');
			form.focus();
			return false;
	}
 }
return true;
}