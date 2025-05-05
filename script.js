
// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  // Change icon to X when menu is open
  const svg = menuToggle.querySelector('svg');
  if (mobileMenu.classList.contains('active')) {
    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
  } else {
    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"></path>';
  }
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    // Change back to hamburger icon
    const svg = menuToggle.querySelector('svg');
    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"></path>';
  });
});

// BMI indicator functionality
const bmiButtons = document.querySelectorAll('.bmi-indicator-btn');
const bmiDescription = document.getElementById('bmiDescription');

const bmiDescriptions = {
  underweight: {
    title: 'Kurus <span>(< 18.5)</span>',
    description: 'BMI kurang dari 18.5 mengindikasikan berat badan kurang. Ini dapat berhubungan dengan kekurangan nutrisi, gangguan makan, atau kondisi kesehatan tertentu.'
  },
  normal: {
    title: 'Normal <span>(18.5 - 24.9)</span>',
    description: 'BMI antara 18.5 dan 24.9 menunjukkan berat badan ideal. Pertahankan pola makan seimbang dan aktivitas fisik reguler.'
  },
  overweight: {
    title: 'Kelebihan Berat Badan <span>(25 - 29.9)</span>',
    description: 'BMI antara 25 dan 29.9 menandakan kelebihan berat badan. Pertimbangkan untuk meningkatkan aktivitas fisik dan memperbaiki pola makan.'
  },
  obese: {
    title: 'Obesitas <span>(≥ 30)</span>',
    description: 'BMI 30 atau lebih mengindikasikan obesitas. Ini meningkatkan risiko berbagai masalah kesehatan termasuk penyakit jantung dan diabetes.'
  }
};

bmiButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    bmiButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update the description
    const bmiType = button.dataset.bmi;
    const bmiInfo = bmiDescriptions[bmiType];
    
    bmiDescription.innerHTML = `
      <h4 class="bmi-category">${bmiInfo.title}</h4>
      <p>${bmiInfo.description}</p>
    `;
  });
});

// How it works steps functionality
const steps = document.querySelectorAll('.step');
const currentStepEl = document.getElementById('currentStep');
const stepVisualization = document.getElementById('stepVisualization');

function updateStep(stepNumber) {
  // Update active step
  steps.forEach(step => {
    if (parseInt(step.dataset.step) === stepNumber) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  // Update step indicator
  currentStepEl.textContent = stepNumber;
  
  // Update visualization
  updateVisualization(stepNumber);
}

function updateVisualization(stepNumber) {
  // Clear previous visualization
  stepVisualization.innerHTML = '';
  
  // Add new visualization based on step
  switch(stepNumber) {
    case 1:
      stepVisualization.innerHTML = '<div class="step1-visual"></div>';
      break;
    case 2:
      stepVisualization.innerHTML = `
        <div class="step2-visual-1"></div>
        <div class="step2-visual-2"></div>
      `;
      break;
    case 3:
      stepVisualization.innerHTML = '<div class="step3-visual">BMI: 23.5</div>';
      break;
    case 4:
      stepVisualization.innerHTML = `
        <div class="step4-visual">
          <div class="step4-visual-title">Hasil Pengukuran</div>
          <div class="step4-visual-item">Tinggi: 170 cm</div>
          <div class="step4-visual-item">Berat: 68 kg</div>
          <div class="step4-visual-item">BMI: 23.5 (Normal)</div>
        </div>
      `;
      break;
  }
}

// Set default active step
updateStep(1);

// Add click event to steps
steps.forEach(step => {
  step.addEventListener('click', () => {
    const stepNumber = parseInt(step.dataset.step);
    updateStep(stepNumber);
  });
});

// Animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  card.style.animation = 'fadeIn 0.6s ease-out forwards';
  card.style.opacity = '0';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
