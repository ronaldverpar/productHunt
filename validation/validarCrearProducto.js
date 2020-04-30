export default function validarCrearProducto(valores) {
    
    let errores = {};

    // Validar el nombre del usuario 
    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }

    // Validar empresa
    if (!valores.empresa) {
        errores.empresa = "Nombre de empresa es obligatorio"
    }

    // Validar URL
    if (!valores.url) {
        errores.url = "La URL del producto es obligatoria";
    } else if ( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
        errores.url = "URL mal formateado o no valido";
    }

    // Validar descripcion
    if (!valores.descripcion) {
        errores.descripcion = "Agregar una descripcion del producto"
    }

    return errores;
}