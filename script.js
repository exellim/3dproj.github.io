var panorama, panorama2, viewer, container, infospot;

var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];

var infospotPositions = [
  new THREE.Vector3(3136.06, 1216.30, -3690.14),
  new THREE.Vector3(3258.81, -295.50, 3771.13)
];

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/cabin.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama, infospotPositions[1] );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 0, -2000, -5000 );

panorama.add( infospot );

viewer = new PANOLENS.Viewer( { output: 'console', container: container } );
viewer.add( panorama, panorama2 );

container = document.querySelector('#container');
infoBox = document.querySelector('#info-box');
closeInfo = document.querySelector('#close-button');
infoBox.style.display = 'none';


infospot.addEventListener('click', function() {
  infoBox.style.display = 'block';
});

closeInfo.addEventListener('click', function() {
  infoBox.style.display = 'none';
});

// To hide the information:
// infoBox.style.display = 'none';
