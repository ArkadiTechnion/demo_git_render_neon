document.addEventListener('DOMContentLoaded', async () => {
	const profilesContainer = document.getElementById('profiles-container');

	try {
		const response = await fetch('/api/profiles');
		if (!response.ok) {
			throw new Error(`Failed to load profiles: ${response.status}`);
		}

		const profiles = await response.json();

		profiles.forEach((profile) => {
			const fullName = `${profile.first_name} ${profile.last_name}`.trim();
			const age = new Date().getFullYear() - new Date(profile.birth_date).getFullYear();

			const card = document.createElement('article');
			card.className = 'profile-card';

			const image = document.createElement('img');
			if (profile.photo_url) {
				image.src = profile.photo_url;
			}
			image.alt = `${fullName} profile photo`;

			const name = document.createElement('h2');
			name.className = 'profile-name';
			name.textContent = fullName;

			const ageText = document.createElement('p');
			ageText.className = 'profile-age';
			ageText.textContent = `${age} years old`;

			const bio = document.createElement('p');
			bio.className = 'profile-bio';
			bio.textContent = profile.bio || '';

			const actions = document.createElement('div');
			actions.className = 'profile-actions';

			const passButton = document.createElement('button');
			passButton.type = 'button';
			passButton.className = 'btn-pass';
			passButton.textContent = '❌ Pass';
			passButton.addEventListener('click', () => card.remove());

			const likeButton = document.createElement('button');
			likeButton.type = 'button';
			likeButton.className = 'btn-like';
			likeButton.textContent = '✅ Like';
			likeButton.addEventListener('click', async () => {
				likeButton.disabled = true;
				try {
					const swipeResponse = await fetch('/api/swipe', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ swiper_id: 1, swiped_id: profile.user_id }),
					});

					if (!swipeResponse.ok) {
						throw new Error(`Failed to save swipe: ${swipeResponse.status}`);
					}

					card.remove();
				} catch (error) {
					likeButton.disabled = false;
					console.error('Failed to like profile:', error);
				}
			});

			actions.append(passButton, likeButton);
			card.append(image, name, ageText, bio, actions);
			profilesContainer.append(card);
		});
	} catch (error) {
		console.error('Failed to load profiles:', error);
	}
});
