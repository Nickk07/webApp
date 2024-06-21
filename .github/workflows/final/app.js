document.addEventListener('DOMContentLoaded', () => {
    // Create account
    document.getElementById('createAccountForm').addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('createUsername').value;
        const password = document.getElementById('createPassword').value;

        fetch('/create-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Get account
    document.getElementById('getAccountForm').addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('getUsername').value;

        fetch(`/get-account?username=${username}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                alert(`Username: ${data[0].username}\nPassword: ${data[0].password}`);
            } else {
                alert('Account not found');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Update account
    document.getElementById('updateAccountForm').addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('updateUsername').value;
        const password = document.getElementById('updatePassword').value;

        fetch('/update-account', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Delete account
    document.getElementById('deleteAccountForm').addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('deleteUsername').value;

        fetch('/delete-account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Create album
    document.getElementById('createAlbumForm').addEventListener('submit', event => {
        event.preventDefault();
        const albumName = document.getElementById('albumName').value;
        const albumDescription = document.getElementById('albumDescription').value;

        fetch('/create-album', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ albumName, albumDescription })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Get album
    document.getElementById('getAlbumForm').addEventListener('submit', event => {
        event.preventDefault();
        const albumId = document.getElementById('albumId').value;

        fetch(`/get-album?albumId=${albumId}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                alert(`Album Name: ${data[0].albumName}\nDescription: ${data[0].albumDescription}`);
            } else {
                alert('Album not found');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Update album
    document.getElementById('updateAlbumForm').addEventListener('submit', event => {
        event.preventDefault();
        const albumId = document.getElementById('updateAlbumId').value;
        const albumName = document.getElementById('updateAlbumName').value;
        const albumDescription = document.getElementById('updateAlbumDescription').value;

        fetch('/update-album', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ albumId, albumName, albumDescription })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Delete album
    document.getElementById('deleteAlbumForm').addEventListener('submit', event => {
        event.preventDefault();
        const albumId = document.getElementById('deleteAlbumId').value;

        fetch('/delete-album', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ albumId })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Create announcement
    document.getElementById('createAnnouncementForm').addEventListener('submit', event => {
        event.preventDefault();
        const title = document.getElementById('announcementTitle').value;
        const content = document.getElementById('announcementContent').value;

        fetch('/create-announcement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Get announcement
    document.getElementById('getAnnouncementForm').addEventListener('submit', event => {
        event.preventDefault();
        const announcementId = document.getElementById('announcementId').value;

        fetch(`/get-announcement?announcementId=${announcementId}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                alert(`Title: ${data[0].title}\nContent: ${data[0].content}`);
            } else {
                alert('Announcement not found');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Update announcement
    document.getElementById('updateAnnouncementForm').addEventListener('submit', event => {
        event.preventDefault();
        const announcementId = document.getElementById('updateAnnouncementId').value;
        const title = document.getElementById('updateAnnouncementTitle').value;
        const content = document.getElementById('updateAnnouncementContent').value;

        fetch('/update-announcement', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ announcementId, title, content })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });

    // Delete announcement
    document.getElementById('deleteAnnouncementForm').addEventListener('submit', event => {
        event.preventDefault();
        const announcementId = document.getElementById('deleteAnnouncementId').value;

        fetch('/delete-announcement', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ announcementId })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });
});
