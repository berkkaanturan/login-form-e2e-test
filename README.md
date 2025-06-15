# Login Formu E2E Test Projesi

Bu proje, bir React tabanlı basit giriş formu uygulamasının uçtan uca (End-to-End) testlerini Cypress kullanarak göstermektedir.

## Özellikler

* Basit e-posta ve şifre giriş alanları.
* "Şartları kabul ediyorum" onay kutusu.
* E-posta validasyonu (geçerli format).
* Şifre validasyonu (en az 6 karakter).
* Form validasyonları geçilene kadar aktif olmayan "Giriş Yap" butonu.
* Başarılı giriş sonrası yönlendirilen "Success" sayfası.
* Cypress ile yazılmış başarılı ve hatalı senaryo testleri.

## Kurulum

1.  Depoyu klonlayın:
    ```bash
    git clone [https://github.com/berkkaanturan/login-form-e2e-test.git](https://github.com/berkkaanturan/login-form-e2e-test.git)
    ```
2.  Proje dizinine gidin:
    ```bash
    cd login-form-e2e-test
    ```
3.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

## Uygulamayı Çalıştırma

Uygulamayı geliştirme modunda başlatmak için:

```bash
npm run dev