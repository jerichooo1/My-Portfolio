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
  resumeUrl: 'https://github.com/jerichooo1/My-Portfolio/blob/main/public/JerichoCastillo_Resume.pdf',
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
  'Designed and developed the web-based monitoring dashboard and resident mobile application.',
  'Built and configured the IoT prototype system, including water-level, rain, and wind sensors, batteries, communication modules, and electrical wiring.',
  'Implemented the hardware-to-software integration, establishing communication between the ESP32-based monitoring device, web dashboard, and mobile application.',
  'Developed backend functionalities for sensor-data processing, device authentication, database management, and real-time monitoring.',
  'Implemented dashboard features for water-level readings, alert levels, battery status, bridge conditions, and historical sensor data.',
  'Integrated push notifications, audible warning systems, and automated bridge-barrier control mechanisms.',
  'Conducted hardware and software testing to validate sensor accuracy, device communication, system responses, and end-to-end functionality.',
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
    contribution: [
  'Sole developer responsible for the complete design, development, and implementation of the web application.',
  'Developed the full-stack appointment management system, including customer and admin functionalities.',
  'Implemented the augmented reality haircut recommendation feature using MediaPipe FaceMesh.',
  'Designed and integrated the database, user interfaces, booking workflows, and GCash downpayment functionality.',
],
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
    contribution: [
  'Prepared and annotated vehicle datasets using Roboflow for AI model training.',
  'Trained and fine-tuned YOLO models for vehicle detection and classification.',
  'Implemented real-time vehicle detection, classification, and counting using YOLO and OpenCV.',
  'Integrated ByteTrack for vehicle tracking and counting across video frames.',
  'Developed the PHP and MySQL dashboard for displaying and managing vehicle detection results.',
  'Integrated the computer vision components with the web-based monitoring interface.',
],
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
  {
    title: 'Office & Productivity',
    skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Outlook', 'Microsoft Teams', 'Canva'],
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'],
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
