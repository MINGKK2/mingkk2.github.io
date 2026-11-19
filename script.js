/* Vietnamese remains available without JavaScript; English is progressively enhanced. */
const translations = [
  ['.skip', 'Skip to main content'],
  ['.role', 'UAV Pilot &amp; Systems Integrator'],
  ['.contact-list li:nth-child(1) small', 'LOCATION'],
  ['.contact-list li:nth-child(1) p', 'Hanoi, Vietnam'],
  ['.contact-list li:nth-child(2) small', 'EDUCATION'],
  ['.contact-list li:nth-child(2) p', 'VNU University of Engineering and Technology'],
  ['.contact-list li:nth-child(4) small', 'FOCUS'],
  ['.contact-list li:nth-child(4) p', 'UAV hardware &amp; systems'],
  ['.tabs a:nth-child(1)', 'About'],
  ['.tabs a:nth-child(2)', 'Projects'],
  ['.tabs a:nth-child(3)', 'Background'],
  ['.tabs a:nth-child(4)', 'Achievements'],
  ['#gioi-thieu h2', 'About'],
  ['.intro p', 'I’m <strong>Mẫn Gia Minh</strong>, an Aerospace Technology student at VNU University of Engineering and Technology. I helped integrate two UAVs for Team FlySAE and am currently testing an STM32H743 flight controller board before integrating it into an aircraft.'],
  ['.button-primary', 'View projects <span aria-hidden="true">↗</span>'],
  ['.button-secondary', 'My GitHub <span aria-hidden="true">↗</span>'],
  ['#gioi-thieu > h3', 'What I do'],
  ['.service:nth-child(1) h4', 'Hardware design'],
  ['.service:nth-child(1) p', 'Schematic capture, two-layer PCB design, soldering and board testing.'],
  ['.service:nth-child(2) h4', 'UAV integration'],
  ['.service:nth-child(2) p', 'Assembly, wiring, flight controller configuration and flight-system tuning.'],
  ['.service:nth-child(3) h4', 'Flight operations &amp; testing'],
  ['.service:nth-child(3) p', 'Fixed-wing, multirotor and FPV piloting; preflight checks and flight testing.'],
  ['.service:nth-child(4) h4', 'Prototyping'],
  ['.service:nth-child(4) p', 'Mechanical design, FDM 3D printing, calibration and troubleshooting.'],
  ['.callout h3', 'Learning through projects'],
  ['.callout p', 'From UAV Cup and RT Scout to the STM32H743 flight controller, these projects help me connect hardware knowledge with hands-on flight operations.'],
  ['.callout a', 'Explore projects'],
  ['#du-an h2', 'Projects'],
  ['.section-lead', 'A selection of projects in hardware design, UAV integration and flight operations. The UAV platforms use 10-inch propellers and 4S batteries.'],
  ['[data-filter="all"]', 'All'],
  ['[data-filter="hardware"]', 'Hardware'],
  ['[data-filter="team"]', 'Team projects'],
  ['.project:nth-child(1) h3', 'National UAV Cup 2025'],
  ['.project:nth-child(1) .project-label', 'Pilot · Team FlySAE, 5 members'],
  ['.project:nth-child(1) > p:nth-of-type(2)', 'As the team’s pilot, I helped integrate two UAVs and supported autonomous flight testing.'],
  ['.project:nth-child(1) > p:nth-of-type(3)', '<strong>Team result:</strong> The coaxial quadcopter completed the payload pickup-and-drop task.'],
  ['.project:nth-child(1) .project-details p:nth-of-type(1)', '<strong>Role:</strong> Pilot; helped integrate two UAVs and supported autonomous flight testing.'],
  ['.project:nth-child(1) .project-details p:nth-of-type(2)', '<strong>Team result:</strong> The coaxial quadcopter completed the pickup-and-drop task at the 2025 competition.'],
  ['.project:nth-child(2) .project-visual small', 'PCB / 2 LAYERS'],
  ['.project:nth-child(2) h3', 'STM32H743 Flight Controller Board'],
  ['.project:nth-child(2) .project-label', 'Hardware · Testing in progress'],
  ['.project:nth-child(2) > p:nth-of-type(2)', 'I designed a two-layer PCB in EasyEDA, soldered the board and flashed ArduPilot firmware. The board is being tested and has not yet been integrated into an aircraft.'],
  ['.project:nth-child(2) .project-details p:nth-of-type(1)', '<strong>Work completed:</strong> Designed a two-layer PCB in EasyEDA, soldered the board and flashed ArduPilot firmware.'],
  ['.project:nth-child(2) .project-details p:nth-of-type(2)', '<strong>Current stage:</strong> Learning PCB fabrication and testing the board; it has not yet been integrated into an aircraft.'],
  ['.project:nth-child(3) .project-label', 'Embedded systems · Firmware V14'],
  ['.project:nth-child(3) > p:nth-of-type(2)', 'An STM32F405-based satellite attitude determination and control system. V14 has passed host-side tests and calibration flash-region checks; UART/cFE has not yet been verified on hardware.'],
  ['.project:nth-child(3) .project-links a:nth-child(1)', 'Source code'],
  ['.project:nth-child(3) .project-links a:nth-child(2)', '3-axis diagram (V9)'],
  ['.project:nth-child(3) .project-links a:nth-child(3)', 'Protocol tests'],
  ['.project:nth-child(3) .project-note', 'The PID diagram documents the earlier V9 design.'],
  ['.project:nth-child(3) .project-details p:nth-of-type(1)', '<strong>Tested:</strong> Host-side tests for serialization, UART DMA, emergency stop and the calibration journal; calibration flash-region checks.'],
  ['.project:nth-child(3) .project-details p:nth-of-type(2)', '<strong>Current limitations:</strong> V14 has not been flashed to hardware or had UART/cFE verified on hardware. The linked diagram is from V9.'],
  ['.project:nth-child(4) .project-label', 'UAV · Personal project'],
  ['.project:nth-child(4) > p:nth-of-type(2)', 'Built and flight-tested a 4+1 quadplane with a 980 mm wingspan. Integrated a Pixhawk 4 Mini, ArduPilot, power system and RadioMaster TX15, and tuned PID parameters. 3D-print files provided by Rustech Vietnam.'],
  ['.project:nth-child(4) .project-details p:nth-of-type(1)', '<strong>Work completed:</strong> 3D-printed and assembled the 4+1 mechanism, integrated the flight controller, power system and radio control, and tuned PID parameters.'],
  ['.project:nth-child(4) .project-details p:nth-of-type(2)', '<strong>Progress:</strong> Flight-tested. 3D-print files provided by Rustech Vietnam.'],
  ['.project:nth-child(5) .project-label', 'UAV · Personal project'],
  ['.project:nth-child(5) > p:nth-of-type(2)', 'Selected components, assembled and wired a quadcopter with Phantom 3 motors, configured INAV Position Hold and completed a successful test flight.'],
  ['.project:nth-child(5) .project-details p:nth-of-type(1)', '<strong>Configuration:</strong> Micro Air H743 V2, Phantom 3 motors, 10-inch propellers and a 4S battery.'],
  ['.project:nth-child(5) .project-details p:nth-of-type(2)', '<strong>Progress:</strong> Assembled, configured for INAV Position Hold and successfully flight-tested.'],
  ['.project:nth-child(6) .project-label', 'UAV · Team project'],
  ['.project:nth-child(6) > p:nth-of-type(2)', 'Contributed to hardware assembly and wiring, flight controller setup, tuning and troubleshooting.'],
  ['.project:nth-child(6) .project-details p:nth-of-type(1)', '<strong>Configuration:</strong> Hexacopter with DJI A3 Pro, 10-inch propellers and a 4S battery.'],
  ['.project:nth-child(6) .project-details p:nth-of-type(2)', '<strong>Contribution:</strong> Helped assemble and wire the hardware, configure the controller, tune and troubleshoot the system.'],
  ['.project:nth-child(7) h3', 'Dual-mode aerial and ground rescue drone'],
  ['.project:nth-child(7) .project-label', 'UAV · Institute-level research'],
  ['.project:nth-child(7) > p:nth-of-type(2)', 'Integrated the frame, power system and electronics of a dual-mode quadcopter; wired, configured and tested the system.'],
  ['.project:nth-child(7) .project-details p:nth-of-type(1)', '<strong>Scope:</strong> A quadcopter designed for flight and ground movement.'],
  ['.project:nth-child(7) .project-details p:nth-of-type(2)', '<strong>Contribution:</strong> Integrated the frame, power system and electronics; wired, configured and tested the system.'],
  ['.illustration-note', 'The images above are conceptual illustrations, not product photos.'],
  ['#ho-so h2', 'Background'],
  ['#ho-so > h3:nth-of-type(1)', '<span aria-hidden="true">▤</span> Education &amp; activities'],
  ['#ho-so .timeline article:nth-child(1) h4', 'VNU University of Engineering and Technology'],
  ['#ho-so .timeline article:nth-child(1) span', '2024 – Present'],
  ['#ho-so .timeline article:nth-child(1) p', 'Aerospace Technology.'],
  ['#ho-so .timeline article:nth-child(2) h4', 'Aerospace Club'],
  ['#ho-so .timeline article:nth-child(2) span', '2026 – Present'],
  ['#ho-so .timeline article:nth-child(2) p', 'Vice President; previously Technical Team Lead.'],
  ['#ho-so > h3:nth-of-type(2)', '<span aria-hidden="true">⌘</span> Technical skills'],
  ['.skill-box > div:nth-child(1) h4', 'PCB &amp; hardware'],
  ['.skill-box > div:nth-child(1) p', 'EasyEDA, STM32H743, Arduino and ESP; schematic capture, PCB design, soldering and continuity testing.'],
  ['.skill-box > div:nth-child(2) h4', 'Flight control'],
  ['.skill-box > div:nth-child(2) p', 'ArduPilot, PX4, INAV and Betaflight; Mission Planner, QGroundControl, waypoints and PID tuning.'],
  ['.skill-box > div:nth-child(3) h4', 'UAV operations'],
  ['.skill-box > div:nth-child(3) p', 'Fixed-wing Acro/Manual and Stabilized/Loiter; FPV Acro; multirotor GPS/Position Hold; preflight checks and flight testing.'],
  ['.skill-box > div:nth-child(4) h4', 'CAD &amp; prototyping'],
  ['.skill-box > div:nth-child(4) p', 'Basic SolidWorks; FDM 3D printing, slicing, calibration and print troubleshooting.'],
  ['#thanh-tich h2', 'Achievements'],
  ['#thanh-tich > h3', '<span aria-hidden="true">✦</span> Awards &amp; activities'],
  ['#thanh-tich .timeline article:nth-child(1) h4', 'NASA Space Apps Challenge – Open Category'],
  ['#thanh-tich .timeline article:nth-child(1) span', '14–15 November 2026'],
  ['#thanh-tich .timeline article:nth-child(1) p', 'First Place and Best Use of Science. As the tester/QA member of a six-person team, I tested the website and helped prepare the demonstration.'],
  ['#thanh-tich .timeline article:nth-child(2) h4', 'Third Prize, institute-level scientific research'],
  ['#thanh-tich .timeline article:nth-child(3) h4', 'First Prize, school-level STEM competition']
];

const localized = translations.map(([selector, en]) => {
  const element = document.querySelector(selector);
  return element ? {element, vi: element.innerHTML, en} : null;
}).filter(Boolean);
document.querySelectorAll('.project-details summary').forEach(element => {
  localized.push({element, vi: element.innerHTML, en: 'View details &amp; progress'});
});

const filters = document.querySelector('.filters');
const filterButtons = Array.from(document.querySelectorAll('.filters [data-filter]'));
const projects = Array.from(document.querySelectorAll('.project[data-category]'));
const status = document.getElementById('filter-status');
const languageSwitch = document.querySelector('.language-switch');
const languageButtons = Array.from(document.querySelectorAll('[data-lang]'));
let language = 'vi';
let selectedFilter = 'all';

function updateFilter() {
  let visible = 0;
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === selectedFilter;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  projects.forEach(project => {
    const matches = selectedFilter === 'all' || project.dataset.category.split(/\s+/).includes(selectedFilter);
    project.hidden = !matches;
    if (matches) visible += 1;
  });
  if (status) status.textContent = language === 'en'
    ? `Showing ${visible} project${visible === 1 ? '' : 's'}.`
    : `Đang hiển thị ${visible} dự án.`;
}

function setLanguage(next) {
  language = next === 'en' ? 'en' : 'vi';
  document.documentElement.lang = language;
  localized.forEach(item => { item.element.innerHTML = item[language]; });
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelector('.sidebar').setAttribute('aria-label', language === 'en' ? 'Personal information' : 'Thông tin cá nhân');
  document.querySelector('.tabs').setAttribute('aria-label', language === 'en' ? 'Portfolio sections' : 'Các mục portfolio');
  document.querySelector('.filters').setAttribute('aria-label', language === 'en' ? 'Filter projects' : 'Lọc dự án');
  document.querySelector('.language-switch').setAttribute('aria-label', language === 'en' ? 'Choose language' : 'Chọn ngôn ngữ');
  document.querySelector('.avatar img').alt = language === 'en' ? 'Portrait of Mẫn Gia Minh' : 'Ảnh chân dung Mẫn Gia Minh';
  try { localStorage.setItem('portfolio-language', language); } catch (_) { /* Storage is optional. */ }
  updateFilter();
}

if (filters && filterButtons.length && projects.length) {
  filterButtons.forEach(button => button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    updateFilter();
  }));
  filters.hidden = false;
}
if (languageSwitch && languageButtons.length) {
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  languageSwitch.hidden = false;
  let saved = 'vi';
  try { saved = localStorage.getItem('portfolio-language') || 'vi'; } catch (_) { /* Storage is optional. */ }
  setLanguage(saved);
}
