const notificationes = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const notificacionDetalle={
    tiempo:5000,
    success: {
        icono:"fa-solid fa-circle-check",
        texto:"Correcto: notificacion de Correcto"
    },    error: {
        icono:"fa-solid fa-circle-xmark",
        texto:"Error: notificacion de Error"
    },    warning: {
        icono:"fa-solid fa-circle-exclamation",
        texto:"Advertencia: notificacion de Advertencia"
    },    info: {
        icono:"fa-solid fa-circle-info",
        texto:"Informacion: notificacion de Informacion"
    }
}

EliminarNotificacion =(notificacion) =>{
    notificacion.classList.add("borrar");
    setTimeout(() => notificacion.remove(),500 );
}

const CrearNotificacion = (id) => {
    const{icono,texto}=notificacionDetalle[id];//extrallendo el texto y icono
    const notificacion = document.createElement("li"); //creando un nuevp "li" (notificacion)
    notificacion.className = `toast ${id}`; //indicador de que clase tomara
    notificacion.innerHTML=`<div class="column">
    <i class="${icono}"> </i>
      <span>${texto}</span>
   
</div>
<i class="fa-solid fa-xmark" onclick="EliminarNotificacion(this.parentElement)"> </i>`;
notificationes.appendChild(notificacion);// adjunto la notificacion al ul
setTimeout(() => EliminarNotificacion(notificacion),notificacionDetalle.tiempo);// remover la notificacion despues del tiempo especificado
    //console.log(id);
}
buttons.forEach(btn =>{
    btn.addEventListener("click",() => CrearNotificacion (btn.id));
})