// map
const map = L.map("mapid").setView([-3.7522141, -38.535286], 15);

// tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // option to add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos field
function addPhotoField() {
  // take photos container
  const container = document.querySelector("#images");

  // take container for duplicate
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clone the last selected image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // check if the field is empty, if yes, do not add
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // clean field before adding images container
  input.value = "";

  // add clone to images container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length <= 1) {
    // clean field value
    span.parentNode.children[0].value = "";
    return;
  }

  // delete field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove the .active class from the buttons
  document.querySelectorAll('.button-select button')
  .forEach(function (button) {
    button.classList.remove("active")
  })

  // put the .active class on the clicked button
  const button = event.currentTarget
  button.classList.add("active")

  // update input hidden with the selected value
  const input = document.querySelector('[name="open_on_weekends"]')

  // check yes or no
  input.value = button.dataset.value
}

/*function validate(event) {
  // view if lat and lng are ok 
  if (validate.value == "") {
    return;
  }
  event.preventDefault()
  alert('Preencha todos os campos, talvez você esqueceu de pôr a localização no mapa :)')
}*/