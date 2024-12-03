document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('tbody');
    
    tbody.addEventListener('click', (e) => {
      if (e.target.classList.contains('yes-btn') || e.target.classList.contains('no-btn')) {
        const row = e.target.closest('tr');
        const name = row.querySelector('td:nth-child(2)').textContent;
        const action = e.target.classList.contains('yes-btn') ? 'endorsed' : 'rejected';
        
        // Show confirmation dialog
        if (confirm(`Are you sure you want to ${action === 'endorsed' ? 'endorse' : 'reject'} ${name}'s appraisal?`)) {
          // Add fade-out animation
          row.classList.add('fade-out');
          
          // Remove row after animation
          row.addEventListener('animationend', () => {
            row.remove();
            // Show toast notification
            showNotification(`Successfully ${action} ${name}'s appraisal`);
          });
        }
      }
    });
  });
  
  // Notification helper
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 1rem;
      border-radius: 4px;
      animation: slideIn 0.3s, fadeOut 0.3s 2.7s;
      z-index: 1000;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
  }