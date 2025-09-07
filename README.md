Farrel Arrayyan Adrianshah - 2406406710 - PBP C
Link PWS: https://farrel-arrayyan-footballchamps.pbp.cs.ui.ac.id/

**1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step**
- Membuat direktori baru dan menyiapkan virtual environment.
- Menyiapkan dan menginstal dependencies.
- Membuat proyek Django baru sesuai dengan nama aplikasi (footballchamps_shop)
- Membuat dan menyiapkan file .env dalam root proyek.
- Membuat dan menyiapkan file .env.prod dalam root proyek.
- Memodifikasi file settings.py untuk menggunakan environment variables, menambahkan localhost pada ALLOWED_HOSTS, konfigurasi production, dan konfigurasi database.
- Melakukan migrasi database dan menjalankan server Django secara local.
- Membuat repository GitHub baru.
- Menginisiasi direktori proyek dengan menjalankan git init, menambahkan .gitignore, dan menghubungkan repositori lokal dengan repositori GitHub.
- Membuat branch master dan melakukan add, commit, push ke repository GitHub.
- Membuat project baru dalam PWS dan mengonfigurasi environment sesuai dengan berkas .env.prod.
- Menambahkan URL deployment PWS dalam ALLOWED_HOSTS pada berkas settings.py.
- Melakukan push ke repositori GitHub dan PWS.
- Memastikan bahwa project sudah berjalan dengan baik pada deployment PWS.
- Membuat dan mendaftarkan aplikasi main dalam proyek.
- Membuat template main.html pada direktori templates aplikasi main.
- Mengimplementasi model baru pada direktori main, serta menambahkan atribut yang dibutuhkan.
- Membuat migrasi model dan menerapkan migrasi ke dalam basis data lokal.
- Mengintegrasikan komponen MVT dengan membuat fungsi show_main pada berkas views.py.
- Mengonfigurasi routing URL pada aplikasi main dan proyek utama untuk memetakan fungsi yang telah dibuat.
- Menjalankan server Django local untuk memastikan konfigurasi MVT sudah tepat.
- Melakukan push ke repositori GitHub dan PWS.
- Memastikan bahwa project sudah berjalan dengan baik pada deployment PWS.

**2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.**
Link foto: https://drive.google.com/file/d/1RSL2KK5VfmVDRfCec9II67oS2MZPuAJ0/view?usp=sharing

**3. Jelaskan peran settings.py dalam proyek Django!**
settings.py berperan sebagai file konfigurasi utama dalam sebuah proyek Django. Kita dapat mengatur berbagai konfigurasi seperti environment variables yang dipakai, hosts yang diperbolehkan, mode debug, aplikasi yang terinstal dalam proyek, pengaturan database, dan lain-lain.

**4. Bagaimana cara kerja migrasi database di Django?**
Proses migrasi database di Django adalah cara untuk menerapkan perubahan yang dilakukan pada model kepada database. Proses ini terdiri dari dua perintah, pertama adalah perintah makemigrations yang akan membuat berkas yang berisi perubahan model, kemudian perintah migrate yang akan mengaplikasikan perubahan model ke database. 

**5. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?**
Django merupakan framework web yang menggunakan bahasa python, bahasa pemrograman yang termasuk ramah untuk pemula. Selain itu, Django adalah framework gratis, open-source, dan memiliki komunitas aktif, sehingga mudah untuk mendapat dukungan saat menemukan masalah. Django dirancang untuk kecepatan pengembangan aplikasi, dimana pengembang dapat memanfaatkan fitur built-in yang lengkap sehingga dapat mewujudkan produk dari sebuah ide dengan cepat. Django juga merupakan framework yang aman, serbaguna, dan menawarkan skalabilitas yang tinggi, sehingga cocok untuk dijadikan framework permulaan.

**6. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?**
Menurut saya, tutorial 1 sudah berjalan dengan lancar dengan dokumen panduan yang mudah untuk diikuti, bahkan untuk pemula. Saya sangat berterima kasih kepada asdos untuk arahannya.
