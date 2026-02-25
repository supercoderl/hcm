import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div style={styles.app}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <a
          onClick={() => navigateTo('home')}
          style={{ ...styles.logo, cursor: 'pointer' }}
        >
          MLN131
        </a>
        <ul style={styles.navLinks}>
          <li>
            <a
              onClick={() => scrollToSection('concepts')}
              style={styles.navLink}
            >
              Khái Niệm
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection('vietnam')}
              style={styles.navLink}
            >
              Việt Nam
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection('solutions')}
              style={styles.navLink}
            >
              Giải Pháp
            </a>
          </li>
          <li>
            <a
              onClick={() => navigateTo('about')}
              style={styles.navLink}
            >
              Chi Tiết
            </a>
          </li>
          <li>
            <a
              onClick={() => navigateTo('contact')}
              style={styles.navLink}
            >
              Liên Hệ
            </a>
          </li>
        </ul>
      </nav>

      {currentPage === 'home' && <HomePage scrollToSection={scrollToSection} navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
      {currentPage === 'contact' && <ContactPage navigateTo={navigateTo} />}
    </div>
  );
}

function HomePage({ scrollToSection, navigateTo }) {
  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroTag}>Chủ Nghĩa Xã Hội Khoa Học</div>
          <h1 style={styles.heroTitle}>
            Sứ Mệnh Lịch Sử của<br />
            <span style={{ color: '#d4af37' }}>Giai Cấp Công Nhân</span>
          </h1>
          <p style={styles.heroDescription}>
            Khám phá vai trò quyết định của giai cấp công nhân trong việc dẫn dắt nhân loại tiến tới một xã hội công bằng, văn minh và tiến bộ hơn.
          </p>
          <div style={styles.ctaButtons}>
            <button
              onClick={() => scrollToSection('benefits')}
              style={{ ...styles.btn, ...styles.btnFilled }}
            >
              Khám Phá Ngay
            </button>
            <button
              onClick={() => navigateTo('about')}
              style={styles.btn}
            >
              Xem Thuyết Trình
            </button>
          </div>
          <div style={styles.heroMeta}>
            <span>📊 Thuyết Trình Chuyên Sâu</span>
            <span>🎓 Nội Dung Học Thuật</span>
          </div>
        </div>
        <div style={styles.heroImage}>
          <div style={styles.imagePlaceholder}>🖼️</div>
        </div>
      </section>

      {/* Concepts Section */}
      <section style={styles.concepts} id="concepts">
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTag}>Nền Tảng Lý Thuyết</div>
          <h2 style={styles.sectionTitle}>Quan Điểm <span style={{ color: '#d4af37' }}>Cơ Bản</span></h2>
          <p style={styles.sectionDescription}>Những khái niệm nền tảng của Chủ nghĩa Mác - Lênin về giai cấp công nhân</p>
        </div>
        <div style={styles.conceptsGrid}>
          <ConceptCard
            icon="📚"
            title="Khái Niệm Giai Cấp"
            description="Giai cấp công nhân là một tập đoàn xã hội ổn định, phát triển cùng với nền công nghiệp hiện đại."
          />
          <ConceptCard
            icon="⚡"
            title="Sứ Mệnh Lịch Sử"
            description="Lãnh đạo nhân dân lao động xóa bỏ chế độ áp bức và xây dựng xã hội cộng sản."
          />
          <ConceptCard
            icon="🔧"
            title="Điều Kiện Thực Hiện"
            description="Yêu cầu Đảng Cộng sản lãnh đạo và xây dựng khối liên minh công - nông - trí thức."
          />
        </div>
      </section>

      {/* Vietnam Section */}
      <section style={styles.vietnam} id="vietnam">
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTag}>Thực Tiễn Đất Nước</div>
          <h2 style={styles.sectionTitle}>Giai Cấp Công Nhân <span style={{ color: '#d4af37' }}>Việt Nam</span></h2>
          <p style={styles.sectionDescription}>Đặc thù và vai trò của giai cấp công nhân Việt Nam</p>
        </div>
        <div style={styles.vietnamWrapper}>
          <div style={styles.vietnamImage}>🏭</div>
          <div style={styles.vietnamContent}>
            <h2 style={{ ...styles.vietnamTitle, marginBottom: '2rem' }}>
              Đặc <span style={{ color: '#d4af37' }}>Điểm Đặc Thù</span>
            </h2>
            <p style={styles.vietnamText}>
              Giai cấp công nhân Việt Nam ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển trong một nước nông nghiệp lạc hậu. Nhưng với ưu thế chính trị, sớm tiếp thu chủ nghĩa Mác - Lênin.
            </p>
            <div style={styles.featuresList}>
              <FeatureItem title="💰 Vai Trò Kinh Tế" text="Nguồn nhân lực chính phát triển kinh tế thị trường định hướng XHCN." />
              <FeatureItem title="🏛️ Vai Trò Chính Trị" text="Giữ vững vai trò lãnh đạo của Đảng, ngăn chặn suy thoái tư tưởng." />
              <FeatureItem title="🎨 Vai Trò Văn Hóa" text="Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc." />
            </div>
            <button
              onClick={() => navigateTo('about')}
              style={{ ...styles.btn, marginTop: '2rem' }}
            >
              Tìm Hiểu Chi Tiết
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={styles.solutions} id="solutions">
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTag}>Chiến Lược Phát Triển</div>
          <h2 style={styles.sectionTitle}>Giải Pháp <span style={{ color: '#d4af37' }}>Xây Dựng</span></h2>
          <p style={styles.sectionDescription}>Những biện pháp xây dựng giai cấp công nhân Việt Nam lớn mạnh</p>
        </div>
        <div style={styles.solutionsGrid}>
          <SolutionCard
            number="01"
            title="Nâng Cao Nhận Thức"
            description="Nâng cao nhận thức về vai trò lãnh đạo của giai cấp công nhân trong xã hội."
          />
          <SolutionCard
            number="02"
            title="Liên Minh Ba Tầng Lớp"
            description="Tăng cường liên minh công - nông - trí thức và doanh nhân."
          />
          <SolutionCard
            number="03"
            title="Phát Triển Kinh Tế"
            description="Gắn với chiến lược phát triển kinh tế - xã hội và hội nhập quốc tế."
          />
          <SolutionCard
            number="04"
            title="Đào Tạo và Bồi Dưỡng"
            description="Đẩy mạnh đào tạo, không ngừng trí thức hóa giai cấp công nhân."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefits} id="benefits">
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTag}>Tác Động Xã Hội</div>
          <h2 style={styles.sectionTitle}>Tầm Ảnh Hưởng & <span style={{ color: '#d4af37' }}>Lợi Ích</span></h2>
          <p style={styles.sectionDescription}>Những tác động tích cực khi xây dựng giai cấp công nhân lớn mạnh</p>
        </div>
        <div style={styles.benefitsLargeImage}>📈</div>
        <div style={styles.benefitsStats}>
          <StatItem number="100%" label="Tham Gia Sản Xuất" />
          <StatItem number="99%" label="Kỷ Luật Tổ Chức" />
          <StatItem number="98%" label="Tính Cách Mạng" />
          <StatItem number="∞" label="Tiềm Năng Vô Hạn" />
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Hãy Cùng Xây Dựng Tương Lai</h2>
          <p style={styles.ctaText}>Giai cấp công nhân là lực lượng quyết định để dẫn dắt nhân loại tiến tới một xã hội công bằng, văn minh và tiến bộ hơn.</p>
          <button
            onClick={() => navigateTo('contact')}
            style={{ ...styles.btn, borderColor: 'white', color: 'white' }}
          >
            Liên Hệ Chúng Tôi
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerBrand}>MLN131 - XSHKH</div>
        <p style={styles.footerText}>Chủ Nghĩa Xã Hội Khoa Học | Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân</p>
        <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu | Mọi quyền được bảo lưu</p>
      </footer>
    </>
  );
}

function AboutPage({ navigateTo }) {
  return (
    <>
      <section style={{ ...styles.about, paddingTop: '150px' }}>
        <button
          onClick={() => navigateTo('home')}
          style={{ ...styles.btn, marginBottom: '3rem' }}
        >
          ← Quay Lại
        </button>

        <h1 style={styles.pageTitle}>Chi Tiết Thuyết Trình</h1>

        <div style={styles.contentBlock}>
          <h2 style={styles.contentTitle}>I. Quan Điểm Cơ Bản của Chủ Nghĩa Mác - Lênin</h2>

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
            <li><strong>Chính trị:</strong> Lật đổ chính quyền cũ, thiết lập nhà nước của nhân dân lao động.</li>
            <li><strong>Văn hóa - tư tưởng:</strong> Xây dựng hệ giá trị mới như công bằng, dân chủ, bình đẳng.</li>
          </ul>

          <h2 style={{ ...styles.contentTitle, marginTop: '3rem' }}>II. Giai Cấp Công Nhân Việt Nam</h2>

          <h3 style={styles.contentSubtitle}>1. Đặc Điểm Đặc Thù</h3>
          <p style={styles.contentText}>
            GCCN Việt Nam là sản phẩm của một quá trình công nghiệp hóa đặc biệt:
          </p>
          <ul style={styles.contentList}>
            <li>Ra đời từ cuộc khai thác thuộc địa của Pháp, phát triển trong một nước nông nghiệp lạc hậu, công nghệ thấp.</li>
            <li><strong>Ưu thế chính trị:</strong> Sớm tiếp thu chủ nghĩa Mác - Lênin, có Đảng và lãnh tụ sáng suốt lãnh đạo.</li>
            <li><strong>Quan hệ mật thiết:</strong> Gắn bó máu thịt với dân tộc và giai cấp nông dân.</li>
          </ul>

          <h3 style={styles.contentSubtitle}>2. Nội Dung Sứ Mệnh Hiện Nay</h3>
          <ul style={styles.contentList}>
            <li><strong>Kinh tế:</strong> Là nguồn nhân lực chính phát triển kinh tế thị trường định hướng XHCN, lấy khoa học - công nghệ làm động lực.</li>
            <li><strong>Chính trị:</strong> Giữ vững vai trò lãnh đạo của Đảng, ngăn chặn suy thoái tư tưởng.</li>
            <li><strong>Văn hóa:</strong> Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.</li>
          </ul>

          <h3 style={styles.contentSubtitle}>3. Giải Pháp Xây Dựng</h3>
          <ol style={styles.contentList}>
            <li>Nâng cao nhận thức về vai trò lãnh đạo của GCCN.</li>
            <li>Tăng cường liên minh công - nông - trí thức và doanh nhân.</li>
            <li>Gắn xây dựng GCCN với chiến lược phát triển kinh tế - xã hội và hội nhập quốc tế.</li>
            <li>Đẩy mạnh đào tạo, bồi dưỡng, không ngừng trí thức hóa giai cấp công nhân.</li>
          </ol>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerBrand}>MLN131 - XSHKH</div>
        <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
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
      <section style={{ ...styles.contact, paddingTop: '150px' }}>
        <button
          onClick={() => navigateTo('home')}
          style={{ ...styles.btn, marginBottom: '3rem' }}
        >
          ← Quay Lại
        </button>

        <h1 style={styles.pageTitle}>Liên Hệ Chúng Tôi</h1>

        <div style={styles.contactWrapper}>
          <div style={styles.contactInfo}>
            <h2 style={{ ...styles.contentTitle, marginBottom: '2rem' }}>Thông Tin Liên Hệ</h2>
            <div style={styles.infoItem}>
              <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>📍 Địa Chỉ</h3>
              <p style={styles.contentText}>Trường Đại Học | Việt Nam</p>
            </div>
            <div style={styles.infoItem}>
              <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>📧 Email</h3>
              <p style={styles.contentText}>contact@mln131.edu.vn</p>
            </div>
            <div style={styles.infoItem}>
              <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>📞 Điện Thoại</h3>
              <p style={styles.contentText}>+84 (0) 123 456 789</p>
            </div>
            <div style={styles.infoItem}>
              <h3 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>⏰ Giờ Làm Việc</h3>
              <p style={styles.contentText}>Thứ 2 - Thứ 6: 8:00 - 17:00<br />Thứ 7: 9:00 - 12:00</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.contactForm}>
            <h2 style={{ ...styles.contentTitle, marginBottom: '2rem' }}>Gửi Tin Nhắn</h2>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Tên của bạn</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={styles.formInput}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={styles.formInput}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Tin Nhắn</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...styles.formInput, minHeight: '150px', fontFamily: 'Poppins, sans-serif' }}
                required
              />
            </div>

            <button
              type="submit"
              style={{ ...styles.btn, ...styles.btnFilled, width: '100%' }}
            >
              Gửi Tin Nhắn
            </button>

            {submitted && (
              <div style={styles.successMessage}>
                ✓ Cảm ơn! Chúng tôi sẽ liên hệ với bạn sớm.
              </div>
            )}
          </form>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerBrand}>MLN131 - XSHKH</div>
        <p style={styles.footerText}>© 2024 Thuyết Trình Chuyên Sâu</p>
      </footer>
    </>
  );
}

// Component: Concept Card
function ConceptCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.conceptCard,
        background: isHovered ? 'rgba(26, 31, 58, 0.95)' : 'rgba(26, 31, 58, 0.8)',
        borderColor: isHovered ? 'rgba(201, 169, 97, 0.3)' : 'rgba(201, 169, 97, 0.15)',
        boxShadow: isHovered ? '0 25px 50px rgba(0, 0, 0, 0.4)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.conceptIcon}>{icon}</div>
      <h3 style={styles.conceptTitle}>{title}</h3>
      <p style={styles.conceptText}>{description}</p>
    </div>
  );
}

// Component: Solution Card
function SolutionCard({ number, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.solutionCard,
        background: isHovered ? 'rgba(26, 31, 58, 0.9)' : 'rgba(26, 31, 58, 0.6)',
        borderColor: isHovered ? 'rgba(201, 169, 97, 0.3)' : 'rgba(201, 169, 97, 0.15)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.solutionNumber}>{number}</div>
      <h3 style={styles.solutionTitle}>{title}</h3>
      <p style={styles.solutionText}>{description}</p>
    </div>
  );
}

// Component: Feature Item
function FeatureItem({ title, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.featureItem,
        background: isHovered ? 'rgba(26, 31, 58, 0.9)' : 'rgba(26, 31, 58, 0.6)',
        transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 style={styles.featureTitle}>{title}</h4>
      <p style={styles.featureText}>{text}</p>
    </div>
  );
}

// Component: Stat Item
function StatItem({ number, label }) {
  return (
    <div style={styles.statItem}>
      <div style={styles.statNumber}>{number}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

// Styles
const styles = {
  app: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#0a0e27',
    color: '#e8e4d9',
    overflow: 'hidden',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '2rem 4rem',
    background: 'rgba(10, 14, 39, 0.95)',
    backdropFilter: 'blur(15px)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(201, 169, 97, 0.15)',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: 700,
    letterSpacing: '2px',
    color: '#d4af37',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  navLinks: {
    display: 'flex',
    gap: '4rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#e8e4d9',
    fontSize: '0.9rem',
    fontWeight: 500,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
  },
  hero: {
    marginTop: '100px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f132e 100%)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    padding: '4rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    padding: '0 4rem',
    zIndex: 2,
    animation: 'slideInLeft 1s ease',
  },
  heroTag: {
    fontSize: '0.75rem',
    letterSpacing: '3px',
    color: '#d4af37',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    fontWeight: 600,
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4.5rem',
    lineHeight: 1.15,
    marginBottom: '2rem',
    color: '#f5f1e8',
    fontWeight: 800,
    letterSpacing: '-1px',
  },
  heroDescription: {
    fontSize: '1.1rem',
    color: '#b8b5a8',
    marginBottom: '3rem',
    maxWidth: '500px',
    lineHeight: 1.8,
    fontWeight: 300,
  },
  ctaButtons: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  btn: {
    padding: '1rem 2.5rem',
    border: '2px solid #d4af37',
    background: 'transparent',
    color: '#d4af37',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.4s ease',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
  },
  btnFilled: {
    background: '#d4af37',
    color: '#0a0e27',
    borderColor: '#d4af37',
  },
  heroMeta: {
    display: 'flex',
    gap: '2rem',
    fontSize: '0.85rem',
    color: '#b8b5a8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heroImage: {
    padding: '4rem',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '1',
    background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.1) 0%, rgba(167, 46, 46, 0.05) 100%)',
    border: '2px solid rgba(201, 169, 97, 0.2)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b8b5a8',
    fontSize: '4rem',
    fontWeight: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  concepts: {
    background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
    padding: '6rem 4rem',
    position: 'relative',
  },
  conceptsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
  },
  conceptCard: {
    background: 'rgba(26, 31, 58, 0.8)',
    padding: '3.5rem',
    border: '1px solid rgba(201, 169, 97, 0.15)',
    borderRadius: '0',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.6s ease',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  conceptIcon: {
    fontSize: '2.5rem',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(201, 169, 97, 0.1)',
    borderRadius: '4px',
  },
  conceptTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    color: '#f5f1e8',
    margin: 0,
  },
  conceptText: {
    color: '#b8b5a8',
    fontSize: '0.95rem',
    lineHeight: 1.8,
    margin: 0,
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTag: {
    fontSize: '0.75rem',
    letterSpacing: '2px',
    color: '#d4af37',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    fontWeight: 600,
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
    color: '#f5f1e8',
  },
  sectionDescription: {
    fontSize: '1.1rem',
    color: '#b8b5a8',
    lineHeight: 1.8,
    fontWeight: 300,
  },
  vietnam: {
    background: 'linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%)',
    padding: '6rem 4rem',
    position: 'relative',
  },
  vietnamWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'center',
  },
  vietnamImage: {
    aspectRatio: '4/5',
    background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.15) 0%, rgba(167, 46, 46, 0.1) 100%)',
    border: '2px solid rgba(201, 169, 97, 0.2)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b8b5a8',
    fontSize: '5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  vietnamContent: {
    paddingRight: '2rem',
  },
  vietnamTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    color: '#f5f1e8',
    lineHeight: 1.2,
  },
  vietnamText: {
    color: '#b8b5a8',
    fontSize: '1.05rem',
    lineHeight: 1.9,
    marginBottom: '2.5rem',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  featureItem: {
    padding: '2rem',
    background: 'rgba(26, 31, 58, 0.6)',
    borderLeft: '4px solid #d4af37',
    borderRadius: '2px',
    transition: 'all 0.4s ease',
  },
  featureTitle: {
    fontSize: '1.3rem',
    color: '#d4af37',
    marginBottom: '0.8rem',
    fontFamily: "'Playfair Display', serif",
    margin: 0,
  },
  featureText: {
    color: '#b8b5a8',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    margin: 0,
  },
  solutions: {
    background: '#0a0e27',
    padding: '6rem 4rem',
    position: 'relative',
  },
  solutionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
  },
  solutionCard: {
    background: 'linear-gradient(135deg, rgba(26, 31, 58, 0.6) 0%, rgba(26, 31, 58, 0.3) 100%)',
    padding: '3.5rem',
    border: '1px solid rgba(201, 169, 97, 0.15)',
    borderRadius: '2px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.5s ease',
  },
  solutionNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    color: 'rgba(201, 169, 97, 0.2)',
    fontWeight: 700,
    marginBottom: '1rem',
    position: 'relative',
    zIndex: 2,
  },
  solutionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.6rem',
    color: '#f5f1e8',
    marginBottom: '1.2rem',
    position: 'relative',
    zIndex: 2,
  },
  solutionText: {
    color: '#b8b5a8',
    fontSize: '0.95rem',
    lineHeight: 1.8,
    position: 'relative',
    zIndex: 2,
  },
  benefits: {
    background: 'linear-gradient(to bottom, #1a1f3a 0%, #0a0e27 100%)',
    padding: '6rem 4rem',
    position: 'relative',
  },
  benefitsLargeImage: {
    width: '100%',
    aspectRatio: '16/9',
    background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.12) 0%, rgba(167, 46, 46, 0.08) 100%)',
    border: '2px solid rgba(201, 169, 97, 0.15)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b8b5a8',
    fontSize: '5rem',
    marginBottom: '4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  benefitsStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  statItem: {
    textAlign: 'center',
    padding: '2.5rem',
    background: 'rgba(26, 31, 58, 0.5)',
    border: '1px solid rgba(201, 169, 97, 0.1)',
    borderRadius: '2px',
    transition: 'all 0.4s ease',
  },
  statNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    color: '#d4af37',
    marginBottom: '0.5rem',
    fontWeight: 700,
  },
  statLabel: {
    color: '#b8b5a8',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  cta: {
    background: 'linear-gradient(135deg, #a72e2e 0%, #8b2e2e 100%)',
    padding: '6rem 4rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.2rem',
    marginBottom: '1.5rem',
    color: 'white',
    lineHeight: 1.2,
  },
  ctaText: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2.5rem',
    lineHeight: 1.8,
  },
  footer: {
    background: 'rgba(10, 14, 39, 0.8)',
    borderTop: '1px solid rgba(201, 169, 97, 0.1)',
    padding: '4rem',
    textAlign: 'center',
  },
  footerBrand: {
    color: '#d4af37',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    marginBottom: '1rem',
    fontWeight: 700,
    letterSpacing: '1px',
  },
  footerText: {
    color: '#b8b5a8',
    fontSize: '0.9rem',
    margin: '0.8rem 0',
  },

  // About/Contact Page Styles
  about: {
    background: '#0a0e27',
    padding: '6rem 4rem',
    minHeight: '100vh',
  },
  contact: {
    background: '#0a0e27',
    padding: '6rem 4rem',
    minHeight: '100vh',
  },
  pageTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.5rem',
    marginBottom: '3rem',
    color: '#f5f1e8',
    lineHeight: 1.2,
  },
  contentBlock: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contentTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    marginTop: '2.5rem',
    marginBottom: '1.5rem',
    color: '#d4af37',
    lineHeight: 1.2,
  },
  contentSubtitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    color: '#f5f1e8',
  },
  contentText: {
    fontSize: '1rem',
    color: '#b8b5a8',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  },
  contentList: {
    listStyleType: 'none',
    paddingLeft: '2rem',
    marginBottom: '2rem',
  },

  // Contact Form Styles
  contactWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contactInfo: {
    paddingRight: '2rem',
  },
  infoItem: {
    marginBottom: '2.5rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid rgba(201, 169, 97, 0.1)',
  },
  contactForm: {
    background: 'rgba(26, 31, 58, 0.5)',
    padding: '3rem',
    border: '1px solid rgba(201, 169, 97, 0.15)',
    borderRadius: '4px',
  },
  formGroup: {
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  formLabel: {
    color: '#d4af37',
    marginBottom: '0.8rem',
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  formInput: {
    background: 'rgba(10, 14, 39, 0.8)',
    border: '1px solid rgba(201, 169, 97, 0.2)',
    color: '#e8e4d9',
    padding: '1rem',
    borderRadius: '4px',
    fontSize: '0.95rem',
    transition: 'border-color 0.3s ease',
    fontFamily: "'Poppins', sans-serif",
  },
  successMessage: {
    marginTop: '1.5rem',
    padding: '1rem',
    background: 'rgba(39, 174, 96, 0.2)',
    border: '1px solid #27ae60',
    borderRadius: '4px',
    color: '#27ae60',
    textAlign: 'center',
    fontSize: '0.95rem',
  },
};