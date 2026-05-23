/* ==========================================
   style.css - Gojra Doctors Online Clinic
   Complete Stylesheet
   ========================================== */

/* ========== CSS Variables ========== */
:root {
    --primary: #0d9488;
    --primary-dark: #0f766e;
    --primary-light: #ccfbf1;
    --primary-lighter: #f0fdfa;
    --secondary: #f59e0b;
    --secondary-light: #fef3c7;
    --danger: #ef4444;
    --danger-light: #fee2e2;
    --success: #10b981;
    --success-light: #d1fae5;
    --info: #3b82f6;
    --info-light: #dbeafe;
    --warning: #f59e0b;
    --warning-light: #fef3c7;
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --shadow: 0 2px 10px rgba(0,0,0,0.08);
    --shadow-md: 0 5px 20px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 40px rgba(0,0,0,0.15);
    --radius-sm: 8px;
    --radius: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
}

/* ========== Reset & Base ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.7;
    color: var(--gray-700);
    background: var(--gray-50);
    -webkit-font-smoothing: antialiased;
}

/* ========== Header & Navigation ========== */
.header {
    background: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.navbar {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}

.logo-icon {
    font-size: 32px;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.logo-text {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: var(--gray-600);
    font-weight: 500;
    transition: color 0.3s;
    font-size: 15px;
}

.nav-links a:hover {
    color: var(--primary);
}

.hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
    color: var(--gray-700);
}

/* ========== Buttons ========== */
.btn {
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    cursor: pointer;
    border: none;
    font-size: 14px;
    font-family: inherit;
    text-align: center;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn:active {
    transform: translateY(0);
}

.btn-primary {
    background: var(--primary);
    color: var(--white);
}

.btn-primary:hover {
    background: var(--primary-dark);
}

.btn-outline {
    border: 2px solid var(--primary);
    color: var(--primary);
    background: transparent;
}

.btn-outline:hover {
    background: var(--primary);
    color: var(--white);
}

.btn-lg {
    padding: 14px 28px;
    font-size: 16px;
    border-radius: var(--radius);
}

.btn-full {
    width: 100%;
    display: block;
}

.btn-sm {
    padding: 8px 16px;
    font-size: 13px;
}

.btn-white {
    background: var(--white);
    color: var(--primary);
}

.btn-white:hover {
    background: var(--gray-100);
}

.btn-outline-white {
    border: 2px solid var(--white);
    color: var(--white);
    background: transparent;
}

.btn-outline-white:hover {
    background: var(--white);
    color: var(--primary);
}

.btn-success {
    background: var(--success);
    color: var(--white);
}

.btn-success:hover {
    background: #059669;
}

.btn-danger {
    background: var(--danger);
    color: var(--white);
}

.btn-danger:hover {
    background: #dc2626;
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}

/* ========== Hero Section ========== */
.hero {
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.hero-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--gray-900);
}

.highlight {
    color: var(--primary);
    position: relative;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 8px;
    background: var(--primary-light);
    z-index: -1;
    border-radius: 4px;
}

.hero-subtitle {
    font-size: 18px;
    color: var(--gray-500);
    margin-bottom: 30px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
}

.btn-secondary {
    background: var(--gray-100);
    color: var(--gray-700);
    border: 1px solid var(--gray-200);
}

.btn-secondary:hover {
    background: var(--gray-200);
}

.hero-stats {
    display: flex;
    gap: 40px;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 32px;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    font-size: 14px;
    color: var(--gray-500);
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
}

/* ========== Section Titles ========== */
.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--gray-900);
}

.section-subtitle {
    text-align: center;
    color: var(--gray-500);
    margin-bottom: 50px;
    font-size: 18px;
}

/* ========== Features ========== */
.features {
    background: var(--white);
    padding: 80px 20px;
}

.features-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.feature-card {
    background: var(--white);
    padding: 35px 25px;
    border-radius: var(--radius-lg);
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid var(--gray-100);
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
    display: block;
}

.feature-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--gray-800);
}

.feature-card p {
    color: var(--gray-500);
    font-size: 14px;
    line-height: 1.8;
}

/* ========== How It Works ========== */
.how-it-works {
    padding: 80px 20px;
    background: var(--gray-50);
}

.steps-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.step {
    background: var(--white);
    padding: 35px 25px;
    border-radius: var(--radius-lg);
    text-align: center;
    flex: 1;
    box-shadow: var(--shadow-sm);
    position: relative;
    transition: all 0.3s ease;
}

.step:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

.step-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: var(--primary);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
    box-shadow: var(--shadow);
}

.step-icon {
    font-size: 40px;
    margin: 15px 0;
    display: block;
}

.step h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: var(--gray-800);
}

.step p {
    color: var(--gray-500);
    font-size: 14px;
    line-height: 1.6;
}

.step-arrow {
    font-size: 30px;
    color: var(--primary);
    font-weight: 700;
}

/* ========== Doctors Preview ========== */
.doctors-preview {
    padding: 80px 20px;
    background: var(--white);
}

.doctors-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.doctor-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    border: 1px solid var(--gray-100);
    text-align: center;
}

.doctor-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
}

.doctor-card-image {
    padding: 25px 25px 0;
}

.doctor-photo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary-light);
    background: var(--gray-100);
}

.doctor-card-body {
    padding: 20px 25px 25px;
}

.doctor-name {
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-800);
    margin-bottom: 5px;
}

.doctor-specialty {
    color: var(--primary);
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.doctor-qualification {
    color: var(--gray-500);
    font-size: 13px;
    margin-bottom: 10px;
}

.doctor-fee {
    font-weight: 700;
    font-size: 18px;
    color: var(--gray-800);
    margin: 5px 0;
}

.doctor-experience {
    color: var(--gray-500);
    font-size: 12px;
    margin-bottom: 15px;
}

/* ========== Rating Styles ========== */
.rating-display {
    margin: 8px 0;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
}

.rating-display .stars {
    font-size: 16px;
    letter-spacing: 2px;
}

.rating-display .rating-text {
    color: var(--gray-500);
    font-size: 12px;
}

/* Star Rating Input */
#starRating span {
    transition: transform 0.2s;
    display: inline-block;
    cursor: pointer;
    font-size: 30px;
}

#starRating span:hover {
    transform: scale(1.3);
}

/* Review Items */
.review-item {
    background: var(--gray-50);
    padding: 15px;
    border-radius: var(--radius);
    margin-bottom: 10px;
    border-left: 3px solid var(--primary);
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.review-author {
    font-weight: 600;
    color: var(--gray-800);
}

.review-date {
    font-size: 12px;
    color: var(--gray-400);
}

.review-stars {
    margin-bottom: 5px;
    letter-spacing: 2px;
}

.review-text {
    color: var(--gray-600);
    font-size: 14px;
    line-height: 1.5;
}

/* ========== CTA Section ========== */
.cta {
    background: linear-gradient(135deg, var(--primary), #0d6b63);
    padding: 80px 20px;
    text-align: center;
    color: var(--white);
}

.cta-content {
    max-width: 700px;
    margin: 0 auto;
}

.cta-content h2 {
    font-size: 36px;
    margin-bottom: 15px;
}

.cta-content p {
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.95;
    line-height: 1.8;
}

.cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* ========== Footer ========== */
.footer {
    background: var(--gray-900);
    color: var(--white);
    padding: 60px 20px 20px;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
}

.footer-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
}

.footer-section p {
    color: var(--gray-400);
    font-size: 14px;
    line-height: 1.8;
}

.footer-section a {
    color: var(--gray-400);
    font-size: 14px;
    line-height: 2.2;
    display: block;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: var(--white);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid var(--gray-700);
    color: var(--gray-400);
    font-size: 14px;
}

/* ========== Auth Pages ========== */
.auth-page {
    background: linear-gradient(135deg, var(--primary-lighter) 0%, #f0fdfa 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.auth-container {
    width: 100%;
    max-width: 480px;
    padding: 20px;
}

.auth-card {
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: 40px 30px;
    box-shadow: var(--shadow-lg);
    position: relative;
}

.auth-header {
    text-align: center;
    margin-bottom: 30px;
}

.auth-logo {
    font-size: 50px;
    margin-bottom: 15px;
}

.auth-header h2 {
    font-size: 24px;
    margin-bottom: 5px;
    color: var(--gray-800);
}

.auth-header p {
    color: var(--gray-500);
}

.back-btn {
    position: absolute;
    left: 20px;
    top: 20px;
    text-decoration: none;
    color: var(--gray-500);
    font-size: 14px;
    transition: color 0.3s;
}

.back-btn:hover {
    color: var(--primary);
}

.auth-form {
    margin-top: 20px;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--gray-700);
    font-size: 14px;
}

.input-group input,
.input-group select,
.input-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 15px;
    transition: all 0.3s;
    font-family: inherit;
    background: var(--white);
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-light);
}

.input-group textarea {
    resize: vertical;
    min-height: 80px;
}

.input-group small {
    display: block;
    margin-top: 5px;
}

.phone-input {
    display: flex;
    align-items: center;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-sm);
    overflow: hidden;
    transition: all 0.3s;
}

.phone-input:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-light);
}

.country-code {
    background: var(--gray-100);
    padding: 12px 15px;
    font-weight: 600;
    color: var(--gray-700);
    font-size: 15px;
}

.phone-input input {
    border: none !important;
    flex: 1;
    box-shadow: none !important;
}

.phone-input input:focus {
    box-shadow: none !important;
}

.otp-input {
    text-align: center;
    font-size: 24px !important;
    letter-spacing: 10px;
}

.auth-note {
    text-align: center;
    margin-top: 15px;
    font-size: 12px;
    color: var(--gray-400);
}

.otp-sent-to {
    text-align: center;
    margin-bottom: 15px;
    padding: 10px;
    background: var(--primary-light);
    border-radius: var(--radius-sm);
    font-size: 14px;
}

/* ========== Message Box ========== */
.message-box {
    padding: 15px;
    border-radius: var(--radius-sm);
    margin-top: 15px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    animation: slideDown 0.3s ease;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.message-box.success {
    background: var(--success-light);
    color: #065f46;
    border: 1px solid #6ee7b7;
}

.message-box.error {
    background: var(--danger-light);
    color: #991b1b;
    border: 1px solid #fca5a5;
}

.message-box.info {
    background: var(--info-light);
    color: #1e40af;
    border: 1px solid #93c5fd;
}

.message-box.warning {
    background: var(--warning-light);
    color: #92400e;
    border: 1px solid #fcd34d;
}

/* ========== Dashboard ========== */
.dashboard {
    display: flex;
    min-height: calc(100vh - 70px);
}

.dashboard-sidebar {
    width: 250px;
    background: var(--white);
    padding: 20px;
    border-right: 1px solid var(--gray-200);
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    overflow-y: auto;
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.sidebar-link {
    display: block;
    padding: 12px 15px;
    text-decoration: none;
    color: var(--gray-600);
    border-radius: var(--radius-sm);
    transition: all 0.3s;
    font-size: 14px;
}

.sidebar-link:hover {
    background: var(--primary-light);
    color: var(--primary);
}

.sidebar-link.active {
    background: var(--primary);
    color: var(--white);
    font-weight: 600;
}

.dashboard-content {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
}

.dashboard-section h2 {
    margin-bottom: 25px;
    color: var(--gray-800);
}

/* ========== Filter Bar ========== */
.filter-bar {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.filter-bar select,
.filter-bar input {
    padding: 10px 15px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 14px;
    font-family: inherit;
    background: var(--white);
}

.filter-bar input {
    flex: 1;
    min-width: 200px;
}

.filter-bar select:focus,
.filter-bar input:focus {
    outline: none;
    border-color: var(--primary);
}

/* ========== Appointment Cards ========== */
.appointment-card {
    background: var(--white);
    padding: 20px;
    border-radius: var(--radius);
    margin-bottom: 15px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-100);
}

.appointment-card h4 {
    margin-bottom: 10px;
    color: var(--gray-800);
}

.appointment-card p {
    margin-bottom: 5px;
    color: var(--gray-500);
    font-size: 14px;
}

.status {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-pending {
    background: var(--warning-light);
    color: #92400e;
}

.status-confirmed {
    background: var(--success-light);
    color: #065f46;
}

.status-completed {
    background: var(--info-light);
    color: #1e40af;
}

.status-cancelled {
    background: var(--danger-light);
    color: #991b1b;
}

/* ========== Tabs ========== */
.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.tab {
    padding: 10px 20px;
    border: 2px solid var(--gray-200);
    background: var(--white);
    border-radius: var(--radius-sm);
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: all 0.3s;
}

.tab:hover {
    border-color: var(--primary);
}

.tab.active {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
}

/* ========== Schedule Form ========== */
.schedule-form {
    display: flex;
    gap: 15px;
    align-items: end;
    flex-wrap: wrap;
    background: var(--white);
    padding: 25px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
}

.schedule-form .input-group {
    margin-bottom: 0;
    min-width: 150px;
}

/* ========== Earnings Card ========== */
.earnings-card {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    padding: 40px;
    border-radius: var(--radius-lg);
    text-align: center;
}

.earnings-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.earnings-amount {
    font-size: 52px;
    font-weight: 700;
    margin-top: 15px;
    letter-spacing: -1px;
}

/* ========== Fee Display ========== */
.fee-display {
    background: var(--gray-50);
    padding: 20px;
    border-radius: var(--radius);
    margin-bottom: 20px;
    border: 1px solid var(--gray-200);
}

.fee-display p {
    margin-bottom: 10px;
    font-size: 15px;
}

.fee-display hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid var(--gray-200);
}

.fee-display strong {
    color: var(--primary);
    font-size: 18px;
}

/* ========== Profile Card ========== */
.profile-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 30px;
    box-shadow: var(--shadow-sm);
    max-width: 650px;
    border: 1px solid var(--gray-100);
}

.profile-card h3 {
    margin-bottom: 20px;
    color: var(--primary);
}

.profile-info p {
    margin-bottom: 12px;
    padding: 12px 15px;
    background: var(--gray-50);
    border-radius: var(--radius-sm);
    font-size: 14px;
}

.profile-info strong {
    display: inline-block;
    width: 110px;
    color: var(--gray-700);
}

.profile-photo-large {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary);
    margin-bottom: 20px;
}

/* ========== Data Table ========== */
.data-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
}

.data-table th {
    background: var(--primary);
    color: var(--white);
    padding: 14px 15px;
    text-align: left;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.data-table td {
    padding: 12px 15px;
    border-bottom: 1px solid var(--gray-100);
    font-size: 14px;
}

.data-table tr:hover {
    background: var(--primary-lighter);
}

.data-table tr:last-child td {
    border-bottom: none;
}

/* ========== Badges ========== */
.badge {
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-approved {
    background: var(--success-light);
    color: #065f46;
}

.badge-pending {
    background: var(--warning-light);
    color: #92400e;
}

.badge-admin {
    background: var(--info-light);
    color: #1e40af;
}

/* ========== Video Call ========== */
.video-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
}

.video-box {
    background: #1a1a2e;
    border-radius: var(--radius-lg);
    padding: 40px;
    margin-bottom: 20px;
    color: var(--white);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.video-placeholder {
    font-size: 80px;
    margin-bottom: 20px;
}

.call-controls {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.call-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s;
}

.call-btn:hover {
    transform: scale(1.1);
}

.call-end {
    background: var(--danger);
    color: var(--white);
}

.call-mute {
    background: var(--secondary);
    color: var(--white);
}

.call-video {
    background: var(--info);
    color: var(--white);
}

/* ========== Profile Photo Styling ========== */
#profilePhotoLarge {
    transition: all 0.3s ease;
}

#profilePhotoLarge:hover {
    transform: scale(1.05);
}

#editPhotoPreviewImg {
    transition: all 0.3s ease;
    cursor: pointer;
}

#editPhotoPreviewImg:hover {
    opacity: 0.8;
}

.edit-form hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid var(--gray-200);
}

/* ========== Empty State ========== */
.empty-state {
    text-align: center;
    padding: 50px 20px;
    background: var(--white);
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.empty-state .icon {
    font-size: 60px;
    margin-bottom: 15px;
}

.empty-state h3 {
    color: var(--gray-700);
    margin-bottom: 10px;
}

.empty-state p {
    color: var(--gray-500);
}

/* ========== Utility ========== */
.text-center {
    text-align: center;
}

.mt-1 { margin-top: 10px; }
.mt-2 { margin-top: 20px; }
.mt-3 { margin-top: 30px; }
.mb-1 { margin-bottom: 10px; }
.mb-2 { margin-bottom: 20px; }
.mb-3 { margin-bottom: 30px; }

.hidden {
    display: none !important;
}

/* ========== Responsive Design ========== */
@media (max-width: 1024px) {
    .doctors-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        margin: 30px auto;
    }
    
    .hero-title {
        font-size: 32px;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-stats {
        justify-content: center;
        gap: 20px;
    }
    
    .hero-image {
        order: -1;
    }
    
    .hero-img {
        max-width: 280px;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .steps-container {
        flex-direction: column;
    }
    
    .step-arrow {
        transform: rotate(90deg);
    }
    
    .doctors-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .nav-links {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--white);
        flex-direction: column;
        padding: 20px;
        box-shadow: var(--shadow-lg);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .hamburger {
        display: block;
    }
    
    .dashboard {
        flex-direction: column;
    }
    
    .dashboard-sidebar {
        width: 100%;
        height: auto;
        position: static;
        border-right: none;
        border-bottom: 1px solid var(--gray-200);
        padding: 15px;
    }
    
    .sidebar-menu {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
    }
    
    .sidebar-link {
        font-size: 12px;
        padding: 8px 12px;
    }
    
    .dashboard-content {
        padding: 20px;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .schedule-form {
        flex-direction: column;
    }
    
    .filter-bar {
        flex-direction: column;
    }
    
    .auth-container {
        padding: 10px;
    }
    
    .auth-card {
        padding: 25px 20px;
    }
    
    .data-table {
        font-size: 12px;
    }
    
    .data-table th,
    .data-table td {
        padding: 8px 10px;
    }
    
    .cta-content h2 {
        font-size: 28px;
    }
    
    .section-title {
        font-size: 28px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 26px;
    }
    
    .hero-subtitle {
        font-size: 15px;
    }
    
    .stat-number {
        font-size: 24px;
    }
    
    .features,
    .how-it-works,
    .doctors-preview,
    .cta {
        padding: 50px 15px;
    }
}
