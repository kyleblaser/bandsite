/** @format */

const API_KEY = "9a699568-ff10-4730-9a73-98718f36c1d9";
const API_ENDPOINT = `https://project-1-api.herokuapp.com/showdates?api_key=${API_KEY}`;

async function fetchAndPopulateShows() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    const showDatesContainer = document.getElementById("showDatesContainer");

    showDatesContainer.innerHTML = "";

    data.forEach((show) => {
      const showDateElement = document.createElement("div");
      showDateElement.classList.add("showdate");

      const showDateLabel = document.createElement("p");
      showDateLabel.classList.add("showdate__label");
      showDateLabel.textContent = "DATE";
      showDateElement.appendChild(showDateLabel);

      const showDate = document.createElement("h3");
      showDate.classList.add("showdate__date");

      const formattedDate = new Date(show.date).toDateString();
      showDate.textContent = formattedDate;
      showDateElement.appendChild(showDate);

      const showVenueLabel = document.createElement("p");
      showVenueLabel.classList.add("showdate__label");
      showVenueLabel.textContent = "VENUE";
      showDateElement.appendChild(showVenueLabel);

      const showVenue = document.createElement("h3");
      showVenue.classList.add("showdate__venue");
      showVenue.textContent = show.place;
      showDateElement.appendChild(showVenue);

      const showLocationLabel = document.createElement("p");
      showLocationLabel.classList.add("showdate__label");
      showLocationLabel.textContent = "LOCATION";
      showDateElement.appendChild(showLocationLabel);

      const showLocation = document.createElement("h3");
      showLocation.classList.add("showdate__location");
      showLocation.textContent = show.location;
      showDateElement.appendChild(showLocation);

      const buyTicketsButton = document.createElement("button");
      buyTicketsButton.classList.add("showdate__button");
      buyTicketsButton.textContent = "BUY TICKETS";
      showDateElement.appendChild(buyTicketsButton);

      showDatesContainer.appendChild(showDateElement);
    });
  } catch (error) {
    console.error("Error fetching show data:", error);
  }
}

fetchAndPopulateShows();
