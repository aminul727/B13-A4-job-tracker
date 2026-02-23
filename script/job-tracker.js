 const jobs = [
      {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        status: "not_applied",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
      },
      {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer",
        location: "Los Angeles",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        status: "not_applied",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
      },
      {
         id: 3,
        company: "DataViz Solution",
        role: "Data visualization Specilist",
        location: "Boston",
        type: "Full-time",
        salary: "$120,000 - $165,000",
        status: "not_applied",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
      },
      {
         id: 4,
        company: "CloudFirst Inc",
        role: "Backed Devoloper",
        location: "Seattle",
        type: "Full-time",
        salary: "$160,000 - $190,000",
        status: "not_applied",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
      },
      {
         id: 5,
        company: "Innovation Lab",
        role: "UX Engineer",
        location: "Austin",
        type: "Full-time",
        salary: "$120,000 - $165,000",
        status: "not_applied",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
      },
      {
        id: 6,
        company: "MegaCrop solution",
        role: "Javascript Developer",
        location: "NewYork",
        type: "Full-time",
        salary: "$150,000 - $190,000",
        status: "not_applied",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
      },
      {
         id: 7,
        company: "StartUpXYZ",
        role: "Full Stake Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$150,000 - $190,000",
        status: "not_applied",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
      },
      {
         id: 8,
        company: "TechCrop Industry",
        role: "Senior Founder Dev eloper",
        location: "San Francisco",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        status: "not_applied",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
      }
    ];

    const container = document.getElementById("jobContainer");
    let currentFilter = "all";

    function renderJobs(filter = "all") {
      container.innerHTML = "";

      let filtered = jobs;

      if (filter !== "all") {
        filtered = jobs.filter(job => job.status === filter);
      }
      if(filtered.length === 0){
        container.innerHTML = `
         <div class="text-center text-gray-500 mt-10 text-lg bg-base-200">
         <img src="jobs.png"
           class="w-40 mb-4 mx-auto"
           alt="No jobs" />

         <p class="text-gray-900 text-lg font-medium">No Jobs Available</p>
         <p class="text-gray-500 text-[14px] font-">Check back soon for new opportunities</p>
         </div>
        `;
        updateCounts();
        return;
      }

      filtered.forEach(job => {
        const card = document.createElement("div");
        card.className = "card bg-base-100 shadow p-6 mb-4";

        card.innerHTML = `
          <h3 class="text-lg font-semibold">${job.company}</h3>
          
          <div class="flex justify-between">
          <p class="text-sm text-gray-500">${job.role}</p>
          <button onclick="deletedJob(${job.id})" 
          class="btn btn-circle"><i class="fa-solid fa-trash-can"></i>
          </button>
          </div>
          <p class="text-sm mt-2">${job.location} • ${job.type} • ${job.salary}</p>

          <div class="badge mt-3 ${
            job.status === "interview" ? "badge-success" :
            job.status === "rejected" ? "badge-error" :
            "badge-neutral"
          }">
            ${job.status.replace("_", " ").toUpperCase()}
          </div>
          <p class="text-sm mt-2">${job.description}</p>

          <div class="mt-4 flex gap-2">
            <button onclick="updateStatus(${job.id}, 'interview')" 
              class="btn btn-outline btn-success btn-sm">
              Interview
            </button>

            <button onclick="updateStatus(${job.id}, 'rejected')" 
              class="btn btn-outline btn-error btn-sm">
              Rejected
            </button>
          </div>
        `;

        container.appendChild(card);
      });

      updateCounts();
    }

    function updateStatus(id, newStatus) {
      const job = jobs.find(j => j.id === id);
      job.status = newStatus;
      renderJobs(currentFilter);
    }

    function updateCounts() {
      document.getElementById("totalCount").innerText = jobs.length;

      const interview = jobs.filter(j => j.status === "interview").length;
      const rejected = jobs.filter(j => j.status === "rejected").length;

      document.getElementById("interviewCount").innerText = interview;
      document.getElementById("rejectedCount").innerText = rejected;
    }


    function deletedJob(id) {

  const index = jobs.findIndex(job => job.id === id);

  if (index !== -1) {
    jobs.splice(index, 1);
  }

  renderJobs(currentFilter);
}
   

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {

        currentFilter = btn.dataset.filter;

        filterButtons.forEach(b => {
          b.classList.remove("btn-primary");
          b.classList.add("btn-ghost");
        });

        btn.classList.remove("btn-ghost");
        btn.classList.add("btn-primary");

        renderJobs(currentFilter);
      });
    });

    renderJobs();