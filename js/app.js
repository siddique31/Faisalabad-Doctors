// ==========================================
//  js/app.js - Gojra Doctors
//  Homepage Doctors Loading + Ratings
// ==========================================

// Load approved doctors for homepage preview
async function loadDoctorsPreview() {
    const doctorsList = document.getElementById('doctorsList');
    if (!doctorsList) return;
    
    try {
        // Get approved doctors from Firestore
        const snapshot = await db.collection('doctors')
            .where('isApproved', '==', true)
            .orderBy('avgRating', 'desc')
            .limit(4)
            .get();
        
        // Update doctor count on homepage
        const totalDoctors = await db.collection('doctors')
            .where('isApproved', '==', true)
            .get();
        const countElement = document.getElementById('doctorCount');
        if (countElement) {
            countElement.textContent = totalDoctors.size + '+';
        }
        
        if (snapshot.empty) {
            doctorsList.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">🔜 Doctors list coming soon!<br><small>Our team is verifying doctors in your area.</small></p>';
            return;
        }
        
        // Clear loading message
        doctorsList.innerHTML = '';
        
        // Display each doctor
        snapshot.forEach(doc => {
            const doctor = doc.data();
            const avgRating = doctor.avgRating || 0;
            const totalReviews = doctor.totalReviews || 0;
            const stars = generateStars(avgRating);
            const experience = doctor.experience || 'N/A';
            
            // Create doctor card
            const cardHTML = `
                <div class="doctor-card">
                    <div class="doctor-card-image">
                        <img src="${doctor.photoURL || 'https://via.placeholder.com/150'}" 
                             alt="Dr. ${doctor.name}" 
                             class="doctor-photo"
                             onerror="this.src='https://via.placeholder.com/150?text=Doctor'">
                    </div>
                    <div class="doctor-card-body">
                        <h4 class="doctor-name">Dr. ${doctor.name}</h4>
                        <p class="doctor-specialty">${doctor.specialty}</p>
                        <p class="doctor-qualification">${doctor.qualification || ''}</p>
                        
                        <!-- Star Rating -->
                        <div class="rating-display">
                            <span class="stars" title="${avgRating.toFixed(1)} out of 5">${stars}</span>
                            <span class="rating-text">${avgRating.toFixed(1)} (${totalReviews} reviews)</span>
                        </div>
                        
                        <p class="doctor-fee">Fee: Rs. ${doctor.fee}</p>
                        <p class="doctor-experience">Experience: ${experience} years</p>
                        
                        <a href="patient-login.html" class="btn btn-primary btn-sm">Book Appointment</a>
                    </div>
                </div>
            `;
            
            doctorsList.innerHTML += cardHTML;
        });
        
    } catch (error) {
        console.error('Error loading doctors:', error);
        doctorsList.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: red;">Error loading doctors. Please try again later.</p>';
    }
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '⭐';
        } else if (i - 0.5 <= rating) {
            stars += '🌟';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// Toggle mobile navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Load doctors when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDoctorsPreview();
});

// Reload doctors every 5 minutes (in case of updates)
setInterval(loadDoctorsPreview, 300000);
