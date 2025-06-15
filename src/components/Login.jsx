  import React, { useState } from 'react';

function Login() {
  // Durum değişkenleri: Form alanlarının değerlerini tutarız
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Hata mesajları için durum değişkenleri
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  // Email validasyonu (daha doğru bir regex ile)
  const isValidEmail = (email) => {
    if (!email) {
      return false; // Boş olamaz
    }
    // Basit bir e-posta formatı regex'i:
    // Başında ve sonunda boşluk olmayan karakterler, @ işareti, tekrar boşluk olmayan karakterler, nokta, tekrar boşluk olmayan karakterler.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Şifre validasyonu (en az 6 karakter olmasını kontrol edelim)
  const isStrongPassword = (password) => {
    if (!password) {
      return false; // Boş olamaz
    }
    return password.length >= 6; // En az 6 karakter olmalı
  };

  // Formun genel geçerlilik durumu
  // Bu değer her renderda yeniden hesaplanır
  const isFormValid =
    isValidEmail(email) &&
    isStrongPassword(password) &&
    termsAccepted; // Şartlar kabul edilmiş olmalı

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    // Her gönderimde hata mesajlarını sıfırla ki güncel validasyon durumunu görelim
    setEmailError('');
    setPasswordError('');
    setTermsError('');

    let valid = true; // Genel geçerlilik durumu kontrolü

    // Email kontrolü
    if (!isValidEmail(email)) {
      setEmailError('Lütfen geçerli bir e-posta adresi girin. (@ ve . içermeli)');
      valid = false;
    }

    // Şifre kontrolü
    if (!isStrongPassword(password)) {
      setPasswordError('Şifre en az 6 karakter olmalıdır.');
      valid = false;
    }

    // Şartlar kontrolü
    if (!termsAccepted) {
      setTermsError('Devam etmek için şartları kabul etmelisiniz.');
      valid = false;
    }

    // Tüm validasyonlar geçerse, success sayfasına yönlendir
    if (valid) {
      window.location.href = '/success';
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-posta:</label>
          <input
            type="email"
            id="email"
            value={email}
            // Input değeri değiştiğinde state'i güncelle ve validasyonu tetikle
            onChange={(e) => {
              setEmail(e.target.value);
              // Anında validasyon geri bildirimi için
              if (e.target.value && !isValidEmail(e.target.value)) {
                setEmailError('Lütfen geçerli bir e-posta adresi girin. (@ ve . içermeli)');
              } else {
                setEmailError('');
              }
            }}
            // Input alanı odağı kaybettiğinde de validasyonu kontrol et (Cypress için de faydalı)
            onBlur={() => {
              if (email && !isValidEmail(email)) {
                setEmailError('Lütfen geçerli bir e-posta adresi girin. (@ ve . içermeli)');
              } else {
                setEmailError('');
              }
            }}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          {emailError && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }}>{emailError}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            // Input değeri değiştiğinde state'i güncelle ve validasyonu tetikle
            onChange={(e) => {
              setPassword(e.target.value);
              // Anında validasyon geri bildirimi için
              if (e.target.value && !isStrongPassword(e.target.value)) {
                setPasswordError('Şifre en az 6 karakter olmalıdır.');
              } else {
                setPasswordError('');
              }
            }}
            // Input alanı odağı kaybettiğinde de validasyonu kontrol et
            onBlur={() => {
              if (password && !isStrongPassword(password)) {
                setPasswordError('Şifre en az 6 karakter olmalıdır.');
              } else {
                setPasswordError('');
              }
            }}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
          />
          {passwordError && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }}>{passwordError}</p>}
        </div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => {
              setTermsAccepted(e.target.checked);
              // Anında validasyon geri bildirimi için
              if (!e.target.checked) {
                setTermsError('Devam etmek için şartları kabul etmelisiniz.');
              } else {
                setTermsError('');
              }
            }}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor="terms">Şartları kabul ediyorum</label>
        </div>
        {termsError && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '-10px', marginBottom: '15px' }}>{termsError}</p>}

        <button
          type="submit"
          disabled={!isFormValid} // Form geçerli değilse butonu devre dışı bırak
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isFormValid ? '#007bff' : '#cccccc', // Aktifse mavi, değilse gri
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            fontSize: '1em'
          }}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;