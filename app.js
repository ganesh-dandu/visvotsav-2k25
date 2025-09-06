const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
});
window.addEventListener("click", function (e) {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !menuIcon.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

(function () {
    const deadline = new Date("2025-09-11T23:59:59");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("minutes");
    const secsEl = document.getElementById("seconds");
    function updateCountdown() {
        const now = new Date();
        let diff = Math.max(0, deadline - now);
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= d * 86400000;
        const h = Math.floor(diff / (1000 * 60 * 60));
        diff -= h * 3600000;
        const m = Math.floor(diff / (1000 * 60));
        diff -= m * 60000;
        const s = Math.floor(diff / 1000);
        if (daysEl) daysEl.textContent = String(d).padStart(2, "0");
        if (hoursEl) hoursEl.textContent = String(h).padStart(2, "0");
        if (minsEl) minsEl.textContent = String(m).padStart(2, "0");
        if (secsEl) secsEl.textContent = String(s).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
})();

const EVENT_DEPARTMENTS = {
    "Paper Presentation": {
        register: "https://forms.gle/2yAfSqWvsTXVHLvc8",
        "CSE & Allied": {
            venue: "C-119, Cotton Block",
            faculty: [{ name: "Mr. T. Dayakar" }],
            students: [
                { name: "Aakhil", roll: "2473A05401", phone: "8247084184" },
                { name: "Sreenand", roll: "2473A05380", phone: "7075867765" }
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
                { name: "Syam", roll: "2273A04274", phone: "9618137255" },
                { name: "Vyshnavi", roll: "2273A04238", phone: "7893047932" }
            ]
        },
        "EEE": {
            venue: "B208 — ME Block",
            faculty: [{ name: "Mr. T. Hari Babu" }],
            students: [
                { name: "Maheswari", roll: null, phone: null },
                { name: "Jathin Prasad", roll: null, phone: null },
                { name: "Sasi Kumar", roll: null, phone: null }
            ]
        }
    },
    "Poster Presentation": {
        register: "https://forms.gle/D4hh3HzccwD7VjsZ7",
        "CSE & Allied": {
            venue: "C-103, Cotton Block",
            faculty: [{ name: "Mr. T. Ravichand" }],
            students: [
                { name: "Vahida Sahira Bi", roll: "2373A05001", phone: "8500522955" },
                { name: "Lokesh", roll: "2373A05243", phone: "7386562285" }
            ]
        },
        "ECE": {
            venue: "R-210",
            faculty: [{ name: "Ms. M Pavitra" }, { name: "Mrs. P Sasitha" }],
            students: [
                { name: "Sachin", roll: "2273A04006", phone: "9912938784" },
                { name: "Sudheshna Devi", roll: "2273A04184", phone: "9347040469" }
            ]
        },
        "EEE": {
            venue: "ME Block (B103)",
            faculty: [{ name: "Mr. S. Muni Raja" }],
            students: [
                { name: "Poojitha", roll: null, phone: null },
                { name: "Manoja", roll: null, phone: null },
                { name: "Madhuchandrik", roll: null, phone: null }
            ]
        }
    },
    "Project Expo": {
        register: "https://forms.gle/PZHjm63VyjfR1jsq8",
        "CSE & Allied": {
            venue: "A014 & A015, MRR Block",
            faculty: [{ name: "R Bhargav" }],
            students: [
                { name: "Madhan Kumar", roll: "2373A35137", phone: "9059658236" },
                { name: "Harika", roll: "2373A35143", phone: "8019640506" }
            ]
        },
        "ECE": {
            venue: "Communications Lab, Abdul Kalam Block",
            faculty: [{ name: "Dr S Penchala Reddy" }, { name: "G Manga Rao" }],
            students: [
                { name: "Sathish", roll: "2273A04003", phone: "7981247965" },
                { name: "Sravani", roll: "2273A04023", phone: "6281968646" }
            ]
        },
        "EEE": {
            venue: "B-103, ME Block",
            faculty: [{ name: "Mr G. Suman" }],
            students: [
                { name: "Sreelekha", roll: null, phone: null },
                { name: "Jorepalli Prasanth", roll: null, phone: null },
                { name: "Lakshmi Priya", roll: null, phone: null }
            ]
        }
    },
    "Circuitrix": {
        register: "https://forms.gle/2y5oUrQxzCsB6aQA7",
        "CSE & Allied": null,
        "ECE": {
            venue: "EDC Lab, Abdul Kalam Block",
            faculty: [
                { name: "Dr Sk Rizwan" },
                { name: "Sk Jagadeesh Babu" },
                { name: "Mr. Y. Ramaiah" }
            ],
            students: [
                { name: "Praveen Sai", roll: "2273A04154", phone: "9063757378" },
                { name: "Prathyusha", roll: "2273A04167", phone: "7569836190" }
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
                { name: "Praveen Sai", roll: "2273A04154", phone: "9063757378" },
                { name: "Prathyusha", roll: "2273A04167", phone: "7569836190" }
            ]
        }
    },
    "Technical Quiz": {
        register: "https://forms.gle/aoJgc4krrg6iHfaM7",
        "CSE & Allied": {
            venue: "A-204",
            faculty: [{ name: "Mr R Prapulla Kumar" }, { name: "Mr A Venka Reddy" }],
            students: [
                { name: "Penchala Sai", roll: "2273A31041", phone: "9515867037" },
                { name: "Yamini", roll: "2373A31016", phone: "9030324347" }
            ]
        },
        "ECE": {
            venue: "D-002, Abdul Kalam Block",
            faculty: [{ name: "Dr V Prakasam" }, { name: "K Penchalaiah" }],
            students: [
                { name: "Kedaar Kumar", roll: "2273A04007", phone: "7013264523" },
                { name: "Divya", roll: "2273A04010", phone: "9441770920" }
            ]
        },
        "EEE": {
            venue: "B109, ME Block",
            faculty: [{ name: "Mr V. Masthanaiah" }],
            students: [
                { name: "Thrisha", roll: null, phone: null },
                { name: "Lakshmi Prasanna", roll: null, phone: null },
                { name: "Lakshmi Chandana", roll: null, phone: null }
            ]
        }
    },
    "Coding": {
        register: "https://forms.gle/DvLVaQWc8XZJQ7Rx9",
        "CSE & Allied": {
            venue: "Lab-10, Abdul Kalam Block",
            faculty: [{ name: "Jeevan" }, { name: "Shabbir" }],
            students: [
                { name: "Ganesh D", roll: "2273A39079", phone: "6300991984" },
                { name: "Sriram T", roll: "2273A39019", phone: "9912618285" },
                { name: "Venkateswarlu", roll: "2273A39008", phone: "7670872362" }
            ]
        },
        "ECE": null,
        "EEE": null
    },
    "Web Design": {
        register: "https://forms.gle/7b8D72qt4rV2STuX6",
        "CSE & Allied": {
            venue: "Lab-8, Abdul Kalam Block",
            faculty: [{ name: "N V Soundarya" }, { name: "M Tejaswini" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Singing": {
        register: "https://forms.gle/1gtvTtAMmYQG5TKs9",
        "CSE & Allied": {
            venue: "Auditorium / Stage (TBD)",
            faculty: [{ name: "Mr.SK. Abdul Shabbir (S&H)" }, { name: "Mr. K. Srinivasulu (S&H)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Dance": {
        register: "https://forms.gle/9qzN27qvuTxeLVbr7",
        "CSE & Allied": {
            venue: "Auditorium / Stage (TBD)",
            faculty: [{ name: "Dr. R. Ranjit Kumar (ECE)" }, { name: "Mr. M. Ravikumar (Mech)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Antyakshari": {
        register: "https://forms.gle/YBn3Une4G9gH3JAy7",
        "CSE & Allied": {
            venue: "Auditorium / Hall (TBD)",
            faculty: [{ name: "Mr. N.V. Suryanarayana (Mech)" }, { name: "Mrs. M. Mounika (Mech)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Dumb Charades": {
        register: "https://forms.gle/pTRK7VmUNnPcXNAC8",
        "CSE & Allied": {
            venue: "Auditorium / Stage (TBD)",
            faculty: [{ name: "Mr. T. Bhanu Prakash (Civil)" }, { name: "Mrs. K. Pravallika (Civil)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Elocution": {
        register: "https://forms.gle/HaRtoiJpiFcUw6HZA",
        "CSE & Allied": {
            venue: "Seminar Hall (TBD)",
            faculty: [{ name: "Mr. SK. Rameez (S&H)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Drawing": {
        register: "https://forms.gle/vDLMt2qZj8PCC7tb9",
        "CSE & Allied": {
            venue: "Drawing Room / Art Lab (TBD)",
            faculty: [{ name: "Mr. A. Ramanjaneyulu (Mech)" }, { name: "Mr. D.C. Chennayya (Mech)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Picture Connect": {
        register: "https://forms.gle/rV1khYCEKEqyXxxS9",
        "CSE & Allied": {
            venue: "Lecture Hall / Room (TBD)",
            faculty: [{ name: "Mr. K. Naresh (Civil)" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "General Quiz": {
        register: "https://forms.gle/oT8WLB5pUsJ7N1cy5",
        "CSE & Allied": {
            venue: "Quiz Hall / Seminar Room (TBD)",
            faculty: [{ name: "Dr. O. Sheshaiah" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Fancy Dress": {
        register: "https://forms.gle/68KEXuwVoEGUfw8d7",
        "CSE & Allied": {
            venue: "Stage / Open Area (TBD)",
            faculty: [{ name: "Dr. O. Sheshaiah" }],
            students: []
        },
        "ECE": null,
        "EEE": null
    },
    "Treasure Hunt": {
        register: "https://forms.gle/GqeCBXFQcG4pVtY77",
        "CSE & Allied": {
            venue: "Campus-wide (TBD)",
            faculty: [],
            students: []
        },
        "ECE": null,
        "EEE": null
    }
};

function escapeHtml(str) {
    if (!str && str !== 0) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function buildPhoneHtml(phone) {
    return phone ? `<a href="tel:${phone}" aria-label="Call ${phone}">${phone}</a>` : `<span class="modal-caption">Not provided</span>`;
}

function buildRollHtml(roll) {
    return roll ? `<span class="roll-num">${roll}</span>` : `<span class="modal-caption">Not provided</span>`;
}

function renderEventDepartments(eventKey) {
    const data = EVENT_DEPARTMENTS[eventKey];
    const modal = document.getElementById("event-modal");
    const body = modal ? modal.querySelector(".event-modal__body") : null;
    const regBtn = document.getElementById("modal-register");
    if (!modal || !body) return;
    const titleEl = document.getElementById("event-modal-title");
    const subtitleEl = document.querySelector(".event-modal__subtitle");
    if (titleEl) titleEl.textContent = eventKey || "Event Details";
    if (subtitleEl) subtitleEl.textContent = "Event Details";
    if (!data) {
        body.innerHTML = `<div style="color:#ffd7b8;padding:12px;border-radius:8px;background:rgba(255,134,56,0.03)">Details not found for <strong>${escapeHtml(eventKey)}</strong></div>`;
        if (regBtn) {
            regBtn.removeAttribute("href");
            regBtn.style.display = "none";
        }
        openModal();
        return;
    }
    if (regBtn) {
        if (data.register) {
            regBtn.href = data.register;
            regBtn.style.display = "inline-flex";
            regBtn.setAttribute("target", "_blank");
            regBtn.setAttribute("rel", "noopener");
        } else {
            regBtn.removeAttribute("href");
            regBtn.style.display = "none";
        }
    }
    let container = body.querySelector(".modal-dept-cards");
    if (!container) {
        container = document.createElement("div");
        container.className = "modal-dept-cards";
        body.innerHTML = "";
        body.appendChild(container);
    } else {
        container.innerHTML = "";
    }
    const deptOrder = ["CSE & Allied", "ECE", "EEE"];
    deptOrder.forEach((deptName) => {
        const dept = data[deptName];
        const card = document.createElement("article");
        card.className = "modal-dept-card";
        const header = document.createElement("div");
        header.className = "modal-dept-card__header";
        header.innerHTML = `<h3><i class="ph ph-building" aria-hidden="true"></i> ${escapeHtml(deptName)}</h3>`;
        card.appendChild(header);
        const venue = document.createElement("div");
        venue.className = "modal-dept-card__venue";
        const venueText = dept && dept.venue ? escapeHtml(dept.venue) : "No venue listed";
        venue.innerHTML = `<i class="ph ph-map-pin" aria-hidden="true"></i> ${venueText}`;
        card.appendChild(venue);
        if (!dept) {
            const note = document.createElement("div");
            note.className = "modal-dept-card__not-hosted";
            note.textContent = "This department is not hosting this event.";
            card.appendChild(note);
            container.appendChild(card);
            return;
        }
        const facultyWrap = document.createElement("div");
        facultyWrap.className = "modal-dept-faculty";
        const facTitle = document.createElement("h4");
        facTitle.textContent = "Faculty Coordinators";
        facultyWrap.appendChild(facTitle);
        const facList = document.createElement("ul");
        facList.className = "modal-faculty-list";
        if (dept.faculty && dept.faculty.length) {
            dept.faculty.forEach((f) => {
                const li = document.createElement("li");
                li.innerHTML = `<span class="cell-icon"><i class="ph ph-user" aria-hidden="true"></i></span><span class="cell-text">${escapeHtml(f.name)}</span>`;
                facList.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.className = "modal-dept-card__not-hosted";
            li.textContent = "No faculty listed";
            facList.appendChild(li);
        }
        facultyWrap.appendChild(facList);
        card.appendChild(facultyWrap);
        const studentsWrap = document.createElement("div");
        studentsWrap.className = "modal-dept-students";
        const stuTitle = document.createElement("h4");
        stuTitle.textContent = "Student Coordinators";
        studentsWrap.appendChild(stuTitle);
        const table = document.createElement("table");
        table.className = "dept-table";
        table.innerHTML = `<thead><tr><th>Student</th><th>Roll</th><th>Mobile</th></tr></thead><tbody></tbody>`;
        const tbody = table.querySelector("tbody");
        if (dept.students && dept.students.length) {
            dept.students.forEach((s) => {
                const tr = document.createElement("tr");
                const nameCell = `<td class="name"><span class="cell-icon"><i class="ph ph-user-circle" aria-hidden="true"></i></span><span class="cell-text">${escapeHtml(s.name)}</span></td>`;
                const rollCell = `<td class="roll">${buildRollHtml(s.roll)}</td>`;
                const phoneCell = `<td class="phone">${buildPhoneHtml(s.phone)}</td>`;
                tr.innerHTML = nameCell + rollCell + phoneCell;
                tbody.appendChild(tr);
            });
        } else {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td colspan="3" class="modal-dept-card__not-hosted">No student coordinators listed</td>`;
            tbody.appendChild(tr);
        }
        studentsWrap.appendChild(table);
        card.appendChild(studentsWrap);
        container.appendChild(card);
    });
    openModal();
}

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
    if (e && e.preventDefault) e.preventDefault();
    closeModal();
}

function escClose(e) {
    if (e.key === "Escape") closeModal();
}

document.addEventListener("DOMContentLoaded", function () {
    const viewBtns = document.querySelectorAll(".committee-btn, .view-details, a[data-event]");
    viewBtns.forEach((btn) => {
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
            renderEventDepartments(eventName);
        });
    });
    const modal = document.getElementById("event-modal");
    if (modal) {
        modal.querySelectorAll("button, [role='button']").forEach((el) => el.addEventListener("keydown", (e) => {
            if (e.key === "Enter") el.click();
        }));
    }
});
