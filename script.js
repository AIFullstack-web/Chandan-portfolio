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
                proof: "The project description identifies integration tests using Jest and Supertest alongside workflow state and approval steps.",
                stack: ["TypeScript", "Motia", "Jest", "Supertest", "OpenAI"],
                url: "https://github.com/ChandanLabs/OpsGuardian"
            },
            {
                name: "Autonomous Job Agent",
                type: "Browser automation · AI workflow",
                problem: "A job-search workflow that gathers opportunities and prepares tailored application material.",
                proof: "The repository description includes a browser execution module using SeleniumBase as one part of a broader agent workflow.",
                stack: ["Python", "FastAPI", "LangGraph", "SeleniumBase"],
                url: "https://github.com/AIFullstack-web/Job-agent-"
            },
            {
                name: "Event Booking System",
                type: "REST API · Data correctness",
                problem: "An event and attendance API where booking correctness matters when demand overlaps.",
                proof: "The project description highlights request validation, Swagger documentation, and transaction-safe booking logic with SELECT FOR UPDATE.",
                stack: ["Node.js", "Express", "MySQL", "Sequelize", "Joi", "Swagger"],
                url: "https://github.com/ChandanLabs/Event_Booking_System"
            },
            {
                name: "The Phoenix Agent",
                type: "Service recovery · Verification",
                problem: "A Node.js service that detects a crash and attempts an automated recovery workflow.",
                proof: "The repository description says recovery is verified with tests; review the linked source for implementation details.",
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
        eyebrow: "BACKEND & FULL-STACK DEVELOPER · B.TECH CSE 2027",
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
        contactLabel: "BACKEND & FULL-STACK DEVELOPER",
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
                proof: "The project description highlights Node.js, Express, MySQL, validation, Swagger documentation, and transaction-safe booking logic.",
                stack: ["Node.js", "Express", "MySQL", "Sequelize", "Joi", "Docker"],
                url: "https://github.com/ChandanLabs/Event_Booking_System"
            },
            {
                name: "AI-First Laundry Management",
                type: "Full-stack API",
                problem: "A laundry order-management system with pricing, status transitions, filtering, and dashboard analytics.",
                proof: "The project description highlights MVC structure, REST endpoints, validated state flow, and a responsive frontend.",
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
        status: 201,
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
                <a class="btn small" href="${project.url}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> Source</a>
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
            <div class="project-links"><a class="btn quiet small" href="${project.url}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> View source</a></div>
        </article>
    `).join("");
}

function renderPortfolioProof(cards) {
    const container = document.getElementById("proof-cards");
    if (!container) return;

    container.innerHTML = cards.map((card) => `
        <article class="proof-card">
            <i class="fa-solid ${card.icon}" aria-hidden="true"></i>
            <h3>${card.title}</h3>
            <p>${card.text}</p>
        </article>
    `).join("");
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
            <summary><span><strong>Associate Automation Engineer roadmap</strong><small>Expand curriculum topics · learning focus, not claimed proficiency</small></span><i class="fa-solid fa-plus" aria-hidden="true"></i></summary>
            <div class="curriculum-grid">${curriculum.map((group) => `
                <article class="curriculum-group">
                    <h4>${group.title}</h4>
                    <div class="tag-row">${group.topics.map((topic) => `<span>${topic}</span>`).join("")}</div>
                </article>
            `).join("")}</div>
        </details>` : "";
    container.innerHTML = `${categoryCards}${curriculumDetails}`;
}

let selectedPortfolioRole = "tester";
let roleDialogReturnFocus = null;
let portfolioRevealObserver = null;
let portfolioMotionStarted = false;
let scrollFrameRequested = false;

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

function applyPortfolioRole(role, closeDialog = true) {
    const profile = portfolioProfiles[role] || portfolioProfiles.tester;
    document.body.dataset.role = role;
    document.title = `Chandan Kumar Sah Teli | ${role === "tester" ? "QA Automation Tester" : "Developer"}`;
    document.getElementById("profile-eyebrow").textContent = profile.eyebrow;
    document.getElementById("hero-title").innerHTML = profile.heroTitle;
    document.getElementById("hero-summary").textContent = profile.heroSummary;
    document.getElementById("hero-proof").innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${profile.heroProof}`;
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
    document.querySelector(".projects-all-link").innerHTML = `${role === "tester" ? "All repositories" : "ChandanLabs"} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    document.querySelector(".quick-links").setAttribute("aria-label", `${role === "tester" ? "QA tester" : "Developer"} direct contact and profiles`);
    renderPortfolioProof(profile.proofCards);
    renderPortfolioProjects(profile.projects);
    renderPortfolioSkills(profile.skills, profile.curriculum);
    refreshPortfolioReveals();
    if (closeDialog) {
        closeRoleDialog(false);
    }
}

function updateRoleSelection(role) {
    if (!portfolioProfiles[role]) return;
    selectedPortfolioRole = role;
    document.querySelectorAll("[data-select-role]").forEach((button) => {
        const selected = button.dataset.selectRole === role;
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("role-continue").innerHTML = `Continue as ${role === "tester" ? "Tester" : "Developer"} <i class="fa-solid fa-arrow-right"></i>`;
}

function openRoleDialog() {
    roleDialogReturnFocus = document.activeElement;
    const backdrop = document.getElementById("role-dialog-backdrop");
    backdrop.hidden = false;
    document.documentElement.classList.add("role-dialog-open");
    document.body.classList.add("role-dialog-open");
    document.querySelectorAll(".site-header, main, .site-footer").forEach((element) => {
        element.inert = true;
        element.setAttribute("aria-hidden", "true");
    });
    updateRoleSelection(document.body.dataset.role || "tester");
    document.querySelector(`[data-select-role="${selectedPortfolioRole}"]`).focus();
}

function closeRoleDialog(restorePage = true) {
    const backdrop = document.getElementById("role-dialog-backdrop");
    if (!backdrop || backdrop.hidden) return;
    backdrop.hidden = true;
    document.documentElement.classList.remove("role-dialog-open");
    document.body.classList.remove("role-dialog-open");
    document.querySelectorAll(".site-header, main, .site-footer").forEach((element) => {
        element.inert = false;
        element.removeAttribute("aria-hidden");
    });
    if (roleDialogReturnFocus && roleDialogReturnFocus !== document.body && !backdrop.contains(roleDialogReturnFocus) && typeof roleDialogReturnFocus.focus === "function") {
        roleDialogReturnFocus.focus();
    } else if (restorePage) {
        document.querySelector(".brand-lockup").focus();
    }
    if (restorePage) {
        setupPortfolioMotion();
        restorePortfolioHashPosition();
    }
}

function setupPortfolio() {
    if (page !== "portfolio") return;
    document.getElementById("footer-year").textContent = new Date().getFullYear();
    updateRoleSelection("tester");
    document.querySelectorAll("[data-select-role]").forEach((button) => {
        button.addEventListener("click", () => updateRoleSelection(button.dataset.selectRole));
    });
    document.getElementById("role-continue").addEventListener("click", () => applyPortfolioRole(selectedPortfolioRole));
    document.querySelectorAll(".role-switch").forEach((button) => button.addEventListener("click", openRoleDialog));
    document.addEventListener("keydown", (event) => {
        const backdrop = document.getElementById("role-dialog-backdrop");
        if (backdrop.hidden) return;
        if (event.key === "Escape") {
            applyPortfolioRole(document.body.dataset.role || "tester");
            return;
        }
        if (event.key === "Tab") {
            const focusable = Array.from(backdrop.querySelectorAll("button:not([disabled])"));
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
    applyPortfolioRole("tester", false);
    openRoleDialog();
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
    const responseElement = document.getElementById("json-response");
    const sendButton = document.getElementById("send-request");
    if (!endpointInput || !responseElement || !sendButton) return;

    document.querySelectorAll("[data-endpoint]").forEach((button) => {
        button.addEventListener("click", () => {
            endpointInput.value = button.dataset.endpoint;
        });
    });

    sendButton.addEventListener("click", () => {
        const endpoint = endpointInput.value.trim();
        responseElement.textContent = "// Processing...";
        setTimeout(() => {
            const activeProfile = portfolioProfiles[document.body.dataset.role];
            const activeResponses = page === "portfolio" && activeProfile ? {
                "/api/profile-readiness": {
                    status: 200,
                    candidate: "Chandan Kumar Sah Teli",
                    profile: document.body.dataset.role === "tester" ? "QA Automation Tester" : "Developer",
                    focus: activeProfile.snapshotTitle,
                    graduation: "B.Tech CSE, graduating 2027"
                },
                "/api/strongest-projects": {
                    status: 200,
                    projects: activeProfile.projects.map((project) => project.name)
                },
                "/api/hire-signal": {
                    status: 201,
                    message: activeProfile.contactCopy,
                    contact: "chandan.kumar.sah.teli2005@gmail.com"
                }
            } : apiResponses;
            const response = activeResponses[endpoint] || { status: 404, error: "Endpoint not found", available: Object.keys(activeResponses) };
            responseElement.textContent = JSON.stringify(response, null, 2);
        }, 350);
    });
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
