# Convertidor de textos a UpperCase

ConvertText permite seleccionar entre uno o varios elementos del DOM mediante un selector CSS y convertir textos en mayúsculas.

Funcionamiento:

Se debe colocar el nombre del selector CSS tanto en el input como al momento de crear el nuevo objeto "mySelector":

    <input id="" type="text" class=" mySelector">

const upperCaseText = new ConvertText('.mySelector');

<script>
        document.addEventListener('DOMContentLoaded', () => {
            const upperCaseText = new ConvertText('.uppercase');
        })
</script>
