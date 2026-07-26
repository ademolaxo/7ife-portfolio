// ── GET ELEMENTS ──
const track = document.getElementById('worksTrack');
const toggle = document.getElementById('projectsToggle');
const panel = document.getElementById('projectsPanel');

// ── PROJECTS PANEL TOGGLE ──
if (toggle && panel) {
  const closeBtn = document.createElement('button');
  closeBtn.className = 'panel-close';
  closeBtn.textContent = 'Close';
  panel.appendChild(closeBtn);

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (panel.classList.contains('open') &&
        !panel.contains(e.target) &&
        e.target !== toggle) {
      panel.classList.remove('open');
    }
  });
}

// ── DRAG TO SCROLL ──
if (track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('grabbing');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('grabbing');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('grabbing');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.6;
    track.scrollLeft = scrollLeft - walk;
  });
}

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });

  // close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    });
  });
}

// ── MOBILE PROJECTS TOGGLE ──
const mobileProjectsToggle = document.getElementById('mobileProjectsToggle');
const mobileProjectsList = document.getElementById('mobileProjectsList');

if (mobileProjectsToggle && mobileProjectsList) {
  mobileProjectsToggle.addEventListener('click', () => {
    mobileProjectsList.classList.toggle('open');
    mobileProjectsToggle.textContent = mobileProjectsList.classList.contains('open') 
      ? 'Projects ↑' 
      : 'Projects ↓';
  });
}
