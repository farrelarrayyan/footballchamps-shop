Farrel Arrayyan Adrianshah - 2406406710 - PBP C

Link PWS: https://farrel-arrayyan-footballchamps.pbp.cs.ui.ac.id/

# [Tugas 2]

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

# [Tugas 3]
**1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?**

--> Dengan melakukan data delivery, kita bisa memastikan bahwa data dapat dikirim, diterima, dan diproses antar stack atau komponen-komponen platform (misal, antara backend, frontend, dan database). Data delivery biasanya juga dilakukan dengan format standar seperti XML dan JSON, sehingga perbedaan dalam berbagai sistem tidak mempengaruhi pemahaman dan pemrosesan data. 

**2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?**

--> Setelah mencari tahu lebih lanjut terhadap kelebihan dan kekurangan dari masing-masing format, menurut saya bentuk JSON lebih baik dibandingkan XML. JSON memiliki sintaks yang lebih singkat dan lebih mudah untuk dibaca dibandingkan XML. Dalam tampilan peramban web yang saya pakai, data JSON juga disajikan dengan lebih rapi dibandingkan dengan data XML. Saya mempelajari bahwa JSON lebih populer dibandingkan XML karena JSON lebih sederhana secara struktur, lebih cepat diproses, dan lebih mudah untuk dibaca oleh JavaScript.

**3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?**

--> method ```is_valid()``` merupakan method yang akan menjalankan proses *form validation* yang disediakan oleh Django. Proses ini akan membersihkan data dan memastikan bahwa data yang dimasukkan pengguna dalam suatu form sudah valid dan mengikuti peraturan yang sudah ditentukan dalam *field* tersebut. Kita membutuhkan method ini untuk memastikan bahwa data yang masuk ke dalam database terjamin sesuai dan tidak menimbulkan error, baik saat penyimpanan maupun penampilan.

**4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?**

--> CSRF merupakan singkatan dari *Cross Site Request Forgery*. CSRF bekerja dengan mengeksploitasi *credentials* yang tersimpan dalam peramban web untuk melakukan tindakan yang tidak diinginkan pengguna.  ```csrf_token``` mematikan bahwa request dalam form berasal dari pengguna dan domain yang sah. Jika kita tidak menambahkan ```csrf_token```, maka aplikasi kita akan lebih rentan terhadap serangan CSRF dan penyerang dapat mengirim request berbahaya yang seolah-olah berasal dari pengguna.

**5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).**
- Membuat dan mengimplementasi skeleton untuk kerangka views dari situs web dengan membuat direktori templates dalam root dan menambahkan berkas base.html.
- Mengubah berkas settings.py pada direktori proyek untuk memperbarui direktori template yang digunakan (menjadi ```BASE_DIR / 'templates'```)
- Memperbarui main.html pada direktori template main untuk menambahkan template tags Django dan menghubungkannya dengan base.html.
- Rename class model ```Items``` menjadi ```Item``` untuk mengindari kerancuan dalam penamaan, kemudian melakukan migrasi database untuk menerapkan perubahan pada model.
- Membuat berkas forms.py pada direktori main untuk input data produk pada HTML. berkas ini berisi struktur form yang dapat menerima data item baru (dengan model = Item, dan menambahkan fields yang relevan dengan model Item yang telah dibuat sebelumnya).
- Mengubah berkas views.py pada main dengan menambahkan import yang dibutuhkan **(redirect, get_object_or_404, ItemForm, Items)**, membuat item_list, dan menambahkan fungsi yang relevan untuk pembuatan dan penampilan item penjualan **(create_item, show_item)**
- Mengubah berkas urls.py pada direktori main dengan mengimport fungsi-fungsi yang telah dibuat dan menambahkan path URL ke variabel urlpatterns.
- Mengubah main.html pada direktori templates main untuk menampilkan data item dan menambahkan tombol "Add Item" yang akan membawa ke halaman form
- Membuat berkas create_item dan item_detail pada direktori templates main.
- Menambahkan entri url proyek pws ke ```CSRF_TRUSTED_ORIGINS``` pada berkas settings.py
- Menambahkan import dan fungsi yang diperlukan pada berkas views.py untuk mengembalikan data dalam format xml dan JSON. Diikuti dengan penambahan import fungsi dan path url di berkas urls.py.
- Menambahkan atribut id pada model dengan tipe UUIDField pada berkas models.py dan melakukan migrasi.
- Menambahkan fungsi yang dibutuhkan untuk mengembalikan data XML dan JSON menggunakan id pada berkas views,py, serta menambahkan import dan path url ke berkas urls.py.
- Menjalankan server Django local untuk memastikan form (penambahan dan penampilan produk) dan data delivery (dengan XML atau JSON) sudah berjalan dengan baik.
- Melakukan push ke repositori GitHub dan PWS.
- Memastikan bahwa project sudah berjalan dengan baik pada deployment PWS.
- Ternyata di PWS belum berjalan dengan baik karena kendala dengan file ```0001_initial.py``` pada direktori main/migrations. Setelah dibuat ulang dengan perintah ```python manage.py makemigrations main``` dan push ulang ke PWS, aplikasi sudah berjalan lancar.
- Mengubah nama model beserta semua reference dalam berkas-berkas lainnya dari ```Item``` ke ```Product``` agar sesuai dengan ketentuan.

**6. Apakah ada feedback untuk asdos di tutorial 2 yang sudah kalian kerjakan?**

--> Tutorial 2 sudah sangat mudah untuk diikuti, walaupun topik pembahasannya semakin kompleks. Terima kasih asdos!

**Postman Image Link:** https://drive.google.com/drive/folders/1utm7dYZ2r_OGNO8bfeQwa2LU9CGtjrVw?usp=sharing

# [Tugas 4]
**1. Apa itu Django ```AuthenticationForm?``` Jelaskan juga kelebihan dan kekurangannya.**

--> ```AuthenticationForm``` adalah form bawaan Django yang berguna untuk proses login. Form ini praktis untuk dipakai karena akan otomatis memvalidasi input username dan password serta mengembalikan objek ```User``` jika username dan password yang diberikan benar. Karena form ini sudah *built-in* dalam Django, maka proses autentikasi juga sudah terhubung dengan sistem autentikasi Django. Kekurangannya adalah sistem login yang ditawarkan cukup sederhana, sehingga kurang cocok jika membutuhkan sistem login yang lebih kompleks (misalnya menggunakan multi-factor authentication atau biometrik). 

**2. Apa perbedaan antara autentikasi dan otorisasi? Bagaiamana Django mengimplementasikan kedua konsep tersebut?**

--> Autentikasi memverifikasi identitas pengguna, sedangkan otorisasi menentukan apa saja yang boleh dilakukan oleh suatu pengguna terautentikasi. Misalnya, seroang admin dapat mengakses keseluruhan aplikasi, namun user biasa hanya bisa melihat bagian tertentu saja. Django mengimplementasikan autentikasi menggunakan sistem login bawaan seperti ```AuthenticationForm```, ```authenticate()```, ```login()``` dan ```logout()```, sedangkan otorisasi diimplementasikan dengan menggunakan decorator bawaan seperti ```@login_required```.


**3. Apa saja kelebihan dan kekurangan session dan cookies dalam konteks menyimpan state di aplikasi web?**

|               | Session                                                                | Cookies                                                          |
|---------------|------------------------------------------------------------------------|------------------------------------------------------------------|
| **Kelebihan** | - Lebih aman karena tidak tersimpan langsung di perangkat pengguna     | - Tidak membebani server                                         |
|               | - Bisa menyimpan data lebih banyak                                     | - Praktis untuk menyimpan data ringan (seperti waktu last login) |
|               | - Cocok untuk data penting (seperti informasi login)                   | - Waktu kedaluarsa dapat diatur secara manual                    |
| **Kekurangan**| - Membebani server                                                     | - Kapasitas terbatas hingga 4KB                                  |
|               | - Manajemen lebih kompleks jika jumlah data sangat banyak              | - Lebih rentan dicuri/disalahgunakan                             |



**4. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai? Bagaimana Django menangani hal tersebut?**

--> Tidak, karena cookies rentan terhadap:
- **XSS *(Cross-Site Scripting)*:** seroang *attacker* dapat mencuri cookie lewat script berbahaya.
- ***Session Hijacking*:** jika *attacker* dapat mencuri cookie yang berisi Session ID, maka mereka bisa login sebagai user korban.
- **CSRF *(Cross Site Request Forgery)*:** *attacker* dapat melakukan request yang tidak sah dan menyalahgunakan cookie.

Django menangani hal tersebut dengan menyediakan beberapa fitur keamanan, seperti:
- ```csrf_token``` untuk mencegah serangan CSRF.
- ```SESSION_COOKIE_SECURE=True``` untuk memastikan bahwa cookie hanya dikirim lewat HTTPS 
- ```SESSION_COOKIE_AGE = xxx``` untuk menentukan batas kedaluwarsa cookie.

referensi:
- https://docs.djangoproject.com/en/5.2/topics/security/
- https://medium.com/@altafkhan_24475/a-quick-guide-to-django-session-settings-d2ac0f1a01a4

**5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step**

- Membuat fitur registrasi pada ```views.py``` main dengan menambahkan import ```UserCreationForm``` dan ```messages``` serta menambahkan fungsi ```register```.
- Membuat template baru pada ```main/templates``` bernama ```register.html``` yang akan digunakan untuk halaman pembuatan akun baru.
- Menambahkan fungsi register ke dalam file ```urls.py``` dengan mengimport fungsi dan menambahkan path url pada ```urlpatterns```.
- Membuat fitur login pada ```views.py``` main dengan menambahkan import ```AuthenticationForm```, ```authenticate``` dan ```login``` serta menambahkan fungsi ```login_user```.
- Membuat template baru pada ```main/templates``` bernama ```login.html``` yang akan digunakan untuk halaman pembuatan akun baru.
- Menambahkan fungsi login ke dalam file ```urls.py``` dengan mengimport fungsi dan menambahkan path url pada ```urlpatterns```.
- Membuat fitur logout pada ```views.py``` main dengan menambahkan import ```logout``` serta menambahkan fungsi ```logout_user```.
- Menambahkan tombol logout pada ```main.html```.
- Menambahkan fungsi logout ke dalam file ```urls.py``` dengan mengimport fungsi dan menambahkan path url pada ```urlpatterns```.
- Membatasi akses halaman main dan product detail dengan import ```login_required``` pada ```views.py``` dan menerapkannya pada fungsi show_main dan show_product dengan menambahkan decorator.
- Mengimplementasikan penggunaan data dari cookies dengan menambahkan import ```datetime```, ```HttpResponseRedirect```, dan ```reverse``` serta memodifikasi fungsi ```login_user```, ```logout_user``` dan ```show_main``` untuk menyimpan, menerima, dan menghapus cookie berisi timestamp terakhir pengguna melakukan login.
- Memodifikasi berkas ```main.html``` agar menampilkan data waktu sesi terakhir login.
- Menghubungkan model ```Product``` dengan ```User``` menggunakan mengimport ```User``` dari ```django.contrib.auth.models``` dan menambahkan attribute ```user``` ke model ```Product```.
- Melakukan migrasi model dengan ```python manage.py makemigrations``` dan ```python manage.py migrate```.
- Memodifikasi fungsi ```create_product``` pada ```views.py``` agar Django tidak langsung menyimpan objek hasil form ke database, sehingga kita bisa menyisipkan field ```user``` dengan user yang sedang login.
- Memodifikasi fungsi ```show_main``` pada ```views.py``` untuk menerapkan fungsionalitas filtering berdasarkan user.
- Menambahkan tombol untuk mengubah filter user pada ```main.html```.
- Mencoba menjalankan server Django dan memastikan aplikasi berjalan lancar.
- Melakukan add-commit-push ke GitHub dan PWS.
- Mencoba menjalankan aplikasi di deployment PWS dan memastikan bahwa seluruh fitur sudah berjalan lancar.

# [Tugas 5]
**1. Jika terdapat beberapa CSS selector untuk suatu elemen HTML, jelaskan urutan prioritas pengambilan CSS selector tersebut!**

--> Urutannya akan dipilih berdasarkan hierarki *specificity* di CSS:
- **Inline style**: gaya langsung di atribut HTML (misal ```<p style="color:blue;">```)
- **ID Selector**: menggunakan # (misal ```#header {color: red;}```)
- **Classes, attribute selectors, dan pseudo-classes**: misal ```.xxx {color: green;}```, ```[type="xxx"] {border: 2px solid red;}```, dan ```:xxx {background-color: yellow;}```
- **Elements dan pseudo-elements**: misal ``h1 {font-size: 30px;}``, ```::before {color: red;}```, dan ```::after {color: blue;}```
- **Universal selector dan :where()**: ```* {font-family: Arial;}``` dan ```where(.xxx){color: purple;}```

Referensi: https://www.w3schools.com/css/css_specificity.asp


**2. Mengapa responsive design menjadi konsep yang penting dalam pengembangan aplikasi web? Berikan contoh aplikasi yang sudah dan belum menerapkan responsive design, serta jelaskan mengapa!**

--> Responsive design berarti tampilan website dapat menyesuaikan dengan ukuran layar. Hal ini penting karena sekarang, suatu website dapat diakses dari berbagai jenis perangkat yang masing-masing memiliki ukuran berbeda (misalnya adalah perbandingan antara ukuran layar PC/Laptop, Tablet, dengan Smartphone). Design yang responsive memastikan bahwa website dapat digunakan secara nyaman, tidak memandang perangkat yang digunakan oleh pengguna. 

Contoh website yang sudah menerapkan responsive design adalah Wikipedia, dimana layout navbar, informasi, dan ukuran teks disesuaikan dengan ukuran layar. Sedangkan, contoh website yang belum menerapkan responsive design adalah SIAK-NG, dimana saat dibuka di layar berukuran kecil, semua tombol dan teks ikut menjadi kecil, sehingga pengguna harus zoom manual agar dapat membaca konten di dalamnya.

**3. Jelaskan perbedaan antara margin, border, dan padding, serta cara untuk mengimplementasikan ketiga hal tersebut!**
- **Margin:** ruang di luar elemen atau jarak ke elemen lain.
- **Border:** garis tepi atau bingkai dari suatu elemen.
- **Padding:** ruang antara isi (content) dan border dalam suatu elemen.

Contoh implementasinya dalam CSS adalah sebagai berikut:
```css
.box {
  margin: 20px;
  border: 2px solid black;
  padding: 10px;
}
```

**4. Jelaskan konsep flex box dan grid layout beserta kegunaannya!**
- **Flexbox:** sistem tata letak satu dimensi. Flexbox memudahkan kita untuk mengatur elemen dalam satu baris atau satu kolom. Sistem tata letak ini cocok untuk menu horizontal, navbar, atau daftar item yang fleksibel (karena flexbox juga menyesuaikan tata letak dengan ukuran layar perangkat).

- **Grid Layout:** sistem tata letak 2 dimensi (baris dan kolom). Mirip dengan sebuah tabel, *grid layout* mempermudah kita untuk menata elemen dengan memasukkannya ke dalam baris dan kolom tertentu. Sistem tata letak ini cocok untuk desain halaman penuh seperti galeri atau dashboard.

Referensi: https://www.geeksforgeeks.org/css/comparison-between-css-grid-css-flexbox/

**5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial)!**
- Menambahkan Tailwind ke aplikasi Django dengan menambahkan CDN Tailwind pada berkas ```base.html```.
- Mengimplementaiskan fitur edit product dengan menambahkan fungsi ```edit_product``` pada berkas ```views.py``` dan menambahkan berkas ```edit_product.html``` pada direktori templates.
- Menambahkan fungsi edit_product ke dalam file ```urls.py``` dengan mengimport fungsi dan menambahkan path url pada ```urlpatterns```.
- Mengubah berkas ```main.html``` untuk menampilkan tombol edit di setiap produk yang ditampilkan.
- Mengimplementasikan fitur delete product dengan menambahkan fungsi ```delete_product``` pada berkas ```views.py```.
- Menambahkan fungsi delete_product ke dalam file ```urls.py``` dengan mengimport fungsi dan menambahkan path url pada ```urlpatterns```.
- Mengubah berkas ```main.html``` untuk menampilkan tombol delete di setiap produk yang ditampilkan.
- Menambahkan navbar dengan membuat berkas ```navbar.html``` pada direktori template root project dan menautkan ke bebrkas ```main.html``` dengan tags ```include```.
- Mengonfigurasi static files dengan menambahkan middleware ```WhiteNoise``` serta mengubah variabel ```STATIC_ROOT```, ```STATICFILES_DIRS```, dan ```STATIC_URL``` pada berkas ```settings.py```
- Menambahkan berkas ```global.css``` pada direktori ```static/css``` dan menghubungkannya dengan ```base.html```. 
- Menambahkan *custom styling* ke ```global.css``` dengan tema dark background + orange accent color.
- Menambahkan styling ke berkas ```navbar.html```, ```login.html```, dan ```register.html```sesuai dengan tema.
- Membuat berkas ```card_product.html``` pada direktori templates dan menerapkan styling.
- Menerapkan styling ke berkas ```main.html``` dan menambahkan tampilan saat produk masih kosong menggunakan static image.
- Menerapkan styling ke berkas ```product_detail.html``` sesuai dengan tema.
- Menerapkan styling ke berkas ```create_product.html``` sesuai dengan tema.