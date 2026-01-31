// Details page - Leaflet maps initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map for Cake Cutting Ceremony
    // Using Kolkata area coordinates (adjust to your actual venue)
    const cakeMap = L.map('map-cake').setView([22.51724,88.41870 ], 14);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(cakeMap);
    
    // Add marker with popup for cake cutting venue
    const cakeMarker = L.marker([22.51724,88.41870 ]).addTo(cakeMap);
    cakeMarker.bindPopup('<b>open Canteen of Heriatge Institue of technology </b><br>HITK<br>Cake Cutting Ceremony').openPopup();
    
    // Initialize map for Lunch Celebration
    const lunchMap = L.map('map-lunch').setView([22.51607,88.39362 ], 14);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(lunchMap);
    
    // Add marker with popup for lunch venue
    const lunchMarker = L.marker([22.51607,88.39362]).addTo(lunchMap);
    lunchMarker.bindPopup('<b>Dominos opposite of Acropolis Mallt</b><br>Acropolis Mall<br>Lunch Celebration').openPopup();
    
    // Fix map rendering issues that can occur with CSS animations
    setTimeout(() => {
        cakeMap.invalidateSize();
        lunchMap.invalidateSize();
    }, 100);
});

// Function to open location in Google Maps
function openInGoogleMaps(lat, lng, venueName) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
}
