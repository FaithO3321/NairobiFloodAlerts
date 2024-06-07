// Page controls
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const reloadBtn = document.getElementById('reloadBtn');

backBtn.addEventListener('click', () => {
    window.history.back();
});

reloadBtn.addEventListener('click', () => {
    window.location.reload();
});

forwardBtn.addEventListener('click', () => {
    window.history.forward();
});

// Comment section
const commentForm = document.getElementById('commentForm');
const commentText = document.getElementById('commentText');
const comments = document.getElementById('comments');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = commentText.value.trim();
    if (comment) {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        comments.appendChild(commentElement);
        commentText.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
});




