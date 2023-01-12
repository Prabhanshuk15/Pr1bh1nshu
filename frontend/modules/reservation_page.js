import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    const result = await fetch(config.backendEndpoint + `/reservations/`);
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }


  // Place holder for functionality to work in the Stubs
  return null;
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
// function addReservationToTable(reservations) {
//   // TODO: MODULE_RESERVATIONS
//   // 1. Add the Reservations to the HTML DOM so that they show up in the table

//   //Conditionally render the no-reservation-banner and reservation-table-parent
//   if (reservations.length > 0) {
//     document.getElementById("no-reservation-banner").style.display = "none";
//     document.getElementById("reservation-table-parent").style.display = "block";
//   } else {
//     document.getElementById("no-reservation-banner").style.display = "block";
//     document.getElementById("reservation-table-parent").style.display = "none";
//   }

//   /*
//     Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
//     The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

//     Note:
//     1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
//     2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
//   */
//  reservations.map((key, idx) => {
//   let ele = document.createElement("tr");
//   ele.innerHTML = `
//         <th scope="row" >${key.id}</th>
//         <td>${key.name}</td>
//         <td>${key.adventureName}</td>
//         <td>${key.person}</td>
//         <td>${new Date(key.date).toLocaleDateString("en-IN")}</td>
//         <td>${key.price}</td>
//         <td>${new Date(key.time).toLocaleString("en-IN",
//         {
//           year: "numeric",
//           day:   "numeric",
//           month: "long"
//         })+", "+ new Date(key.time).toLocaleTimeString().toLowerCase()}
//         </td>
        
//         <td>
//         <div class="reservation-visit-button" id=${key.id}> 
//         <a href="../detail/?adventure=${key.adventure}">Visit Adventure</a>
//         </div>
//         </td>
//   `;
//   document.getElementById("reservation-table").appendChild(ele);
//  });

// }
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
let banner = document.getElementById("no-reservation-banner")
let table = document.getElementById("reservation-table-parent")
let tableBody = document.getElementById("reservation-table")
  //Conditionally render the no-reservation-banner and reservation-table-parent
  if(reservations.length === 0) {
    banner.style.display="block"
    table.style.display="none"
  } else {
  banner.style.display="none"
  table.style.display="block"
  console.log(reservations)
  reservations.forEach((reservation) => {
    let tr = document.createElement("tr")
    let tdID = document.createElement("td")
    let tdName = document.createElement("td")
    let tdDate = document.createElement("td")
    let tAdventure = document.createElement("td")
    let tPersons = document.createElement("td")
    let tPrice = document.createElement("td")
    let tBookTime = document.createElement("td")
    let tBookButton = document.createElement("td")
    // tr.setAttribute("id",`${reservation.id}`)


    tdID.setAttribute("col","scope")
    tdID.innerHTML=`<b>${reservation.id}</b>`
    tdName.setAttribute("col","scope")
    tdName.innerHTML=`${reservation.name}`
    tdDate.setAttribute("col","scope")
    tAdventure.setAttribute("col","scope")
    tPersons.setAttribute("col","scope")
    tPrice.setAttribute("col","scope")
    tBookTime.setAttribute("col","scope")
    tBookButton.setAttribute("col","scope")

    // let dateArray = reservation.date.split("-")

    tAdventure.innerHTML=`${reservation.adventureName}`
    tdDate.innerHTML=`${new Date(reservation.date).toLocaleDateString("en-IN")}`
    tPersons.innerHTML=`${reservation.person}`
    tPrice.innerHTML=`${reservation.price}`
    tBookTime.innerHTML=`${new Date(reservation.time).toLocaleString("en-IN",
    {
      year: "numeric",
      day:   "numeric",
      month: "long"
    })+", "+ new Date(reservation.time).toLocaleTimeString().toLowerCase()
    }`
    tBookButton.innerHTML=`<button class="reservation-visit-button" id=${reservation.id}>
    <a href="../detail/?adventure=${reservation.adventure}">
    View Adventure</a></button>`

    tr.appendChild(tdID)
    tr.appendChild(tdName)
    tr.appendChild(tAdventure)
    tr.appendChild(tPersons)
    tr.appendChild(tdDate)
    tr.appendChild(tPrice)
    tr.appendChild(tBookTime)
    tr.appendChild(tBookButton)


   tableBody.appendChild(tr)
  })
  }

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}


export { fetchReservations, addReservationToTable };
