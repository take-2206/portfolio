gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ===== DỮ LIỆU PROJECTS =====
const projectsData = [
  {
    id: 1,
    title: "Floral joy shop",
    images: [
  "img/project/flower-box.png",
  "img/project/flower.png",
  "img/project/fj-web.png"
],
    description: "季節の花々と個性あふれる花束を通して、大切な人へ「よろこび」を届けるフラワーショップ。花を贈る人、受け取る人、そのどちらにも心温まる体験を届けることをコンセプトとしています。",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://take-2206.github.io/floral-joy-shop/"
  },
  {
    id: 2,
    title: "ドライフルーツのナイムン店",
    images: [
  "img/project/zip.png",
  "img/project/point-card.png",
  "img/project/juice.png",
  "img/project/box.png"
],
    description: "ナイムンは、沖縄のトロピカルフルーツを使用したドライフルーツブランドです。「ナイムン」は沖縄の方言で「果物」を意味します。期間限定のポップアップストアでは、ドライフルーツやフルーツティーを通して、沖縄ならではの新しい味わいを提案しました。",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "#"
  },
  
  {
    id: 3,
    title: "花の世界展の催事",
    images: [
  "img/project/flower-event.png",
  "img/project/to-roi.png",
  
],
    description: "2025年大阪・関西万博をきっかけに、新商業施設「12mo（イツモ）」の集客向上を目的としたイベントを企画しました。世界50か国以上の国花を展示・販売し、それぞれの文化や花言葉に触れながら、大切な人へ贈る特別な一輪を選べる体験を提案しています。",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "#"
  },
  {
    id: 4,
    title: "Book Cover Design",
    images: [
  "img/project/book-cover.png",
  
],
    description: "『星の王子さま』の「大切なものは目に見えない」というメッセージをテーマに制作しました。小さな王子とキツネが星空を見上げるシーンをモチーフに、子どもの視点で見るシンプルで色彩豊かな世界を表現しています。子どもから大人まで、物語を通して愛や人とのつながりの大切さを感じられるデザインを目指しました。",
   tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "#"
  },
  {
    id: 5,
    title: "CD Cover",
    images: [
  "img/project/cd-cover.png",
 
],
    description: "クラシック音楽の美しさと感情の豊かさをテーマに、ピアノと月をモチーフとしたデザインを制作しました。落ち着いた色合いと幻想的な空間表現を通して、音楽の魅力を幅広い世代へ伝えることを目指しています。",
   tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "#"
  },
  {
    id: 6,
    title: "poster",
    images: [
  "img/project/poster1.png",
 
],
    description: "今回のポスター展のテーマは「オノマトペ」で、季節の思い出を表現することでした。私たちはその中から夏を題材に選びました。日本の夏といえば花火が思い浮かびます。夜空を見上げる少女の姿を通して、「日常の中にある小さな幸せや一瞬の輝きを大切にしてほしい」というメッセージを表現しています。その儚い瞬間も心に刻むことで、永遠の思い出になると考えました。ポスターを通して、あなた自身の大切な“夏の一瞬”を見つけてもらえれば嬉しいです。",
   tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "#"
  },
  {
    id: 7,
    title: "Craft Beer Logo",
    images: [
  
  "img/project/cherry.png",
  "img/project/melon.png",
  "img/project/lemon.png"
],
    description: "フルーツを使ったクラフトビールブランドのロゴデザインです。チェリー、メロン、レモンなど、それぞれのフレーバーを直感的に感じられるよう、フルーツのモチーフとタイポグラフィを組み合わせました。ポップで親しみやすい印象を持たせながらも、クラフト感のある手描きタッチを取り入れています。",
   tools: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "#"
  }
];

window.addEventListener("load", () => {
    setTimeout(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, 50);

  const plane = document.getElementById("plane");
  const hero = document.querySelector(".hero");
  const startBtn = document.getElementById("startBtn");
  const bg = document.querySelector(".bg");
  
  
  const projects = document.getElementById("projects");
 
// Canvas hố đen
  const canvas = document.getElementById("blackhole-canvas");
  const ctx = canvas.getContext("2d");

  let started = false;
  let canvasWidth = (canvas.width = window.innerWidth);
  let canvasHeight = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
  });

  /* =========================
     1. KHỞI TẠO HỆ THỐNG HẠT & BIẾN BÁN KÍNH GSAP
  ========================= */
  let blackHoleActive = false;
  let blackHoleProgress = 0; 
  
  // 【MẤU CHỐT】: Đối tượng chứa bán kính hiện tại để GSAP điều khiển to dần dần
  let blackHoleRadius = { value: 0 }; 
  const particles = [];
  
  for (let i = 0; i < 150; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * (canvasWidth * 0.4) + 60,
      speed: Math.random() * 0.02 + 0.01,
      size: Math.random() * 2 + 0.5,
      color: Math.random() > 0.4 ? "rgba(76, 29, 149, " : "rgba(141, 164, 255, " 
    });
  }

  // Hàm vẽ vòng lặp Render Canvas liên tục
  function drawBlackHole() {
    // Luôn xóa màn hình cũ để vẽ lại kích thước mới do GSAP cập nhật
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    const cx = canvasWidth / 2;
    const cy = canvasHeight / 2;

    // 【KHÚC VẼ VÒNG TRÒN ĐÃ ĐỔI SANG GSAP】
    // Lấy trực tiếp giá trị tăng dần đều mịn màng từ blackHoleRadius.value
    if (blackHoleRadius.value > 0) {
      ctx.beginPath();
      
      // Vẽ vòng tròn theo bán kính thực tế đang to dần của GSAP
      ctx.arc(cx, cy, blackHoleRadius.value, 0, Math.PI * 2);
      
      // Độ đậm đặc (opacity) của màu đen tăng dần theo tiến độ cuộn chuột
      const opacity = Math.min(blackHoleProgress * 7, 1);
      ctx.fillStyle = `rgba(15, 12, 30, ${opacity})`; 
      
      // Hiệu ứng phát sáng mờ ảo ở viền hố đen
      ctx.shadowBlur = (1 - blackHoleProgress) * 30; 
      ctx.shadowColor = "#4c1d95";
      ctx.fill();
      ctx.shadowBlur = 0; 
    }

    // Phần vẽ các hạt tinh vân xoáy quanh tâm
    if (blackHoleActive || blackHoleProgress > 0.001) {
      particles.forEach(p => {
        p.angle -= p.speed * (1 + blackHoleProgress * 4); 
        p.radius -= blackHoleProgress * 3;              

        if (p.radius <= 5) {
          p.radius = Math.random() * (canvasWidth * 0.3) + 80;
          p.angle = Math.random() * Math.PI * 2;
        }

        let px = cx + Math.cos(p.angle) * p.radius;
        let py = cy + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.radius / (canvasWidth * 0.4)) * (1 - blackHoleProgress * 0.2) + ")";
        ctx.fill();
      });
    }

    requestAnimationFrame(drawBlackHole);
  }

  // Chạy vòng lặp vẽ ngầm
  drawBlackHole();

  /* =========================
     2. THIẾT LẬP MÁY BAY BAN ĐẦU
  ========================= */
  gsap.set(plane, {
    opacity: 0,
    scale: 2,
    xPercent: -50,
    yPercent: -50,
    position: "fixed",
    top: "80%",
    left: "50%",
    zIndex: 9999
  });

  // Khóa ẩn sẵn trang Projects để không bị bay vào sớm trước khi hố đen phủ kín
  gsap.set("#projects", { opacity: 0, visibility: "hidden" });

  /* =========================
     3. HỆ THỐNG BAY TỰ DO BAN ĐẦU
  ========================= */
  function startFlight() {
    let progress = { value: 0 };

    gsap.to(progress, {
      value: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".journey",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      },
      onUpdate: () => {
        const v = progress.value;

        // Nếu chưa tới vùng hố đen, máy bay lượn sóng bồng bềnh
        if (!blackHoleActive) {
          gsap.set(plane, {
            x: 0,
            y: Math.sin(v * 12) * 15,
            rotation: Math.sin(v * 10) * 10 + Math.cos(v * 3) * 3,
            scale: 1 + Math.sin(v * 5) * 0.03,
            top: "80%",
            left: "50%",
            opacity: 1
          });
        }

        /* Phóng to background nhẹ */
        gsap.set(bg, { scale: 1 + v * 3 });

        /* Các lớp gió thổi hiệu ứng */
        
      }
    });
    
    

    /* =========================
       4. ĐIỀU KHIỂN CÁC TRANG TEXT TRƯỚC HỐ ĐEN (ABOUT, EDUCATION, SKILLS)
    ========================= */
    const earlySections = ["#about", "#education", "#skills"];

    earlySections.forEach((section, index) => {
      const enterX = index % 2 === 0 ? -600 : 600;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true
        }
      });

      tl.fromTo(section,
{
    x: enterX,
    opacity: 0,
    scale: .7
},
{
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 1
});

if(section === "#education"){

    tl.fromTo(".timeline-item",
    {
        y:30,
        opacity:0
    },
    {
        y:0,
        opacity:1,
        stagger:.3,
        duration:.6,
        ease:"power2.out"
    });

}

if(section === "#skills"){

    tl.fromTo(".cert-item",
    {
        x:-30,
        opacity:0
    },
    {
        x:0,
        opacity:1,
        stagger:.3,
        duration:.6,
        ease:"power2.out"
    });

}

tl.to(section,{
    opacity:1,
    duration:1
})

.to(section,{
    opacity:0,
    scale:1.1,
    filter:"blur(10px)"
});
    });

    

    /* =========================
       5. TIMELINE HỐ ĐEN: GSAP ĐIỀU KHIỂN VÒNG TRÒN TO DẦN ĐỀU VÀ HÚT MÁY BAY
    ========================= */
    
    let projectMarquee;

    const maxScreenRadius = Math.sqrt(
      canvasWidth * canvasWidth +
      canvasHeight * canvasHeight
    );

    const blackHoleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#blackhole-trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onUpdate: self => {
          blackHoleActive = true;
          blackHoleProgress = self.progress;
        }
      }
    });

    blackHoleTimeline
      // ===== CANVAS HIỂN THỊ =====
      .to(canvas, {
        opacity: 1,
        duration: 0.35
      })

      // ===== CẬP NHẬT TRẠNG THÁI HỐ ĐEN =====
      .to(window, {
        duration: 0.1,
        onUpdate: () => {
          blackHoleActive = true;
          blackHoleProgress = blackHoleTimeline.progress();
        }
      }, 0)

      // ===== VẼ HỐ ĐEN TO DẦN =====
      .to(blackHoleRadius, {
        value: maxScreenRadius,
        ease: "power2.inOut",
        duration: 1.25
      }, 0)

      // ===== MÁY BAY BỊ HÚT VÀO HỐ ĐEN =====
      .to(plane, {
        left: "50%",
        top: "50%",
        rotation: "+=1440",
        scale: 0,
        opacity: 0,
        duration: 1.15,
        ease: "power1.inOut"
      }, 0)

      // ===== PROJECT BẮT ĐẦU HIỂN THỊ =====
      .fromTo("#projects",
        {
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
          visibility: "hidden"
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          visibility: "visible",
          duration: 0.35,
          ease: "power2.out",

          onStart: () => {
            blackHoleActive = true;
            blackHoleProgress = 1;
            blackHoleRadius.value = maxScreenRadius;

            gsap.set(plane, {
              opacity: 0,
              scale: 0
            });
          }
        },
        1.08
      )

      // ===== CANVAS BIẾN MẤT ĐỂ LỘ PROJECT =====
      .to(canvas, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none"
      }, 1.2)

      // ===== PROJECT DI CHUYỂN VÀ BẮT ĐẦU ANIMATION MARQUEE =====
      .to("#projects", {
        opacity: 1,
        y: -300,
        duration: 0.45,

        onComplete: () => {
          if (!projectMarquee) {
           const track = document.querySelector(".project-track");

track.innerHTML += track.innerHTML;

const totalWidth = track.scrollWidth / 2;

projectMarquee = gsap.to(track, {
  x: -totalWidth,
  duration: 20,
  ease: "none",
  repeat: -1
});

let speedTimeout;

window.addEventListener("wheel", (e) => {

  const dir = e.deltaY > 0 ? 1 : -1;

  gsap.to(projectMarquee, {
    timeScale: dir > 0 ? 3 : 2,
    duration: 0.4
  });

  clearTimeout(speedTimeout);

  speedTimeout = setTimeout(() => {
    gsap.to(projectMarquee, {
      timeScale: 1,
      duration: 0.6
    });
  }, 150);
});

/* =========================
   SẮP XẾP PROJECT THEO VÒNG CUNG + ZOOM NHẸ KHI VÀO GIỮA
========================= */
const arcCards = track.querySelectorAll(".project-card");
const ARC_DEPTH = 90;      // độ cong xuống của vòng cung
const ARC_TILT = 12;       // độ nghiêng ra 2 bên
const ZOOM_AMOUNT = 0.16;  // mức zoom thêm khi card ở giữa

function updateProjectArc() {
  const centerX = window.innerWidth / 2;
  const maxDist = window.innerWidth / 2;

  arcCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const dist = cardCenterX - centerX;
    const norm = Math.max(-1, Math.min(1, dist / maxDist));
    const proximity = 1 - Math.abs(norm); // 1 = đang ở giữa, 0 = ở rìa

    const arcY = Math.pow(Math.abs(norm), 1.6) * ARC_DEPTH;
    const rotate = norm * ARC_TILT;
    const scale = 1 + proximity * ZOOM_AMOUNT;

    gsap.set(card, {
      y: arcY,
      rotation: rotate,
      scale: scale,
      zIndex: Math.round(proximity * 10) + 1
    });

    card.style.boxShadow = `0 ${10 + proximity * 30}px ${40 + proximity * 40}px rgba(0,0,0,${proximity * 0.35})`;
  });
}

gsap.ticker.add(updateProjectArc);
          }
        }
      }, 1.35);
  }

  /* =========================
     7. SỰ KIỆN NÚT START ĐẦU TRANG
  ========================= */
  startBtn.addEventListener("click", () => {
    if (started) return;
    started = true;

    const tl = gsap.timeline();
    tl.to(hero, { opacity: 0, scale: 1.1, duration: 1 })
      .to(plane, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
      .to(window, { duration: 1.5, scrollTo: ".journey" }, "-=0.5")
      .call(() => {
        startFlight();
        ScrollTrigger.refresh();
      });
  });

  /* =========================
     8. PROJECT MODAL SYSTEM
  ========================= */
  function initProjectModal() {
    const track = document.querySelector(".project-track");

    track.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;

      // Lấy index gốc (bỏ qua clone bằng % projectsData.length)
      const allCards = Array.from(track.querySelectorAll(".project-card"));
      const rawIndex = allCards.indexOf(card);
      const index = rawIndex % projectsData.length;

      openProjectModal(projectsData[index]);
    });
  }

  function openProjectModal(project) {
    const dotsHTML = project.images.map((_, i) =>
      `<button class="gallery-dot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`
    ).join("");

    const linkHTML = (project.link && project.link !== "#")
      ? `<a href="${project.link}" class="modal-link" target="_blank" rel="noopener">View Web</a>`
      : "";

    const modal = document.createElement("div");
    modal.className = "project-modal";
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-body">

          <div class="modal-left">
            <div class="modal-gallery-wrapper">
              <div class="modal-gallery">
                ${project.images.map(img => `<img src="${img}" class="gallery-img">`).join("")}
              </div>
              <button class="gallery-btn prev">&#8249;</button>
              <button class="gallery-btn next">&#8250;</button>
              <div class="gallery-dots">${dotsHTML}</div>
              <div class="gallery-counter"><span class="gallery-current">1</span> / ${project.images.length}</div>
            </div>
          </div>

          <div class="modal-info">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-description">${project.description}</p>
             ${linkHTML}
            <div class="modal-tech">
              <h4>Tools</h4>
              <div class="tech-list">
                ${project.tools.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
              </div>
            </div>
           
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Animation mở modal
    gsap.set(modal, { opacity: 0 });
    gsap.set(modal.querySelector(".modal-overlay"), { opacity: 0 });
    gsap.set(modal.querySelector(".modal-content"), { scale: 0.85, opacity: 0 });
    gsap.to(modal, { opacity: 1, duration: 0.3 });
    gsap.to(modal.querySelector(".modal-overlay"), { opacity: 1, duration: 0.3 });
    gsap.to(modal.querySelector(".modal-content"), { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.4)" });

    // Gallery logic
    const gallery = modal.querySelector(".modal-gallery");
    const imgs = modal.querySelectorAll(".gallery-img");
    const dots = modal.querySelectorAll(".gallery-dot");
    const counterEl = modal.querySelector(".gallery-current");
    let currentIndex = 0;
    

    function goTo(i) {
      currentIndex = Math.max(0, Math.min(i, imgs.length - 1));
      gsap.to(gallery, { x: -currentIndex * gallery.clientWidth, duration: 0.45, ease: "power2.out" });
      dots.forEach((d, di) => d.classList.toggle("active", di === currentIndex));
      counterEl.textContent = currentIndex + 1;
      modal.querySelector(".gallery-btn.prev").style.opacity = currentIndex === 0 ? "0.3" : "1";
      modal.querySelector(".gallery-btn.next").style.opacity = currentIndex === imgs.length - 1 ? "0.3" : "1";
    }

    modal.querySelector(".next").onclick = () => goTo(currentIndex + 1);
    modal.querySelector(".prev").onclick = () => goTo(currentIndex - 1);
    dots.forEach(dot => dot.addEventListener("click", () => goTo(+dot.dataset.i)));

    // Swipe touch support
    let touchStartX = 0;
    gallery.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    gallery.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(currentIndex + (diff > 0 ? 1 : -1));
    });

    // Keyboard arrow support
    const keyHandler = (e) => {
      if (e.key === "ArrowRight") goTo(currentIndex + 1);
      if (e.key === "ArrowLeft") goTo(currentIndex - 1);
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", keyHandler);

    goTo(0);

    // Close modal
    function closeModal() {
      document.removeEventListener("keydown", keyHandler);
      gsap.to(modal, { opacity: 0, duration: 0.3 });
      gsap.to(modal.querySelector(".modal-content"), {
        scale: 0.85, opacity: 0, duration: 0.3,
        onComplete: () => modal.remove()
      });
    }

    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.querySelector(".modal-overlay").addEventListener("click", closeModal);
  }

  // Gắn listener ngay — event delegation hoạt động kể cả khi card chưa có
  initProjectModal();

  // Đảm bảo #projects luôn nhận được click
  document.getElementById("projects").style.pointerEvents = "auto";
});