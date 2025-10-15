// Teacher Dashboard JavaScript

function openTeacherProfile() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 600px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--cyan), var(--gold)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white;">
          <i class="fa-solid fa-chalkboard-teacher"></i>
        </div>
        <h2 style="color: var(--text); margin-bottom: 0.5rem;">Teacher Profile</h2>
        <p style="color: var(--muted);">teacher@infotechpro.com</p>
      </div>

      <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-chart-line"></i> Teaching Statistics
        </h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
          <div>
            <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold;">24</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Students</p>
          </div>
          <div>
            <p style="color: var(--gold); font-size: 1.5rem; font-weight: bold;">6</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Courses</p>
          </div>
          <div>
            <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold;">78%</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Avg. Score</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <button class="btn secondary" style="width: 100%;" onclick="alert('Settings feature coming soon!')">
          <i class="fa-solid fa-gear"></i> Settings
        </button>
        <button class="btn secondary" style="width: 100%;" onclick="if(confirm('Are you sure you want to logout?')) window.location.href='index.html'">
          <i class="fa-solid fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function viewCourseDetails(courseType) {
  const courseNames = {
    html: "HTML Fundamentals",
    css: "CSS Styling",
    javascript: "JavaScript Programming",
    php: "PHP Backend Development",
    mysql: "MySQL Database",
    security: "Cyber Security",
  }

  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 800px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-book-open"></i> ${courseNames[courseType]}
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Course details and student progress
      </p>

      <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem;">Course Statistics</h3>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; text-align: center;">
          <div>
            <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold;">20</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Enrolled</p>
          </div>
          <div>
            <p style="color: var(--gold); font-size: 1.5rem; font-weight: bold;">15</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Completed</p>
          </div>
          <div>
            <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold;">5</p>
            <p style="color: var(--muted); font-size: 0.85rem;">In Progress</p>
          </div>
          <div>
            <p style="color: var(--gold); font-size: 1.5rem; font-weight: bold;">85%</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Avg. Score</p>
          </div>
        </div>
      </div>

      <h3 style="color: var(--text); margin-bottom: 1rem;">Student Progress</h3>
      <div style="overflow-x: auto;">
        <table class="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Progress</th>
              <th>Quiz Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Dela Cruz</td>
              <td>100%</td>
              <td>95%</td>
              <td><span style="color: var(--cyan);">Completed</span></td>
            </tr>
            <tr>
              <td>Maria Santos</td>
              <td>75%</td>
              <td>88%</td>
              <td><span style="color: var(--gold);">In Progress</span></td>
            </tr>
            <tr>
              <td>Pedro Garcia</td>
              <td>100%</td>
              <td>92%</td>
              <td><span style="color: var(--cyan);">Completed</span></td>
            </tr>
            <tr>
              <td>Ana Reyes</td>
              <td>50%</td>
              <td>80%</td>
              <td><span style="color: var(--gold);">In Progress</span></td>
            </tr>
            <tr>
              <td>Jose Ramos</td>
              <td>100%</td>
              <td>98%</td>
              <td><span style="color: var(--cyan);">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function viewStudents() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 900px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-users"></i> All Students
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Complete list of enrolled students
      </p>

      <div style="overflow-x: auto;">
        <table class="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Enrolled Courses</th>
              <th>Overall Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Dela Cruz</td>
              <td>juan@student.com</td>
              <td>12</td>
              <td>85%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Maria Santos</td>
              <td>maria@student.com</td>
              <td>10</td>
              <td>72%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Pedro Garcia</td>
              <td>pedro@student.com</td>
              <td>12</td>
              <td>90%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Ana Reyes</td>
              <td>ana@student.com</td>
              <td>8</td>
              <td>65%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Jose Ramos</td>
              <td>jose@student.com</td>
              <td>11</td>
              <td>88%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Carmen Lopez</td>
              <td>carmen@student.com</td>
              <td>9</td>
              <td>78%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Miguel Torres</td>
              <td>miguel@student.com</td>
              <td>12</td>
              <td>92%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Sofia Mendoza</td>
              <td>sofia@student.com</td>
              <td>7</td>
              <td>58%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Carlos Fernandez</td>
              <td>carlos@student.com</td>
              <td>10</td>
              <td>80%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Isabella Cruz</td>
              <td>isabella@student.com</td>
              <td>11</td>
              <td>86%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Rafael Gonzales</td>
              <td>rafael@student.com</td>
              <td>9</td>
              <td>75%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Lucia Ramirez</td>
              <td>lucia@student.com</td>
              <td>12</td>
              <td>94%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Diego Martinez</td>
              <td>diego@student.com</td>
              <td>8</td>
              <td>68%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Valentina Diaz</td>
              <td>valentina@student.com</td>
              <td>10</td>
              <td>82%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Gabriel Silva</td>
              <td>gabriel@student.com</td>
              <td>11</td>
              <td>89%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Camila Morales</td>
              <td>camila@student.com</td>
              <td>9</td>
              <td>76%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Mateo Herrera</td>
              <td>mateo@student.com</td>
              <td>12</td>
              <td>91%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Emma Castillo</td>
              <td>emma@student.com</td>
              <td>7</td>
              <td>62%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Sebastian Ortiz</td>
              <td>sebastian@student.com</td>
              <td>10</td>
              <td>84%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Mia Navarro</td>
              <td>mia@student.com</td>
              <td>11</td>
              <td>87%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Lucas Vargas</td>
              <td>lucas@student.com</td>
              <td>8</td>
              <td>70%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Olivia Jimenez</td>
              <td>olivia@student.com</td>
              <td>12</td>
              <td>95%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Daniel Flores</td>
              <td>daniel@student.com</td>
              <td>9</td>
              <td>73%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
            <tr>
              <td>Ava Romero</td>
              <td>ava@student.com</td>
              <td>10</td>
              <td>81%</td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function viewAnalytics() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 1000px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-chart-bar"></i> Analytics Dashboard
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Track student performance and course completion rates
      </p>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
        <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; text-align: center;">
          <p style="color: var(--cyan); font-size: 2rem; font-weight: bold;">24</p>
          <p style="color: var(--muted); font-size: 0.85rem;">Total Students</p>
        </div>
        <div style="background: rgba(255, 204, 0, 0.1); border: 1px solid var(--gold); border-radius: 12px; padding: 1.5rem; text-align: center;">
          <p style="color: var(--gold); font-size: 2rem; font-weight: bold;">78%</p>
          <p style="color: var(--muted); font-size: 0.85rem;">Avg. Completion</p>
        </div>
        <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; text-align: center;">
          <p style="color: var(--cyan); font-size: 2rem; font-weight: bold;">85%</p>
          <p style="color: var(--muted); font-size: 0.85rem;">Avg. Quiz Score</p>
        </div>
        <div style="background: rgba(255, 204, 0, 0.1); border: 1px solid var(--gold); border-radius: 12px; padding: 1.5rem; text-align: center;">
          <p style="color: var(--gold); font-size: 2rem; font-weight: bold;">63</p>
          <p style="color: var(--muted); font-size: 0.85rem;">Certificates Issued</p>
        </div>
      </div>

      <div style="background: rgba(0, 188, 212, 0.05); border: 1px solid rgba(0, 188, 212, 0.2); border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1.5rem;">Student Progress Over Time</h3>
        <canvas id="analyticsChart" style="width: 100%; height: 300px;"></canvas>
      </div>

      <div style="background: rgba(255, 204, 0, 0.05); border: 1px solid rgba(255, 204, 0, 0.2); border-radius: 12px; padding: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1.5rem;">Course Completion Rates</h3>
        <div style="display: grid; gap: 1rem;">
          ${generateCourseCompletionBars()}
        </div>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })

  // Draw the analytics chart
  setTimeout(() => drawAnalyticsChart(), 100)
}

function generateCourseCompletionBars() {
  const courses = [
    { name: "HTML Fundamentals", completion: 67, students: 18 },
    { name: "CSS Styling", completion: 75, students: 20 },
    { name: "JavaScript Programming", completion: 45, students: 22 },
    { name: "PHP Backend Development", completion: 50, students: 16 },
    { name: "MySQL Database", completion: 58, students: 19 },
    { name: "Cyber Security", completion: 50, students: 14 },
  ]

  return courses
    .map(
      (course) => `
    <div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
        <span style="color: var(--text); font-weight: 600;">${course.name}</span>
        <span style="color: var(--muted);">${course.students} students • ${course.completion}%</span>
      </div>
      <div style="background: rgba(255, 255, 255, 0.1); border-radius: 8px; height: 12px; overflow: hidden;">
        <div style="background: linear-gradient(90deg, var(--cyan), var(--gold)); height: 100%; width: ${course.completion}%; transition: width 0.5s ease;"></div>
      </div>
    </div>
  `,
    )
    .join("")
}

function drawAnalyticsChart() {
  const canvas = document.getElementById("analyticsChart")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const width = canvas.offsetWidth
  const height = 300
  canvas.width = width
  canvas.height = height

  // Sample data: student progress over 6 months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const data = [45, 52, 58, 65, 72, 78]

  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  // Clear canvas
  ctx.clearRect(0, 0, width, height)

  // Draw grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
  ctx.lineWidth = 1
  for (let i = 0; i <= 5; i++) {
    const y = padding + (chartHeight / 5) * i
    ctx.beginPath()
    ctx.moveTo(padding, y)
    ctx.lineTo(width - padding, y)
    ctx.stroke()
  }

  // Draw line chart
  ctx.strokeStyle = "#00bcd4"
  ctx.lineWidth = 3
  ctx.beginPath()

  data.forEach((value, index) => {
    const x = padding + (chartWidth / (data.length - 1)) * index
    const y = padding + chartHeight - (value / 100) * chartHeight

    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })

  ctx.stroke()

  // Draw data points
  data.forEach((value, index) => {
    const x = padding + (chartWidth / (data.length - 1)) * index
    const y = padding + chartHeight - (value / 100) * chartHeight

    // Outer circle
    ctx.fillStyle = "#00bcd4"
    ctx.beginPath()
    ctx.arc(x, y, 6, 0, Math.PI * 2)
    ctx.fill()

    // Inner circle
    ctx.fillStyle = "#0d1117"
    ctx.beginPath()
    ctx.arc(x, y, 3, 0, Math.PI * 2)
    ctx.fill()
  })

  // Draw labels
  ctx.fillStyle = "#8b949e"
  ctx.font = "12px Inter"
  ctx.textAlign = "center"

  months.forEach((month, index) => {
    const x = padding + (chartWidth / (data.length - 1)) * index
    ctx.fillText(month, x, height - 15)
  })

  // Draw values
  ctx.textAlign = "center"
  data.forEach((value, index) => {
    const x = padding + (chartWidth / (data.length - 1)) * index
    const y = padding + chartHeight - (value / 100) * chartHeight - 15
    ctx.fillStyle = "#00bcd4"
    ctx.fillText(value + "%", x, y)
  })
}

function viewAssignments() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 900px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-file-alt"></i> Assignments
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Manage and grade student assignments
      </p>

      <button class="btn-action" style="margin-bottom: 2rem;" onclick="alert('Create new assignment feature coming soon!')">
        <i class="fa-solid fa-plus"></i> Create New Assignment
      </button>

      <div style="display: grid; gap: 1.5rem;">
        ${generateAssignmentCards()}
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function generateAssignmentCards() {
  const assignments = [
    {
      title: "HTML Portfolio Project",
      course: "HTML Fundamentals",
      dueDate: "2025-01-20",
      submitted: 15,
      total: 18,
      status: "active",
    },
    {
      title: "CSS Responsive Layout",
      course: "CSS Styling",
      dueDate: "2025-01-25",
      submitted: 12,
      total: 20,
      status: "active",
    },
    {
      title: "JavaScript Calculator",
      course: "JavaScript Programming",
      dueDate: "2025-01-30",
      submitted: 8,
      total: 22,
      status: "active",
    },
    {
      title: "PHP Login System",
      course: "PHP Backend Development",
      dueDate: "2025-01-15",
      submitted: 16,
      total: 16,
      status: "completed",
    },
  ]

  return assignments
    .map((assignment) => {
      const percentage = Math.round((assignment.submitted / assignment.total) * 100)
      const isCompleted = assignment.status === "completed"

      return `
      <div style="background: rgba(0, 188, 212, 0.05); border: 1px solid rgba(0, 188, 212, 0.2); border-radius: 12px; padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
          <div>
            <h3 style="color: var(--text); margin-bottom: 0.5rem;">${assignment.title}</h3>
            <p style="color: var(--muted); font-size: 0.9rem;">
              <i class="fa-solid fa-book"></i> ${assignment.course}
            </p>
          </div>
          <span style="background: ${isCompleted ? "rgba(0, 188, 212, 0.2)" : "rgba(255, 204, 0, 0.2)"}; color: ${isCompleted ? "var(--cyan)" : "var(--gold)"}; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
            ${isCompleted ? "Completed" : "Active"}
          </span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
          <div>
            <p style="color: var(--muted); font-size: 0.85rem;">Due Date</p>
            <p style="color: var(--text); font-weight: 600;">${new Date(assignment.dueDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p style="color: var(--muted); font-size: 0.85rem;">Submissions</p>
            <p style="color: var(--cyan); font-weight: 600;">${assignment.submitted}/${assignment.total}</p>
          </div>
          <div>
            <p style="color: var(--muted); font-size: 0.85rem;">Completion</p>
            <p style="color: var(--gold); font-weight: 600;">${percentage}%</p>
          </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); border-radius: 8px; height: 8px; overflow: hidden; margin-bottom: 1rem;">
          <div style="background: linear-gradient(90deg, var(--cyan), var(--gold)); height: 100%; width: ${percentage}%; transition: width 0.5s ease;"></div>
        </div>

        <div style="display: flex; gap: 1rem;">
          <button class="btn secondary" style="flex: 1;" onclick="alert('View submissions feature coming soon!')">
            <i class="fa-solid fa-eye"></i> View Submissions
          </button>
          <button class="btn secondary" style="flex: 1;" onclick="alert('Grade assignments feature coming soon!')">
            <i class="fa-solid fa-check"></i> Grade
          </button>
        </div>
      </div>
    `
    })
    .join("")
}

function viewCertificates() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 900px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-certificate"></i> Certificate Management
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Issue and manage student certificates
      </p>

      <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem;">Certificate Statistics</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
          <div>
            <p style="color: var(--cyan); font-size: 2rem; font-weight: bold;">63</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Total Issued</p>
          </div>
          <div>
            <p style="color: var(--gold); font-size: 2rem; font-weight: bold;">12</p>
            <p style="color: var(--muted); font-size: 0.85rem;">This Month</p>
          </div>
          <div>
            <p style="color: var(--cyan); font-size: 2rem; font-weight: bold;">8</p>
            <p style="color: var(--muted); font-size: 0.85rem;">Pending</p>
          </div>
        </div>
      </div>

      <h3 style="color: var(--text); margin-bottom: 1rem;">Recent Certificates</h3>
      <div style="overflow-x: auto;">
        <table class="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Completion Date</th>
              <th>Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Dela Cruz</td>
              <td>HTML Fundamentals</td>
              <td>Jan 10, 2025</td>
              <td>95%</td>
              <td><span style="color: var(--cyan);">Issued</span></td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="alert('Download certificate')">Download</button></td>
            </tr>
            <tr>
              <td>Pedro Garcia</td>
              <td>CSS Styling</td>
              <td>Jan 12, 2025</td>
              <td>92%</td>
              <td><span style="color: var(--cyan);">Issued</span></td>
              <td><button class="btn secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="alert('Download certificate')">Download</button></td>
            </tr>
            <tr>
              <td>Jose Ramos</td>
              <td>JavaScript Programming</td>
              <td>Jan 14, 2025</td>
              <td>98%</td>
              <td><span style="color: var(--gold);">Pending</span></td>
              <td><button class="btn-action" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="alert('Issue certificate')">Issue</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}
