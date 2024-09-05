window.onload = function() {
    /*Xử lý bản đồ*/
    const viewmap = document.getElementById('view-map');
    const closemap = document.getElementById('close-map');
    const map = document.getElementById('map');
    

    viewmap.addEventListener('click', function() {
        map.classList.add('active');
    });

    closemap.addEventListener('click', function() {
        map.classList.remove('active');
    });

}