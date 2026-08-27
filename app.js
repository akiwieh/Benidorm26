// ==========================================================================
// FOG Canada Men 55+ | IVVA Benidorm 2026 Championship Hub Logic
// ==========================================================================

// Official Roster & Directory synced with IVVA Doc & Team Contacts Sheet (Refreshed)
// ==========================================================================
// FOG Canada Men 55+ | IVVA Benidorm 2026 Championship Hub Logic
// ==========================================================================

// Official Roster & Directory synced with IVVA Doc & Team Contacts Sheet (Refreshed)
const FOG_PLAYERS = [
  {
    id: "p1",
    number: 1,
    name: "Diogo Burnay",
    dob: "1965-10-16",
    position: "Setter / Universal",
    status: "Confirmed",
    roomAssignment: "Room 2 of 4 (with George Tokarsky)",
    emails: ["diogo.burnay@dal.ca", "diogoburnay@gmail.com"],
    phone: "+351 918 687 106",
    phoneClean: "351918687106",
    size: "M",
    hotel: "Team Hotel",
    type: "Player",
    location: "Halifax / Portugal",
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/diogo.burnay/" },
      { name: "Instagram", url: "https://www.instagram.com/diogo.burnay/" }
    ]
  },
  {
    id: "p2",
    number: 2,
    name: "Lindsay Robertson",
    dob: "1970-06-13",
    position: "Middle / Right Side",
    status: "Confirmed",
    roomAssignment: "Room 1 of 4 (with Michael Baker)",
    emails: ["lwrobertson@gmail.com"],
    phone: "+1 (416) 569-9403",
    phoneClean: "14165699403",
    size: "L",
    hotel: "Team Hotel",
    type: "Player",
    location: "Toronto, ON",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/akiwieh" },
      { name: "Facebook", url: "https://www.facebook.com/akiwieh" }
    ]
  },
  {
    id: "p3",
    number: 3,
    name: "Phil Quesnelle",
    dob: "1966-06-05",
    position: "Middle",
    status: "Confirmed",
    roomAssignment: "Phil's Booking (with Kelly Helm)",
    emails: ["philqvb@gmail.com"],
    phone: "+1 (705) 500-2591",
    phoneClean: "17055002591",
    size: "L",
    hotel: "Own Booking",
    type: "Player",
    location: "Ontario",
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/philip.quesnelle" }
    ]
  },
  {
    id: "p4",
    number: 4,
    name: "Bill Coubrough",
    dob: "1966-08-01",
    position: "Left Side / Passer",
    status: "Confirmed",
    roomAssignment: "Separate Airbnb Booking",
    emails: ["bcoubs3@outlook.com", "billcoubrough@shaw.ca"],
    phone: "+1 (204) 297-2438",
    phoneClean: "12042972438",
    size: "L",
    hotel: "Own Booking",
    type: "Player",
    location: "Winnipeg, MB",
    socials: []
  },
  {
    id: "p5",
    number: 5,
    name: "Michael James Baker",
    dob: "1970-06-09",
    position: "Left Side",
    status: "Confirmed",
    roomAssignment: "Room 1 of 4 (with Lindsay Robertson)",
    emails: ["mikebaker7498@gmail.com"],
    phone: "+1 (519) 589-7498",
    phoneClean: "15195897498",
    size: "M",
    hotel: "Team Hotel",
    type: "Player",
    location: "Kitchener-Waterloo, ON",
    socials: []
  },
  {
    id: "p6",
    number: 6,
    name: "Dale Oleschko",
    dob: "1968-10-02",
    position: "Middle",
    status: "Confirmed",
    roomAssignment: "Room 3 of 4 (with son Brenden)",
    emails: ["doleschko@thebrick.com", "dalemags@gmail.com"],
    phone: "+1 (780) 233-1942",
    phoneClean: "17802331942",
    size: "XL",
    hotel: "Team Hotel",
    type: "Player",
    location: "Edmonton, AB",
    socials: []
  },
  {
    id: "p7",
    number: 7,
    name: "Victor Alaniz",
    dob: "1965-11-24",
    position: "Setter",
    status: "Confirmed",
    roomAssignment: "Room 4 of 4 (with Stefano)",
    emails: ["victorealaniz@hotmail.com"],
    phone: "+34 640 086 323",
    phoneClean: "34640086323",
    size: "L",
    hotel: "Team Hotel",
    type: "Player",
    location: "Spain",
    socials: []
  },
  {
    id: "p8",
    number: 8,
    name: "Luca Busoni",
    dob: "1966-06-04",
    position: "Setter",
    status: "Confirmed",
    roomAssignment: "Separate Hotel Booking",
    emails: ["lucabusoni@hotmail.it"],
    phone: "+39 339 7370000",
    phoneClean: "393397370000",
    size: "L",
    hotel: "Own Booking",
    type: "Player",
    location: "Italy / Canada",
    socials: []
  },
  {
    id: "p9",
    number: 9,
    name: "Mike Sieben",
    dob: "1968-05-17",
    position: "Outside / Right Side",
    status: "Confirmed",
    roomAssignment: "Mike's Booking (with Erin)",
    emails: ["mikesieben@hexagon.com"],
    phone: "+1 (587) 893-7177",
    phoneClean: "15878937177",
    size: "XL",
    hotel: "Own Booking",
    type: "Player",
    location: "Calgary, AB",
    socials: []
  },
  {
    id: "p10",
    number: 10,
    name: "Stefano Gaibazzi",
    dob: "1971-07",
    position: "Outside",
    status: "Confirmed",
    roomAssignment: "Room 4 of 4 (with Victor)",
    emails: ["mupi71@hotmail.com"],
    phone: "+39 335 712 5712",
    phoneClean: "393357125712",
    size: "Pending",
    hotel: "Team Hotel",
    type: "Player",
    location: "Italy",
    socials: []
  },
  {
    id: "p11",
    number: 11,
    name: "Jerry Aldridge",
    dob: "Pending",
    position: "Defender / Passer",
    status: "Declined",
    roomAssignment: "None (Declined)",
    emails: ["jerryb98fm@yahoo.com"],
    phone: "",
    phoneClean: "",
    size: "Pending",
    hotel: "None",
    type: "Player",
    location: "Canada",
    socials: []
  },
  {
    id: "p12",
    number: 12,
    name: "Kirk Yanofsky",
    dob: "Pending",
    position: "Player",
    status: "Declined",
    roomAssignment: "None (Declined)",
    emails: ["kirkyanofsky@gmail.com"],
    phone: "+1 (902) 414-6303",
    phoneClean: "19024146303",
    size: "Pending",
    hotel: "None",
    type: "Player",
    location: "Halifax, NS",
    socials: []
  },
  {
    id: "p13",
    number: 13,
    name: "Steve Banks",
    dob: "Pending",
    position: "Player",
    status: "Declined",
    roomAssignment: "None (Declined)",
    emails: ["sw_banks@yahoo.com"],
    phone: "+1 (403) 554-0938",
    phoneClean: "14035540938",
    size: "Pending",
    hotel: "None",
    type: "Player",
    location: "Calgary, AB",
    socials: []
  },
  {
    id: "p14",
    number: 14,
    name: "Derrick Englot",
    dob: "Pending",
    position: "Player",
    status: "Declined",
    roomAssignment: "None (Declined)",
    emails: [],
    phone: "",
    phoneClean: "",
    size: "Pending",
    hotel: "None",
    type: "Player",
    location: "Canada",
    socials: []
  }
];

const FOG_STAFF = [
  {
    id: "st1",
    number: 1,
    name: "George Tokarsky",
    relation: "Team Coach / Organizer / Staff",
    status: "Confirmed",
    roomAssignment: "Room 2 of 4 (with Diogo Burnay)",
    emails: ["gtokarsky@hotmail.com"],
    phone: "",
    phoneClean: "",
    size: "XL",
    hotel: "Team Hotel",
    type: "Staff",
    location: "Canada",
    socials: []
  }
];

const FOG_NON_PLAYERS = [
  {
    id: "np1",
    number: 1,
    name: "Kelly Helm",
    relation: "With Philip Quesnelle (Partner)",
    status: "Confirmed",
    emails: [],
    phone: "",
    phoneClean: "",
    size: "Pending",
    hotel: "Own Booking",
    type: "Non-Player",
    location: "Ontario",
    socials: []
  },
  {
    id: "np2",
    number: 2,
    name: "Brenden Oleschko",
    relation: "With Dale Oleschko (Son)",
    status: "Confirmed",
    emails: [],
    phone: "",
    phoneClean: "",
    size: "Pending",
    hotel: "Team Hotel",
    type: "Non-Player",
    location: "Edmonton, AB",
    socials: []
  },
  {
    id: "np3",
    number: 3,
    name: "Erin Sieben",
    relation: "With Mike Sieben (Partner)",
    status: "Confirmed",
    emails: [],
    phone: "",
    phoneClean: "",
    size: "Pending",
    hotel: "Own Booking",
    type: "Non-Player",
    location: "Calgary, AB",
    socials: []
  }
];

// Clean matches list until officially confirmed by IVVA
const DEFAULT_MATCHES = [];

const DEFAULT_ROOMS = [
  {
    id: "r1",
    name: "Room 1 (Team Allocation - Room 1 of 4)",
    bedType: "Twin (Separate Single Sheets)",
    hotelType: "Team Hotel",
    occupants: ["Lindsay Robertson", "Michael James Baker"],
    notes: "Bed 1: Lindsay Robertson • Bed 2: Michael Baker (Confirmed pairing)"
  },
  {
    id: "r2",
    name: "Room 2 (Team Allocation - Room 2 of 4)",
    bedType: "Twin (Separate Single Sheets)",
    hotelType: "Team Hotel",
    occupants: ["Diogo Burnay", "George Tokarsky"],
    notes: "Bed 1: Diogo Burnay • Bed 2: George Tokarsky (Confirmed pairing)"
  },
  {
    id: "r3",
    name: "Room 3 (Father & Son - Room 3 of 4)",
    bedType: "Twin (Separate Single Sheets)",
    hotelType: "Team Hotel",
    occupants: ["Dale Oleschko", "Brenden Oleschko"],
    notes: "Bed 1: Dale Oleschko • Bed 2: Brenden Oleschko (Dale travelling with his son Brenden)"
  },
  {
    id: "r4",
    name: "Room 4 (Proposed - Room 4 of 4)",
    bedType: "Twin (Separate Single Sheets)",
    hotelType: "Team Hotel",
    occupants: ["Victor Eduardo Alaniz Ruiz", "Stefano Gaibazzi"],
    notes: "Proposed pairing: Bed 1: Victor Alaniz • Bed 2: Stefano Gaibazzi (Pending final room lock)"
  },
  {
    id: "r5",
    name: "Phil & Kelly's Suite",
    bedType: "Double / King",
    hotelType: "Own Booking",
    occupants: ["Phil Quesnelle", "Kelly Helm"],
    notes: "Phil's booking with Kelly Helm (Booked separately)"
  },
  {
    id: "r6",
    name: "Mike & Erin's Suite",
    bedType: "Double / King",
    hotelType: "Own Booking",
    occupants: ["Mike Sieben", "Erin Sieben"],
    notes: "Mike's booking with Erin (Booked separately)"
  },
  {
    id: "r7",
    name: "Bill's Private Accommodation",
    bedType: "Single / Apartment",
    hotelType: "Own Booking",
    occupants: ["Bill Coubrough"],
    notes: "Booked separately (Airbnb)"
  },
  {
    id: "r8",
    name: "Luca's Private Hotel",
    bedType: "Single / Double",
    hotelType: "Own Booking",
    occupants: ["Luca Busoni"],
    notes: "Booked separately (Separate Hotel)"
  }
];

const DEFAULT_EXPENSES = [
  {
    id: "e1",
    desc: "IVVA Invoice #26090 - Team Entry & Official Passes (Wise #2304507222)",
    category: "Tournament",
    paidBy: "FOG Fund (Wise Wire)",
    amountEur: 1200.00,
    splitCount: 12
  },
  {
    id: "e2",
    desc: "Benidorm Official IVVA Hotel Booking Deposit",
    category: "Accommodation",
    paidBy: "Phil Q.",
    amountEur: 2200.00,
    splitCount: 12
  },
  {
    id: "e3",
    desc: "Alicante Airport (ALC) Minivans Rental (7 Days)",
    category: "Transport",
    paidBy: "Diogo B.",
    amountEur: 890.00,
    splitCount: 12
  },
  {
    id: "e4",
    desc: "Physio Supplies, First Aid & Sand Socks",
    category: "Medical & Physio",
    paidBy: "Shared Fund",
    amountEur: 180.00,
    splitCount: 12
  }
];

const SPANISH_PHRASES = [
  {
    category: "🚕 Taxi & Arena Transfers",
    items: [
      { es: "Al Palau d'Esports l'Illa de Benidorm, por favor.", en: "To the Benidorm Sports Palace, please." },
      { es: "A la Playa de Poniente, por favor.", en: "To Poniente Beach, please." },
      { es: "Al Aeropuerto de Alicante (Terminal de Salidas).", en: "To Alicante Airport (Departures)." },
      { es: "¿Cuánto cuesta la carrera aproximadamente?", en: "How much is the fare approximately?" }
    ]
  },
  {
    category: "🥘 Restaurants & Team Dining",
    items: [
      { es: "¿Podemos pagar las cuentas por separado, por favor?", en: "Can we split the bills separately, please?" },
      { es: "Una paella para el equipo y agua sin gas, por favor.", en: "A paella for the team and still water, please." },
      { es: "Tengo alergia al marisco / al gluten.", en: "I have a shellfish / gluten allergy." },
      { es: "¿Aceptan tarjeta de crédito Visa o Mastercard?", en: "Do you accept Visa or Mastercard?" }
    ]
  },
  {
    category: "🏨 Hotel & Room Check-In",
    items: [
      { es: "Hola, ¿podrían preparar dos camas individuales separadas, por favor?", en: "Hello, could you please prepare two separate single beds, please?" },
      { es: "Necesitamos una almohada y toalla extra para la habitación, por favor.", en: "We need an extra pillow and towel for the room, please." },
      { es: "¿A qué hora se sirve el desayuno buffet por la mañana?", en: "What time is the breakfast buffet served in the morning?" },
      { es: "¿Podríamos hacer el check-out tarde el domingo?", en: "Could we do a late check-out on Sunday?" }
    ]
  },
  {
    category: "🩹 Pharmacy & Medical SOS",
    items: [
      { es: "Necesito una bolsa de hielo y cinta de kinesiología.", en: "I need an ice bag and kinesiology tape." },
      { es: "Tengo una distensión muscular en el hombro / rodilla.", en: "I have a muscle strain in my shoulder / knee." },
      { es: "¿Dónde está la farmacia de guardia más cercana?", en: "Where is the nearest 24/7 on-duty pharmacy?" },
      { es: "Por favor, llame a una ambulancia (112).", en: "Please call an ambulance (112)." }
    ]
  }
];

const CHECKLIST_ITEMS = [
  { id: "c1", text: "Canadian Passport (Valid 3+ months beyond trip)", cat: "Travel" },
  { id: "c2", text: "European Type C/F Plug Adapters (220V)", cat: "Travel" },
  { id: "c3", text: "Travel Insurance Card with Sports Injury Coverage", cat: "Travel" },
  { id: "c4", text: "Indoor Volleyball Shoes + Extra Cushioned Insoles", cat: "Indoor" },
  { id: "c5", text: "Knee Pads & Patellar Tendon Knee Straps", cat: "Indoor" },
  { id: "c6", text: "Neoprene Sand Socks (Heat/Cold/Ache protection)", cat: "Beach" },
  { id: "c7", text: "Polarized UV400 Sunglasses + Retainer Strap", cat: "Beach" },
  { id: "c8", text: "Water-Resistant High SPF 50+ Sunscreen", cat: "Beach" },
  { id: "c9", text: "Electrolyte Hydration Tablets (Nuun / Biosteel)", cat: "Physio" },
  { id: "c10", text: "Rotator Cuff Resistance Warm-up Bands", cat: "Physio" },
  { id: "c11", text: "Topical Pain Relief (Voltaren Gel / Deep Relief)", cat: "Physio" },
  { id: "c12", text: "FOG Canada Official Jerseys / Beach Tanks", cat: "Kit" }
];

const DEFAULT_FLIGHTS = [
  {
    id: "fl_1",
    traveler: "Michael Baker",
    direction: "OUTBOUND",
    date: "Sun Oct 4 – Mon Oct 5",
    originCity: "Toronto (YYZ)",
    destCity: "Alicante (ALC)",
    finalArrivalTime: "09:10 CEST",
    airline: "Iberia (IB 0368 / IB 1009)",
    routeSummary: "YYZ ➔ MAD ➔ ALC",
    legs: [
      { flightNum: "IB 0368", from: "Toronto (YYZ)", to: "Madrid (MAD)", depart: "17:10 (Oct 4)", arrive: "06:50 (Oct 5)" },
      { layover: "1h 15m Layover in Madrid (MAD)" },
      { flightNum: "IB 1009", from: "Madrid (MAD)", to: "Alicante (ALC)", depart: "07:55 (Oct 5)", arrive: "09:10 (Oct 5)" }
    ],
    notes: "Overnight flight arriving Monday morning in Alicante for team minivan transfer."
  },
  {
    id: "fl_2",
    traveler: "Lindsay Robertson",
    direction: "OUTBOUND",
    date: "Sun Oct 4 – Mon Oct 5",
    originCity: "Toronto (YYZ)",
    destCity: "Alicante (ALC)",
    finalArrivalTime: "09:10 CEST",
    airline: "American / Iberia (AA 8851 / AA 8608)",
    routeSummary: "YYZ ➔ MAD ➔ ALC",
    legs: [
      { flightNum: "AA 8851", from: "Toronto (YYZ)", to: "Madrid (MAD)", depart: "17:10 (Oct 4)", arrive: "06:50 (Oct 5)" },
      { layover: "1h 15m Layover in Madrid (MAD)" },
      { flightNum: "AA 8608", from: "Madrid (MAD)", to: "Alicante (ALC)", depart: "07:55 (Oct 5)", arrive: "09:10 (Oct 5)" }
    ],
    notes: "Codeshare with Iberia on the same flight as Michael Baker."
  },
  {
    id: "fl_3",
    traveler: "Luca Busoni",
    direction: "OUTBOUND",
    date: "Mon Oct 5",
    originCity: "London (UK)",
    destCity: "Alicante (ALC)",
    finalArrivalTime: "20:10 CEST",
    airline: "Ryanair (FR6647)",
    routeSummary: "London ➔ Alicante (Direct)",
    legs: [
      { flightNum: "FR6647", from: "London", to: "Alicante (ALC)", depart: "16:30 (Oct 5)", arrive: "20:10 (Oct 5)" }
    ],
    notes: "Direct flight arriving Monday evening at Alicante (ALC)."
  },
  {
    id: "fl_4",
    traveler: "Michael Baker",
    direction: "RETURN",
    date: "Sun Oct 11",
    originCity: "Alicante (ALC)",
    destCity: "Toronto (YYZ)",
    finalArrivalTime: "15:00 EDT",
    airline: "Iberia (IB 1010 / IB 0367)",
    routeSummary: "ALC ➔ MAD ➔ YYZ",
    legs: [
      { flightNum: "IB 1010", from: "Alicante (ALC)", to: "Madrid (MAD)", depart: "09:15 (Oct 11)", arrive: "10:30 (Oct 11)" },
      { layover: "1h 30m Layover in Madrid (MAD)" },
      { flightNum: "IB 0367", from: "Madrid (MAD)", to: "Toronto (YYZ)", depart: "12:00 (Oct 11)", arrive: "15:00 (Oct 11)" }
    ],
    notes: "Return to Canada following tournament conclusion."
  },
  {
    id: "fl_5",
    traveler: "Lindsay Robertson",
    direction: "RETURN",
    date: "Sun Oct 11",
    originCity: "Alicante (ALC)",
    destCity: "Toronto (YYZ)",
    finalArrivalTime: "15:00 EDT",
    airline: "Iberia (IB 1010 / IB 0367)",
    routeSummary: "ALC ➔ MAD ➔ YYZ",
    legs: [
      { flightNum: "IB 1010", from: "Alicante (ALC)", to: "Madrid (MAD)", depart: "09:15 (Oct 11)", arrive: "10:30 (Oct 11)" },
      { layover: "1h 30m Layover in Madrid (MAD)" },
      { flightNum: "IB 0367", from: "Madrid (MAD)", to: "Toronto (YYZ)", depart: "12:00 (Oct 11)", arrive: "15:00 (Oct 11)" }
    ],
    notes: "Return to Canada following tournament conclusion."
  }
];

const DEFAULT_PENDING_FLIGHTS = [
  "Phil Quesnelle",
  "Bill Coubrough",
  "Diogo Burnay",
  "Dale Oleschko",
  "Mike Sieben",
  "Victor Alaniz",
  "Stefano Gaibazzi",
// Clean up any legacy localStorage versions from previous sessions
try {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (k && k.startsWith("fog_") && !k.includes("_v12") && k !== "fog_checklist" && k !== "fog_fx_rate") {
      localStorage.removeItem(k);
    }
  }
} catch (e) {}

// App State (v12 confirmed 10 traveling players with Jerry Aldridge strictly in Declined)
let players = JSON.parse(localStorage.getItem("fog_players_v12")) || FOG_PLAYERS;
let staff = JSON.parse(localStorage.getItem("fog_staff_v12")) || FOG_STAFF;
let nonPlayers = JSON.parse(localStorage.getItem("fog_non_players_v12")) || FOG_NON_PLAYERS;
let rooms = JSON.parse(localStorage.getItem("fog_rooms_v12")) || DEFAULT_ROOMS;
let flights = JSON.parse(localStorage.getItem("fog_flights_v12")) || DEFAULT_FLIGHTS;
let matches = JSON.parse(localStorage.getItem("fog_matches_v12")) || DEFAULT_MATCHES;
let expenses = JSON.parse(localStorage.getItem("fog_expenses_v12")) || DEFAULT_EXPENSES;
let checklistDone = JSON.parse(localStorage.getItem("fog_checklist")) || {};
let fxRate = parseFloat(localStorage.getItem("fog_fx_rate")) || 1.50;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initClocks();
  initTabs();
  initRoster();
  initRooms();
  initFlights();
  initSchedule();
  initFinances();
  initSpanishPhrases();
  initPhysioChecklist();
  initWhatsAppBroadcast();
  initModals();
});

// ==========================================================================
// 1. DUAL TIMEZONE CLOCKS
// ==========================================================================
function initClocks() {
  const canadaClockEl = document.getElementById("canadaClock");
  const spainClockEl = document.getElementById("spainClock");
  const canadaTzSelect = document.getElementById("canadaTzSelect");
  const timeDiffBadge = document.getElementById("timeDiffBadge");

  function updateClocks() {
    const now = new Date();
    const selectedCanadaTz = canadaTzSelect.value;
    const spainTz = "Europe/Madrid";

    const caFormatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: selectedCanadaTz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    const esFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: spainTz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    canadaClockEl.textContent = caFormatter.format(now);
    spainClockEl.textContent = esFormatter.format(now);

    if (selectedCanadaTz.includes("Vancouver")) {
      timeDiffBadge.textContent = "+9 hrs ahead";
    } else if (selectedCanadaTz.includes("Edmonton") || selectedCanadaTz.includes("Calgary")) {
      timeDiffBadge.textContent = "+8 hrs ahead";
    } else if (selectedCanadaTz.includes("Winnipeg")) {
      timeDiffBadge.textContent = "+7 hrs ahead";
    } else if (selectedCanadaTz.includes("Halifax")) {
      timeDiffBadge.textContent = "+5 hrs ahead";
    } else {
      timeDiffBadge.textContent = "+6 hrs ahead";
    }
  }

  setInterval(updateClocks, 1000);
  updateClocks();
  canadaTzSelect.addEventListener("change", updateClocks);
}

// ==========================================================================
// 2. TAB NAVIGATION
// ==========================================================================
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(`pane-${btn.dataset.tab}`);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 3. FOG CANADA ROSTER & CONTACTS
// ==========================================================================
function initRoster() {
  const rosterContainer = document.getElementById("rosterContainer");
  const staffContainer = document.getElementById("staffContainer");
  const nonPlayerContainer = document.getElementById("nonPlayerContainer");
  const declinedContainer = document.getElementById("declinedContainer");
  const statusFilter = document.getElementById("rosterStatusFilter");
  const pendingBadge = document.getElementById("pendingSizesBadge");
  const confirmedCountBadge = document.getElementById("confirmedCountBadge");
  const summaryBadge = document.getElementById("rosterSummaryBadge");

  const headingConfirmed = document.getElementById("headingConfirmed");
  const headingStaff = document.getElementById("headingStaff");
  const headingFamily = document.getElementById("headingFamily");
  const headingDeclined = document.getElementById("headingDeclined");

  function render() {
    const filterVal = statusFilter ? statusFilter.value : "ALL";

    const confirmedPlayers = players.filter(p => p.status === "Confirmed");
    const declinedPlayers = players.filter(p => p.status !== "Confirmed");

    // Pending sizes check across confirmed players, staff, and non-players
    const pendingConfirmed = confirmedPlayers.filter(p => p.size === "Pending" || p.size === "Fill");
    const pendingStaff = staff.filter(s => s.size === "Pending" || s.size === "Fill");
    const pendingFamily = nonPlayers.filter(np => np.size === "Pending" || np.size === "Fill");
    const totalPending = pendingConfirmed.length + pendingStaff.length + pendingFamily.length;

    if (pendingBadge) {
      if (totalPending > 0) {
        pendingBadge.textContent = `${totalPending} Member(s) need size confirmed before Aug 24!`;
        pendingBadge.style.display = "inline-block";
      } else {
        pendingBadge.textContent = "All sizes confirmed ✓";
        pendingBadge.style.backgroundColor = "var(--color-success)";
      }
    }

    if (confirmedCountBadge) {
      confirmedCountBadge.textContent = `${confirmedPlayers.length} Confirmed`;
    }

    if (summaryBadge) {
      summaryBadge.textContent = `${confirmedPlayers.length} Confirmed + ${staff.length} Coach`;
    }

    // Toggle Section Headers based on filter
    const showConfirmed = filterVal === "ALL" || filterVal === "CONFIRMED";
    const showStaff = filterVal === "ALL" || filterVal === "STAFF";
    const showFamily = filterVal === "ALL" || filterVal === "FAMILY";
    const showDeclined = filterVal === "ALL" || filterVal === "DECLINED";

    if (headingConfirmed) headingConfirmed.style.display = showConfirmed ? "flex" : "none";
    if (rosterContainer) rosterContainer.style.display = showConfirmed ? "grid" : "none";

    if (headingStaff) headingStaff.style.display = showStaff ? "flex" : "none";
    if (staffContainer) staffContainer.style.display = showStaff ? "grid" : "none";

    if (headingFamily) headingFamily.style.display = showFamily ? "flex" : "none";
    if (nonPlayerContainer) nonPlayerContainer.style.display = showFamily ? "grid" : "none";

    if (headingDeclined) headingDeclined.style.display = showDeclined ? "flex" : "none";
    if (declinedContainer) declinedContainer.style.display = showDeclined ? "grid" : "none";

    // 1. Render Confirmed Players
    if (rosterContainer && showConfirmed) {
      rosterContainer.innerHTML = confirmedPlayers.map(p => renderPlayerCard(p, false)).join("");
    }

    // 2. Render Team Staff
    if (staffContainer && showStaff) {
      staffContainer.innerHTML = staff.map(st => {
        const isSizePending = st.size === "Pending" || st.size === "Fill";
        const emailList = Array.isArray(st.emails) ? st.emails : (st.email ? [st.email] : []);

        return `
          <div class="player-card" style="border-left: 4px solid #4f46e5;">
            <div class="player-header">
              <div class="player-identity">
                <div class="jersey-badge" style="background:#e0e7ff; color:#3730a3;">👔</div>
                <div>
                  <h3 class="player-name">${escapeHtml(st.name)}</h3>
                  <div style="display: flex; gap: 0.4rem; align-items: center; margin-top: 0.2rem; flex-wrap: wrap;">
                    <span class="badge-status-staff">👔 ${escapeHtml(st.relation || "Team Staff / Coach")}</span>
                    <span class="badge-status-confirmed">✅ Confirmed</span>
                  </div>
                </div>
              </div>
              <button class="btn-danger-outline" onclick="deleteStaff('${st.id}')">✕</button>
            </div>

            <div class="player-meta-grid">
              <div class="meta-item">
                <strong>Email</strong>
                <span>${emailList.length > 0 ? emailList.map(em => `<a href="mailto:${escapeHtml(em)}" class="player-email">${escapeHtml(em)}</a>`).join("<br>") : "Pending"}</span>
              </div>
              <div class="meta-item">
                <strong>T-Shirt Size</strong>
                <span class="${isSizePending ? 'badge-size-warn' : 'badge-size-ok'}">
                  ${isSizePending ? '⚠️ Pending' : `${escapeHtml(st.size)} (Confirmed)`}
                </span>
              </div>
              <div class="meta-item">
                <strong>Room Pairing</strong>
                <span>${escapeHtml(st.roomAssignment || "Room 2 of 4")}</span>
              </div>
              <div class="meta-item">
                <strong>Hotel Booking</strong>
                <span class="badge-hotel-yes">Team Hotel (Booked)</span>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // 3. Render Family / Supporters
    if (nonPlayerContainer && showFamily) {
      nonPlayerContainer.innerHTML = nonPlayers.map(np => {
        const isSizePending = np.size === "Pending" || np.size === "Fill";
        const emailList = Array.isArray(np.emails) ? np.emails : (np.email ? [np.email] : []);

        return `
          <div class="player-card">
            <div class="player-header">
              <div class="player-identity">
                <div class="jersey-badge non-player-badge">👥</div>
                <div>
                  <h3 class="player-name">${escapeHtml(np.name)}</h3>
                  <span class="player-role" style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(np.relation || "Supporter")}</span>
                </div>
              </div>
              <button class="btn-danger-outline" onclick="deleteNonPlayer('${np.id}')">✕</button>
            </div>

            <div class="player-meta-grid">
              <div class="meta-item">
                <strong>Email</strong>
                <span>${emailList.length > 0 ? emailList.join(", ") : "Pending"}</span>
              </div>
              <div class="meta-item">
                <strong>T-Shirt Size</strong>
                <span class="${isSizePending ? 'badge-size-warn' : 'badge-size-ok'}">
                  ${isSizePending ? '⚠️ Pending' : `${escapeHtml(np.size)} (Confirmed)`}
                </span>
              </div>
              <div class="meta-item">
                <strong>Hotel / Stay</strong>
                <span class="${np.hotel === 'Team Hotel' ? 'badge-hotel-yes' : 'badge-hotel-no'}">${escapeHtml(np.hotel)}</span>
              </div>
              <div class="meta-item">
                <strong>Attendance</strong>
                <span class="badge-status-confirmed">✅ Confirmed</span>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    // 4. Render Declined Players
    if (declinedContainer && showDeclined) {
      declinedContainer.innerHTML = declinedPlayers.map(p => renderPlayerCard(p, true)).join("");
    }
  }

  function renderPlayerCard(p, isDeclined) {
    const isSizePending = p.size === "Pending" || p.size === "Fill";
    const hotelClass = p.hotel === "YES" || p.hotel === "Team Hotel" ? "badge-hotel-yes" :
                       p.hotel === "NO" || p.hotel === "Own Booking" ? "badge-hotel-no" : "badge-hotel-pending";
    const hotelText = p.hotel === "YES" || p.hotel === "Team Hotel" ? "Team Hotel" :
                      p.hotel === "NO" || p.hotel === "Own Booking" ? "Own Booking" : "None";

    const emailList = Array.isArray(p.emails) ? p.emails : (p.email ? [p.email] : []);
    const isNoResponse = p.status === "No response";

    return `
      <div class="player-card ${isDeclined ? 'player-card-declined' : ''}">
        <div class="player-header">
          <div class="player-identity">
            <div class="jersey-badge" style="${isDeclined ? (isNoResponse ? 'background:#fef3c7; color:#92400e;' : 'background:#fee2e2; color:#991b1b;') : ''}">#${p.number}</div>
            <div>
              <h3 class="player-name">${escapeHtml(p.name)}</h3>
              <div style="display: flex; gap: 0.4rem; align-items: center; margin-top: 0.2rem; flex-wrap: wrap;">
                <span class="player-location-tag">📍 ${escapeHtml(p.location || "Canada")}</span>
                ${p.position ? `<span class="badge-tag badge-indoor" style="font-size: 0.72rem; padding: 0.15rem 0.45rem;">🏐 ${escapeHtml(p.position)}</span>` : ""}
                <span class="${isDeclined ? (isNoResponse ? 'badge-status-staff' : 'badge-status-declined') : 'badge-status-confirmed'}">
                  ${isDeclined ? (isNoResponse ? '⚠️ No response' : '❌ Declined') : '✅ Confirmed'}
                </span>
              </div>
            </div>
          </div>
          <button class="btn-danger-outline" onclick="deletePlayer('${p.id}')">✕</button>
        </div>

        ${!isDeclined ? `
          <!-- Quick Action Contact Buttons -->
          <div class="quick-contact-bar">
            ${p.phone ? `
              <a href="tel:${escapeHtml(p.phoneClean)}" class="contact-pill" title="Call ${escapeHtml(p.phone)}">
                📞 ${escapeHtml(p.phone)}
              </a>
              <a href="https://wa.me/${escapeHtml(p.phoneClean)}" target="_blank" rel="noopener" class="contact-pill wa-pill" title="Message on WhatsApp">
                💬 WhatsApp
              </a>
            ` : `<span class="contact-pill muted-pill">📱 Phone Pending</span>`}
          </div>
        ` : ""}

        <div class="player-meta-grid">
          <div class="meta-item">
            <strong>Email(s)</strong>
            <span>
              ${emailList.length > 0 
                ? emailList.map(em => `<a href="mailto:${escapeHtml(em)}" class="player-email">${escapeHtml(em)}</a>`).join("<br>") 
                : "None"}
            </span>
          </div>
          <div class="meta-item">
            <strong>T-Shirt Size</strong>
            <span class="${isSizePending ? 'badge-size-warn' : 'badge-size-ok'}">
              ${isDeclined ? (isNoResponse ? '⚠️ Unconfirmed' : 'N/A') : (isSizePending ? '⚠️ Pending' : `${escapeHtml(p.size)} (Confirmed)`)}
            </span>
          </div>
          <div class="meta-item">
            <strong>Date of Birth</strong>
            <span>${escapeHtml(p.dob || "N/A")}</span>
          </div>
          <div class="meta-item">
            <strong>Status / Hotel</strong>
            <span class="${isDeclined ? (isNoResponse ? 'badge-hotel-pending' : 'badge-status-declined') : hotelClass}">
              ${isDeclined ? (isNoResponse ? 'Unconfirmed (TBC)' : 'Not Attending') : hotelText}
            </span>
          </div>
        </div>

        ${p.socials && p.socials.length > 0 ? `
          <div class="player-social-row">
            <span>🔗 Social:</span>
            ${p.socials.map(s => `
              <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener" class="social-link-btn">${escapeHtml(s.name)}</a>
            `).join(" • ")}
          </div>
        ` : ""}
      </div>
    `;
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", render);
  }

  document.getElementById("btnExportRoster").addEventListener("click", () => window.print());

  window.deletePlayer = function(id) {
    if (confirm("Remove player from team roster?")) {
      players = players.filter(p => p.id !== id);
      saveRoster();
      render();
    }
  };

  window.deleteStaff = function(id) {
    if (confirm("Remove staff member?")) {
      staff = staff.filter(s => s.id !== id);
      saveRoster();
      render();
    }
  };

  window.deleteNonPlayer = function(id) {
    if (confirm("Remove non-player member?")) {
      nonPlayers = nonPlayers.filter(np => np.id !== id);
      saveRoster();
      render();
    }
  };

  render();
}

function saveRoster() {
  localStorage.setItem("fog_players_v12", JSON.stringify(players));
  localStorage.setItem("fog_staff_v12", JSON.stringify(staff));
  localStorage.setItem("fog_non_players_v12", JSON.stringify(nonPlayers));
}

// ==========================================================================
// 4. MATCHES & ITINERARY (CLEAN UNTIL CONFIRMED)
// ==========================================================================
function initSchedule() {
  const container = document.getElementById("scheduleContainer");
  const filterDisc = document.getElementById("filterDiscipline");
  const filterDay = document.getElementById("filterDay");
  const countBadge = document.getElementById("matchCountBadge");

  function render() {
    const discVal = filterDisc.value;
    const dayVal = filterDay.value;

    const filtered = matches.filter(m => {
      const matchDisc = (discVal === "ALL" || m.discipline === discVal);
      const matchDay = (dayVal === "ALL" || m.day === dayVal);
      return matchDisc && matchDay;
    });

    countBadge.textContent = filtered.length;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="card empty-state-card">
          <div class="empty-state-icon">🏐</div>
          <h3>No Match Fixtures Listed Yet</h3>
          <p>Official match times and court assignments for both Hardwood (Palau d'Esports) and Beach (Playa de Poniente) will appear here once the tournament draw is published by IVVA.</p>
          <div class="empty-state-action">
            <span class="badge-tag badge-indoor">Status: Awaiting Official IVVA Schedule</span>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(m => {
      const isIndoor = m.discipline === "INDOOR";
      const discBadgeClass = isIndoor ? "badge-indoor" : "badge-beach";
      const discIcon = isIndoor ? "🏢 Indoor 6v6" : "🏖️ Beach";

      return `
        <div class="match-card">
          <div class="match-card-top">
            <span class="badge-tag ${discBadgeClass}">${discIcon}</span>
            <span class="match-day-tag">📅 ${escapeHtml(m.day)}</span>
          </div>
          
          <div class="match-vs-banner">
            <div class="team-side team-fog">
              <strong>🍁 FOG Canada 55+</strong>
            </div>
            <div class="vs-circle">VS</div>
            <div class="team-side team-opp">
              <strong>${escapeHtml(m.opponent || "TBD")}</strong>
            </div>
          </div>

          <div class="match-details-grid">
            <div class="detail-cell">
              <span class="detail-label">⏰ Match Time (CEST)</span>
              <strong>${escapeHtml(m.time)}</strong>
            </div>
            <div class="detail-cell">
              <span class="detail-label">📍 Venue & Court</span>
              <strong>${escapeHtml(m.court)}</strong>
            </div>
            <div class="detail-cell">
              <span class="detail-label">👕 Kit Uniform</span>
              <strong>${escapeHtml(m.uniform || "Red Official")}</strong>
            </div>
          </div>

          ${m.notes ? `<div class="match-notes">📝 ${escapeHtml(m.notes)}</div>` : ""}

          <div class="match-card-footer">
            <button class="btn-danger-outline" onclick="deleteMatch('${m.id}')">✕ Delete Fixture</button>
          </div>
        </div>
      `;
    }).join("");
  }

  filterDisc.addEventListener("change", render);
  filterDay.addEventListener("change", render);
  document.getElementById("btnExportSchedule").addEventListener("click", () => window.print());

  window.deleteMatch = function(id) {
    if (confirm("Remove this match/event from schedule?")) {
      matches = matches.filter(m => m.id !== id);
      saveMatches();
      render();
    }
  };

  render();
}

function saveMatches() {
  localStorage.setItem("fog_matches_v12", JSON.stringify(matches));
}

// ==========================================================================
// 5. FINANCES & CAD / EUR SPLITTER
// ==========================================================================
function initFinances() {
  const fxRateInput = document.getElementById("fxRateInput");
  const inputEur = document.getElementById("inputEur");
  const inputCad = document.getElementById("inputCad");
  const totalTeamEurEl = document.getElementById("totalTeamEur");
  const totalTeamCadEl = document.getElementById("totalTeamCad");
  const perPersonEurEl = document.getElementById("perPersonEur");
  const perPersonCadEl = document.getElementById("perPersonCad");
  const tableBody = document.getElementById("expensesTableBody");

  fxRateInput.value = fxRate;

  fxRateInput.addEventListener("input", () => {
    fxRate = parseFloat(fxRateInput.value) || 1.50;
    localStorage.setItem("fog_fx_rate", fxRate.toString());
    syncConverterFromEur();
    renderExpenses();
  });

  function syncConverterFromEur() {
    const val = parseFloat(inputEur.value) || 0;
    inputCad.value = (val * fxRate).toFixed(2);
  }

  function syncConverterFromCad() {
    const val = parseFloat(inputCad.value) || 0;
    inputEur.value = (val / fxRate).toFixed(2);
  }

  inputEur.addEventListener("input", syncConverterFromEur);
  inputCad.addEventListener("input", syncConverterFromCad);
  syncConverterFromEur();

  function renderExpenses() {
    let totalEur = 0;

    tableBody.innerHTML = expenses.map(e => {
      totalEur += e.amountEur;
      const cadTotal = e.amountEur * fxRate;
      const splitPax = e.splitCount || players.length || 14;
      const perPersonEur = e.amountEur / splitPax;
      const perPersonCad = cadTotal / splitPax;

      return `
        <tr>
          <td><strong>${escapeHtml(e.desc)}</strong></td>
          <td><span class="badge-tag badge-logistics">${escapeHtml(e.category)}</span></td>
          <td>${escapeHtml(e.paidBy)}</td>
          <td>€${e.amountEur.toFixed(2)}</td>
          <td>$${cadTotal.toFixed(2)} CAD</td>
          <td>
            <strong>€${perPersonEur.toFixed(2)}</strong> 
            <small style="color:var(--text-muted)">($${perPersonCad.toFixed(2)} CAD)</small>
          </td>
          <td>
            <button class="btn-danger-outline" onclick="deleteExpense('${e.id}')">✕</button>
          </td>
        </tr>
      `;
    }).join("");

    const totalCad = totalEur * fxRate;
    const splitPax = players.length || 14;
    const avgPerPersonEur = totalEur / splitPax;
    const avgPerPersonCad = totalCad / splitPax;

    totalTeamEurEl.textContent = `€${totalEur.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    totalTeamCadEl.textContent = `≈ $${totalCad.toLocaleString("en-US", { minimumFractionDigits: 2 })} CAD`;

    perPersonEurEl.textContent = `€${avgPerPersonEur.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    perPersonCadEl.textContent = `≈ $${avgPerPersonCad.toLocaleString("en-US", { minimumFractionDigits: 2 })} CAD`;
  }

  window.deleteExpense = function(id) {
    if (confirm("Delete this expense item?")) {
      expenses = expenses.filter(e => e.id !== id);
      saveExpenses();
      renderExpenses();
    }
  };

  renderExpenses();
}

function saveExpenses() {
  localStorage.setItem("fog_expenses_v12", JSON.stringify(expenses));
}

// ==========================================================================
// 6. SPANISH AUDIO & PHRASE CARDS
// ==========================================================================
function initSpanishPhrases() {
  const container = document.getElementById("phraseCategoriesContainer");

  container.innerHTML = SPANISH_PHRASES.map((group) => `
    <div class="phrase-group-card">
      <h3>${group.category}</h3>
      <div class="phrase-list">
        ${group.items.map((item) => `
          <div class="phrase-card">
            <div class="phrase-text-group">
              <span class="spanish-text">${escapeHtml(item.es)}</span>
              <span class="english-trans">${escapeHtml(item.en)}</span>
            </div>
            <button class="btn-audio" onclick="speakSpanish('${escapeJs(item.es)}')" title="Listen to pronunciation">
              🔊
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  window.speakSpanish = function(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "es-ES";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported on this browser.");
    }
  };
}

// ==========================================================================
// 7. 55+ PHYSIO & PACKING CHECKLIST
// ==========================================================================
function initPhysioChecklist() {
  const container = document.getElementById("checklistContainer");
  const btnReset = document.getElementById("btnResetChecklist");

  function render() {
    container.innerHTML = CHECKLIST_ITEMS.map(item => {
      const isChecked = !!checklistDone[item.id];
      return `
        <label class="check-item ${isChecked ? 'done' : ''}">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleChecklistItem('${item.id}')">
          <span>${escapeHtml(item.text)}</span>
        </label>
      `;
    }).join("");
  }

  window.toggleChecklistItem = function(id) {
    checklistDone[id] = !checklistDone[id];
    localStorage.setItem("fog_checklist", JSON.stringify(checklistDone));
    render();
  };

  btnReset.addEventListener("click", () => {
    if (confirm("Reset all checklist checkboxes?")) {
      checklistDone = {};
      localStorage.setItem("fog_checklist", JSON.stringify(checklistDone));
      render();
    }
  });

  render();
}

// ==========================================================================
// 8. ROOMING & CAMA ALEMANA ALLOCATIONS
// ==========================================================================
function initRooms() {
  const container = document.getElementById("roomingContainer");
  const ivvaHotelBadge = document.getElementById("ivvaHotelPaxCount");
  const ownBookingBadge = document.getElementById("ownBookingPaxCount");
  const pendingBadge = document.getElementById("pendingRoomsCount");
  const btnExport = document.getElementById("btnExportRooms");

  function render() {
    let ivvaCount = 0;
    let ownCount = 0;
    let assignedNames = new Set();

    rooms.forEach(r => {
      if (r.hotelType === "IVVA Hotel" || r.hotelType === "Team Hotel") {
        ivvaCount += (r.occupants ? r.occupants.length : 0);
      } else {
        ownCount += (r.occupants ? r.occupants.length : 0);
      }
      (r.occupants || []).forEach(name => assignedNames.add(name.toLowerCase().trim()));
    });

    const activeSquadMembers = players.filter(p => p.status !== "Declined");
    let pendingCount = 0;
    activeSquadMembers.forEach(p => {
      if (!assignedNames.has(p.name.toLowerCase().trim())) pendingCount++;
    });
    staff.forEach(st => {
      if (!assignedNames.has(st.name.toLowerCase().trim())) pendingCount++;
    });
    nonPlayers.forEach(np => {
      if (!assignedNames.has(np.name.toLowerCase().trim())) pendingCount++;
    });

    ivvaHotelBadge.textContent = `${ivvaCount} Members Assigned`;
    ownBookingBadge.textContent = `${ownCount} Members Assigned`;
    pendingBadge.textContent = pendingCount > 0 ? `${pendingCount} Members Unassigned` : `All Assigned ✓`;

    container.innerHTML = rooms.map(r => {
      const isTwin = r.bedType.includes("Twin");
      const isDouble = r.bedType.includes("Double");
      const bedIcon = isDouble ? "🛌" : isTwin ? "🛏️" : "👤";

      return `
        <div class="room-card">
          <div class="room-card-header">
            <div class="room-title-group">
              <h3>${escapeHtml(r.name)}</h3>
              <span class="room-hotel-tag">📍 ${escapeHtml(r.hotelType)}</span>
            </div>
            <button class="btn-danger-outline" onclick="deleteRoom('${r.id}')" title="Delete Room">✕</button>
          </div>

          <div class="room-bed-badge">
            ${bedIcon} ${escapeHtml(r.bedType)}
          </div>

          <div class="room-occupant-list">
            ${(r.occupants || []).map(occ => `
              <div class="occupant-pill">
                <span>👤 ${escapeHtml(occ)}</span>
                <small>${r.hotelType === "IVVA Hotel" || r.hotelType === "Team Hotel" ? "Team Hotel" : "Private"}</small>
              </div>
            `).join("")}
          </div>

          ${r.notes ? `<div class="room-notes-box">📝 ${escapeHtml(r.notes)}</div>` : ""}
        </div>
      `;
    }).join("");
  }

  btnExport.addEventListener("click", () => window.print());

  window.deleteRoom = function(id) {
    if (confirm("Remove this room allocation?")) {
      rooms = rooms.filter(r => r.id !== id);
      saveRooms();
      render();
    }
  };

  render();
}

// ==========================================================================
// 8.5. FLIGHT MANIFEST & AIRPORT ARRIVALS
// ==========================================================================
function initFlights() {
  const container = document.getElementById("flightsContainer");
  const directionFilter = document.getElementById("flightDirectionFilter");
  const summaryBadge = document.getElementById("flightSummaryBadge");
  const pendingChipsContainer = document.getElementById("pendingFlightChips");
  const btnExport = document.getElementById("btnExportFlights");

  if (!container || !directionFilter) return;

  function render() {
    const dir = directionFilter.value;
    const filtered = flights.filter(f => (dir === "ALL" || f.direction === dir));
    summaryBadge.textContent = `${filtered.length} Active Itineraries`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="card empty-state-card" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">✈️</div>
          <h3>No Flights Logged for this Category</h3>
          <p>Click "+ Add Flight" to log arrival or return itineraries.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(f => {
        const isOutbound = f.direction === "OUTBOUND";
        const dirTagClass = isOutbound ? "tag-outbound" : "tag-return";
        const dirLabel = isOutbound ? "🛫 Outbound to Spain" : "🛬 Return Flight";

        return `
          <div class="flight-card-ticket">
            <div class="flight-ticket-header">
              <span class="flight-traveler">👤 ${escapeHtml(f.traveler)}</span>
              <span class="flight-direction-tag ${dirTagClass}">${dirLabel}</span>
            </div>

            <div class="flight-hero-route">
              <div class="route-node">
                <span class="route-city">${escapeHtml(f.originCity)}</span>
                <span class="route-time">📅 ${escapeHtml(f.date)}</span>
              </div>
              <div class="route-path-visual">
                <span class="route-layover-text">${escapeHtml(f.airline)}</span>
                <div class="route-line"></div>
                <span class="route-layover-text">${escapeHtml(f.routeSummary || "")}</span>
              </div>
              <div class="route-node" style="text-align: right;">
                <span class="route-city">${escapeHtml(f.destCity)}</span>
                <span class="route-time">🛬 ${escapeHtml(f.finalArrivalTime)}</span>
              </div>
            </div>

            ${f.legs && f.legs.length > 0 ? `
              <div class="flight-legs-box">
                ${f.legs.map(leg => {
                  if (leg.layover) {
                    return `<div style="color:var(--color-spain-red); font-weight:600; font-size:0.75rem; text-align:center;">⏱️ ${escapeHtml(leg.layover)}</div>`;
                  }
                  return `
                    <div class="flight-leg-row">
                      <span><span class="flight-num-badge">${escapeHtml(leg.flightNum || "")}</span> ${escapeHtml(leg.from)} ➔ ${escapeHtml(leg.to)}</span>
                      <small style="color:var(--text-muted); font-weight:600;">${escapeHtml(leg.depart)} – ${escapeHtml(leg.arrive)}</small>
                    </div>
                  `;
                }).join("")}
              </div>
            ` : ""}

            ${f.notes ? `<div style="font-size:0.8rem; color:var(--text-muted);">📝 ${escapeHtml(f.notes)}</div>` : ""}

            <div class="flight-card-footer">
              <span>Status: Confirmed Flight</span>
              <button class="btn-danger-outline" onclick="deleteFlight('${f.id}')" title="Delete Flight">✕ Remove</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Render Pending Flights Chips (Only confirmed active traveling members)
    const activeFlightTravelers = new Set(flights.map(f => f.traveler.toLowerCase().trim()));
    const pendingTravelers = players.filter(p => p.status === "Confirmed" && !activeFlightTravelers.has(p.name.toLowerCase().trim()));

    pendingChipsContainer.innerHTML = pendingTravelers.map(p => `
      <div class="pending-chip">
        <span>👤 ${escapeHtml(p.name)}</span>
        <small>(${escapeHtml(p.location || "Canada")})</small>
      </div>
    `).join("");
  }

  directionFilter.addEventListener("change", render);
  btnExport.addEventListener("click", () => window.print());

  window.deleteFlight = function(id) {
    if (confirm("Remove this flight itinerary?")) {
      flights = flights.filter(f => f.id !== id);
      saveFlights();
      render();
    }
  };

  render();
}

function saveFlights() {
  localStorage.setItem("fog_flights_v12", JSON.stringify(flights));
}

function saveRooms() {
  localStorage.setItem("fog_rooms_v12", JSON.stringify(rooms));
}

// ==========================================================================
// 9. WHATSAPP TEAM BROADCAST GENERATOR
// ==========================================================================
function initWhatsAppBroadcast() {
  const previewEl = document.getElementById("waMessagePreview");
  const btnCopy = document.getElementById("btnCopyWhatsAppMsg");

  function generateMessage() {
    const pendingSizes = players.filter(p => p.size === "Pending" || p.size === "Fill").map(p => p.name);
    
    return `🏐 *FOG CANADA MEN 55+ | BENIDORM 2026 UPDATE* 🇪🇸
━━━━━━━━━━━━━━━━━━━━━━━
📍 *Event:* IVVA World Veteran Volleyball Championship
📅 *Dates:* Oct 5–11, 2026 (Arrival Oct 5 | Matches Oct 8–11 | Benidorm, Spain)
🏢 *Venues:* Palau d'Esports (Indoor) & Playa de Poniente (Beach)

⚠️ *URGENT ACTION - T-SHIRT SIZES:*
Deadline: *Aug 24, 2026* (IVVA will allocate random sizes after this).
${pendingSizes.length > 0 ? `👉 *Sizes still needed from:* ${pendingSizes.join(", ")}` : `✅ *All team sizes confirmed!*`}

✈️ *FLIGHTS & ARRIVALS (Alicante ALC):*
• Morning Group (Toronto via Madrid): Arrives Mon Oct 5 at 09:10 CEST.
• Evening Group (London): Arrives Mon Oct 5 at 20:10 CEST.
• Minivan transfers & airport pickups coordinated for ALC.

🏨 *HOTEL & STAY UPDATE (Oct 5–11):*
• 4-Room Group Booking + Private suites confirmed.
• All team rooms configured with separate single twin beds.

💶 *TOURNAMENT FINANCES:*
• IVVA Invoice #26090: *PAID & VERIFIED* via Wise Wire (#2304507222)
• Current rate: 1 EUR ≈ $${fxRate.toFixed(2)} CAD

⏰ *TIME DIFFERENCE:*
• Benidorm is *+6 to +9 hrs ahead* of Canadian timezones.

Let's go FOG Canada! 🍁🏆`;
  }

  const msg = generateMessage();
  if (previewEl) previewEl.textContent = msg;

  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(msg).then(() => {
          const origText = btnCopy.textContent;
          btnCopy.textContent = "✅ Copied to Clipboard!";
          btnCopy.style.backgroundColor = "var(--color-success)";
          setTimeout(() => {
            btnCopy.textContent = origText;
            btnCopy.style.backgroundColor = "";
          }, 2500);
        });
      } else {
        alert("Please select and copy the text inside the box.");
      }
    });
  }
}

// ==========================================================================
// 10. MODALS HANDLER
// ==========================================================================
function initModals() {
  const matchModal = document.getElementById("matchModal");
  if (matchModal) {
    document.getElementById("btnOpenAddMatch").addEventListener("click", () => matchModal.classList.add("open"));
    document.getElementById("closeMatchModal").addEventListener("click", () => matchModal.classList.remove("open"));
    document.getElementById("cancelMatchModal").addEventListener("click", () => matchModal.classList.remove("open"));

    document.getElementById("matchForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const newMatch = {
        id: "m_" + Date.now(),
        discipline: document.getElementById("mDiscipline").value,
        day: document.getElementById("mDay").value,
        time: document.getElementById("mTime").value,
        court: document.getElementById("mCourt").value,
        opponent: document.getElementById("mOpponent").value,
        uniform: document.getElementById("mUniform").value,
        notes: document.getElementById("mNotes").value
      };
      matches.push(newMatch);
      saveMatches();
      initSchedule();
      matchModal.classList.remove("open");
      e.target.reset();
    });
  }

  const playerModal = document.getElementById("playerModal");
  if (playerModal) {
    document.getElementById("btnOpenAddPlayer").addEventListener("click", () => playerModal.classList.add("open"));
    document.getElementById("closePlayerModal").addEventListener("click", () => playerModal.classList.remove("open"));
    document.getElementById("cancelPlayerModal").addEventListener("click", () => playerModal.classList.remove("open"));

    document.getElementById("playerForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const memberType = document.getElementById("pType").value;
      const emailInput = document.getElementById("pEmail").value;
      const memberObj = {
        id: "mem_" + Date.now(),
        name: document.getElementById("pName").value,
        number: parseInt(document.getElementById("pNumber").value) || (players.length + 1),
        dob: document.getElementById("pDob").value || "Pending",
        emails: emailInput ? [emailInput] : [],
        phone: "",
        phoneClean: "",
        size: document.getElementById("pSize").value,
        hotel: document.getElementById("pHotel").value,
        type: memberType,
        location: "Canada",
        socials: document.getElementById("pSocial").value ? [{ name: "Social Link", url: document.getElementById("pSocial").value }] : []
      };

      if (memberType === "Player") {
        players.push(memberObj);
      } else {
        nonPlayers.push(memberObj);
      }
      saveRoster();
      initRoster();
      playerModal.classList.remove("open");
      e.target.reset();
    });
  }

  const expenseModal = document.getElementById("expenseModal");
  if (expenseModal) {
    document.getElementById("btnOpenAddExpense").addEventListener("click", () => expenseModal.classList.add("open"));
    document.getElementById("closeExpenseModal").addEventListener("click", () => expenseModal.classList.remove("open"));
    document.getElementById("cancelExpenseModal").addEventListener("click", () => expenseModal.classList.remove("open"));

    document.getElementById("expenseForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const newExpense = {
        id: "e_" + Date.now(),
        desc: document.getElementById("eDesc").value,
        category: document.getElementById("eCategory").value,
        paidBy: document.getElementById("ePaidBy").value,
        amountEur: parseFloat(document.getElementById("eAmountEur").value) || 0,
        splitCount: parseInt(document.getElementById("eSplitCount").value) || players.length || 14
      };
      expenses.push(newExpense);
      saveExpenses();
      initFinances();
      expenseModal.classList.remove("open");
      e.target.reset();
    });
  }

  const roomModal = document.getElementById("roomModal");
  if (roomModal) {
    document.getElementById("btnOpenAddRoom").addEventListener("click", () => roomModal.classList.add("open"));
    document.getElementById("closeRoomModal").addEventListener("click", () => roomModal.classList.remove("open"));
    document.getElementById("cancelRoomModal").addEventListener("click", () => roomModal.classList.remove("open"));

    document.getElementById("roomForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const occRaw = document.getElementById("rOccupants").value;
      const occList = occRaw.split(",").map(s => s.trim()).filter(Boolean);
      const newRoom = {
        id: "r_" + Date.now(),
        name: document.getElementById("rName").value,
        bedType: document.getElementById("rType").value,
        hotelType: document.getElementById("rHotelType").value,
        occupants: occList,
        notes: document.getElementById("rNotes").value
      };
      rooms.push(newRoom);
      saveRooms();
      initRooms();
      roomModal.classList.remove("open");
      e.target.reset();
    });
  }

  const flightModal = document.getElementById("flightModal");
  if (flightModal) {
    document.getElementById("btnOpenAddFlight").addEventListener("click", () => flightModal.classList.add("open"));
    document.getElementById("closeFlightModal").addEventListener("click", () => flightModal.classList.remove("open"));
    document.getElementById("cancelFlightModal").addEventListener("click", () => flightModal.classList.remove("open"));

    document.getElementById("flightForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const traveler = document.getElementById("flName").value;
      const direction = document.getElementById("flDirection").value;
      const date = document.getElementById("flDate").value;
      const originCity = document.getElementById("flOrigin").value;
      const destCity = document.getElementById("flDest").value;
      const airline = document.getElementById("flAirline").value;
      const finalArrivalTime = document.getElementById("flArrival").value;
      const routeSummary = document.getElementById("flRoute").value;

      const newFlight = {
        id: "fl_" + Date.now(),
        traveler,
        direction,
        date,
        originCity,
        destCity,
        airline,
        finalArrivalTime,
        routeSummary,
        legs: [
          { flightNum: airline, from: originCity, to: destCity, depart: "Logged", arrive: finalArrivalTime }
        ],
        notes: `Logged flight entry for ${traveler}`
      };

      flights.push(newFlight);
      saveFlights();
      initFlights();
      flightModal.classList.remove("open");
      e.target.reset();
    });
  }

  [matchModal, playerModal, expenseModal, roomModal, flightModal].filter(Boolean).forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeJs(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "\\'");
}
