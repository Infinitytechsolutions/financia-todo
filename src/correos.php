<? php
    $destinatario = 'edgarbp.dev@gmail.com';
    $asunto = 'Solicitud de Prestamo ' . $nombre . $apellido;
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $documento = $_POST['documento'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $antiguedad = $_POST['antiguedad'];
    $salario = $_POST['salario'];
    $cantidad = $_POST['cantidad'];

    $header = "Datos suministrados por el cliente:";
    $mensajeCompleto = "Nombre: " . $nombre . "\nApellido: " . $apellido . "\nApellido: " . $apellido . "\nDocumento: " . $documento . "\ncorreo: " . $correo . "\nTeléfono: " . $telefono . "\nEmpresa: " . $empresa . "\nAntiguedad: " . $antiguedad . "\nSalario: " . $salario . "\nCantidad Solicitada: " . $cantidad ;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
?>