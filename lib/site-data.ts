/**
 * All portfolio content lives in this file.
 * To add a link, paste the full URL between the quotes, e.g. 'https://github.com/your-name'.
 * Any link left as an empty string ('') shows a "link coming soon" placeholder on the site.
 */

export const site = {
  name: 'Jericho Antonio O. Castillo',
  shortName: 'Jericho Castillo',
  role: 'BS Information Technology Student',
  email: 'jericho1castillo@gmail.com',
  resumeUrl: '',
  linkedinUrl: 'https://www.linkedin.com/in/jericho-antonio-castillo-552b08450',
  githubUrl: 'https://github.com/jerichooo1',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  name: string
  title: string
  category: string
  goal: string
  contribution: string[]
  keyAreas: string[]
  liveUrl: string
  sourceUrl: string
  walkthroughUrl?: string
  interfaceUrl?: string
}

export const projects: Project[] = [
  {
    name: 'FloodGuard',
    title:
      'An IoT-Enabled Monitoring and Response Management System for Spillway Bridge in Barangay San Isidro, Rodriguez, Rizal',
    category: 'IoT · Web · Mobile',
    goal: 'Monitor conditions at a spillway bridge and support a faster, better-informed response when water levels rise.',
    contribution: [
      'Helped integrate water-level, rain, and wind sensors with a web monitoring dashboard.',
      'Worked on sensor-data uploads and device authentication.',
      'Built dashboard features for alert levels, battery condition, bridge status, and historical readings.',
      'The project also integrated push notifications, audible alerts, and bridge-barrier control.',
      'Testing covered sensor readings, obstacle detection, and communication between the hardware, website, and mobile application.',
    ],
    keyAreas: [
      'Sensor integration',
      'Web dashboard',
      'Device authentication',
      'Push notifications',
      'Mobile app communication',
    ],
    liveUrl: '',
    sourceUrl: 'https://github.com/jerichooo1/FloodGuard',
    walkthroughUrl: 'https://drive.google.com/file/d/1x1p8Uutf_DPeyS9BdGuWP6NwHH-Cy3aD/view?usp=sharing',
    interfaceUrl: 'https://github.com/jerichooo1/FloodGuard/tree/main/interface',
  },
  {
    name: 'BarberQueue',
    title:
      'A Web-Based Appointment System with Haircut Recommendation Using Augmented Reality for Fade Street Hair Studio',
    category: 'Web · Augmented Reality',
    goal: 'An academic web application that combines appointment scheduling with augmented-reality haircut recommendations for a local hair studio.',
    contribution: ['Contributed to the development of the project as part of the academic team.'],
    keyAreas: ['Web application', 'Appointment scheduling', 'Augmented reality'],
    liveUrl: '',
    sourceUrl: 'https://github.com/jerichooo1/BARBERQUE',
    walkthroughUrl: 'https://youtu.be/4Uy-uTsU3pc',
    interfaceUrl: 'https://github.com/jerichooo1/BARBERQUE/tree/main/Interfaces',
  },
  {
    name: 'TrafficAI',
    title:
      'Vision-Based AI System for Vehicle Detection, Classification, and Counting in Philippine Roadways',
    category: 'AI · Computer Vision',
    goal: 'An academic computer-vision system for detecting, classifying, and counting vehicles on Philippine roadways.',
    contribution: ['Worked on vehicle detection, classification, and counting.'],
    keyAreas: ['Computer vision', 'Vehicle detection', 'Classification', 'Counting'],
    liveUrl: '',
    sourceUrl: 'https://github.com/jerichooo1/TrafficAI',
    walkthroughUrl: 'https://drive.google.com/file/d/11Maxuc_RZT7Iwl_p9LhHKPbVrw-VfEW1/view?usp=sharing',
    interfaceUrl: 'https://github.com/jerichooo1/TrafficAI/blob/main/interfaces/TrafficAI.pdf',
  },
]

export const skillGroups = [
  {
    title: 'Programming & Web',
    skills: ['PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'MariaDB', 'Git', 'GitHub', 'Visual Studio Code', 'XAMPP'],
  },
  {
    title: 'AI & Computer Vision',
    skills: ['Ultralytics YOLO', 'OpenCV', 'Roboflow', 'Google Colab'],
  },
  {
    title: 'IoT & Networking',
    skills: ['ESP32', 'Arduino', 'Sensor integration', 'Cisco Packet Tracer', 'Microsoft Azure'],
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  specialization: 'Specialization in Mobile and Internet Technology',
  school: 'National University — Fairview',
  expected: 'Expected graduation: 2027',
}

export const courses = [
  'Introduction to Web APIs',
  'UX Foundations: Multidevice Design',
  'UX Design: 4 Ideation',
  'Complete Guide to Android Development with Kotlin for Beginners',
  'Advanced Kotlin Database Development',
]

export const honors = [
  { label: 'Second Year', detail: 'Terms 1–3', year: '2025' },
  { label: 'Third Year', detail: 'Terms 2–3', year: '2026' },
]
