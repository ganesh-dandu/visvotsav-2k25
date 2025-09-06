const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // stop click from bubbling to window
  navLinks.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  // check if click is outside BOTH navLinks and menuIcon
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    navLinks.classList.remove("active");
  }
});

// optional: close menu when clicking a link inside it
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});



(function(){
  const deadline = new Date("2025-09-11T23:59:59");

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("minutes");
  const secsEl = document.getElementById("seconds");

  function updateCountdown(){
    const now = new Date();
    let diff = Math.max(0, deadline - now);

    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * 86400000;
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * 3600000;
    const m = Math.floor(diff / (1000*60));
    diff -= m * 60000;
    const s = Math.floor(diff / 1000);

    daysEl.textContent = String(d).padStart(2,'0');
    hoursEl.textContent = String(h).padStart(2,'0');
    minsEl.textContent = String(m).padStart(2,'0');
    secsEl.textContent = String(s).padStart(2,'0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();



/* =========================
   Event departments data + modal render + handlers
   Paste into app.js (replace previous block)
   ========================= */

/* ---------- data object (paste exactly) ---------- */
const EVENT_DEPARTMENTS = {
  "Paper Presentation": {
    "CSE & Allied": {
      register: "https://forms.gle/KQHFgxnpJyemn6Uc8",
      venue: "C-119, Cotton Block",
      faculty: [
        { name: "Mr. T. Dayakar" }
      ],
      students: [
        { name: "Syed Aakhil", roll: "2473A05401", phone: "8247084184" },
        { name: "Kalivela Sreenand", roll: "2473A05380", phone: "7075867765" }
      ]
    },
    "ECE": {
      venue: "D-102, D-103, D-104 — Abdul Kalam Block",
      faculty: [
        { name: "Dr. M Venkatesan" },
        { name: "Dr. N Satheesh Kumar" },
        { name: "R Pratap Singh" },
        { name: "M Rammohan Reddy" },
        { name: "V Narayana Reddy" },
        { name: "M Surekha" }
      ],
      students: [
        { name: "J. Penugonda Syam", roll: "2273A04274", phone: "9618137255" },
        { name: "R. Vyshnavi", roll: "2273A04238", phone: "7893047932" }
      ]
    },
    "EEE": {
      venue: "B208 — ME Block",
      faculty: [
        { name: "Mr. T. Hari Babu" }
      ],
      students: [
        { name: "Peddireddy Kiran Maheswari", roll: null, phone: null },
        { name: "Sayani Venkata Jathin Prasad", roll: null, phone: null },
        { name: "Bandlamudi Sasi Kumar", roll: null, phone: null }
      ]
    }
  },

  "Poster Presentation": {
    "CSE & Allied": {
      venue: "C-103, Cotton Block",
      faculty: [
        { name: "Mr. T. Ravichand" }
      ],
      students: [
        { name: "Sk. Vahida Sahira Bi", roll: "2373A05001", phone: "8500522955" },
        { name: "M. Lokesh", roll: "2373A05243", phone: "7386562285" }
      ]
    },
    "ECE": {
      venue: "R-210",
      faculty: [
        { name: "Ms. M Pavitra" },
        { name: "Mrs. P Sasitha" }
      ],
      students: [
        { name: "B. Sachin", roll: "2273A04006", phone: "9912938784" },
        { name: "K. Sudheshna Devi", roll: "2273A04184", phone: "9347040469" }
      ]
    },
    "EEE": {
      venue: "ME Block (B103)",
      faculty: [
        { name: "Mr. S. Muni Raja" }
      ],
      students: [
        { name: "Marpudi Poojitha", roll: null, phone: null },
        { name: "Ganadi Manoja", roll: null, phone: null },
        { name: "Parri Madhuchandrik", roll: null, phone: null }
      ]
    }
  },

  "Project Expo": {
    "CSE & Allied": {
      venue: "A014 & A015, MRR Block",
      faculty: [
        { name: "R Bhargav" }
      ],
      students: [
        { name: "Madhan Kumar", roll: "2373A35137", phone: "9059658236" },
        { name: "Harika", roll: "2373A35143", phone: "8019640506" }
      ]
    },
    "ECE": {
      venue: "Communications Lab, Abdul Kalam Block",
      faculty: [
        { name: "Dr S Penchala Reddy" },
        { name: "G Manga Rao" }
      ],
      students: [
        { name: "B. Sathish", roll: "2273A04003", phone: "7981247965" },
        { name: "M. Sravani", roll: "2273A04023", phone: "6281968646" }
      ]
    },
    "EEE": {
      venue: "B-103, ME Block",
      faculty: [
        { name: "Mr G. Suman" }
      ],
      students: [
        { name: "Akkem Sreelekha", roll: null, phone: null },
        { name: "Jorepalli Prasanth", roll: null, phone: null },
        { name: "Jammula Lakshmi Priya", roll: null, phone: null }
      ]
    }
  },

  "Circuitrix": {
    "CSE & Allied": null,
    "ECE": {
      venue: "EDC Lab, Abdul Kalam Block",
      faculty: [
        { name: "Dr Sk Rizwan" },
        { name: "Sk Jagadeesh Babu" },
        { name: "Mr. Y. Ramaiah" }
      ],
      students: [
        { name: "B. Praveen Sai", roll: "2273A04154", phone: "9063757378" },
        { name: "A. Prathyusha", roll: "2273A04167", phone: "7569836190" }
      ]
    },
    "EEE": {
      venue: "EDC Lab, Abdul Kalam Block",
      faculty: [
        { name: "Dr Sk Rizwan" },
        { name: "Sk Jagadeesh Babu" },
        { name: "Mr. Y. Ramaiah" }
      ],
      students: [
        { name: "B. Praveen Sai", roll: "2273A04154", phone: "9063757378" },
        { name: "A. Prathyusha", roll: "2273A04167", phone: "7569836190" }
      ]
    }
  },

  "Technical Quiz": {
    "CSE & Allied": {
      venue: "A-204",
      faculty: [
        { name: "Mr R Prapulla Kumar" },
        { name: "Mr A Venka Reddy" }
      ],
      students: [
        { name: "M Penchala Sai", roll: "2273A31041", phone: "9515867037" },
        { name: "M Yamini", roll: "2373A31016", phone: "9030324347" }
      ]
    },
    "ECE": {
      venue: "D-002, Abdul Kalam Block",
      faculty: [
        { name: "Dr V Prakasam" },
        { name: "K Penchalaiah" }
      ],
      students: [
        { name: "D.V Kedaar Kumar", roll: "2273A04007", phone: "7013264523" },
        { name: "P. Divya", roll: "2273A04010", phone: "9441770920" }
      ]
    },
    "EEE": {
      venue: "B109, ME Block",
      faculty: [
        { name: "Mr V. Masthanaiah" }
      ],
      students: [
        { name: "Bheemakonda Thrisha", roll: null, phone: null },
        { name: "Ch Lakshmi Prasanna", roll: null, phone: null },
        { name: "Thatitoti Lakshmi Chandana", roll: null, phone: null }
      ]
    }
  },

  "Coding": {
    "CSE & Allied": {
      venue: "Lab-10, Abdul Kalam Block",
      faculty: [
        { name: "Jeevan" },
        { name: "Shabbir" }
      ],
      students: [
        { name: "Ganesh D", roll: "2273A39079", phone: "6300991984" },
        { name: "Sriram T", roll: "2273A39019", phone: "9912618285" },
        { name: "Venkateswarlu", roll: "2273A39008", phone: "7670872362" },
      ]
    },
    "ECE": null,
    "EEE": null
  },

  "Web Design": {
    "CSE & Allied": {
      venue: "Lab-8, Abdul Kalam Block",
      faculty: [
        { name: "N V Soundarya" },
        { name: "M Tejaswini" }
      ],
      students: []
    },
    "ECE": null,
    "EEE": null
  }
};
/* ---------- end data ---------- */

/* ---------- helper: build phone / roll cells ---------- */
function buildPhoneHtml(phone) {
  return phone ? `<a href="tel:${phone}" aria-label="Call ${phone}">${phone}</a>` : `<span class="modal-caption">Not provided</span>`;
}
function buildRollHtml(roll) {
  return roll ? `<span class="roll-num">${roll}</span>` : `<span class="modal-caption">Not provided</span>`;
}

/* ---------- render function (creates .modal-dept-cards) ---------- */
function renderEventDepartments(eventKey) {
  const data = EVENT_DEPARTMENTS[eventKey];
  const venuesEl = document.getElementById("modal-venues");
  if (venuesEl) venuesEl.innerHTML = ""; // we'll use a custom cards container

  if (!data) {
    const panel = document.querySelector("#event-modal .event-modal__body");
    if (panel) {
      panel.innerHTML = `<div style="color:#ffd7b8;padding:12px;border-radius:8px;background:rgba(255,134,56,0.03)">Details not found for <strong>${escapeHtml(eventKey)}</strong></div>`;
    }
    openModal();
    return;
  }

  // create container or reuse
  let container = document.querySelector(".modal-dept-cards");
  if (!container) {
    container = document.createElement("div");
    container.className = "modal-dept-cards";
    const target = document.getElementById("modal-venues") || document.querySelector("#event-modal .event-modal__body");
    target.appendChild(container);
  }
  container.innerHTML = "";

  const deptOrder = ["CSE & Allied", "ECE", "EEE"];
  deptOrder.forEach((deptName) => {
    const dept = data[deptName];

    const card = document.createElement("article");
    card.className = "modal-dept-card";

    // header
    const header = document.createElement("div");
    header.className = "modal-dept-card__header";
    header.innerHTML = `<h3><i class="ph ph-building" aria-hidden="true" style="margin-right:8px"></i>${escapeHtml(deptName)}</h3>
                        <span class="modal-dept-card__tag">Dept</span>`;
    card.appendChild(header);

    // venue row
    const venue = document.createElement("div");
    venue.className = "modal-dept-card__venue";
    venue.innerHTML = `<i class="ph ph-map-pin" aria-hidden="true"></i> ${dept && dept.venue ? escapeHtml(dept.venue) : "No venue listed"}`;
    card.appendChild(venue);

    if (!dept) {
      const note = document.createElement("div");
      note.className = "modal-dept-card__not-hosted";
      note.textContent = "This department is not hosting this event.";
      card.appendChild(note);
      container.appendChild(card);
      return;
    }

    /* FACULTY: simplified list (only names) */
    const ftable = document.createElement("table");
    ftable.className = "dept-table";
    ftable.innerHTML = `
      <colgroup><col class="name"></colgroup>
      <thead><tr><th>Faculty Coordinators</th></tr></thead>
      <tbody></tbody>
    `;
    const fbody = ftable.querySelector("tbody");
    if (dept.faculty && dept.faculty.length) {
      dept.faculty.forEach((f) => {
        const tr = document.createElement("tr");
        tr.className = "dept-row";
        tr.innerHTML = `<td class="name"><span class="cell-icon"><i class="ph ph-user"></i> ${escapeHtml(f.name)}</span></td>`;
        fbody.appendChild(tr);
      });
    } else {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td class="modal-dept-card__not-hosted">No faculty listed</td>`;
      fbody.appendChild(tr);
    }

    /* STUDENTS: name | roll | phone (only once each) */
    const stable = document.createElement("table");
    stable.className = "dept-table";
    stable.innerHTML = `
      <colgroup><col class="name"><col class="roll"><col class="phone"></colgroup>
      <thead><tr><th>Student</th><th>Roll</th><th>Mobile</th></tr></thead>
      <tbody></tbody>
    `;
    const sbody = stable.querySelector("tbody");
    if (dept.students && dept.students.length) {
      dept.students.forEach((s) => {
        const tr = document.createElement("tr");
        tr.className = "dept-row";
        const rollHtml = buildRollHtml(s.roll);
        const phoneHtml = buildPhoneHtml(s.phone);
        tr.innerHTML = `<td class="name"><span class="cell-icon"><i class="ph ph-user-circle"></i> ${escapeHtml(s.name)}</span></td>
                        <td class="roll">${rollHtml}</td>
                        <td class="phone">${phoneHtml}</td>`;
        sbody.appendChild(tr);
      });
    } else {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="3" class="modal-dept-card__not-hosted">No student coordinators listed</td>`;
      sbody.appendChild(tr);
    }

    // attach
    card.appendChild(ftable);
    card.appendChild(stable);
    container.appendChild(card);
  });

  // show modal
  openModal();
}

/* ---------- simple modal open/close handlers ---------- */
function openModal() {
  const modal = document.getElementById("event-modal");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  const backdrop = modal.querySelector(".event-modal__backdrop");
  if (backdrop) backdrop.addEventListener("click", closeModalOnce);
  modal.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener("click", closeModalOnce));
  window.addEventListener("keydown", escClose);
  const closeBtn = modal.querySelector(".event-modal__close");
  if (closeBtn) closeBtn.focus();
}
function closeModal() {
  const modal = document.getElementById("event-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  const backdrop = modal.querySelector(".event-modal__backdrop");
  if (backdrop) backdrop.removeEventListener("click", closeModalOnce);
  modal.querySelectorAll('[data-close]').forEach(btn => btn.removeEventListener("click", closeModalOnce));
  window.removeEventListener("keydown", escClose);
}
function closeModalOnce(e) {
  e && e.preventDefault && e.preventDefault();
  closeModal();
}
function escClose(e) {
  if (e.key === "Escape") closeModal();
}

/* ---------- wire up all view buttons (anchors with .committee-btn) ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const viewBtns = document.querySelectorAll(".committee-btn, .view-details, a[data-event]");
  viewBtns.forEach(btn => {
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      const card = btn.closest(".grid-item") || btn.closest(".grid-item, .grid-item *");
      let eventName = null;
      if (card) {
        const h3 = card.querySelector("h3");
        if (h3) eventName = h3.textContent.trim();
      }
      if (!eventName && btn.dataset && btn.dataset.event) {
        eventName = btn.dataset.event;
      }
      if (!eventName) {
        console.warn("Could not determine event name for this button");
        return;
      }
      // render and open
      renderEventDepartments(eventName);
    });
  });

  const modal = document.getElementById("event-modal");
  if (modal) {
    modal.querySelectorAll("button, [role='button']").forEach(el => el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") el.click();
    }));
  }
});

/* ---------- small util: escape html to avoid accidental injection ---------- */
function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}


// ====== Event card click -> modal title glue ======
// Delegated listener so it works for existing or future cards
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.committee-btn, .view-details, .committee-btn a');
  if (!btn) return;

  // find nearest grid-item (card)
  const card = btn.closest('.grid-item') || btn.closest('.grid-item') || btn.closest('.grid-item');
  if (!card) {
    // fallback: try parent nodes until we find the card heading
    console.warn('event button clicked but no .grid-item ancestor found');
  }

  // Extract the event title from the card's H3
  let eventTitle = '';
  if (card) {
    const h3 = card.querySelector('h3');
    if (h3) eventTitle = h3.textContent.trim();
  }

  // If we couldn't extract title from DOM, check data-event attribute on the button
  if (!eventTitle && btn.dataset && btn.dataset.event) {
    eventTitle = btn.dataset.event.trim();
  }

  // final fallback
  if (!eventTitle) eventTitle = 'Event Details';

  // Update modal header title & subtitle
  const modalTitleEl = document.getElementById('event-modal-title');
  if (modalTitleEl) modalTitleEl.textContent = eventTitle;

  // optional subtitle logic:
  // If you have a mapping object EVENT_META with types/taglines, use that.
  // Example usage (uncomment if you maintain an EVENT_META object):
  // const subtitle = (window.EVENT_META && EVENT_META[eventTitle] && EVENT_META[eventTitle].tagline) || 'Event Details';
  const subtitle = 'Event Details'; // safe default
  const subtitleEl = document.querySelector('.event-modal__subtitle');
  if (subtitleEl) subtitleEl.textContent = subtitle;

  // Call your existing render function with the eventTitle key
  // If your renderEventDepartments expects keys like 'PAPER PRESENTATION' or 'Paper Presentation'
  // make sure the cases match. You can standardize like eventTitle.toUpperCase() if needed.
  if (typeof renderEventDepartments === 'function') {
    try {
      renderEventDepartments(eventTitle);
    } catch (err) {
      console.error('renderEventDepartments threw:', err);
      // fallback: just open modal if render fails
      if (typeof openModal === 'function') openModal();
    }
  } else {
    // if renderEventDepartments isn't available, just open the modal
    if (typeof openModal === 'function') openModal();
    else console.warn('renderEventDepartments() not found. Modal may not display department details.');
  }
});


