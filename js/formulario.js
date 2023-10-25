let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
/*Llamamos a los id y clases*/
let nombreyapellido = id("nombreyapellido"), /*0*/
    username = id("username"),               /*1*/
    birth = id("birth"),                     /*2*/
    email = id("email"),                     /*3*/
    phone = id("phone"),               /*4*/
    password = id("password"),               /*5*/
    direccionCalle = id("direccionCalle"),
    localidadProvincia = id("localidadProvincia"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    /*Mensaje de error que se va a mostrar cuando no se llenen correctamente los campos */
    /*Para no usar muchas lineas de codigo simplificamos la funcion, primero hacemos el let en este caso campos obligatorios, ponemos el ciclo if else, en vez de especificar el input ponemos id y los toma a todos, y lo mismo con el serial, ponemos eso para no poner cada uno individual, 0, 1,2 etc. luego llamamos a la funcion mas arriba en el form.addEventListener y ahi si escribimos cada uno de los inputs, su numero y el mensaje que queremos mostrar en caso de no completar el espacio*/
    form.addEventListener("submit", (e) => {
    e.preventDefault();

    campoObligatorio(nombreyapellido, 0, "Campo obligatorio");
    campoObligatorio(username, 1, "Campo obligatorio");
    campoObligatorio(birth, 2, "Campo obligatorio");
    campoObligatorio(email, 3, "Campo obligatorio");
    campoObligatorio(phone, 4, "Campo obligatorio");
    campoObligatorio(password, 5, "Campo obligatorio");
    campoObligatorio(direccionCalle, 6, "Campo Obligatorio");
    campoObligatorio(localidadProvincia, 7, "Campo obligatorio");

    });
// Este ciclo if es para cuando no se complete el campo, se mostrara al usuario un mensaje indicando que es obligatorio hacerlo 
    let campoObligatorio = (id, serial, message) => {
        if (id.value.trim() === "") {
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity= "1";
            successIcon[serial].style.opacity= "0";
        } 
        else{
            errorMsg[serial].innerHTML = " ";
            failureIcon[serial].style.opacity= "0";
            successIcon[serial].style.opacity= "1";  
        } 
    }
