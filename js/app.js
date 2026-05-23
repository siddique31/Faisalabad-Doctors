// js/app.js

// Load doctors for homepage
async function loadDoctorsPreview() {
    const doctorsList = document.getElementById('doctorsList');
    if (!doctorsList) return;
    
    try {
        const snapshot = await db.collection('doctors')
            .where('isApproved', '==', true)
            .limit(4)
            .get();
        
        if (snapshot.empty) {
            doctorsList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">🔜 Doctors list coming soon!</p>';
            return;
        }
        
        doctorsList.innerHTML = '';
        snapshot.forEach(doc => {
            const doctor = doc.data();
            doctorsList.innerHTML += `
                <div class="doctor-card">
                    <img src="${doctor.photoURL || 'https://via.placeholder.com/150'}" alt="${doctor.name}" class="doctor-photo">
                    <h4>${doctor.name}</h4>
                    <p class="specialty">${doctor.specialty}</p>
                    <p class="fee">Fee: Rs. ${doctor.fee}</p>
                    <a href="patient-login.html" class="btn btn-primary btn-sm">Book Appointment</a>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadDoctorsPreview);
