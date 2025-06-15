// cypress/e2e/login-form.cy.js

describe('Login Form E2E Tests', () => {
  beforeEach(() => {
    // Her testten önce uygulamanın ana sayfasına git
    cy.visit('http://localhost:5173/'); // Uygulamanızın çalıştığı adres
  });

  // a) Başarılı Form Doldurma Senaryosu
  it('başarılı form doldurulduğunda submit edebilmeli ve success sayfasına yönlenmeli', () => {
    // Geçerli email ve şifre gir
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('sifre123');
    cy.get('#terms').check(); // Şartları kabul et

    // Butonun devre dışı olmadığını kontrol et ve tıkla
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    // URL'nin /success içerdiğini ve başarı mesajının göründüğünü kontrol et
    cy.url().should('include', '/success');
    cy.contains('Başarıyla Giriş Yaptınız!').should('be.visible');
  });

  // b) Hatalı Durumlar Senaryosu
  it('hatalı durumlarda beklenen hata mesajları görünmeli ve buton disabled kalmalı', () => {
    // Senaryo 1: Email yanlış girildiğinde
    cy.get('#email').type('gecersiz-email'); // Geçersiz e-posta formatı (regex'e göre)
    cy.get('#password').focus(); // Emailden odağı kaldırıp validasyonu tetikle

    // Güncellenmiş hata mesajı metnini kullanıyoruz
    cy.contains('Lütfen geçerli bir e-posta adresi girin. (@ ve . içermeli)').should('be.visible');
    cy.get('p[style*="color: red"]').should('have.length', 1);
    cy.get('button[type="submit"]').should('be.disabled');

    cy.reload(); // Bir sonraki senaryo için formu temizle

    // Senaryo 2: Şifre yanlış (çok kısa) girildiğinde
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('kisa'); // 6 karakterden az
    cy.get('#email').focus(); // Passworddan odağı kaldırıp validasyonu tetikle

    cy.contains('Şifre en az 6 karakter olmalıdır.').should('be.visible');
    cy.get('p[style*="color: red"]').should('have.length', 1);
    cy.get('button[type="submit"]').should('be.disabled');

    cy.reload(); // Bir sonraki senaryo için formu temizle

    // Senaryo 3: Email ve şifre yanlış girildiğinde
    cy.get('#email').type('yanlis@'); // Geçersiz email
    cy.get('#password').type('123'); // Kısa şifre
    cy.get('#terms').check(); // Şartları kabul et ve inputlardan odağı kaldır, validasyonu tetikle

    // Güncellenmiş hata mesajı metinlerini kullanıyoruz
    cy.contains('Lütfen geçerli bir e-posta adresi girin. (@ ve . içermeli)').should('be.visible');
    cy.contains('Şifre en az 6 karakter olmalıdır.').should('be.visible');
    cy.get('p[style*="color: red"]').should('have.length', 2); // İki hata mesajı olmalı
    cy.get('button[type="submit"]').should('be.disabled');

    cy.reload(); // Bir sonraki senaryo için formu temizle

    // Senaryo 4: Email ve şifre doğru ama kurallar kabul edilmediğinde
    cy.get('#email').type('valid@email.com');
    cy.get('#password').type('validpass');
    cy.get('#terms').uncheck(); // Şartları kabul etme (bu işlemi yapınca hata mesajı görünmeli)

  });
});