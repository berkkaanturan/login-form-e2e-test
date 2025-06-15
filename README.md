# Login Formu E2E Test Projesi

Bu proje, bir React tabanlı basit giriş formu uygulamasının uçtan uca (End-to-End) testlerini Cypress kullanarak göstermektedir. Proje, yeni başlayan bir geliştiricinin adım adım bir web uygulamasını kurmasını, temel özellikleri eklemesini, testler yazmasını ve projeyi Git/GitHub süreçleriyle yönetmesini hedeflemektedir.

## Özellikler

* **Basit Login Formu:** E-posta, şifre ve "Şartları kabul ediyorum" alanları içerir.
* **Basit Validasyonlar:**
    * **E-posta:** Geçerli bir e-posta formatı (`@` ve `.` içermeli) kontrolü.
    * **Şifre:** En az 6 karakter uzunluğunda olma kontrolü.
    * **Şartlar:** "Şartları kabul ediyorum" onay kutusunun işaretli olması gerekliliği.
* **Dinamik Buton Durumu:** Tüm validasyonlar geçilene kadar "Giriş Yap" butonu devre dışı kalır.
* **Anlık Hata Geri Bildirimi:** Kullanıcı input alanlarına yazdıkça veya odak değiştirdikçe anında hata mesajları gösterilir.
* **UI Tutarlılığı:** Hata mesajları ekranda belirdiğinde form konteynerinin boyutunun değişmemesi için CSS düzeltmeleri yapılmıştır.
* **Başarı Sayfası:** Başarılı giriş sonrası `Success.jsx` sayfasına yönlendirme.
* **Uçtan Uca (E2E) Testler:** Cypress kullanılarak yazılmış aşağıdaki senaryoları kapsar:
    * Başarılı form doldurma ve başarı sayfasına yönlendirme.
    * Hatalı e-posta, kısa şifre ve şartları kabul etmeme durumlarında beklenen hata mesajlarının görüntülenmesi ve butonun devre dışı kalması.

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/berkkaanturan/login-form-e2e-test.git](https://github.com/berkkaanturan/login-form-e2e-test.git)
    ```
2.  **Proje Dizinine Gidin:**
    ```bash
    cd login-form-e2e-test
    ```
3.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

## Uygulamayı Çalıştırma

Uygulamayı geliştirme modunda başlatmak için:

```bash
npm run dev