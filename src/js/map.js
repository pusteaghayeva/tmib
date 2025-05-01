
// $(function () {
//     $('.blue-tooltip').on('mouseenter', function () {
//         var id = $(this).data('id');
//         if (id == 15) {
//             // Bakı xəritəyə yönləndirmə yox, hoverdə açılmamalıdır
//             return;
//         }
//         $("#city_" + id).fadeIn();
//     });

//     $('.blue-tooltip').on('mouseleave', function () {
//         var id = $(this).data('id');
//         if (id == 15) return;
//         $("#city_" + id).fadeOut();
//     });
// });


// function createMap() {
//     const mapElement = document.getElementById('map');

//     mapElement.addEventListener('click', function (event) {
//         const x = event.clientX;
//         const y = event.clientY;

//         const nakhCoordinates = {
//             x: 300,
//             y: 200
//         };

//         if (x >= nakhCoordinates.x - 10 && x <= nakhCoordinates.x + 10 &&
//             y >= nakhCoordinates.y - 10 && y <= nakhCoordinates.y + 10) {
//             window.location.href = 'mapnakh.html';
//         }
//     });
// }

// createMap();
// $('.blue-tooltip').each(function() {
//     console.log('Rayon ID:', $(this).data('id'));
// });