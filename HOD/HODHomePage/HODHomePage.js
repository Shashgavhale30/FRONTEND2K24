document.addEventListener('DOMContentLoaded', () => {
    // Notifications System
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationsPanel = document.getElementById('notifications');
    const closeNotifications = document.getElementById('closeNotifications');
    
    // Sample notifications data
    const notifications = [
        {
            id: 1,
            title: 'Appraisal Deadline',
            message: 'Your annual appraisal form is due in 15 days.',
            date: '2024-03-15',
            unread: true
        },
        {
            id: 2,
            title: 'New Guidelines',
            message: 'Review updated guidelines for academic year 2024-25.',
            date: '2024-03-14',
            unread: true
        },
        {
            id: 3,
            title: 'Meeting Reminder',
            message: 'Faculty meeting scheduled for tomorrow at 10 AM.',
            date: '2024-03-13',
            unread: false
        }
    ];

    // News data
    const newsItems = [
        {
            id: 1,
            title: 'New Appraisal Guidelines Released',
            content: 'Updated guidelines for the academic year 2024-25 are now available.',
            date: '2024-03-15',
            isNew: true
        },
        {
            id: 2,
            title: 'Faculty Development Program',
            content: 'Register for upcoming FDP starting next month.',
            date: '2024-03-14',
            isNew: true
        }
    ];

    // Initialize news section
    function initializeNews() {
        const newsContainer = document.getElementById('newsContainer');
        newsItems.forEach(item => {
            const newsElement = document.
