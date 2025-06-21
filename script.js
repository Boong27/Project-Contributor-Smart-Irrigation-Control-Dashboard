function loadSensor() {
  fetch('data/sensor.json')
    .then(res => res.json())
    .then(data => {
      const zone = data.zoneA; // mặc định Zone A
      document.getElementById("temp").innerText = zone.temperature;
      document.getElementById("humidity").innerText = zone.humidity;
      document.getElementById("light").innerText = zone.light;
    });
}

function toggleMap() {
  const mapDiv = document.getElementById("mapArea");
  mapDiv.style.display = mapDiv.style.display === "none" ? "block" : "none";
}

function showCamera(zone) {
  const view = document.getElementById("cameraView");
  view.innerHTML = `<img src="assets/camera.png" alt="Camera Zone ${zone}"><p>Camera: Zone ${zone}</p>`;
}

function emergencyStop() {
  document.getElementById("pumpStatus").innerText = "OFF";
  document.getElementById("emergencyMsg").innerText = "⚠️ Bơm đã ngắt khẩn cấp!";
  document.getElementById("emergencyMsg").style.color = "red";
}
