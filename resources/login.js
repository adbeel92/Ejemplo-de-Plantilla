$(document).ready(function(){
	$('#button').click(function(){
		var user=$('#user').val();
		var pass=$('#pass').val();
		
		if(user=='admin')
		{
			if(pass=='admin')
			{
				window.location.href='principal/principal.html';
			}
			else
			{
				alert('El Usuario y/o la Contraseña son incorrectos.');
			}
		}
		else
		{
			alert('El Usuario y/o la Contraseña son incorrectos.');
		}
	
	});
});