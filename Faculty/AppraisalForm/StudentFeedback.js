let entries = [];

// DOM Elements
const modal = document.getElementById('modal');
const facultyForm = document.getElementById('facultyForm');
const entriesTableBody = document.getElementById('entriesTableBody');
const scoreObtained = document.getElementById('scoreObtained');

// Initialize table
function renderTable() {
  entriesTableBody.innerHTML = entries
    .map((entry, index) => {
      const percentage = entry.studentFeedback;

      let points = 0;

      if (percentage >= 96) points = 10;
      else if (percentage >= 90) points = 9;
      else if (percentage >= 80) points = 8;
      else if (percentage >= 70) points = 7;
      else if (percentage >= 60) points = 6;
      else if (percentage >= 50) points = 5;
      else if (percentage >= 40) points = 4;
      else if (percentage >= 30) points = 3;
      else if (percentage >= 20) points = 2;
      else if (percentage >= 10) points = 1;

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${entry.semester}</td>
          <td>${entry.subjectCode}</td>
          <td>${entry.subjectName}</td>
          <td>${entry.studentFeedback}</td>
          <td><button class="view-btn" onclick="viewDocument('${entry.id}')">View</button></td>
          <td>${points}</td>
          <td><button class="remove-btn" onclick="removeEntry('${entry.id}')">Remove</button></td>
        </tr>
      `;
    })
    .join('');

  // Calculate final score
  calculateFinalScore();
}

// Modal functions
function openModal() {
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  resetForm();
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Form handling
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const newEntry = {
    id: Date.now().toString(), // Use a unique identifier for the entry
    semester: formData.get('semester'),
    subjectCode: formData.get('subjectCode'),
    subjectName: formData.get('subjectName'),
    studentFeedback: parseInt(formData.get('studentFeedback'), 10) || 0, // Ensure a valid number
  };

  entries.push(newEntry);
  renderTable();
  closeModal();
}

function resetForm() {
  facultyForm.reset();
}

function removeEntry(id) {
  if (confirm('Are you sure you want to remove this entry?')) {
    entries = entries.filter((entry) => entry.id !== id); // Filter out the entry by ID
    renderTable();
  }
}

function viewDocument(id) {
  alert(`Document viewer will be implemented here for ID: ${id}`);
}

// Calculate final score
function calculateFinalScore() {
  let totalPoints = 0;

  entries.forEach((entry) => {
    const percentage = entry.studentFeedback;

    let points = 0;

    if (percentage >= 96) points = 10;
    else if (percentage >= 90) points = 9;
    else if (percentage >= 80) points = 8;
    else if (percentage >= 70) points = 7;
    else if (percentage >= 60) points = 6;
    else if (percentage >= 50) points = 5;
    else if (percentage >= 40) points = 4;
    else if (percentage >= 30) points = 3;
    else if (percentage >= 20) points = 2;
    else if (percentage >= 10) points = 1;

    totalPoints += points;
  });

  const finalScore = entries.length > 0 ? (totalPoints / (entries.length * 10)) * 20 : 0;
  scoreObtained.value = finalScore.toFixed(2);
}

// Initialize the table on page load
renderTable();
