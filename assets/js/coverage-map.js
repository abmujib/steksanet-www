    /* =======================
        DATA DESA
    ======================= */
    const pabuaranDesa = [
        { name: 'Bantarsari (Pabuaran)', lat: -7.1744, lon: 106.7541 },
        { name: 'Cibadak (Pabuaran)', lat: -7.1832, lon: 106.8193 },
        { name: 'Ciwalat (Pabuaran)', lat: -7.2198, lon: 106.7882 },
        { name: 'Lembur Sawah (Pabuaran)', lat: -7.1966, lon: 106.8074 },
        { name: 'Pabuaran (Desa)', lat: -7.2087, lon: 106.8287 },
        { name: 'Sirnasari (Pabuaran)', lat: -7.1592534, lon: 106.7955372 },
        { name: 'Sukajaya (Pabuaran)', lat: -7.2249717, lon: 106.7681971 }
    ];

    const purabayaDesa = [
        { name: 'Citamiang (Purabaya)', lat: -7.0772306, lon: 106.8992306 },
        { name: 'Purabaya (Desa)', lat: -7.09417, lon: 106.86806 },
        { name: 'Margaluyu (Purabaya)', lat: -7.0952194, lon: 106.9183 }
    ];

    /* =======================
        INIT MAP
    ======================= */
    const map = L.map('map').setView([-7.12, 106.85], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    /* =======================
        ICON STYLE
    ======================= */
    const iconPabuaran = {
        radius: 8,
        color: '#1e40af',
        fillColor: '#2563eb',
        fillOpacity: 0.9
    };

    const iconPurabaya = {
        radius: 8,
        color: '#065f46',
        fillColor: '#10b981',
        fillOpacity: 0.9
    };

    /* =======================
        LAYER GROUP
    ======================= */
    const layerPabuaran = L.layerGroup().addTo(map);
    const layerPurabaya = L.layerGroup().addTo(map);

    /* =======================
        ADD MARKER PABUARAN
    ======================= */
    pabuaranDesa.forEach(d => {
        L.circleMarker([d.lat, d.lon], iconPabuaran)
        .addTo(layerPabuaran)
        .bindPopup(`<strong>${d.name}</strong><br>Kecamatan Pabuaran`);
    });

    /* =======================
        ADD MARKER PURABAYA
    ======================= */
    purabayaDesa.forEach(d => {
        L.circleMarker([d.lat, d.lon], iconPurabaya)
        .addTo(layerPurabaya)
        .bindPopup(`<strong>${d.name}</strong><br>Kecamatan Purabaya`);
    });

    /* =======================
        FIT MAP TO ALL MARKERS
    ======================= */
    const allCoords = [
        ...pabuaranDesa.map(d => [d.lat, d.lon]),
        ...purabayaDesa.map(d => [d.lat, d.lon])
    ];

    map.fitBounds(allCoords, { padding: [40, 40] });

    /* =======================
        LAYER CONTROL
    ======================= */
    L.control.layers(null, {
    "Desa Kecamatan Pabuaran": layerPabuaran,
    "Desa Kecamatan Purabaya": layerPurabaya
    }, { collapsed: true }).addTo(map);