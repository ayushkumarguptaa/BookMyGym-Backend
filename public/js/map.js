
    // let mapToken = '<%= process.env.MAP_TOKEN %>'
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hoaCIsImEiOiJjbWMwanRoY2owMWh6MmlyMDV4b21wbnVoIn0.3G6IDRxYa2LdROE6Ev1vAg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/standard-satellite', // default to standard-satellite style on mount
        center: [coordinate[0], coordinate[1]], // starting position [lng, lat]
        zoom: 13 // starting zoom
    });

    // const layerList = document.getElementById('menu');
    // const inputs = layerList.getElementsByTagName('input');

    // for (const input of inputs) {
    //     input.onclick = (layer) => {
    //         const layerId = layer.target.id;
    //         map.setStyle('mapbox://styles/mapbox/' + layerId);
    //     };
    // }

    const marker1 = new mapboxgl.Marker()
        .setLngLat([coordinate[0], coordinate[1]])
        .addTo(map);
