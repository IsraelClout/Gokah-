<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Gokah Israel</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{
    --primary:#3b82f6;
    --accent:#10b981;
    --dark:#0a0f1e;
    --card:#1f2937;
    --text:#e2e8f0;
}
*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',Arial,sans-serif}
body{background:var(--dark);color:var(--text);padding-bottom:80px}
html{scroll-behavior:smooth}

/* HEADER - APP STYLE */
.app-header{background:linear-gradient(135deg,#1e3a8a,#3b82f6);padding:30px 20px 40px;text-align:center;border-radius:0 0 30px 30px}
.profile-pic{width:100px;height:100px;border-radius:50%;border:3px solid white;object-fit:cover;margin-bottom:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3)}
.app-header h1{font-size:1.6rem;font-weight:700}
.app-header p{font-size:0.9rem;opacity:0.9;margin:3px 0}

/* BADGES */
.badge-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:12px 0}
.badge{background:rgba(255,255,255,0.2);padding:5px 12px;border-radius:20px;font-size:11px;font-weight:600;backdrop-filter:blur(10px)}

/* BUTTONS - BIG FOR MOBILE */
.btn{display:block;width:90%;margin:12px auto;padding:16px;border-radius:15px;text-decoration:none;text-align:center;font-weight:700;font-size:1rem;transition:0.2s}
.btn-primary{background:var(--primary);color:white;box-shadow:0 4px 15px rgba(59,130,246,0.4)}
.btn-whatsapp{background:#25D366;color:white;box-shadow:0 4px 15px rgba(37,211,102,0.4)}
.btn:active{transform:scale(0.97)}

/* CONTENT CARDS */
.container{padding:20px}
.section{margin-bottom:30px}
h2{font-size:1.3rem;color:#60a5fa;margin-bottom:15px;text-align:left}
.card{background:var(--card);padding:20px;border-radius:20px;margin-bottom:15px;border:1px solid #374151}

/* SKILLS - PILL STYLE */
.skills-wrap{display:flex;gap:8px;flex-wrap:wrap}
.skill{background:#111827;padding:8px 14px;border-radius:20px;font-size:12px;border:1px solid #374151}

/* PROJECT CARDS - PHONE APP STYLE */
.project-card{background:var(--card);border-radius:20px;overflow:hidden;margin-bottom:18px;border:1px solid #374151}
.project-card img{width:100%;height:160px;object-fit:cover}
.project-content{padding:15px}
.project-content h3{color:var(--primary);font-size:1.1rem;margin-bottom:8px}
.project-content p{font-size:0.9rem;opacity:0.9;margin-bottom:12px}
.btn-small{display:inline-block;background:var(--primary);color:white;padding:10px 18px;border-radius:12px;text-decoration:none;font-size:0.85rem;font-weight:600}

/* CONTACT CARD */
.contact-card{background:linear-gradient(135deg,#1f2937,#111827);padding:25px;border-radius:20px;text-align:center;border:1px solid #374151}
.contact-card p{margin:6px 0;font-size:0.9rem}

/* BOTTOM NAV - LIKE APP */
.bottom-nav{position:fixed;bottom:0;left:0;right:0;background:#111827;display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid #374151;z-index:100}
.nav-item{color:#9ca3af;text-decoration:none;font-size:11px;text-align:center}
.nav-item.active{color:var(--primary)}
.nav-icon{font-size:22px;display:block;margin-bottom:3px}

/* FOOTER */
footer{text-align:center;padding:20px;font-size:12px;color:#9ca3af}
</style>
</head>
<body>

<!-- HEADER -->
<header class="app-header">
    <img src="Snapchat-913655823.jpg" alt="Gokah Israel" class="profile-pic">
    <h1>GOKAH ISRAEL</h1>
    <p>Web Developer</p>
    <div class="badge-row">
        <span class="badge">HTML</span>
        <span class="badge">CSS</span>
        <span class="badge">JS</span>
        <span class="badge">Python</span>
    </div>
    <p>📍 Afienya, Greater Accra, Ghana</p>
</header>

<!-- MAIN BUTTONS -->
<a href="https://wa.me/233537254505" class="btn btn-whatsapp">💬 WhatsApp: 0537254505</a>
<a href="#projects" class="btn btn-primary">📱 View My Work</a>

<div class="container">

    <!-- ABOUT -->
    <div class="section">
        <h2>👋 About Me</h2>
        <div class="card">
            <p>I build fast, modern websites for schools, businesses, and startups in Ghana.</p>
            <p style="margin-top:10px"><b style="color:var(--accent)">I'm very ready to work with you.</b></p>
        </div>
    </div>

    <!-- SKILLS -->
    <div class="section">
        <h2>⚡ My Skills</h2>
        <div class="card">
            <div class="skills-wrap">
                <span class="skill">HTML5</span>
                <span class="skill">CSS3</span>
                <span class="skill">JavaScript</span>
                <span class="skill">Python</span>
                <span class="skill">Responsive</span>
                <span class="skill">GitHub</span>
                <span class="skill">Web Apps</span>
            </div>
        </div>
    </div>

    <!-- PROJECTS -->
    <div class="section" id="projects">
        <h2>🚀 My Projects</h2>
        
        <div class="project-card">
            <img src=Screenshot_20260717-213721.png " alt="CLOUT SMS">
            <div class="project-content">
                <h3>CLOUT SMS</h3>
                <p>School management system. Students, attendance, report cards, CSV export.</p>
                <a href="https://israelclout.github.io/Tipsy.clout/" target="_blank" class="btn-small">Open App</a>
            </div>
        </div>

        <div class="project-card">
            <img src="Screenshot_20260717-214130.png" alt="Movie Mate">
            <div class="project-content">
                <h3>Movie Mate</h3>
                <p>Movie discovery app. Browse, search, and view movie ratings.</p>
                <a href="https://israelclout.github.io/Movie-Mate-/" target="_blank" class="btn-small">Open App</a>
            </div>
        </div>

        <div class="project-card">
            <img src="https://via.placeholder.com/400x200/10b981/ffffff?text=BRAIN+MASTER" alt="Brain Master">
            <div class="project-content">
                <h3>Brain-Master</h3>
                <p>Quiz game with timer, lives, and Ghana GK questions.</p>
                <a href="https://israelclout.github.io/Brain-Master-/" target="_blank" class="btn-small">Play Now</a>
            </div>
        </div>
    </div>

    <!-- SERVICES -->
    <div class="section">
        <h2>🛠️ Services</h2>
        <div class="card">
            <p><b>🌐 Business Websites</b><br>Landing pages that convert visitors to customers</p>
        </div>
        <div class="card">
            <p><b>🏫 School Systems</b><br>Student records, grading, attendance, report cards</p>
        </div>
        <div class="card">
            <p><b>⚡ Web Apps</b><br>Custom dashboards, tools, and interactive apps</p>
        </div>
    </div>

    <!-- CONTACT -->
    <div class="section">
        <h2>📞 Contact</h2>
        <div class="contact-card">
            <p><b>Name:</b> Gokah Israel Ewoenam</p>
            <p><b>Location:</b> Afienya, Greater Accra</p>
            <p><b>WhatsApp:</b> 0537254505</p>
            <a href="https://wa.me/233537254505" class="btn btn-whatsapp" style="margin-top:15px;width:100%">Chat Now</a>
        </div>
    </div>

</div>

<!-- BOTTOM NAVIGATION -->
<nav class="bottom-nav">
    <a href="#" class="nav-item active"><span class="nav-icon">🏠</span>Home</a>
    <a href="#projects" class="nav-item"><span class="nav-icon">📱</span>Projects</a>
    <a href="#" class="nav-item"><span class="nav-icon">⚡</span>Services</a>
    <a href="https://wa.me/233537254505" class="nav-item"><span class="nav-icon">💬</span>Contact</a>
</nav>

<footer>
    © 2026 Gokah Web Solutions
</footer>

</body>
</html>
