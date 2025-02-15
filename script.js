document.getElementById('deseleccionar').addEventListener('click', function () {
    // Deselecciona todos los botones de radio con el nombre "opcion"
    document.querySelectorAll('input[name="opcion"]').forEach(function (radio) {
        radio.checked = false;
    });
});