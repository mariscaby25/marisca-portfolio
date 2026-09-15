# ==========================================
# Marisca Portfolio - Project Setup Script
# ==========================================

Write-Host ""
Write-Host "Setting up Marisca's portfolio..." -ForegroundColor Cyan
Write-Host ""

# Make sure we are inside the correct project
if (!(Test-Path "package.json")) {
    Write-Host "ERROR: package.json was not found." -ForegroundColor Red
    Write-Host "Please run this script from the marisca-portfolio folder."
    exit
}

# ------------------------------------------
# Create folders
# ------------------------------------------

$folders = @(
    "public\images",
    "public\documents",
    "src\components"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
        Write-Host "Created: $folder" -ForegroundColor Green
    }
    else {
        Write-Host "Already exists: $folder" -ForegroundColor Yellow
    }
}

# ------------------------------------------
# Create component files
# ------------------------------------------

$components = @(
    "Navbar.jsx",
    "Hero.jsx",
    "About.jsx",
    "Skills.jsx",
    "Projects.jsx",
    "Journey.jsx",
    "Resume.jsx",
    "Contact.jsx",
    "Footer.jsx"
)

foreach ($component in $components) {
    $path = "src\components\$component"

    if (!(Test-Path $path)) {
        New-Item -ItemType File -Path $path | Out-Null
        Write-Host "Created: $path" -ForegroundColor Green
    }
    else {
        Write-Host "Already exists: $path" -ForegroundColor Yellow
    }
}

# ------------------------------------------
# Create placeholder image files
# ------------------------------------------

$imageFiles = @(
    "profile.jpg",
    "freelancer-marketplace.png",
    "glowhair-store.png"
)

foreach ($image in $imageFiles) {
    $path = "public\images\$image"

    if (!(Test-Path $path)) {
        New-Item -ItemType File -Path $path | Out-Null
        Write-Host "Created placeholder: $path" -ForegroundColor Green
    }
}

# ------------------------------------------
# Create CV placeholder
# ------------------------------------------

$cvPath = "public\documents\Marisca-Boamah-Mintah-CV.pdf"

if (!(Test-Path $cvPath)) {
    New-Item -ItemType File -Path $cvPath | Out-Null
    Write-Host "Created CV placeholder: $cvPath" -ForegroundColor Green
}

# ------------------------------------------
# Create Navbar component
# ------------------------------------------

$navbar = @'
function Navbar() {
    return (
        <nav>
            <h2>MARISCA</h2>

            <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#journey">Journey</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
'@

Set-Content -Path "src\components\Navbar.jsx" -Value $navbar

# ------------------------------------------
# Create Hero component
# ------------------------------------------

$hero = @'
function Hero() {
    return (
        <section id="home">
            <p>WELCOME TO MY PORTFOLIO</p>

            <h1>
                Hi, I'm <span>Marisca</span>
            </h1>

            <h2>
                Computer Science Student & Aspiring Software Developer
            </h2>

            <p>
                I'm a Computer Science student at Accra Technical University
                with a growing passion for software development and web
                technologies. I enjoy turning ideas into practical digital
                solutions while continuously improving my programming and
                development skills.
            </p>

            <div>
                <a href="#projects">VIEW MY PROJECTS</a>
                <a href="#contact">GET IN TOUCH</a>
            </div>
        </section>
    );
}

export default Hero;
'@

Set-Content -Path "src\components\Hero.jsx" -Value $hero

# ------------------------------------------
# Create App.jsx
# ------------------------------------------

$app = @'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
        </>
    );
}

export default App;
'@

Set-Content -Path "src\App.jsx" -Value $app

# ------------------------------------------
# Create basic global CSS
# ------------------------------------------

$css = @'
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
    font-family: "DM Sans", sans-serif;
    color: #242321;
    background: #F8F5F0;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    min-width: 320px;
    background: #F8F5F0;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
a {
    cursor: pointer;
}
'@

Set-Content -Path "src\index.css" -Value $css

# ------------------------------------------
# Finish
# ------------------------------------------

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Portfolio setup completed successfully!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Created:"
Write-Host "  - public/images"
Write-Host "  - public/documents"
Write-Host "  - src/components"
Write-Host "  - Navbar.jsx"
Write-Host "  - Hero.jsx"
Write-Host "  - App.jsx"
Write-Host "  - index.css"
Write-Host ""
Write-Host "Your next step is:" -ForegroundColor Yellow
Write-Host "  npm run dev"
Write-Host ""