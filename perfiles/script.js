document.addEventListener('DOMContentLoaded', function() {
    const addProfileBtn = document.querySelector('.add-profile-btn');
    const addProfileForm = document.querySelector('.add-profile-form');
    const profileContainer = document.querySelector('.profile-container');
    const confirmationDialog = document.querySelector('.confirmation-dialog');

    addProfileBtn.addEventListener('click', function() {
        addProfileForm.classList.toggle('hidden');
    });

    const profileForm = document.getElementById('profile-form');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const photo = document.getElementById('photo').files[0];

        if (name.trim() === '' || !photo) {
            alert('Por favor, ingresa un nombre y selecciona una foto de perfil.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');
            profileDiv.style.backgroundImage = `url(${e.target.result})`;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-profile');
            deleteBtn.innerText = 'X';
            deleteBtn.addEventListener('click', function() {
                confirmationDialog.classList.remove('hidden');
                deleteBtn.parentNode.classList.add('confirming-delete');
            });

            profileDiv.appendChild(deleteBtn);
            profileContainer.appendChild(profileDiv);

            const profileName = document.createElement('span');
            profileName.classList.add('profile-name');
            profileName.innerText = name;
            profileDiv.appendChild(profileName);
        };
        reader.readAsDataURL(photo);

        addProfileForm.classList.add('hidden');
        profileForm.reset();
    });

    const confirmYesBtn = document.querySelector('.confirm-yes');
    const confirmNoBtn = document.querySelector('.confirm-no');

    confirmYesBtn.addEventListener('click', function() {
        const profileToDelete = document.querySelector('.confirming-delete');
        profileToDelete.parentNode.removeChild(profileToDelete);
        confirmationDialog.classList.add('hidden');
    });

    confirmNoBtn.addEventListener('click', function() {
        const profileToDelete = document.querySelector('.confirming-delete');
        profileToDelete.classList.remove('confirming-delete');
        confirmationDialog.classList.add('hidden');
    });
});
