# validaciones_avanzadas
Deberán llevar a cabo las mismas validaciones, pero en este caso trabajarán 
con un elemento del tipo form y deberán combinar las validaciones por atributo con validaciones propias.

Antes de empezar, investiguen sobre los siguientes temas:
Validación de restricciones
Feedback en validaciones (por ejemplo, con Bootstrap)
Atributo novalidate
Estados :valid e :invalid
Métodos setCustomValidity() y checkValidity()
Evento submit y los métodos preventDefault() y stopPropagation()


El formulario deberá enviarse solamente si cumple con los criterios definidos:
Ningún campo puede estar vacío
El Email debe tener un formato valido
La contraseña debe tener al menos 6 caracteres
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" (en este caso dentro de un modal).


Deberá darse feedback al usuario cumpliendo con los siguientes criterios:
Solamente se dará feedback al usuario, luego de que se intente ejecutar el submit, momento en el que 
se deberá mostrar el resultado de la validación para todos los campos.
Luego de ese momento, el feedback deberá funcionar en tiempo real para todos los casos.
Para cada caso, deberá alertarse al menos a través de un aviso que especifique la omisión y del color del borde del campo.
El campo "Repetir contraseña" solo se validará cuando se cumpla que su valor sea igual al del campo "Contraseña" y que el campo "Contraseña" se encuentre validado. 
Por lo que se mostrará como invalido mientras no se valide "Contraseña", aún cumpliéndose la igualdad.


El checkbox de los terminos y condiciones deberá dar feedback en 3 lugares:

-El mismo checkbox, dentro del modal
-El botón que despliega el modal
-Un texto al lado del mismo botón
