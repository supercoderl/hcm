import React, { useState } from 'react';

const ANIMATION_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@100;300;400;500;600;700&family=Crimson+Text:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.92);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  @keyframes pageTransitionIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(212, 175, 55, 0.6);
    }
  }

  .animate-fade-up {
    animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-fade-left {
    animation: fadeInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-fade-right {
    animation: fadeInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-slide-down {
    animation: slideInDown 0.6s ease-out;
  }

  .animate-scale {
    animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .animate-bounce {
    animation: bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .page-enter {
    animation: pageTransitionIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  li {
    list-style: none;
    margin-bottom: 1.2rem;
    color: #b8b5a8;
    line-height: 1.9;
  }

  li strong {
    color: #d4af37;
  }
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isExiting, setIsExiting] = useState(false);

  const navigateTo = (page) => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsExiting(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div style={styles.app}>
      <style>{ANIMATION_STYLES}</style>
      
      {/* Navigation */}
      <nav style={styles.nav} className="animate-slide-down">
        <a 
          onClick={() => navigateTo('home')} 
          style={{...styles.logo, cursor: 'pointer'}}
          onMouseEnter={(e) => e.target.style.color = '#fff'}
          onMouseLeave={(e) => e.target.style.color = '#d4af37'}
        >
          ⬢ MLN131
        </a>
        <ul style={styles.navLinks}>
          <li><a onClick={() => scrollToSection('concepts')} style={styles.navLink}>Khái Niệm</a></li>
          <li><a onClick={() => scrollToSection('vietnam')} style={styles.navLink}>Việt Nam</a></li>
          <li><a onClick={() => scrollToSection('solutions')} style={styles.navLink}>Giải Pháp</a></li>
          <li><a onClick={() => navigateTo('about')} style={styles.navLink}>Chi Tiết</a></li>
          <li><a onClick={() => navigateTo('contact')} style={styles.navLink}>Liên Hệ</a></li>
        </ul>
      </nav>

      <div className={isExiting ? '' : 'page-enter'}>
        {currentPage === 'home' && <HomePage scrollToSection={scrollToSection} navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
        {currentPage === 'contact' && <ContactPage navigateTo={navigateTo} />}
      </div>
    </div>
  );
}

function HomePage({ scrollToSection, navigateTo }) {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroContent} className="animate-fade-left">
            <div style={styles.heroTag} className="animate-fade-up">
              <span style={styles.tagDot}>●</span>
              Chủ Nghĩa Xã Hội Khoa Học
            </div>
            
            <h1 style={styles.heroTitle} className="animate-fade-up" style={{animationDelay: '0.15s'}}>
              Sứ Mệnh<br/>
              <span style={styles.heroHighlight}>Lịch Sử</span><br/>
              của Giai Cấp<br/>
              <span style={styles.heroHighlight}>Công Nhân</span>
            </h1>
            
            <p style={styles.heroDescription} className="animate-fade-up" style={{animationDelay: '0.3s'}}>
              Khám phá vai trò quyết định của giai cấp công nhân trong việc dẫn dắt nhân loại tiến tới một xã hội công bằng, văn minh và tiến bộ hơn.
            </p>
            
            <div style={styles.ctaButtons} className="animate-fade-up" style={{animationDelay: '0.45s'}}>
              <button 
                onClick={() => scrollToSection('benefits')} 
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.15)';
                }}
              >
                Khám Phá Ngay
              </button>
              
              <button 
                onClick={() => navigateTo('about')} 
                style={styles.btnSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#d4af37';
                }}
              >
                Xem Thuyết Trình
              </button>
            </div>
            
            <div style={styles.heroMeta} className="animate-fade-up" style={{animationDelay: '0.6s'}}>
              <span>📊 Thuyết Trình Chuyên Sâu</span>
              <span>🎓 Nội Dung Học Thuật</span>
            </div>
          </div>

          <div style={styles.heroVisual} className="animate-fade-right" style={{animationDelay: '0.2s'}}>
            <div style={styles.imagePlaceholderHero}>
              <div style={{fontSize: '6rem', animation: 'float 4s ease-in-out infinite'}}>🖼️</div>
            </div>
            <div style={styles.heroDecoration}></div>
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section style={styles.concepts} id="concepts">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Nền Tảng Lý Thuyết</span>
            <h2 style={styles.sectionTitle}>Quan Điểm<br/><span style={{color: '#d4af37'}}>Cơ Bản</span></h2>
            <p style={styles.sectionDescription}>Những khái niệm nền tảng của Chủ nghĩa Mác - Lênin về giai cấp công nhân</p>
          </div>

          <div style={styles.conceptsGrid}>
            {[
              { icon: '📚', title: 'Khái Niệm Giai Cấp', description: 'Giai cấp công nhân là một tập đoàn xã hội ổn định, phát triển cùng với nền công nghiệp hiện đại.' },
              { icon: '⚡', title: 'Sứ Mệnh Lịch Sử', description: 'Lãnh đạo nhân dân lao động xóa bỏ chế độ áp bức và xây dựng xã hội cộng sản.' },
              { icon: '🔧', title: 'Điều Kiện Thực Hiện', description: 'Yêu cầu Đảng Cộng sản lãnh đạo và xây dựng khối liên minh công - nông.' }
            ].map((card, idx) => (
              <ConceptCard 
                key={idx}
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={idx * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vietnam Section */}
      <section style={styles.vietnam} id="vietnam">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Thực Tiễn Đất Nước</span>
            <h2 style={styles.sectionTitle}>Giai Cấp Công Nhân<br/><span style={{color: '#d4af37'}}>Việt Nam</span></h2>
            <p style={styles.sectionDescription}>Đặc thù và vai trò của giai cấp công nhân Việt Nam trong bối cảnh phát triển</p>
          </div>

          <div style={styles.vietnamWrapper}>
            <div style={styles.vietnamImage} className="animate-fade-left">
              <div style={{fontSize: '6rem', animation: 'float 4s ease-in-out infinite', zIndex: 2}}>🏭</div>
            </div>

            <div style={styles.vietnamContent} className="animate-fade-right" style={{animationDelay: '0.2s'}}>
              <h2 style={styles.contentTitle}>
                Đặc <span style={{color: '#d4af37'}}>Điểm Đặc Thù</span>
              </h2>
              <p style={styles.vietnamText}>
                Giai cấp công nhân Việt Nam ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển trong một nước nông nghiệp lạc hậu. Nhưng với ưu thế chính trị, sớm tiếp thu chủ nghĩa Mác - Lênin.
              </p>

              <div style={styles.featuresList}>
                {[
                  { title: '💰 Vai Trò Kinh Tế', text: 'Nguồn nhân lực chính phát triển kinh tế thị trường định hướng XHCN.' },
                  { title: '🏛️ Vai Trò Chính Trị', text: 'Giữ vững vai trò lãnh đạo của Đảng, ngăn chặn suy thoái tư tưởng.' },
                  { title: '🎨 Vai Trò Văn Hóa', text: 'Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.' }
                ].map((feat, idx) => (
                  <FeatureItem 
                    key={idx}
                    title={feat.title}
                    text={feat.text}
                    delay={idx * 0.15}
                  />
                ))}
              </div>

              <button 
                onClick={() => navigateTo('about')} 
                style={styles.btnSecondary}
                className="animate-fade-up"
                style={{animationDelay: '0.5s', marginTop: '3rem'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#d4af37';
                }}
              >
                Tìm Hiểu Chi Tiết
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={styles.solutions} id="solutions">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Chiến Lược Phát Triển</span>
            <h2 style={styles.sectionTitle}>Giải Pháp<br/><span style={{color: '#d4af37'}}>Xây Dựng</span></h2>
            <p style={styles.sectionDescription}>Những biện pháp xây dựng giai cấp công nhân Việt Nam lớn mạnh</p>
          </div>

          <div style={styles.solutionsGrid}>
            {[
              { number: '01', title: 'Nâng Cao Nhận Thức', description: 'Nâng cao nhận thức về vai trò lãnh đạo của giai cấp công nhân trong xã hội.' },
              { number: '02', title: 'Liên Minh Ba Tầng Lớp', description: 'Tăng cường liên minh công - nông - trí thức và doanh nhân.' },
              { number: '03', title: 'Phát Triển Kinh Tế', description: 'Gắn với chiến lược phát triển kinh tế - xã hội và hội nhập quốc tế.' },
              { number: '04', title: 'Đào Tạo & Bồi Dưỡng', description: 'Đẩy mạnh đào tạo, không ngừng trí thức hóa giai cấp công nhân.' }
            ].map((sol, idx) => (
              <SolutionCard 
                key={idx}
                number={sol.number}
                title={sol.title}
                description={sol.description}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefits} id="benefits">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader} className="animate-fade-up">
            <span style={styles.sectionTag}>— Tác Động Xã Hội</span>
            <h2 style={styles.sectionTitle}>Tầm Ảnh Hưởng &<br/><span style={{color: '#d4af37'}}>Lợi Ích</span></h2>
            <p style={styles.sectionDescription}>Những tác động tích cực khi xây dựng giai cấp công nhân lớn mạnh</p>
          </div>

          <div style={styles.benefitsLargeImage} className="animate-bounce">
            <div style={{fontSize: '6rem', animation: 'float 3s ease-in-out infinite'}}>📈</div>
          </div>

          <div style={styles.benefitsStats}>
            {[
              { number: '100%', label: 'Tham Gia Sản Xuất' },
              { number: '99%', label: 'Kỷ Luật Tổ Chức' },
              { number: '98%', label: 'Tính Cách Mạng' },
              { number: '∞', label: 'Tiềm Năng Vô Hạn' }
            ].map((stat, idx) => (
              <StatItem 
                key={idx}
                number={stat.number}
                label={stat.label}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent} className="animate-fade-up">
          <h2 style={styles.ctaTitle} className="animate-fade-up">
            Hãy Cùng<br/>Xây Dựng<br/>Tương Lai
          </h2>
          <p style={styles.ctaText} className="animate-fade-up" style={{animationDelay: '0.15s'}}>
            Giai cấp công nhân là lực lượng quyết định để dẫn dắt nhân loại tiến tới một xã hội công bằng, văn minh và tiến bộ hơn.
          </p>
          <button 
            onClick={() => navigateTo('contact')} 
            style={{...styles.btnPrimary, marginTop: '2rem', background: 'white', color: '#a72e2e'}}
            className="animate-fade-up"
            style={{animationDelay: '0.3s'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            }}
          >
            Liên Hệ Chúng Tôi
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
          <p style={styles.footerText}>Chủ Nghĩa Xã Hội Khoa Học</p>
          <p style={styles.footerText}>Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân</p>
          <p style={{...styles.footerText, marginTop: '2rem', color: '#d4af37', fontSize: '0.85rem'}}>
            © 2024 Thuyết Trình Chuyên Sâu | Tất cả quyền được bảo lưu
          </p>
        </div>
      </footer>
    </>
  );
}

function ConceptCard({ icon, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.conceptCard,
        background: isHovered ? 'rgba(26, 31, 58, 0.95)' : 'rgba(26, 31, 58, 0.7)',
        borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0.2)',
        boxShadow: isHovered ? '0 30px 60px rgba(212, 175, 55, 0.15)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
        borderTop: isHovered ? '4px solid #d4af37' : '4px solid transparent',
        paddingTop: isHovered ? '2.5rem' : '3rem',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{...styles.conceptIcon, animation: isHovered ? 'bounceIn 0.6s ease-out' : 'none', transform: isHovered ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s ease'}}>
        {icon}
      </div>
      <h3 style={styles.conceptTitle}>{title}</h3>
      <p style={styles.conceptText}>{description}</p>
    </div>
  );
}

function SolutionCard({ number, title, description, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.solutionCard,
        background: isHovered ? 'rgba(26, 31, 58, 0.95)' : 'rgba(26, 31, 58, 0.6)',
        borderColor: isHovered ? 'rgba(212, 175, 55, 0.4)' : 'rgba(212, 175, 55, 0.15)',
        boxShadow: isHovered ? '0 25px 60px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: `slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
        borderLeft: isHovered ? '6px solid #d4af37' : '6px solid rgba(212, 175, 55, 0.3)',
        paddingLeft: isHovered ? '3rem' : '3.5rem',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{...styles.solutionNumber, color: isHovered ? '#fff' : 'rgba(212, 175, 55, 0.3)', transition: 'all 0.4s ease', fontSize: isHovered ? '3.5rem' : '3rem'}}>
        {number}
      </div>
      <h3 style={styles.solutionTitle}>{title}</h3>
      <p style={styles.solutionText}>{description}</p>
    </div>
  );
}

function FeatureItem({ title, text, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.featureItem,
        background: isHovered ? 'rgba(212, 175, 55, 0.08)' : 'rgba(26, 31, 58, 0.5)',
        borderLeftColor: isHovered ? '#fff' : '#d4af37',
        transform: isHovered ? 'translateX(15px)' : 'translateX(0)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: `slideUp 0.7s ease-out ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 style={{...styles.featureTitle, color: isHovered ? '#fff' : '#d4af37'}}>{title}</h4>
      <p style={styles.featureText}>{text}</p>
    </div>
  );
}

function StatItem({ number, label, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.statItem,
        background: isHovered ? 'rgba(26, 31, 58, 0.9)' : 'rgba(26, 31, 58, 0.5)',
        borderColor: isHovered ? 'rgba(212, 175, 55, 0.4)' : 'rgba(212, 175, 55, 0.15)',
        boxShadow: isHovered ? '0 15px 40px rgba(212, 175, 55, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.2)',
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: `bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{...styles.statNumber, color: isHovered ? '#fff' : '#d4af37'}}>{number}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function AboutPage({ navigateTo }) {
  return (
    <>
      <section style={{...styles.about, paddingTop: '160px'}} className="page-enter">
        <div style={styles.sectionContainer}>
          <button 
            onClick={() => navigateTo('home')} 
            style={{...styles.btnSecondary, marginBottom: '4rem'}}
            className="animate-fade-up"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ← Quay Lại Trang Chủ
          </button>
          
          <h1 style={styles.pageTitle} className="animate-fade-up">
            Chi Tiết<br/>
            <span style={{color: '#d4af37'}}>Thuyết Trình</span>
          </h1>
          
          <div style={styles.contentBlock} className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <h2 style={{...styles.contentTitle, marginTop: 0}}>I. Quan Điểm Cơ Bản của Chủ Nghĩa Mác - Lênin</h2>
            
            <h3 style={styles.contentSubtitle}>1. Khái Niệm và Đặc Điểm</h3>
            <p style={styles.contentText}>
              Giai cấp công nhân (GCCN) không chỉ là những người làm việc trong nhà máy, mà là một tập đoàn xã hội ổn định, phát triển cùng với nền công nghiệp hiện đại.
            </p>
            <ul style={styles.contentList}>
              <li><strong>Về kinh tế - xã hội:</strong> Họ là những người vận hành các công cụ sản xuất hiện đại, có tính xã hội hóa cao. Điểm mấu chốt là họ không sở hữu tư liệu sản xuất chủ yếu và phải bán sức lao động.</li>
              <li><strong>Về chính trị - xã hội:</strong> Do làm việc trong môi trường đại công nghiệp, GCCN có tính tổ chức, kỷ luật cao, tinh thần hợp tác và là giai cấp cách mạng triệt để nhất.</li>
            </ul>

            <h3 style={styles.contentSubtitle}>2. Nội Dung Sứ Mệnh Lịch Sử</h3>
            <p style={styles.contentText}>
              Sứ mệnh của GCCN là lãnh đạo nhân dân lao động đấu tranh xóa bỏ chế độ áp bức, bất công, xóa bỏ CNTB để xây dựng xã hội cộng sản văn minh.
            </p>
            <ul style={styles.contentList}>
              <li><strong>Kinh tế:</strong> Tạo tiền đề vật chất - kỹ thuật và xác lập quan hệ sản xuất công hữu.</li>
              <li><strong>Chính trị:</strong> Lật đổ chính quyền cũ, thiết lập nhà nước của nhân dân lao động để cải tạo xã hội.</li>
              <li><strong>Văn hóa - tư tưởng:</strong> Xây dựng hệ giá trị mới như công bằng, dân chủ, bình đẳng và củng cố ý thức hệ tiên tiến của GCCN.</li>
            </ul>

            <h3 style={styles.contentSubtitle}>3. Điều Kiện Thực Hiện</h3>
            <ul style={styles.contentList}>
              <li><strong>Khách quan:</strong> Do địa vị kinh tế là đại diện cho lực lượng sản xuất tiên tiến và đặc điểm chính trị là giai cấp kỷ luật, bản chất quốc tế.</li>
              <li><strong>Chủ quan:</strong> GCCN phải phát triển về số lượng, chất lượng; quan trọng nhất là phải có Đảng Cộng sản lãnh đạo và xây dựng được khối liên minh công - nông.</li>
            </ul>

            <h2 style={styles.contentTitle}>II. Giai Cấp Công Nhân Việt Nam</h2>
            
            <h3 style={styles.contentSubtitle}>1. Đặc Điểm Đặc Thù</h3>
            <p style={styles.contentText}>
              GCCN Việt Nam là sản phẩm của một quá trình công nghiệp hóa đặc biệt. Ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển trong một nước nông nghiệp lạc hậu, công nghệ thấp.
            </p>
            <ul style={styles.contentList}>
              <li>Ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển trong một nước nông nghiệp lạc hậu, công nghệ thấp.</li>
              <li><strong>Ưu thế chính trị:</strong> Sớm tiếp thu chủ nghĩa Mác - Lênin, có Đảng và lãnh tụ sáng suốt lãnh đạo, luôn vững vàng và kiên quyết nhất.</li>
              <li><strong>Quan hệ mật thiết:</strong> Gắn bó máu thịt với dân tộc và giai cấp nông dân.</li>
            </ul>

            <h3 style={styles.contentSubtitle}>2. Nội Dung Sứ Mệnh Hiện Nay</h3>
            <ul style={styles.contentList}>
              <li><strong>Kinh tế:</strong> Là nguồn nhân lực chính phát triển kinh tế thị trường định hướng XHCN, lấy khoa học - công nghệ làm động lực.</li>
              <li><strong>Chính trị:</strong> Giữ vững vai trò lãnh đạo của Đảng, ngăn chặn suy thoái tư tưởng, "tự diễn biến", "tự chuyển hóa".</li>
              <li><strong>Văn hóa:</strong> Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.</li>
            </ul>

            <h3 style={styles.contentSubtitle}>3. Giải Pháp Xây Dựng GCCN Việt Nam Lớn Mạnh</h3>
            <p style={styles.contentText}>Để thực hiện thắng lợi sứ mệnh, chúng ta cần:</p>
            <ol style={styles.contentList}>
              <li>Nâng cao nhận thức về vai trò lãnh đạo của GCCN.</li>
              <li>Tăng cường liên minh công - nông - trí thức và doanh nhân.</li>
              <li>Gắn xây dựng GCCN với chiến lược phát triển kinh tế - xã hội và hội nhập quốc tế.</li>
              <li>Đẩy mạnh đào tạo, bồi dưỡng, không ngừng trí thức hóa giai cấp công nhân.</li>
            </ol>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
          <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
        </div>
      </footer>
    </>
  );
}

function ContactPage({ navigateTo }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <section style={{...styles.contact, paddingTop: '160px'}} className="page-enter">
        <div style={styles.sectionContainer}>
          <button 
            onClick={() => navigateTo('home')} 
            style={{...styles.btnSecondary, marginBottom: '4rem'}}
            className="animate-fade-up"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ← Quay Lại Trang Chủ
          </button>

          <h1 style={styles.pageTitle} className="animate-fade-up">
            Liên<br/>
            <span style={{color: '#d4af37'}}>Hệ Chúng Tôi</span>
          </h1>

          <div style={styles.contactWrapper} className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div style={styles.contactInfo}>
              <h2 style={{...styles.contentTitle, marginTop: 0}} className="animate-fade-left">Thông Tin Liên Hệ</h2>
              {[
                { title: '📍 Địa Chỉ', content: 'Trường Đại Học | Việt Nam' },
                { title: '📧 Email', content: 'contact@mln131.edu.vn' },
                { title: '📞 Điện Thoại', content: '+84 (0) 123 456 789' },
                { title: '⏰ Giờ Làm Việc', content: 'Thứ 2 - Thứ 6: 8:00 - 17:00\nThứ 7: 9:00 - 12:00' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={styles.infoItem}
                  className="animate-fade-left"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <h3 style={{color: '#d4af37', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600}}>{item.title}</h3>
                  <p style={{...styles.contentText, margin: 0}}>{item.content}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={styles.contactForm} className="animate-fade-right">
              <h2 style={{...styles.contentTitle, marginTop: 0}}>Gửi Tin Nhắn</h2>
              
              <div style={styles.formGroup} className="animate-fade-up">
                <label style={styles.formLabel}>Tên của bạn</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={styles.formInput}
                  required
                />
              </div>

              <div style={styles.formGroup} className="animate-fade-up" style={{animationDelay: '0.1s'}}>
                <label style={styles.formLabel}>Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={styles.formInput}
                  required
                />
              </div>

              <div style={styles.formGroup} className="animate-fade-up" style={{animationDelay: '0.2s'}}>
                <label style={styles.formLabel}>Tin Nhắn</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{...styles.formInput, minHeight: '180px', fontFamily: 'Poppins, sans-serif'}}
                  required
                />
              </div>

              <button 
                type="submit" 
                style={styles.btnPrimary}
                className="animate-fade-up"
                style={{animationDelay: '0.3s', width: '100%'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.15)';
                }}
              >
                Gửi Tin Nhắn
              </button>

              {submitted && (
                <div style={styles.successMessage} className="animate-bounce">
                  ✓ Cảm ơn! Chúng tôi sẽ liên hệ với bạn sớm.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>⬢ MLN131 - XSHKH</div>
          <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
        </div>
      </footer>
    </>
  );
}

// Comprehensive Styles
const styles = {
  app: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#0a0e27',
    color: '#e8e4d9',
  },

  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '2.5rem 5%',
    background: 'rgba(10, 14, 39, 0.95)',
    backdropFilter: 'blur(20px)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },

  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '2px',
    color: '#d4af37',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
  },

  navLinks: {
    display: 'flex',
    gap: '5rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },

  navLink: {
    textDecoration: 'none',
    color: '#e8e4d9',
    fontSize: '0.85rem',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
  },

  // Hero Section
  hero: {
    marginTop: '120px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f132e 100%)',
    padding: '5rem 5% 6rem 5%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },

  heroInner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '6rem',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },

  heroContent: {
    zIndex: 2,
  },

  heroTag: {
    fontSize: '0.8rem',
    letterSpacing: '3px',
    color: '#d4af37',
    textTransform: 'uppercase',
    marginBottom: '3rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },

  tagDot: {
    color: '#d4af37',
    fontSize: '1rem',
  },

  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '5.5rem',
    lineHeight: 1.1,
    marginBottom: '3rem',
    color: '#f5f1e8',
    fontWeight: 800,
    letterSpacing: '-2px',
  },

  heroHighlight: {
    color: '#d4af37',
  },

  heroDescription: {
    fontSize: '1.15rem',
    color: '#b8b5a8',
    marginBottom: '4rem',
    lineHeight: 1.9,
    fontWeight: 300,
    maxWidth: '550px',
  },

  ctaButtons: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },

  btnPrimary: {
    padding: '1.2rem 3rem',
    background: '#d4af37',
    color: '#0a0e27',
    border: 'none',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 700,
    letterSpacing: '2px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    borderRadius: '2px',
    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
  },

  btnSecondary: {
    padding: '1.2rem 3rem',
    border: '2px solid #d4af37',
    background: 'transparent',
    color: '#d4af37',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 700,
    letterSpacing: '2px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    borderRadius: '2px',
  },

  heroMeta: {
    display: 'flex',
    gap: '3rem',
    fontSize: '0.9rem',
    color: '#b8b5a8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  heroVisual: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },

  imagePlaceholderHero: {
    width: '100%',
    aspectRatio: '1',
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(167, 46, 46, 0.08) 100%)',
    border: '3px solid rgba(212, 175, 55, 0.25)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b8b5a8',
    fontWeight: 300,
    position: 'relative',
    overflow: 'hidden',
  },

  heroDecoration: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    top: '-200px',
    right: '-200px',
    zIndex: 1,
  },

  // Section Styles
  sectionContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },

  concepts: {
    background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
    padding: '8rem 5%',
    position: 'relative',
  },

  vietnam: {
    background: 'linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%)',
    padding: '8rem 5%',
    position: 'relative',
  },

  solutions: {
    background: '#0a0e27',
    padding: '8rem 5%',
    position: 'relative',
  },

  benefits: {
    background: 'linear-gradient(to bottom, #1a1f3a 0%, #0a0e27 100%)',
    padding: '8rem 5%',
    position: 'relative',
  },

  cta: {
    background: 'linear-gradient(135deg, #a72e2e 0%, #8b2e2e 100%)',
    padding: '8rem 5%',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },

  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    marginBottom: '2rem',
    color: 'white',
    lineHeight: 1.1,
    fontWeight: 800,
  },

  ctaText: {
    fontSize: '1.15rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    lineHeight: 1.8,
    fontWeight: 300,
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '6rem',
    maxWidth: '700px',
    margin: '0 auto 6rem auto',
  },

  sectionTag: {
    fontSize: '0.8rem',
    letterSpacing: '3px',
    color: '#d4af37',
    textTransform: 'uppercase',
    marginBottom: '2rem',
    fontWeight: 600,
    display: 'block',
  },

  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.8rem',
    marginBottom: '2rem',
    lineHeight: 1.2,
    color: '#f5f1e8',
    fontWeight: 800,
    letterSpacing: '-1px',
  },

  sectionDescription: {
    fontSize: '1.1rem',
    color: '#b8b5a8',
    lineHeight: 1.8,
    fontWeight: 300,
  },

  conceptsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3.5rem',
  },

  conceptCard: {
    padding: '3.5rem',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '2px',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  conceptIcon: {
    fontSize: '3rem',
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(212, 175, 55, 0.12)',
    borderRadius: '4px',
    transition: 'all 0.4s ease',
  },

  conceptTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    color: '#f5f1e8',
    margin: 0,
    fontWeight: 700,
  },

  conceptText: {
    color: '#b8b5a8',
    fontSize: '0.95rem',
    lineHeight: 1.8,
    margin: 0,
    fontWeight: 300,
  },

  vietnamWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '6rem',
    alignItems: 'center',
  },

  vietnamImage: {
    aspectRatio: '4/5',
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(167, 46, 46, 0.1) 100%)',
    border: '2px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b8b5a8',
    position: 'relative',
    overflow: 'hidden',
  },

  vietnamContent: {
    paddingRight: '1rem',
  },

  contentTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.8rem',
    marginBottom: '2rem',
    color: '#f5f1e8',
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: '-1px',
  },

  vietnamText: {
    color: '#b8b5a8',
    fontSize: '1.05rem',
    lineHeight: 1.9,
    marginBottom: '2.5rem',
    fontWeight: 300,
  },

  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  featureItem: {
    padding: '2rem 2rem 2rem 2.5rem',
    borderLeft: '4px solid #d4af37',
    borderRadius: '2px',
    transition: 'all 0.4s ease',
  },

  featureTitle: {
    fontSize: '1.2rem',
    color: '#d4af37',
    marginBottom: '0.8rem',
    fontFamily: "'Playfair Display', serif",
    margin: 0,
    fontWeight: 700,
  },

  featureText: {
    color: '#b8b5a8',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    margin: 0,
    fontWeight: 300,
  },

  solutionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
  },

  solutionCard: {
    padding: '3.5rem',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    borderRadius: '2px',
    position: 'relative',
    overflow: 'hidden',
  },

  solutionNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    fontWeight: 800,
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2,
    transition: 'all 0.4s ease',
  },

  solutionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    color: '#f5f1e8',
    marginBottom: '1.2rem',
    position: 'relative',
    zIndex: 2,
    fontWeight: 700,
  },

  solutionText: {
    color: '#b8b5a8',
    fontSize: '0.95rem',
    lineHeight: 1.8,
    position: 'relative',
    zIndex: 2,
    fontWeight: 300,
  },

  benefitsLargeImage: {
    width: '100%',
    aspectRatio: '16/9',
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(167, 46, 46, 0.08) 100%)',
    border: '2px solid rgba(212, 175, 55, 0.15)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b8b5a8',
    marginBottom: '5rem',
    position: 'relative',
    overflow: 'hidden',
  },

  benefitsStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2.5rem',
  },

  statItem: {
    textAlign: 'center',
    padding: '3rem 2rem',
    border: '1px solid rgba(212, 175, 55, 0.1)',
    borderRadius: '2px',
    transition: 'all 0.5s ease',
  },

  statNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: 800,
    transition: 'color 0.4s ease',
  },

  statLabel: {
    color: '#b8b5a8',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: 600,
  },

  footer: {
    background: 'rgba(10, 14, 39, 0.9)',
    borderTop: '1px solid rgba(212, 175, 55, 0.1)',
    padding: '4rem 5%',
    textAlign: 'center',
  },

  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
  },

  footerBrand: {
    color: '#d4af37',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    marginBottom: '1.5rem',
    fontWeight: 700,
    letterSpacing: '2px',
  },

  footerText: {
    color: '#b8b5a8',
    fontSize: '0.9rem',
    margin: '0.8rem 0',
    fontWeight: 300,
  },

  // Page Styles
  about: {
    background: '#0a0e27',
    minHeight: '100vh',
    padding: '6rem 5%',
  },

  contact: {
    background: '#0a0e27',
    minHeight: '100vh',
    padding: '6rem 5%',
  },

  pageTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    marginBottom: '4rem',
    color: '#f5f1e8',
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: '-1px',
  },

  contentBlock: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  contentSubtitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    marginTop: '2.5rem',
    marginBottom: '1.5rem',
    color: '#f5f1e8',
    fontWeight: 700,
  },

  contentText: {
    fontSize: '1rem',
    color: '#b8b5a8',
    lineHeight: 1.9,
    marginBottom: '2rem',
    fontWeight: 300,
  },

  contentList: {
    listStyleType: 'none',
    paddingLeft: '1.5rem',
    marginBottom: '2.5rem',
  },

  contactWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  contactInfo: {
    paddingRight: '2rem',
  },

  infoItem: {
    marginBottom: '3rem',
    paddingBottom: '3rem',
    borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
  },

  contactForm: {
    background: 'rgba(26, 31, 58, 0.6)',
    padding: '4rem',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    borderRadius: '4px',
    backdropFilter: 'blur(10px)',
  },

  formGroup: {
    marginBottom: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
  },

  formLabel: {
    color: '#d4af37',
    marginBottom: '1rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  formInput: {
    background: 'rgba(10, 14, 39, 0.8)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    color: '#e8e4d9',
    padding: '1rem 1.5rem',
    borderRadius: '4px',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    fontFamily: "'Poppins', sans-serif",
  },

  successMessage: {
    marginTop: '2rem',
    padding: '1.5rem',
    background: 'rgba(39, 174, 96, 0.15)',
    border: '1px solid #27ae60',
    borderRadius: '4px',
    color: '#27ae60',
    textAlign: 'center',
    fontSize: '0.95rem',
    fontWeight: 600,
  },
};