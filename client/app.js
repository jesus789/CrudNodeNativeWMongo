$(function(){
	var l=new Crud();
})

class Crud{
	constructor(){
		this.submitEvent()
	}

	submitEvent(){
		$('form').submit((event)=>{
			event.preventDefault()
			this.sendForm()
		})
	}

	sendForm(){
		//alert("Capturado el Submit")
		console.log('Caputando Formulario');
		console.log($('#nombre').val());
		let form_data=new FormData();
		//var form_data = {};
		//	form_data.nombre = $('#nombre').val()
		//	form_data.edad = $('#edad').val()
		form_data.append('nombre',$('#nombre').val());
		form_data.append('edad',$('#edad').val());
		console.log('---');
		console.log(form_data)
		$.ajax({
			url: '../server/agregar',
			dataType:'json',
			processData: false,
			contentType: false,
			data: form_data,
			type: 'POST',
			success: function(respuesta){

			},
			error:function(){
				console.log('Error en la comuncacion con el servidor');
				//alert('Error en la comuncacion con el servidor');
			}
		})
	}
}

