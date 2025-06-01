document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the Jobs Page!");

    // Sample job data for Owners
    const ownerJobs = [
        { title: "Construction Supervisor Needed", location: "City A", description: "Seeking 5 laborers for a week-long construction project." },
        { title: "Harvesting Assistance Required", location: "Village B", description: "Need workers to help with rice harvesting." },
        { title: "Warehouse Organizer", location: "City D", description: "Looking for organizers to set up warehouse inventory." }
    ];

    // Sample job data for Employees
    const employeeJobs = [
        { title: "Bricklayer Helper", location: "City C", description: "Experienced in assisting bricklaying work." },
        { title: "Field Worker", location: "Village E", description: "Available for agricultural field work." },
        { title: "Factory Assistant", location: "Industrial Zone", description: "Skilled in general factory operations." }
    ];

    // Populate Owner Job Listings
    const ownerJobList = document.getElementById("owner-jobs");
    ownerJobs.forEach(job => {
        const jobItem = document.createElement("li");
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button onclick="viewDetails('${job.title}')">View Details</button>
        `;
        ownerJobList.appendChild(jobItem);
    });

    // Populate Employee Job Listings
    const employeeJobList = document.getElementById("employee-jobs");
    employeeJobs.forEach(job => {
        const jobItem = document.createElement("li");
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button onclick="applyNow('${job.title}')">Apply Now</button>
        `;
        employeeJobList.appendChild(jobItem);
    });
});

// Functions for button actions
function viewDetails(jobTitle) {
    alert(`Viewing details for: ${jobTitle}`);
}

function applyNow(jobTitle) {
    alert(`Applying for: ${jobTitle}`);
}
