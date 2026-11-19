const rolesByPage = {
    sde: ["SDE Fresher", "Backend API Builder", "B.Tech CSE 2027", "AI-aware Developer"],
    ai: ["AI Engineer Workspace", "RAG and Agents Builder", "LLM App Developer", "AI Fullstack Lab"]
};

const sdeProjects = [
    {
        name: "Event Booking System",
        type: "Backend API",
        problem: "A production-style event and attendance API where booking correctness matters under concurrent demand.",
        proof: "Uses Node.js, Express, MySQL, Sequelize, Joi validation, Swagger docs, Docker setup, and transaction-safe booking logic with SELECT FOR UPDATE.",
        stack: ["Node.js", "Express", "MySQL", "Sequelize", "Docker", "Swagger"],
        url: "https://github.com/ChandanLabs/Event_Booking_System"
    },
    {
        name: "AI-First Laundry Management",
        type: "Full-stack API",
        problem: "A practical order-management system with pricing, status transitions, filtering, and dashboard analytics.",
        proof: "Shows MVC structure, REST endpoints, validated state flow, responsive frontend, and deployment-ready static/server setup.",
        stack: ["Node.js", "Express", "JavaScript", "REST", "Dashboard"],
        url: "https://github.com/AIFullstack-web/ai-first-laundry-management-system"
    },
    {
        name: "BloodByte",
        type: "Realtime + AI",
        problem: "Emergency blood requests need verification, urgency detection, and nearby donor matching.",
        proof: "Combines React, Firebase Functions, Firestore realtime listeners, Gemini document analysis, and geolocation matching.",
        stack: ["React", "Firebase", "Gemini", "Firestore", "Cloud Functions"],
        url: "https://github.com/ChandanLabs/Bloodyte"
    },
    {
        name: "OpsGuardian",
        type: "Backend automation",
        problem: "Known backend incidents should move from alert to analysis to safe remediation faster.",
        proof: "Event-driven incident workflow using Motia, TypeScript, OpenAI analysis, state tracking, approval gates, and integration tests.",
        stack: ["TypeScript", "Motia", "OpenAI", "Jest", "Supertest"],
        url: "https://github.com/ChandanLabs/OpsGuardian"
    }
];

const aiProjects = [
    {
        name: "Autonomous Job Agent",
        type: "RAG + Agent Workflow",
        problem: "Discover jobs, score fit, tailor application material, and prepare semi-autonomous submissions from grounded profile data.",
        proof: "Experience Lake, local retrieval index, FastAPI ingestion, LangGraph pipeline, matching logic, tailoring agent, and browser execution module.",
        stack: ["Python", "FastAPI", "RAG", "LangGraph", "SeleniumBase"],
        url: "https://github.com/AIFullstack-web/Job-agent-"
    },
    {
        name: "BharatRank",
        type: "Candidate Ranking AI",
        problem: "Rank a 100,000-candidate pool against a detailed Senior AI Engineer JD without hosted LLM calls.",
        proof: "Single-command TF-IDF ranking pipeline, hard-screen penalties, behavioral multipliers, validator, and reproducible CSV output.",
        stack: ["Python", "TF-IDF", "Ranking", "Data Pipeline", "Validation"],
        url: "https://github.com/AIFullstack-web/BharatRank"
    },
    {
        name: "AI Cricket Bowling Analyzer",
        type: "Computer Vision + Coaching",
        problem: "Fast bowlers need real-time biomechanical feedback at ball release.",
        proof: "YOLO pose extraction, release detection heuristics, biomechanics engine, scoring, Gemini feedback, FastAPI/SSE, and React UI.",
        stack: ["Python", "YOLO", "Gemini", "FastAPI", "React", "SSE"],
        url: "https://github.com/ChandanLabs/ai-cricket-bowling-analyzer"
    },
    {
        name: "The Phoenix Agent",
        type: "Self-healing AI Agent",
        problem: "A crashing service should be diagnosed, patched, and restarted with minimal manual effort.",
        proof: "Guardian process monitors Node.js service health, sends stack traces to an LLM, applies fixes, and verifies recovery with tests.",
        stack: ["Node.js", "Express", "Together AI", "Docker", "Tests"],
        url: "https://github.com/ChandanLabs/ThePhoenix-Agent"
    },
    {
        name: "OpsGuardian",
        type: "AI SRE Agent",
        problem: "Incident response needs safe automation with human approval before risky actions.",
        proof: "Motia workflow steps, OpenAI log analysis, stateful approval, remediation events, observability, and Jest/Supertest coverage.",
        stack: ["TypeScript", "Motia", "OpenAI", "Workflow", "Testing"],
        url: "https://github.com/ChandanLabs/OpsGuardian"
    },
    {
        name: "CampusGPT Agent",
        type: "Learning Assistant",
        problem: "Students need notes, PDFs, images, quizzes, and study plans converted into usable study material.",
        proof: "Positioned as a multimodal Gemini-powered learning assistant in the AIFullstack-web lab.",
        stack: ["Gemini", "Multimodal AI", "Study Plans", "Quizzes"],
        url: "https://github.com/AIFullstack-web/CampusGPT-Agent"
    }
];

const portfolioProfiles = {
    tester: {
        resumeUrl: "qa-resume.html",
        eyebrow: "QA AUTOMATION TESTER · EARLY CAREER",
        heroTitle: "I build confidence in software, <span>one thoughtful test at a time.</span>",
        heroSummary: "Computer Science student focused on quality engineering: exploring test design, web automation, and API validation while building a foundation in Java and modern testing tools.",
        heroProof: "Project proof: REST API validation and automated test suites in public repositories.",
        snapshotTitle: "Quality engineering",
        snapshotSummary: "Turning requirements into clear checks, useful automation, and dependable releases.",
        bottomLabel: "QUALITY ENGINEERING · PROJECT-LED LEARNING",
        proofHeading: "A quality mindset, grounded in real projects.",
        proofIntro: "I’m building toward QA automation through structured learning and hands-on project work. These are engineering signals shown by the repositories—not claims of professional QA experience.",
        projectHeading: "Project work with testing signals.",
        projectIntro: "A small selection of repositories where APIs, automation, and software behavior can be explored in code.",
        skillsHeading: "Clear about what I know—and what I’m learning.",
        skillsIntro: "Grouped by use, without proficiency scores. My QA roadmap is presented as a learning focus, not as completed expertise.",
        aboutHeading: "Curious about the details that make software dependable.",
        aboutCopy: "I’m a B.Tech Computer Science student graduating in 2027. I enjoy learning how software behaves, tracing a request through a system, and finding practical ways to make an experience more reliable. I’m currently developing my quality engineering foundation alongside my backend and AI project work.",
        contactHeading: "Looking for a curious teammate?",
        contactCopy: "I’m open to entry-level QA automation opportunities and conversations about my projects.",
        contactLabel: "QA AUTOMATION TESTER · DEVELOPER",
        contactIntro: "Entry-level quality engineering · project-led learning",
        proofCards: [
            { icon: "fa-list-check", title: "Test-minded engineering", text: "Explore how API validation, integration tests, and recovery checks appear in selected project repositories." },
            { icon: "fa-code-branch", title: "Automation in context", text: "A browser automation module appears in the Job Agent repository; this is project evidence, not a claim of professional QA experience." },
            { icon: "fa-graduation-cap", title: "A clear learning path", text: "Building testing foundations through a focused roadmap spanning test design, browser automation, API checks, CI, and data." }
        ],
        projects: [
            {
                name: "OpsGuardian",
                type: "Workflow · Integration testing",
                problem: "A workflow for analyzing a backend incident and gating remediation behind human approval.",
                proof: "Jest and Supertest integration tests cover workflow state and approval-gated remediation steps.",
                stack: ["TypeScript", "Motia", "Jest", "Supertest", "OpenAI"],
                url: "https://github.com/ChandanLabs/OpsGuardian"
            },
            {
                name: "Autonomous Job Agent",
                type: "Browser automation · AI workflow",
                problem: "A job-search workflow that gathers opportunities and prepares tailored application material.",
                proof: "SeleniumBase powers the browser execution module within a broader AI-assisted job-search workflow.",
                stack: ["Python", "FastAPI", "LangGraph", "SeleniumBase"],
                url: "https://github.com/AIFullstack-web/Job-agent-"
            },
            {
                name: "Event Booking System",
                type: "REST API · Data correctness",
                problem: "An event and attendance API where booking correctness matters when demand overlaps.",
                proof: "Request validation, Swagger documentation, and SELECT FOR UPDATE logic protect event booking correctness.",
                stack: ["Node.js", "Express", "MySQL", "Sequelize", "Joi", "Swagger"],
                url: "https://github.com/ChandanLabs/Event_Booking_System"
            },
            {
                name: "The Phoenix Agent",
                type: "Service recovery · Verification",
                problem: "A Node.js service that detects a crash and attempts an automated recovery workflow.",
                proof: "Tested recovery flows verify crash detection and automated service restart behavior.",
                stack: ["Node.js", "Express", "Docker", "Tests"],
                url: "https://github.com/ChandanLabs/ThePhoenix-Agent"
            }
        ],
        skills: [
            { title: "Project evidence", note: "Tools and practices identified in the selected public repositories.", tags: ["REST APIs", "SeleniumBase", "Jest", "Supertest", "Request validation", "SQL transactions"] },
            { title: "Testing foundations · learning focus", note: "Study areas from the Associate Automation Engineer curriculum.", tags: ["QA fundamentals", "SDLC", "Testing lifecycle", "Test design", "Defect lifecycle"] },
            { title: "Automation · learning focus", note: "Planned tools and frameworks; not presented as completed proficiency.", tags: ["Java", "Selenium", "Playwright", "TestNG", "Cucumber", "Maven"] },
            { title: "API, data & delivery · learning focus", note: "Building a practical foundation for quality engineering workflows.", tags: ["REST", "Postman", "REST Assured", "SQL / RDBMS", "Git", "Jenkins", "AWS", "Linux", "AI-assisted automation"] }
        ],
        curriculum: [
            { title: "Testing foundations", topics: ["SDLC", "Requirements to deployment", "Quality assurance", "Integration testing", "User acceptance testing", "Agile and Waterfall", "JIRA", "XRay", "Confluence"] },
            { title: "Core Java", topics: ["Classes and packages", "Data types and control flow", "Methods, debugging, loops, arrays", "Encapsulation, inheritance, polymorphism, abstraction", "Lists, sets, maps", "Streams and lambdas", "Exception handling", "File I/O and buffered readers/writers"] },
            { title: "Advanced Java", topics: ["Singleton pattern", "Builder pattern", "Configuration manager", "Reusable test configuration"] },
            { title: "Maven", topics: ["Project structure and lifecycle", "Goals and dependency scopes", "Dependency management", "Compiler, Surefire and Failsafe plugins", "Settings.xml", "Profiles", "Multi-module builds", "Nexus repository"] },
            { title: "Git", topics: ["SSH and HTTPS cloning", "Fetch and pull", "Commit and push", "Branches and diffs", "Merge and rebase", "Conflict resolution"] },
            { title: "UI automation", topics: ["Selenium WebDriver and browser setup", "CSS locators and DOM elements", "Navigation and element actions", "Implicit, explicit and fluent waits", "Validation and assertions", "Mouse, keyboard and dropdowns", "Screenshots, windows, frames and tabs", "Page Object Model", "Playwright setup, config and cross-browser tests"] },
            { title: "API testing", topics: ["REST architecture and status codes", "Postman GET, POST, PUT and DELETE", "Environment variables and test scripts", "Basic and bearer authentication", "REST Assured requests and CRUD", "JSON and XML response checks", "Schema validation", "Maven test integration"] },
            { title: "Test frameworks and BDD", topics: ["TestNG annotations, groups and parameters", "Data providers and listeners", "Hard and soft assertions", "Gherkin Given / When / Then", "Cucumber features and scenarios", "Scenario outlines, backgrounds and rules", "Step definitions, runners, tags and hooks"] },
            { title: "DevOps and Jenkins", topics: ["DevOps lifecycle", "Pipeline stages and parallel jobs", "Stage dependencies and schedules", "Triggers, SCM polling and webhooks", "Failure debugging and log analysis"] },
            { title: "AWS cloud", topics: ["AWS console and CLI", "S3 buckets, permissions and versioning", "EC2, AMI and EBS volumes", "Lambda", "ECS, EKS and ECR", "EBS attach, detach and availability zones"] },
            { title: "AI-assisted automation", topics: ["Gemini and prompt design", "Claude and Claude CLI", "GEMs, skills and agents", "MCP servers and tools", "Playwright MCP", "Generate, refactor and document automation"] },
            { title: "RDBMS and SQL", topics: ["Relational concepts and schema design", "Data types and constraints", "Normalization", "DDL, DML, DCL and TCL", "Queries across tables and joins", "Optimized search and updates"] },
            { title: "Linux and shell", topics: ["Commands and filesystem", "File management and permissions", "Find files and inspect logs", "CPU, memory and disk usage", "grep", "tar.gz archives", "Basic shell scripts"] }
        ]
    },
    developer: {
        resumeUrl: "developer-resume.html",
        eyebrow: "AI DEVELOPER · BACKEND · FULL-STACK · B.TECH CSE 2027",
        heroTitle: "I build useful software, <span>from reliable APIs to AI-powered tools.</span>",
        heroSummary: "Computer Science student building backend and full-stack projects with practical API, database, and AI integration work.",
        heroProof: "Project proof: public repositories spanning REST APIs, transactional data workflows, full-stack apps, and AI tools.",
        snapshotTitle: "Backend & AI projects",
        snapshotSummary: "Designing modular APIs, data-backed workflows, and practical AI integrations.",
        bottomLabel: "BACKEND · FULL-STACK · AI PROJECTS",
        proofHeading: "A builder mindset, grounded in real projects.",
        proofIntro: "A concise view of the engineering work represented in my public repositories.",
        projectHeading: "Selected backend and full-stack projects.",
        projectIntro: "A small selection of projects with their purpose, implementation details, and source links.",
        skillsHeading: "A practical, grouped engineering toolkit.",
        skillsIntro: "Technologies and areas represented in my portfolio and project work.",
        aboutHeading: "A Computer Science student who likes to build.",
        aboutCopy: "I’m a B.Tech Computer Science student graduating in 2027. I enjoy building backend APIs and full-stack applications, working with databases, and exploring how AI can make software more useful. I’m actively learning and improving through project work.",
        contactHeading: "Have an interesting problem to solve?",
        contactCopy: "I’m open to internships and early-career developer opportunities.",
        contactLabel: "AI DEVELOPER · BACKEND · FULL-STACK",
        contactIntro: "B.Tech CSE · graduating 2027",
        proofCards: [
            { icon: "fa-server", title: "Backend APIs", text: "Builds with Node.js, Express, request validation, REST endpoints, and structured server-side code." },
            { icon: "fa-database", title: "Data correctness", text: "Projects work with relational and document databases, including transaction-aware booking logic." },
            { icon: "fa-wand-magic-sparkles", title: "AI integrations", text: "Explores RAG, agents, generative AI APIs, workflow automation, and computer vision projects." }
        ],
        projects: [
            {
                name: "Event Booking System",
                type: "Backend API",
                problem: "An event and attendance API where booking correctness matters under concurrent demand.",
                proof: "Node.js and Express expose a validated MySQL API with Swagger documentation and transaction-safe booking logic.",
                stack: ["Node.js", "Express", "MySQL", "Sequelize", "Joi", "Docker"],
                url: "https://github.com/ChandanLabs/Event_Booking_System"
            },
            {
                name: "AI-First Laundry Management",
                type: "Full-stack API",
                problem: "A laundry order-management system with pricing, status transitions, filtering, and dashboard analytics.",
                proof: "MVC structure, REST endpoints, validated state transitions, and a responsive dashboard support laundry operations.",
                stack: ["Node.js", "Express", "JavaScript", "REST", "Dashboard"],
                url: "https://github.com/AIFullstack-web/ai-first-laundry-management-system"
            },
            {
                name: "BloodByte",
                type: "Realtime + AI",
                problem: "An emergency blood-request app focused on urgency detection and nearby donor matching.",
                proof: "Combines React, Firebase, Firestore realtime listeners, Gemini document analysis, and location-based matching.",
                stack: ["React", "Firebase", "Gemini", "Firestore"],
                url: "https://github.com/ChandanLabs/Bloodyte"
            },
            {
                name: "OpsGuardian",
                type: "Backend automation",
                problem: "An incident workflow for analysis, approval, and safer remediation.",
                proof: "Uses Motia workflow steps, OpenAI analysis, state tracking, approval gates, and Jest/Supertest integration tests.",
                stack: ["TypeScript", "Motia", "OpenAI", "Jest", "Supertest"],
                url: "https://github.com/ChandanLabs/OpsGuardian"
            }
        ],
        skills: [
            { title: "Languages", note: "Programming and scripting used across coursework and projects.", tags: ["JavaScript", "Java", "Python", "SQL"] },
            { title: "Backend & APIs", note: "Server-side and interface patterns represented in project work.", tags: ["Node.js", "Express", "REST APIs", "Request validation", "JWT"] },
            { title: "Data & tools", note: "Database, development, and delivery tools.", tags: ["MySQL", "MongoDB", "Git / GitHub", "Docker", "Linux", "Postman"] },
            { title: "AI & learning", note: "AI project work plus areas currently being explored.", tags: ["Gemini", "OpenAI", "RAG", "LangGraph", "AWS basics", "System design"] }
        ]
    }
};

let portfolioEvidence = null;
let selectedPortfolioRole = "developer";
let introReturnScroll = 0;
let portfolioStarted = false;
let reelIndex = 0;
let reelTimer = null;
let reelFrame = null;
let reelCanvas = null;
let reelContext = null;
let reelPlaying = false;
let reelUserPlaying = false;
let reelHoverPaused = false;
let reelVisibilityPaused = false;
let portfolioRevealObserver = null;
let portfolioMotionStarted = false;
let scrollFrameRequested = false;

const inlineIconPaths = {
    "arrow-right": "<path d='M5 12h14m-5-5 5 5-5 5'/>",
    "arrow-left": "<path d='M19 12H5m5-5-5 5 5 5'/>",
    "arrow-down": "<path d='M12 4v16m-6-6 6 6 6-6'/>",
    "arrow-up": "<path d='M12 20V4m-6 6 6-6 6 6'/>",
    "external": "<path d='M14 5h5v5m0-5-9 9M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4'/>",
    "github": "<path d='M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.19.62-.43v-1.67c-2.53.55-3.06-1.08-3.06-1.08-.41-1.05-1.01-1.33-1.01-1.33-.83-.57.06-.56.06-.56.92.07 1.4.94 1.4.94.82 1.4 2.15.99 2.67.76.08-.59.32-.99.58-1.22-2.02-.23-4.14-1.01-4.14-4.5 0-.99.35-1.81.93-2.45-.09-.23-.4-1.16.09-2.42 0 0 .76-.24 2.5.94A8.7 8.7 0 0 1 12 7.48c.77 0 1.54.1 2.26.3 1.73-1.18 2.49-.94 2.49-.94.5 1.26.19 2.19.1 2.42.58.64.92 1.46.92 2.45 0 3.5-2.12 4.27-4.15 4.5.33.28.62.83.62 1.68v2.22c0 .24.16.52.63.43A9 9 0 0 0 12 3Z'/>",
    "linkedin": "<path d='M5 9v10M5 5v.01M9 19V9m0 4c0-2.21 1.79-4 4-4s4 1.79 4 4v6m-8 0v-6'/>",
    "envelope": "<rect x='3' y='5' width='18' height='14' rx='2'/><path d='m4 7 8 6 8-6'/>",
    "file": "<path d='M6 3h9l3 3v15H6zM15 3v5h5M9 12h6m-6 4h6'/>",
    "shield": "<path d='M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6zM9 12l2 2 4-5'/>",
    "sparkles": "<path d='m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z'/>",
    "circle": "<circle cx='12' cy='12' r='4'/>",
    "pause": "<path d='M7 5h4v14H7zm6 0h4v14h-4z'/>",
    "play": "<path d='m8 5 11 7-11 7z'/>",
    "plus": "<path d='M12 5v14M5 12h14'/>",
    "rotate": "<path d='M4 4v6h6M5.5 15a7 7 0 1 0 1.8-7.8L4 10'/>",
    "shuffle": "<path d='M4 7h3c5 0 5 10 10 10h3m-3-3 3 3-3 3M4 17h3c2 0 3-2 4-4m2-4c1-2 2-2 4-2h3m-3-3 3 3-3 3'/>",
    "download": "<path d='M12 3v12m-5-5 5 5 5-5M5 21h14'/>",
    "list": "<path d='M9 6h11M9 12h11M9 18h11M4 6h1M4 12h1M4 18h1'/>",
    "code": "<path d='m8 8-4 4 4 4m8-8 4 4-4 4m-5 3 2-14'/>",
    "graduation": "<path d='m3 9 9-5 9 5-9 5zM7 11v5c3 2 7 2 10 0v-5m4-2v6'/>",
    "server": "<rect x='3' y='4' width='18' height='6' rx='2'/><rect x='3' y='14' width='18' height='6' rx='2'/><path d='M7 7h.01M7 17h.01M11 7h6m-6 10h6'/>",
    "database": "<ellipse cx='12' cy='6' rx='8' ry='3'/><path d='M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6'/>",
    "wand": "<path d='m4 20 11-11m-7 7 3-3m5-9v4m-2-2h4m5 6v3m-1.5-1.5h3M6 3v3M4.5 4.5h3'/>"
};

function hydrateInlineIcons(root = document) {
    root.querySelectorAll("i[class*='fa-']").forEach((icon) => {
        if (icon.dataset.iconHydrated) return;
        const classes = Array.from(icon.classList);
        const name = classes.map((className) => className.startsWith("fa-") ? className.slice(3) : "").find((className) =>
            inlineIconPaths[className] ||
            className === "list-check" ||
            className === "code-branch" ||
            className === "wand-magic-sparkles"
        );
        const normalizedName = name === "list-check" ? "list" : name === "code-branch" ? "code" : name === "wand-magic-sparkles" ? "wand" : name;
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "svg-icon");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "1.8");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        svg.innerHTML = inlineIconPaths[normalizedName] || "<circle cx='12' cy='12' r='4'/>";
        icon.replaceWith(svg);
    });
}

const apiResponses = {
    "/api/profile-readiness": {
        status: 200,
        candidate: "Chandan Kumar Sah Teli",
        target_roles: ["SDE Internship", "Associate SDE", "AI-aware Backend Developer"],
        strongest_signals: ["transaction-safe backend APIs", "AI integration projects", "DSA and CS fundamentals"],
        graduation: "B.Tech CSE, graduating 2027"
    },
    "/api/strongest-projects": {
        status: 200,
        backend: ["Event Booking System", "AI-First Laundry Management", "BloodByte"],
        ai: ["Autonomous Job Agent", "AI Cricket Bowling Analyzer", "OpsGuardian", "BharatRank"]
    },
    "/api/hire-signal": {
        status: 200,
        message: "Proof-first fresher profile ready for internship and associate SDE conversations.",
        contact: "chandan.kumar.sah.teli2005@gmail.com"
    }
};

const page = document.body.dataset.page || "sde";
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");
const innerScroll = document.querySelector(".content-scroll");
const clock = document.getElementById("clock");
const themeToggleBtn = document.getElementById("theme-toggle");
const backToTopBtn = document.getElementById("back-to-top");

function updateClock() {
    if (!clock) return;
    clock.textContent = new Date().toLocaleTimeString("en-US", { hour12: false });
}

function navigateToSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    if (page === "portfolio") {
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        window.history.replaceState(null, "", `#${targetId}`);
        return;
    }

    navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${targetId}`);
    });

    sections.forEach((section) => section.classList.remove("active-section"));
    target.classList.add("active-section");

    if (innerScroll) {
        innerScroll.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function renderProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projects.map((project) => `
        <article class="project-card">
            <span class="project-kicker">${project.type}</span>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.problem}</p>
            <div class="project-proof">${project.proof}</div>
            <div class="project-tags">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>
            <div class="project-links">
                <a class="btn small" href="${project.url}" target="_blank" rel="noreferrer"><svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">${inlineIconPaths.github}</svg> Source</a>
            </div>
        </article>
    `).join("");
}

function renderPortfolioProjects(projects) {
    const container = document.getElementById("portfolio-projects");
    if (!container) return;

    container.innerHTML = projects.map((project) => `
        <article class="project-card">
            <span class="project-kicker">${project.type}</span>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.problem}</p>
            <div class="project-proof">${project.proof}</div>
            <div class="project-tags">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>
            <div class="project-links"><a class="btn quiet small" href="${project.url}" target="_blank" rel="noreferrer"><svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">${inlineIconPaths.github}</svg> View source</a></div>
        </article>
    `).join("");
    hydrateInlineIcons(container);
}

function renderPortfolioProof(cards) {
    const container = document.getElementById("proof-cards");
    if (!container) return;

    container.innerHTML = cards.map((card) => `
        <article class="proof-card">
            <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">${inlineIconPaths[card.icon === "fa-list-check" ? "list" : card.icon === "fa-code-branch" ? "code" : card.icon === "fa-graduation-cap" ? "graduation" : card.icon === "fa-server" ? "server" : card.icon === "fa-database" ? "database" : "wand"]}</svg>
            <h3>${card.title}</h3>
            <p>${card.text}</p>
        </article>
    `).join("");
    hydrateInlineIcons(container);
}

function renderPortfolioSkills(categories, curriculum = []) {
    const container = document.getElementById("portfolio-skills");
    if (!container) return;

    const categoryCards = categories.map((category) => `
        <article class="skill-category">
            <h3>${category.title}</h3>
            <p>${category.note}</p>
            <div class="tag-row">${category.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
    `).join("");
    const curriculumDetails = curriculum.length ? `
        <details class="curriculum-details">
            <summary><span><strong>Associate Automation Engineer roadmap</strong><small>Expand curriculum topics · learning focus, not claimed proficiency</small></span><svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">${inlineIconPaths.plus}</svg></summary>
            <div class="curriculum-grid">${curriculum.map((group) => `
                <article class="curriculum-group">
                    <h4>${group.title}</h4>
                    <div class="tag-row">${group.topics.map((topic) => `<span>${topic}</span>`).join("")}</div>
                </article>
            `).join("")}</div>
        </details>` : "";
    container.innerHTML = `${categoryCards}${curriculumDetails}`;
    hydrateInlineIcons(container);
}

function addEvidenceCard(container, item, kind) {
    const card = document.createElement("article");
    card.className = "evidence-card";

    const label = document.createElement("span");
    label.className = "evidence-kicker";
    label.textContent = item.category || kind;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description || "";
    card.append(label, title, description);

    if (item.issuer || item.date) {
        const detail = document.createElement("span");
        detail.className = "evidence-detail";
        detail.textContent = [item.issuer, item.date].filter(Boolean).join(" · ");
        card.append(detail);
    }

    if (typeof item.url === "string") {
        try {
            const url = new URL(item.url);
            if (url.protocol === "https:") {
                const link = document.createElement("a");
                link.className = "text-link";
                link.href = url.href;
                link.target = "_blank";
                link.rel = "noreferrer";
                link.textContent = kind === "Certificate" ? "Verify certificate ↗" : "View GitHub project ↗";
                card.append(link);
            }
        } catch (error) {
            console.error("Skipped an evidence link with an invalid URL.", error);
        }
    }

    container.append(card);
    hydrateInlineIcons(card);
}

function renderPortfolioEvidence(role) {
    const highlightContainer = document.getElementById("portfolio-evidence");
    const certificateContainer = document.getElementById("portfolio-certificates");
    if (!highlightContainer || !certificateContainer || !portfolioEvidence) return;

    highlightContainer.replaceChildren();
    certificateContainer.replaceChildren();
    portfolioEvidence.highlights
        .filter((item) => item.role === role)
        .forEach((item) => addEvidenceCard(highlightContainer, item, "GitHub project"));

    const certificates = portfolioEvidence.certificates.filter((item) => !item.role || item.role === role);
    certificates.forEach((item) => addEvidenceCard(certificateContainer, item, "Certificate"));
    certificateContainer.hidden = certificates.length === 0;
}

async function loadPortfolioEvidence() {
    const status = document.getElementById("evidence-status");
    try {
        const response = await fetch("./portfolio-evidence.json");
        if (!response.ok) throw new Error(`Evidence request failed with HTTP ${response.status}.`);
        const evidence = await response.json();
        if (!Array.isArray(evidence.highlights) || !Array.isArray(evidence.certificates)) {
            throw new Error("The portfolio evidence file must contain highlights and certificates arrays.");
        }
        portfolioEvidence = evidence;
        renderPortfolioEvidence(selectedPortfolioRole);
        if (status) status.textContent = "";
    } catch (error) {
        console.error("Could not load portfolio evidence.", error);
        if (status) status.textContent = "GitHub highlights are unavailable. Open the public GitHub profile to view the projects.";
    }
}

function updateReel(index = reelIndex + 1) {
    const projects = portfolioProfiles[selectedPortfolioRole].projects;
    if (!projects.length) return;

    reelIndex = ((index % projects.length) + projects.length) % projects.length;
    const project = projects[reelIndex];
    const player = document.getElementById("reel-player");
    document.getElementById("reel-index").textContent = `${String(reelIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
    document.getElementById("reel-big-type").textContent = selectedPortfolioRole === "tester" ? "QA" : "AI";
    document.getElementById("reel-category").textContent = project.type.toUpperCase();
    document.getElementById("reel-title").textContent = project.name;
    document.getElementById("reel-description").textContent = project.problem;
    document.getElementById("reel-source-link").href = project.url;
    player.dataset.role = selectedPortfolioRole;
    player.classList.remove("reel-transition");
    window.requestAnimationFrame(() => {
        player.classList.add("reel-transition");
        if (!reelPlaying) renderReelFrame();
    });
}

function renderReelFrame(timestamp = 0) {
    if (!reelCanvas || !reelContext) return;
    const context = reelContext;
    const width = reelCanvas.width;
    const height = reelCanvas.height;
    const time = timestamp / 1000;
    const isTester = selectedPortfolioRole === "tester";
    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, isTester ? "#17433f" : "#292450");
    background.addColorStop(0.58, "#111827");
    background.addColorStop(1, isTester ? "#081318" : "#0d1020");
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    const glowX = width * (0.72 + Math.sin(time * 0.34) * 0.08);
    const glowY = height * (0.25 + Math.cos(time * 0.27) * 0.08);
    const glow = context.createRadialGradient(glowX, glowY, 8, glowX, glowY, height * 0.65);
    glow.addColorStop(0, isTester ? "rgba(196,243,107,.3)" : "rgba(156,139,255,.32)");
    glow.addColorStop(1, "rgba(15,18,30,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    context.globalAlpha = 0.12;
    context.strokeStyle = "#dce7ff";
    context.lineWidth = 1;
    for (let x = -height; x < width + height; x += 64) {
        context.beginPath();
        context.moveTo(x + (time * 18 % 64), 0);
        context.lineTo(x - height + (time * 18 % 64), height);
        context.stroke();
    }
    context.globalAlpha = 1;

    if (reelPlaying) reelFrame = window.requestAnimationFrame(renderReelFrame);
}

function initializeReelVideo() {
    const video = document.getElementById("portfolio-reel-video");
    if (!video || typeof HTMLCanvasElement.prototype.captureStream !== "function") return;

    reelCanvas = document.createElement("canvas");
    reelCanvas.width = 1280;
    reelCanvas.height = 800;
    reelContext = reelCanvas.getContext("2d", { alpha: false });
    if (!reelContext) return;

    video.srcObject = reelCanvas.captureStream(24);
    renderReelFrame();
}

function setReelPlaying(playing) {
    const player = document.getElementById("reel-player");
    const button = document.getElementById("reel-toggle");
    const video = document.getElementById("portfolio-reel-video");
    if (!player || !button) return;

    reelUserPlaying = playing;
    const wasPlaying = reelPlaying;
    reelPlaying = playing && !reelHoverPaused && !reelVisibilityPaused;
    window.clearInterval(reelTimer);
    player.classList.toggle("is-playing", reelPlaying);
    button.setAttribute("aria-pressed", String(reelPlaying));
    button.innerHTML = reelPlaying
        ? '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z"/></svg> Pause reel'
        : '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg> Play reel';

    if (reelPlaying) {
        if (!wasPlaying) renderReelFrame();
        if (video && video.srcObject) {
            video.play().catch((error) => {
                console.error("Could not start the portfolio motion reel.", error);
                document.getElementById("reel-status").textContent = "Video playback is unavailable in this browser. You can still browse each project with the reel arrows.";
            });
        }
        reelTimer = window.setInterval(() => updateReel(), 5200);
    } else {
        if (reelFrame) window.cancelAnimationFrame(reelFrame);
        reelFrame = null;
        if (video) video.pause();
    }
}

function navigateReel(direction) {
    updateReel(reelIndex + direction);
    if (reelPlaying) setReelPlaying(true);
}

function refreshPortfolioReveals() {
    if (!portfolioMotionStarted || !portfolioRevealObserver) return;

    const revealTargets = document.querySelectorAll(
        ".section-intro, .section-title-row, .proof-card, .project-card, .skill-category, .about-layout > .eyebrow, .about-layout > div, .contact-inner > div"
    );
    revealTargets.forEach((element) => {
        element.classList.add("reveal");
        portfolioRevealObserver.observe(element);
    });

    document.querySelectorAll(".proof-grid, .portfolio-projects, .skill-board").forEach((group) => {
        Array.from(group.children).forEach((item, index) => {
            item.style.setProperty("--reveal-delay", `${Math.min(index * 90, 270)}ms`);
        });
    });

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".project-card:not([data-tilt-bound])").forEach((card) => {
            card.dataset.tiltBound = "true";
            card.addEventListener("pointermove", (event) => {
                const bounds = card.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width;
                const y = (event.clientY - bounds.top) / bounds.height;
                card.style.setProperty("--pointer-x", `${x * 100}%`);
                card.style.setProperty("--pointer-y", `${y * 100}%`);
                card.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
                card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
            });
            card.addEventListener("pointerleave", () => {
                card.style.setProperty("--tilt-x", "0deg");
                card.style.setProperty("--tilt-y", "0deg");
            });
        });
    }
}

function updatePortfolioScrollState() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100)) : 0;
    const progressBar = document.getElementById("scroll-progress-bar");
    if (progressBar) progressBar.style.width = `${progress}%`;

    const hero = document.querySelector(".hero-inner");
    if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        hero.style.setProperty("--hero-parallax", `${Math.min(window.scrollY, 500) * 0.045}px`);
    }

    const header = document.querySelector(".site-header");
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    const activeSection = Array.from(document.querySelectorAll("main > section[id]"))
        .filter((section) => section.getBoundingClientRect().top <= headerBottom + 100)
        .pop();
    const activeId = activeSection?.id;
    document.querySelectorAll(".site-nav a[href^='#']").forEach((link) => {
        if (link.getAttribute("href") === `#${activeId}`) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function setupPortfolioMotion() {
    if (page !== "portfolio") return;
    document.body.classList.add("portfolio-ready");

    if (!portfolioMotionStarted) {
        portfolioMotionStarted = true;
        if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            portfolioRevealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });
        }

        window.addEventListener("scroll", () => {
            if (scrollFrameRequested) return;
            scrollFrameRequested = true;
            window.requestAnimationFrame(() => {
                updatePortfolioScrollState();
                scrollFrameRequested = false;
            });
        }, { passive: true });

        window.addEventListener("resize", updatePortfolioScrollState, { passive: true });
        updatePortfolioScrollState();

        const reelPlayer = document.getElementById("reel-player");
        if (reelPlayer) {
            reelPlayer.tabIndex = 0;
            reelPlayer.addEventListener("mouseenter", () => {
                reelHoverPaused = true;
                setReelPlaying(reelUserPlaying);
            });
            reelPlayer.addEventListener("mouseleave", () => {
                reelHoverPaused = false;
                setReelPlaying(reelUserPlaying);
            });
            reelPlayer.addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                    event.preventDefault();
                    navigateReel(event.key === "ArrowLeft" ? -1 : 1);
                }
            });

            if ("IntersectionObserver" in window) {
                const reelObserver = new IntersectionObserver((entries) => {
                    reelVisibilityPaused = !entries[0].isIntersecting;
                    setReelPlaying(reelUserPlaying);
                }, { threshold: 0.18 });
                reelObserver.observe(reelPlayer);
            }
        }
    }

    refreshPortfolioReveals();
    updatePortfolioScrollState();
}

function restorePortfolioHashPosition() {
    if (!window.location.hash) return;
    const targetId = window.location.hash.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
            target.scrollIntoView({ behavior, block: "start" });
        });
    });
}

function updateIntroSlide(role) {
    if (!portfolioProfiles[role]) return;
    selectedPortfolioRole = role;
    document.querySelectorAll("[data-intro-role]").forEach((slide) => {
        const active = slide.dataset.introRole === role;
        slide.hidden = !active;
        slide.tabIndex = active ? 0 : -1;
        slide.setAttribute("aria-hidden", String(!active));
        slide.classList.toggle("is-active", active);
    });
    document.querySelectorAll("[data-intro-select]").forEach((button) => {
        const active = button.dataset.introSelect === role;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    document.getElementById("intro-counter").textContent = role === "tester" ? "02 / 02" : "01 / 02";
}

function updateProfileSwitcher(role) {
    document.querySelectorAll("[data-profile-switch]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.profileSwitch === role));
    });
}

function applyPortfolioRole(role) {
    if (!portfolioProfiles[role]) return;
    const profile = portfolioProfiles[role];
    selectedPortfolioRole = role;
    document.body.dataset.role = role;
    document.title = `Chandan Kumar Sah Teli | ${role === "tester" ? "QA Automation Tester" : "AI Developer"}`;
    const qaHealthToggle = document.getElementById("qa-health-toggle");
    if (qaHealthToggle) qaHealthToggle.hidden = role !== "tester";
    const qaHealthPanel = document.getElementById("qa-health-panel");
    if (qaHealthPanel && role !== "tester") qaHealthPanel.hidden = true;
    document.querySelectorAll("[data-resume-link]").forEach((link) => {
        link.href = profile.resumeUrl;
    });
    updateProfileSwitcher(role);
    document.getElementById("profile-eyebrow").textContent = profile.eyebrow;
    document.getElementById("hero-title").innerHTML = profile.heroTitle;
    document.getElementById("hero-summary").textContent = profile.heroSummary;
    document.getElementById("hero-proof").innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">${inlineIconPaths.shield}</svg> ${profile.heroProof}`;
    document.getElementById("snapshot-title").textContent = profile.snapshotTitle;
    document.getElementById("snapshot-summary").textContent = profile.snapshotSummary;
    document.getElementById("hero-bottom-label").textContent = profile.bottomLabel;
    document.getElementById("proof-heading").textContent = profile.proofHeading;
    document.getElementById("proof-intro").textContent = profile.proofIntro;
    document.getElementById("projects-heading").textContent = profile.projectHeading;
    document.getElementById("projects-intro").textContent = profile.projectIntro;
    document.getElementById("skills-heading").textContent = profile.skillsHeading;
    document.getElementById("skills-intro").textContent = profile.skillsIntro;
    document.getElementById("about-heading").textContent = profile.aboutHeading;
    document.getElementById("about-copy").textContent = profile.aboutCopy;
    document.getElementById("contact-heading").textContent = profile.contactHeading;
    document.getElementById("contact-copy").textContent = profile.contactCopy;
    document.querySelector(".brand-name small").textContent = profile.contactLabel;
    document.querySelector(".projects-all-link").innerHTML = `${role === "tester" ? "All repositories" : "ChandanLabs"} <svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true">${inlineIconPaths.external}</svg>`;
    document.querySelector(".quick-links").setAttribute("aria-label", `${role === "tester" ? "QA tester" : "Developer"} direct contact and profiles`);
    hydrateInlineIcons();
    renderPortfolioProof(profile.proofCards);
    renderPortfolioProjects(profile.projects);
    renderPortfolioSkills(profile.skills, profile.curriculum);
    renderPortfolioEvidence(role);
    updateReel(0);
    refreshPortfolioReveals();
}

function setPortfolioInert(inert) {
    ["site-header", "main-content", "site-footer"].forEach((id) => {
        const element = document.getElementById(id);
        element.inert = inert;
        if (inert) element.setAttribute("aria-hidden", "true");
        else element.removeAttribute("aria-hidden");
    });
}

function openRoleIntro() {
    if (!portfolioStarted) return;
    introReturnScroll = window.scrollY;
    const intro = document.getElementById("role-intro");
    intro.hidden = false;
    intro.inert = false;
    document.body.classList.add("role-intro-active");
    setPortfolioInert(true);
    updateIntroSlide(document.body.dataset.role);
    document.querySelector(`[data-intro-role="${selectedPortfolioRole}"]`).focus();
}

function selectPortfolioRole(role) {
    if (!portfolioProfiles[role]) return;
    const returningToPortfolio = portfolioStarted;
    applyPortfolioRole(role);

    const intro = document.getElementById("role-intro");
    intro.hidden = true;
    intro.inert = true;
    document.body.classList.remove("role-intro-active");
    setPortfolioInert(false);
    if (returningToPortfolio) {
        window.scrollTo({ top: introReturnScroll, behavior: "auto" });
    } else {
        window.scrollTo({ top: 0, behavior: "auto" });
    }

    portfolioStarted = true;
    setupPortfolioMotion();
    if (!returningToPortfolio && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setReelPlaying(true);
    }
    if (returningToPortfolio) {
        document.querySelector(".brand-lockup").focus({ preventScroll: true });
    } else {
        document.getElementById("hero-title").focus({ preventScroll: true });
        restorePortfolioHashPosition();
    }
}

function setupPortfolio() {
    if (page !== "portfolio") return;
    document.getElementById("footer-year").textContent = new Date().getFullYear();
    hydrateInlineIcons();
    applyPortfolioRole("developer");
    updateIntroSlide("developer");
    initializeReelVideo();

    document.querySelectorAll("[data-intro-role]").forEach((slide) => {
        slide.addEventListener("click", () => selectPortfolioRole(slide.dataset.introRole));
        slide.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectPortfolioRole(slide.dataset.introRole);
            }
        });
    });
    document.getElementById("intro-previous").addEventListener("click", () => updateIntroSlide(selectedPortfolioRole === "developer" ? "tester" : "developer"));
    document.getElementById("intro-next").addEventListener("click", () => updateIntroSlide(selectedPortfolioRole === "developer" ? "tester" : "developer"));
    document.querySelectorAll("[data-intro-select]").forEach((button) => {
        button.addEventListener("click", () => updateIntroSlide(button.dataset.introSelect));
    });
    document.querySelectorAll("[data-profile-switch]").forEach((button) => {
        button.addEventListener("click", () => applyPortfolioRole(button.dataset.profileSwitch));
    });
    document.getElementById("back-to-intro").addEventListener("click", openRoleIntro);
    document.getElementById("reel-toggle").addEventListener("click", () => setReelPlaying(!reelPlaying));
    document.getElementById("reel-previous").addEventListener("click", () => navigateReel(-1));
    document.getElementById("reel-next").addEventListener("click", () => navigateReel(1));
    document.querySelectorAll(".role-switch").forEach((button) => button.addEventListener("click", openRoleIntro));
    const qaHealthToggle = document.getElementById("qa-health-toggle");
    const qaHealthPanel = document.getElementById("qa-health-panel");
    const qaHealthOutput = document.getElementById("qa-health-output");
    const qaHealthCount = document.getElementById("qa-health-count");
    qaHealthToggle?.addEventListener("click", async () => {
        if (!qaHealthPanel || !qaHealthOutput || !qaHealthCount) return;
        qaHealthPanel.hidden = false;
        qaHealthPanel.open = true;
        const startedAt = performance.now();
        qaHealthOutput.textContent = "$ running portfolio health checks\n";
        const checks = [];

        let evidenceLoaded = false;
        try {
            const response = await fetch("./portfolio-evidence.json", { cache: "no-store" });
            evidenceLoaded = response.ok && Array.isArray((await response.json()).highlights);
        } catch (error) {
            evidenceLoaded = false;
        }
        checks.push({ name: "portfolio-evidence.json loaded and parsed", passed: evidenceLoaded });

        const repositoryAndResumeLinks = Array.from(document.querySelectorAll(
            "#portfolio-projects a[href], #portfolio-evidence a[href], [data-resume-link][href]"
        ));
        checks.push({
            name: "Project and resume links have valid href attributes",
            passed: repositoryAndResumeLinks.length > 0 && repositoryAndResumeLinks.every((link) => {
                const href = link.getAttribute("href")?.trim();
                return Boolean(href && href !== "#");
            })
        });

        const placeholderVisible = Array.from(document.querySelectorAll("body *"))
            .some((element) => element.children.length === 0 &&
                /No\s+verified\s+certificates/i.test(element.textContent));
        checks.push({
            name: "No certificate placeholder text is visible",
            passed: !placeholderVisible
        });

        const elapsed = Math.max(1, Math.round(performance.now() - startedAt));
        const passed = checks.filter((check) => check.passed).length;
        qaHealthCount.textContent = `${passed}/${checks.length} PASS · ${elapsed} ms`;
        qaHealthOutput.textContent = "$ running portfolio health checks\n" + checks.map((check) =>
            `${check.passed ? "PASS" : "FAIL"}  ${check.name}`
        ).join("\n") + `\n\n${passed}/${checks.length} assertions passed · ${elapsed} ms`;
    });
    document.addEventListener("keydown", (event) => {
        if (!document.body.classList.contains("role-intro-active")) return;
        if (event.key === "ArrowLeft") {
            updateIntroSlide(selectedPortfolioRole === "developer" ? "tester" : "developer");
            document.querySelector(`[data-intro-role="${selectedPortfolioRole}"]`).focus();
        } else if (event.key === "ArrowRight") {
            updateIntroSlide(selectedPortfolioRole === "developer" ? "tester" : "developer");
            document.querySelector(`[data-intro-role="${selectedPortfolioRole}"]`).focus();
        }
    });
    loadPortfolioEvidence();
}

function startTyping() {
    const element = document.getElementById("typing-role");
    if (!element) return;

    const roles = rolesByPage[page] || rolesByPage.sde;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
        const role = roles[roleIndex];
        element.textContent = role.slice(0, charIndex);

        if (isDeleting) {
            charIndex -= 1;
        } else {
            charIndex += 1;
        }

        if (!isDeleting && charIndex > role.length) {
            isDeleting = true;
            setTimeout(tick, 1200);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(tick, isDeleting ? 45 : 85);
    }

    tick();
}

function setupTheme() {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector("i");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        icon?.classList.replace("fa-sun", "fa-moon");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const light = document.body.classList.contains("light-mode");
        localStorage.setItem("theme", light ? "light" : "dark");
        if (icon) {
            icon.classList.toggle("fa-sun", !light);
            icon.classList.toggle("fa-moon", light);
        }
    });
}

function setupBackToTop() {
    if (!backToTopBtn) return;
    const update = (scrollTop) => backToTopBtn.classList.toggle("show", scrollTop > 240);
    innerScroll?.addEventListener("scroll", (event) => update(event.target.scrollTop));
    window.addEventListener("scroll", () => update(window.scrollY));
    backToTopBtn.addEventListener("click", () => {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        window.scrollTo({ top: 0, behavior });
        innerScroll?.scrollTo({ top: 0, behavior });
    });
}

function setupApiConsole() {
    const endpointInput = document.getElementById("api-endpoint");
    const methodSelect = document.getElementById("http-method");
    const requestBody = document.getElementById("api-request-body");
    const responseElement = document.getElementById("json-response");
    const sendButton = document.getElementById("send-request");
    const statusBadge = document.getElementById("api-status-badge");
    const responseTime = document.getElementById("api-response-time");
    const copyResponse = document.getElementById("copy-response");
    const copyCurl = document.getElementById("copy-curl");
    if (!endpointInput || !responseElement || !sendButton) return;

    let lastResponseText = "";

    const updateRequestVisibility = () => {
        const isPost = methodSelect?.value === "POST";
        if (requestBody) {
            requestBody.hidden = !isPost;
            if (isPost && !requestBody.value.trim()) {
                const role = document.body.dataset.role === "tester" ? "QA Automation" : "AI Developer";
                requestBody.value = role === "QA Automation"
                    ? '{"targetRole":"QA Automation","skills":["Java","Selenium","REST API"]}'
                    : '{"targetRole":"AI Developer","skills":["Node.js","REST APIs","AI Integration"]}';
            }
        }
    };

    methodSelect?.addEventListener("change", updateRequestVisibility);

    document.querySelectorAll("[data-endpoint]").forEach((button) => {
        button.addEventListener("click", () => {
            endpointInput.value = button.dataset.endpoint;
        });
    });

    sendButton.addEventListener("click", () => {
        const endpoint = endpointInput.value.trim();
        const method = methodSelect?.value || "GET";
        responseElement.textContent = "// Processing...";
        if (statusBadge) {
            statusBadge.textContent = "Processing";
            statusBadge.className = "http-status";
        }
        const startedAt = performance.now();
        window.setTimeout(() => {
            let statusCode = 200;
            let parsedBody = null;
            if (method === "POST") {
                try {
                    parsedBody = JSON.parse(requestBody?.value || "");
                } catch (error) {
                    statusCode = 400;
                }
            }

            const activeProfile = portfolioProfiles[document.body.dataset.role];
            const activeResponses = page === "portfolio" && activeProfile ? {
                "/api/profile-readiness": {
                    status: 200,
                    candidate: "Chandan Kumar Sah Teli",
                    profile: document.body.dataset.role === "tester" ? "QA Automation Tester" : "Developer",
                    focus: activeProfile.snapshotTitle,
                    graduation: "B.Tech CSE, graduating 2027",
                    query: parsedBody
                },
                "/api/strongest-projects": {
                    status: 200,
                    profile: document.body.dataset.role === "tester" ? "QA Automation" : "AI Developer",
                    projects: activeProfile.projects.map((project) => ({ name: project.name, purpose: project.problem, technologies: project.stack })),
                    query: parsedBody
                },
                "/api/hire-signal": {
                    status: 201,
                    message: activeProfile.contactCopy,
                    contact: "chandan.kumar.sah.teli2005@gmail.com",
                    profile: document.body.dataset.role === "tester" ? "QA Automation" : "AI Developer",
                    query: parsedBody
                }
            } : apiResponses;

            let response;
            if (statusCode === 400) {
                response = {
                    status: 400,
                    error: "Bad Request",
                    message: "POST body must be valid JSON."
                };
            } else {
                response = activeResponses[endpoint];
                if (!response) {
                    statusCode = 404;
                    response = { status: 404, error: "Endpoint not found", available: Object.keys(activeResponses) };
                }
            }

            lastResponseText = JSON.stringify(response, null, 2);
            responseElement.textContent = lastResponseText;
            const elapsed = Math.max(1, Math.round(performance.now() - startedAt));
            if (responseTime) responseTime.textContent = `${elapsed} ms`;
            if (statusBadge) {
                statusBadge.textContent = statusCode === 200 ? "200 OK" : statusCode === 400 ? "400 Bad Request" : "404 Not Found";
                statusBadge.className = `http-status ${statusCode >= 400 ? "is-error" : "is-success"}`;
            }
        }, 350);
    });

    copyResponse?.addEventListener("click", async () => {
        if (!lastResponseText) return;
        await navigator.clipboard?.writeText(lastResponseText);
        copyResponse.textContent = "Copied";
        window.setTimeout(() => { copyResponse.textContent = "Copy Response"; }, 1200);
    });

    copyCurl?.addEventListener("click", async () => {
        const method = methodSelect?.value || "GET";
        const body = method === "POST" ? ` -d '${requestBody?.value || "{}"}'` : "";
        const curl = `curl -X ${method} '${location.origin}${endpointInput.value.trim()}'${body}`;
        await navigator.clipboard?.writeText(curl);
        copyCurl.textContent = "Copied";
        window.setTimeout(() => { copyCurl.textContent = "Copy cURL"; }, 1200);
    });

    updateRequestVisibility();
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("visitor-email")?.value.trim();
        const message = document.getElementById("visitor-message")?.value.trim();
        const body = [
            message || "Hi Chandan, I saw your portfolio and would like to connect.",
            "",
            email ? `From: ${email}` : ""
        ].join("\n");

        const mailto = new URL("mailto:chandan.kumar.sah.teli2005@gmail.com");
        mailto.searchParams.set("subject", "Portfolio opportunity");
        mailto.searchParams.set("body", body);
        window.location.href = mailto.toString();
    });
}

document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || page === "portfolio") return;
    event.preventDefault();
    navigateToSection(anchor.getAttribute("href").slice(1));
});

setInterval(updateClock, 1000);
updateClock();
setupPortfolio();
setupTheme();
setupBackToTop();
setupApiConsole();
setupContactForm();
startTyping();
renderProjects("sde-projects", sdeProjects);
renderProjects("ai-projects", aiProjects);
