export const projectsData = [
  {
    id: 1,
    title_es: "Brick Breaker",
    title_en: "Brick Breaker",
    description_es:
      "Juego clásico de destrucción de ladrillos con física básica",
    description_en: "Classic brick destruction game with basic physics",
    features_es: [
      "Control de la paleta teclado",
      "Sistema de colisiones pelota-ladrillo",
      "Contador de vidas y puntuación",
      "Diseño responsivo",
    ],
    features_en: [
      "Paddle control with keyboard",
      "Ball-brick collision system",
      "Life counter and scoring",
      "Responsive design",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: ["/Brick.png"],
    links: {
      demo: "http://brickbattle.jorgeesquivafullstack.es/",
      code_frontend: "https://github.com/Jorgesq9/BrickBattle",
    },
  },
  {
    id: 2,
    title_en: "Booking Management System",
    title_es: "Sistema de Gestión de Reservas",
    description_en:
      "Full-stack reservation system with role-based access control",
    description_es:
      "Sistema de reservas full-stack con control de acceso por roles",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Swagger",
      "React",
      "CSS",
    ],
    features_en: [
      "Admin/Worker roles system",
      "CRUD operations for bookings",
      "Advanced search filters (status, priority, client name)",
      "Booking statistics dashboard",
      "Indexed search optimization",
    ],
    features_es: [
      "Sistema de roles Admin/Trabajador",
      "Operaciones CRUD para reservas",
      "Filtros avanzados (estado, prioridad, nombre cliente)",
      "Panel de estadísticas de reservas",
      "Búsqueda indexada optimizada",
    ],
    images: ["/Front-End.png"],
    links: {
      demo: "http://centralreservas.jorgeesquivafullstack.es/login",
      code_api: "https://github.com/Jorgesq9/Central-Reservas-BackEnd",
      code_frontend: "https://github.com/Jorgesq9/Central-reservas",
      docs: "https://api.jorgeesquivafullstack.es/api-docs/", // URL de Swagger
    },
  },
  {
    id: 3,
    title_es: "Tetris",
    title_en: "Tetris",
    description_es: "Versión clásica de Tetris con JavaScript puro y Vite",
    description_en: "Classic Tetris version with pure JavaScript and Vite",
    features_es: [
      "Movimiento y rotación de piezas",
      "Detección de colisiones y eliminación de líneas",
      "Sistema de puntuación",
      "Modo de juego infinito",
    ],
    features_en: [
      "Piece movement and rotation",
      "Collision detection and line clearing",
      "Scoring system",
      "Endless game mode",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Vite", "Nginx"],
    images: ["/Tetris.png"],
    links: {
      demo: "http://tetris.jorgeesquivafullstack.es/",
      code_frontend: "https://github.com/Jorgesq9/TetrisJS",
    },
  },
  {
    id: 4,
    title_es: "Servidor Casero Autogestionado",
    title_en: "Self-Hosted Home Server",
    description_es:
      "Servidor personal configurado con túneles Cloudflare para alojar todos mis proyectos de forma segura y gratuita.",
    description_en:
      "Personal server configured with Cloudflare Tunnels to securely and freely host all my projects.",
    tech: ["Cloudflare Tunnel", "Linux", "Systemd", "Nginx", "Docker", "PM2"],
    features_es: [
      "Alojamiento autogestionado en mini PC",
      "Certificados SSL automáticos mediante Cloudflare",
      "Sistema persistente con servicios configurados vía systemd",
      "Túneles separados para cada proyecto",
      "Redirección de subdominios con registros DNS gestionados desde Cloudflare",
    ],
    features_en: [
      "Self-hosted on a mini PC",
      "Automatic SSL certificates via Cloudflare",
      "Persistent system using systemd-managed services",
      "Separate tunnels for each project",
      "Subdomain routing using Cloudflare-managed DNS records",
    ],
    links: {},
  },
];
