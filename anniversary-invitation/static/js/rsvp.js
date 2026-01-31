// RSVP form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvpForm');
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonIcon = submitButton.querySelector('.button-icon');
    const buttonLoader = submitButton.querySelector('.button-loader');
    const formError = document.getElementById('formError');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Hide any previous errors
        formError.style.display = 'none';
        
        // Get form data
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();
        const attendingRadio = document.querySelector('input[name="attending"]:checked');
        
        // Validate
        if (!name) {
            showError('Please enter your name');
            return;
        }
        
        if (!attendingRadio) {
            showError('Please select if you will be attending');
            return;
        }
        
        const attending = attendingRadio.value === 'yes';
        
        // Show loading state
        setLoading(true);
        
        try {
            // Submit to API
            const response = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    attending: attending
                })
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                // Success - redirect to thank you page
                window.location.href = '/thank-you';
            } else {
                // Show error
                showError(data.error || 'Something went wrong. Please try again.');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            showError('Unable to submit. Please check your connection and try again.');
            setLoading(false);
        }
    });
    
    function setLoading(isLoading) {
        if (isLoading) {
            submitButton.disabled = true;
            buttonText.style.display = 'none';
            buttonIcon.style.display = 'none';
            buttonLoader.style.display = 'block';
        } else {
            submitButton.disabled = false;
            buttonText.style.display = 'inline';
            buttonIcon.style.display = 'inline';
            buttonLoader.style.display = 'none';
        }
    }
    
    function showError(message) {
        formError.textContent = message;
        formError.style.display = 'block';
        formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Clear error when user starts typing
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            formError.style.display = 'none';
        });
    });
});
