import { QuickDB } from "quick.db";
const db = new QuickDB();

const db_user = db.table("user");
const db_materi = db.table("materi");
const db_loggedUser = db.table("loggedUser");
const db_forum = db.table("forum");
const db_forgetPass = db.table("forgetPass");

const UUID = "88ba3d39-2af4-4526-8ab2-97d8b470d061";
const UUID2 = "59d1756f-5259-4527-bc72-640db97372b5";
const UUID3 = "e6adfbb7-36ac-4418-90f5-f022a5d436c5";
const UUID4 = "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821";
const UUID5 = "aa1a2295-fdcf-47d3-acd9-fd187288ebd7";
const UUID6 = "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const materi_gitar = [
  {
    "materiID": 0,
    "alatMusik": "gitar",
    "owner": "59d1756f-5259-4527-bc72-640db97372b5",
    "data": {
      "nama": "Dasar Dasar gitar",
      "deskripsi": "Mempelajari Dasar-dasar gitar, dimulai dari pengenalan bagian-bagian alat musik, hingga cara bermain",
      "tingkatan": "pemula",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          1
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          5
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          4
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          4
        ],
        [
          "ed07659b-6c2e-4d12-bedc-a918c87325ee",
          5
        ],
        [
          "325647e3-6cc5-4f23-a304-ca16ed12c85c",
          4
        ],
        [
          "258234d6-f69c-4a48-a229-f4faf24197e5",
          4
        ]
      ],
      "pengunjung": 113,
      "createdAt": "2023-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 3,
    "alatMusik": "gitar",
    "owner": "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
    "data": {
      "nama": "Tips Bermain Gitar",
      "deskripsi": "Bisa dibilang gitar merupakan sebuah instrumen yang cukup populer untuk dimainkan buat kalian yang menggemari musik. Popularitas tersebut juga menggugah perasaan banyak orang untuk belajar gitar. Pasalnya memainkan musik dengan menggunakan gitar merupakan salah satu aktivitas yang menyenangkan untuk dilakukan bersama teman-teman. Banyak dari kalian yang sudah mulai belajar gitar sejak kecil, tapi buat yang ingin belajar gitar sekarang pun kalian tidak perlu minder. Tidak ada kata terlambat untuk belajar gitar. Pada materi ini akan membahas mengenai tips dalam bermain gitar khususnya bagi pemula.",
      "tingkatan": "menengah",
      "rating": [
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          5
        ],
        [
          "258234d6-f69c-4a48-a229-f4faf24197e5",
          4
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          5
        ]
      ],
      "pengunjung": 22,
      "createdAt": "2023-10-10T13:12:55.248Z",
      "updatedAt": "2023-10-10T13:14:34.451Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Tahapan dalam bermain gitar",
          "materi": "Sebagai seseorang yang mulai belajar gitar sebagai pemula, kalian bisa mulai dengan tahapan yang simple seperti berikut.\n<li><b>Kenali kunci dasar</b></li>\nLangkah pertama yang perlu kalian ketahui saat belajar gitar adalah mengenal kunci dasar, Superfriends. Pengenalan kunci dasar saat belajar gitar mencakup tentang posisi jari yang menyentuh 6 senar yang ada pada gitar. Posisi jari tersebut nantinya akan membuat nada yang harmonis yang tersebar sepanjang 7 nada, seperti do, re, mi, fa, sol, la, si. Namun untuk kunci atau chord gitar sendiri biasanya orang-orang lebih mengenal dengan urutan E, A, D, G, B, dan E dengan oktaf yang tinggi di bagian bawah senar. Pastikan gitar kalian tidak sumbang ya, Superfriends. Untuk langkah pertama ini kalian bisa bantu teman atau orang dekat yang memang sudah bisa melakukan tuning gitar agar suara yang dihasilkan saat kalian belajar gitar dari pengenalan nada dasar lebih mudah.\n<li><b>Belajar tuning</b></li>\nTuning atau mengatur senar agar tidak sumbang merupakan langkah yang cukup penting saat belajar gitar. Pasalnya, jika kalian tidak memahami tahap ini, akan sulit untuk memainkan gitar dengan nada yang presisi dan harmonis. Belajar tuning juga akan memudahkan kalian mengasah pendengaran untuk menentukan nada. Jadi telinga kalian akan lebih sensitif terhadap nada sumbang ketika bermain gitar baik sendiri maupun bersama teman-teman ketika berkumpul.\n<li><b>Temukan posisi yang nyaman</b></li>\nSelanjutnya adalah mencari posisi yang nyaman saat bermain gitar. Hal ini mungkin terkesan bukan hal yang memengaruhi proses belajar gitar, tapi dengan menemukan posisi yang nyaman kalian akan lebih mudah beradaptasi dengan gitar yang kalian miliki. Baik gitar akustik maupun elektrik mempunyai ukuran yang berbeda. Ada yang dirancang dengan desain yang beragam demi kebutuhannya. Namun secara mendasar, kalian bisa membuat nyaman dengan menopang gitar menggunakan salah satu kaki kalian dengan postur badan yang tegak. Postur badan akan memengaruhi jangkauan jari kalian saat mencoba belajar gitar dengan memainkan kunci atau chord dasar. Proses ini butuh pembiasaan, Superfriends. Tidak jarang kalian akan merasa pegal. Namun, jika dilakukan secara rutin dan teratur, lama kelamaan tubuh kalian akan beradaptasi dengan postur atau posisi bermain gitar yang nyaman ini.\n<li><b>Belajar memetik gitar</b></li>\nSetelah menemukan posisi yang nyaman sembari menerka-nerka jangkuan tangan saat belajar gitar, kalian juga bisa mulai secara perlahan memetik gitar. Perlu dicatat bahwa belajar memetik gitar ini berbeda dengan strumming yang lebih dikenal dengan teknik upstroke dan downstroke. Untuk belajar gitar dengan cara memetik kalian perlu menggunakan 5 jari kalian. Alangkah baiknya jangan menggunakan pick terlebih dahulu saat proses belajar gitar satu ini, agar tubuh kalian terbiasa. Kalian juga perlu mengikuti tahapan berikut. Pertama dalam belajar gitar dengan cara memetik, kalian perlu meletakkan ibu jari di bagian senar bass atau senar yang tebal, di urutan 6, 5, dan 4. Sedangkan untuk telunjuk, kalian bisa gunakan untuk memetik senar 3 dan 2. Selanjutnya, jari manis kalian gunakan untuk memetik senar satu. Pertama-tama tentu kalian akan merasa canggung atau kaku dalam memetik gitar. Namun jika dilakukan secara rutin, kalian akan terbiasa untuk memetik gitar dengan cepat dan presisi, Superfriends.\n<li><b>Terus berlatih dari kunci yang mudah hingga sulit</b></li>\nBerlatih belajar gitar memang tidak bisa dilakukan dalam waktu singkat. Penting bagi kalian untuk terus mengasah kemampuan dan melakukan review secara rutin. Hal ini diperlukan karena dalam bermain alat musik, terutama gitar kalian juga membutuhkan muscle memory. Sehingga tubuh, terutama pada bagian jari terbiasa untuk membentuk pola permainan kunci yang rumit. Jari kalian mungkin akan terasa sakit atau pegal. Jikalau begitu, ada baiknya untuk lakukan istirahat sejenak sembari meregangkan otot. Namun jangan sampai patah semangat."
        }
      ]
    }
  },
  {
    "materiID": 4,
    "alatMusik": "gitar",
    "owner": "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
    "data": {
      "nama": "Pengenalan Gitar",
      "deskripsi": "Bagi para pemula yang baru saja mempelajari atau tertarik dengan musik, biasanya alat musik yang menjadi pilihan adalah gitar. Gitar merupakan alat musik yang relatif mudah dan tidak terlalu rumit. Simak informasi berikut jika ingin mempelajari dan mengetahui lebih lanjut tentang alat musik gitar.",
      "tingkatan": "pemula",
      "rating": [
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          2
        ],
        [
          "258234d6-f69c-4a48-a229-f4faf24197e5",
          4
        ]
      ],
      "pengunjung": 3,
      "createdAt": "2023-10-10T13:21:15.900Z",
      "updatedAt": "2023-10-10T13:21:15.900Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Apa Itu Gitar ?",
          "materi": "<img>https://i.pinimg.com/550x/4a/8a/90/4a8a90843d5c555a60231bd217b1f82d.jpg</img>\nGitar merupakan sebuah alat musik berdawai yang dapat dimainkan dengan cara dipetik dengan menggunakan jari serta plektrum. Gitar sendiri terbentuk dari adanya sebuah bagian tubuh pokok serta bagian leher padat yang berfungsi sebagai tempat senar. Senar yang ada pada alat musik gitar sendiri pada umumnya berjumlah enam yang saling berdempetan. Gitar pada umumnya dibuat dari berbagai jenis kayu serta senar yang terbuat dari bahan nilon maupun baja. Namun, pada gitar modern bahan dasar atau material yang digunakan juga terdapat polikarbonat.\n<img>https://i.pinimg.com/originals/ce/c3/82/cec3821e61ca88001af91c205fa363e4.jpg</img>"
        }
      ]
    }
  },
  {
    "materiID": 5,
    "alatMusik": "gitar",
    "owner": "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
    "data": {
      "nama": "Keuntungan Menjadi Seorang Gitaris",
      "deskripsi": "Konon, musik bisa membuat keajaiban bagi otak Anda. Musik dapat memengaruhi persepsi Anda dalam melakukan upaya. Sebuah studi oleh Southern Connecticut State University menunjukkan bahwa pemain bola basket yang berlari mendengarkan musik berlari 5 menit lebih lama daripada mereka yang tidak (pada 85 hingga 90% dari denyut jantung maksimal mereka). Jadi, jika mendengarkan musik bisa mendatangkan manfaat seperti itu, pasti bermain gitar juga bisa. Tidak masalah apakah Anda belajar gitar sendiri, dengan guru gitar, atau kursus gitar. Dalam materiini, kita akan melihat manfaat bermain gitar dalam pelajaran musik atau belajar sendiri cara bermain gitar.",
      "tingkatan": "menengah",
      "rating": [
        [
          "258234d6-f69c-4a48-a229-f4faf24197e5",
          5
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          5
        ]
      ],
      "pengunjung": 6,
      "createdAt": "2023-10-10T13:25:56.239Z",
      "updatedAt": "2023-10-10T13:26:38.733Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Memainkan Gitar untuk Meningkatkan Daya Ingat Anda",
          "materi": "<img>https://www.superprof.co.id/blog/wp-content/uploads/2020/01/hubungan-kemampuan-gitar-dan-memori-anda.jpg.webp</img>\nBermain gitar adalah cara yang bagus untuk menstimulasi otak dan ingatan Anda dan pemula sudah dapat mulai melihat manfaat dari saat mereka mulai memainkan beberapa melodi, atau akord gitar yang umum. Semua jenis memori digunakan:\n<li>Memori Episodik, dimana ketika Anda mendengarkan lagu akan mengingatkan Anda pada memori lain, seseorang, atau waktu dan tempat tertentu.</li>\n<li>Memori Semantik, dimana Anda akan mengembangkan memori berbasis pengetahuan tentang topik tertentu, dalam hal ini, gitar.</li>\n<li>Memori Perseptual, terkait apa yang Anda ingat dan apa yang indra Anda alami.</li>\n<li>Memori Prosedural, ini adalah memori yang mengingat keterampilan seperti cara membaca tablature, teori musik, atau menyetem gitar.</li>\n<li>Memori yang Bekerja, ini adalah bagian dari memori yang memberikan informasi yang diperlukan untuk menyelesaikan tugas-tugas tertentu.</li>"
        },
        {
          "id": 1,
          "judul": "Menyingkirkan Stres dengan Bermain Gitar",
          "materi": "Stres sudah menjadi umum di abad ke-21. Hampir setengah dari semua pekerja mengalami stres.\n<img>https://www.roojai.co.id/wp-content/uploads/2022/10/2209-22_stress-penyebab-kanker.jpg</img>\nTampaknya tidak ada yang aman. Rekan yang menjengkelkan, lalu lintas dalam perjalanan ke tempat kerja, janji temu dokter, ada begitu banyak sumber stres di zaman modern. Tampaknya hampir tak terhindarkan. Anda perlu menemukan cara untuk menghindari dan mengelola stres Anda karena dapat merusak kesehatan Anda: masalah jantung, kenaikan berat badan, sulit tidur, dll. Gitar adalah obat yang hebat! Cobalah bermain riff Hendrix atau memainkan irama flamenco ketika Anda masuk kerja setelah hari yang menegangkan. Ini akan terasa seperti beban yang diangkat. Dengan demikian, dengan sedikit stres, suasana hati Anda akan meningkat dan kualitas tidur Anda juga akan meningkat. Namun, tidak semua stres itu buruk. Bahkan, Anda mungkin akan merasa stres sebelum naik ke atas panggung. Ini adalah jenis stres yang baik. Ini akan memotivasi Anda dan mendorong Anda untuk melakukan yang terbaik dari kemampuan Anda. Stress yang baik bersifat sementara dan dapat membantu Anda mencapai tujuan dan menunjukkan kinerja yang baik dalam kasus ini. Namun bisa melelahkan dan Anda harus pulih setelahnya."
        },
        {
          "id": 2,
          "judul": "Mendapat Ilmu Disiplin dengan Belajar Bermain Gitar",
          "materi": "Berbeda dengan piano di mana menekan tombol akan menghasilkan suara yang bagus, seorang gitaris pemula perlu menekan dengan benar pada fretboard dan dengan benar memetik talinya untuk menghasilkan suara yang bagus. Sama seperti biola, ada kurva belajar yang sulit untuk dipelajari di awal. Namun, dengan mengerjakannya beberapa menit setiap hari, Anda akan segera mulai melihat hasilnya.\n<img>https://www.blibli.com/friends-backend/wp-content/uploads/2023/03/B200289-Cover-Cara-Belajar-Kunci-Gitar-scaled.jpg</img>\nAnda harus gigih dan tidak menyerah setelah hanya dua pelajaran gitar ketika Anda tidak dapat segera memainkan apa yang diperlihatkan oleh guru les gitar Anda! Terkadang Anda merasa Anda tidak bisa melanjutkan tetapi tidak bisa menyerah. Otak Anda perlu waktu untuk mengasimilasi konsep-konsep baru dan ada beberapa tahapan proses pembelajaran yang perlu Anda ingat. Anda harus mengingat tujuan Anda dan tetap disiplin untuk mendapatkan hasil yang tepat! Terkadang Anda hanya membutuhkan orang lain, seperti guru les gitar pribadi, untuk mengingatkan Anda tentang kemajuan yang sudah Anda capai. Jadi mengapa tidak mencari pelajaran gitar dan memulai segera? Atau, jika guru gitar Anda mengatakan siap, Anda bisa bermain gitar dalam sebuah band: itu membutuhkan kedisiplinan ke tingkat yang sama sekali baru!"
        },
        {
          "id": 3,
          "judul": "Belajar Gitar Sebagai Hobi",
          "materi": "<img>https://s0.bukalapak.com/uploads/content_attachment/f1bbd6cde767dad082f129b5/original/mariana-vusiatytska-141230-unsplash.jpg</img>\nSeperti semua instrumen musik, penting bagi Anda untuk menikmati permainan sendiri ketika bermain gitar. Jika Anda tidak mendapatkan kesenangan dari bermain gitar, saya tidak melihat alasan untuk terus melakukannya. Bermain gitar dapat menyebabkan otak Anda mengeluarkan dopamin, hormon yang dihasilkan ketika Anda melakukan kegiatan menyenangkan lainnya seperti meditasi, olahraga, atau makan cokelat. Perlu kita katakan lebih banyak lagi? Memainkan gitar juga dapat menyebabkan pelepasan endorfin yang sama yang dihasilkan saat Anda berolahraga atau menikmati aktivitas tertentu yang saya tidak akan jelaskan secara rinci dalam artikel ini. Dengan demikian, bermain gitar dapat membawa banyak kesenangan yang seharusnya memberi makan semangat Anda untuk terus meningkatkan bermain gitar Anda. Endorfin adalah stimulan bagi tubuh yang bertindak serupa dengan obat penghilang rasa sakit dan juga meningkatkan respons autoimun tubuh. Bermain gitar karenanya bagus untuk kesehatan fisik dan mental Anda. Anda juga dapat meningkatkan kapasitas paru-paru Anda dengan bernyanyi pada saat yang sama! Dengan semua hormon ini berkeliaran, Anda akan meningkatkan kepercayaan diri Anda. Semakin banyak kepercayaan yang Anda miliki, semakin Anda akan berusaha, dan semakin Anda akan meningkatkan kemampuan bermain gitar. "
        },
        {
          "id": 4,
          "judul": "Mengekspresikan Emosi Anda dengan Gitar",
          "materi": "Musik adalah cara yang bagus untuk mengekspresikan emosi Anda. Apakah Anda sedih, marah, atau bahagia, gitar akan menjadi teman terbaik Anda.\n<img>https://ik.imagekit.io/waters2021/sehataqua/uploads/20230515115542_original.jpg?tr=f-auto</img>\nDemikian pula, gitar dapat menghilangkan stres dan membantu Anda mengekspresikan perasaan yang tidak dapat Anda ungkapkan. Seperti ketika para penulis merasa terbebaskan dengan menuliskan emosi mereka yang menyakitkan di atas kertas, seorang musisi akan merasa jauh lebih nyaman setelah memainkan beberapa catatan untuk mengekspresikan apa yang mereka rasakan. Biarkan jari-jari Anda bebas berkeliaran di papan fret dan biarkan gitar Anda membebaskan perasaan Anda. Ini akan memberi Anda kepuasan! Menulis musik juga merupakan cara yang bagus untuk mengekspresikan kreativitas Anda dengan menulis musik yang persis mengekspresikan perasaan Anda. Jangan ragu untuk mengambil gitar baik saat Anda merasa marah, sedih, atau gembira! Ungkapan ini bahkan bisa masuk ke daftar Anda berikutnya!"
        },
        {
          "id": 5,
          "judul": "Menjadi Gitaris untuk Meningkatkan Keterampilan Sosial",
          "materi": "Musik adalah tentang berbagi. Anda berbagi emosi dengan diri sendiri, penonton, atau musisi lain.\n<img>https://assets-a1.kompasiana.com/items/album/2023/01/28/pexels-photo-7149172-63d480b308a8b5126e25fe74.jpeg</img>\nSebagai anggota band atau grup, Anda dapat mengembangkan empati Anda terhadap orang lain dan meningkatkan komunikasi Anda dengan mereka. Dalam sebuah grup, setiap orang memiliki peran untuk dimainkan dan penting bahwa setiap musisi tetap rendah hati tentang musik mereka dan tidak menjadi besar kepala. Berbagi musik dengan musisi lain dapat membantu menjalin pertemanan yang kuat dan juga sangat menyenangkan. Berada dalam grup tidak selalu berjalan dengan mulus. Pasti akan ada ketegangan dan Anda harus belajar bagaimana menangani perselisihan tanpa menyakiti anggota band yang lain atau memecah kelompok. Anda harus belajar untuk bersikap toleran terhadap orang lain dan menghargai pekerjaan yang dilakukan setiap musisi. Anda akan belajar berkompromi, sama seperti yang harus dilakukan dalam sebuah hubungan."
        }
      ]
    }
  },
  {
    "materiID": 6,
    "alatMusik": "gitar",
    "owner": "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
    "data": {
      "nama": "Bagian - Bagian Gitar Elektrik",
      "deskripsi": "Seperti halnya alat musik lainnya, gitar elektrik juga memiliki bagian-bagiannya tersendiri. Keseluruhan bagian tersebut memiliki peran masing-masing untuk menciptakan alunan suara yang merdu. Nah apa sajakah bagian-bagian gitar elektrik tersebut? Berikut ulasannya.",
      "tingkatan": "menengah",
      "rating": [
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          5
        ],
        [
          "258234d6-f69c-4a48-a229-f4faf24197e5",
          3
        ]
      ],
      "pengunjung": 3,
      "createdAt": "2023-10-10T13:34:55.040Z",
      "updatedAt": "2023-10-10T13:34:55.040Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Gambar Bagian - Bagian Gitar Elektrik",
          "materi": "<img>https://id.yamaha.com/id/files/yd_eg01_00_594x630_0833c88ff376c7c886632a90a89a10be.png</img>"
        },
        {
          "id": 1,
          "judul": "Body atau Badan",
          "materi": "Bagian dari alat musik gitar elektrik yang pertama adalah body atau badan yang menjadi salah satu faktor penting yang menjadi penentu suara yang dikeluarkan oleh sebuah gitar elektrik. Hal ini dikarenakan walaupun terdapat faktor lain yang dapat mempengaruhi kualitas suara, namun kayu yang digunakan pada bagian badan dari sebuah gitar merupakan faktor mendasar dari kualitas suara yang akan dikeluarkan.\n\nPada bagian badan sebuah gitar elektrik ini sendiri terdiri dari beberapa potongan kayu solid yang terdiri dari beberapa macam kayu, seperti Alder, Ash, Maple, maupun Mahoni.\n\nBagian badan dari gitar elektrik ini sebenarnya dapat dibuat dari satu potongan kayu saja, namun pada umumnya bagian ini terbentuk dari adanya beberapa potongan berjumlah dua, tiga, atau bahkan lima kayu solid yang digabungkan menjadi satu kesatuan untuk membentuk gitar elektrik.\n\nKombinasi paling umum untuk jenis konstruksi sebuah gitar elektrik yang menggunakan satu jenis kayu untuk melapisi bagian bodi utama adalah kayu maple yang kemudian dilapisi dengan kayu mahoni.\n\nHal ini dilakukan untuk memanfaatkan berbagai serat yang ada pada kayu maple yang memiliki ciri khas suara yang terang dan kuat, menggabungkannya dengan kayu mahoni yang memiliki ciri khas suara kaya serta hangat yang membuat suara yang dikeluarkan lebih baik."
        },
        {
          "id": 2,
          "judul": "Neck",
          "materi": "Bagian dari alat musik gitar elektrik yang kedua adalah neck atau leher. Bagian ini sendiri pada umumnya berpengaruh besar terhadap cara bermain seseorang. Hal ini dikarenakan tangan seseorang yang bermain gitar sangatlah peka, sehingga perbedaan bentuk maupun ukuran pada bagian ini akan menjadi pengaruh besar pada hasil suara yang dikeluarkan dari sebuah alat musik gitar elektrik.\n\nBeberapa jenis kayu yang sering digunakan pada bagian ini adalah kayu mahoni, rosewood, nato, padauk, dan terkadang ada juga yang menggunakan kayu maple. Pembuatan bagian ini pada sebuah gitar sangatlah penting dikarenakan rawan melengkung dan memerlukan jenis kayu yang kuat dan keras.\\n\\nSalah satu brand alat musik gitar yaitu Yamaha sendiri menggabungkan beberapa jenis kayu dalam membuat alat musik ini, yaitu mahoni dengan rosewood, eboni, maupun padauk  yang digunakan untuk menghasilkan kualitas suara yang diinginkan.\n\nTerdapat tiga jenis konstruksi pada sebuah gitar yang digunakan dalam menggabungkan antara bagian neck sebuah gitar dengan body pada sebuah gitar yang terdiri sebagai berikut.\n<li>Bolt-On Neck, yang merupakan jenis konstruksi yang paling umum untuk dijumpai pada sebuah gitar elektrik. Bagian neck pada jenis ini hanya dibautkan ke body sebuah gitar. Selain itu, desain jenis gitar ini relatif mudah untuk dibuat, dapat menghasilkan suara dan nada yang jelas, kuat, serta mudah diperbaiki jika terjadi suatu masalah pada gitar.</li>\n<li>Set-In Neck, yang merupakan jenis konstruksi pada alat musik gitar dimana bagian neck disambungkan dengan lem pada celah di body gitar. Metode Set-In Neck ini sendiri umumnya membutuhkan waktu yang lebih lama serta lebih sulit dalam proses pembuatannya, sehingga membuat harga gitar jenis ini lebih mahal.</li>\n<li>Neck-Through-Body, yang merupakan jenis konstruksi pada alat musik gitar ini memiliki bagian neck yang memanjang dari ujung headstock hingga ujung bagian bodi gitar. Setiap sisi bodi gitar disambungkan menggunakan lem pada sisi yang berlawanan dengan neck gitar, yang membentuk sayap yang melekat pada sebuah badan pesawat terbang. Gitar yang menggunakan jenis konstruksi ini merupakan jenis yang paling sulit untuk dibuat oleh sebab itu harganya juga relatif mahal.</li>"
        },
        {
          "id": 3,
          "judul": "Fingerboard dan Fret",
          "materi": "Bagian dari alat musik gitar elektrik yang ketiga adalah fingerboard serta fret. Ketika kamu memainkan alat musik gitar, seringkali kamu merasakan fingerboard serta fret yang menghiasi alat musik tersebut dibandingkan dengan bagian gitar lainnya. Bahan yang digunakan pada bagian ini seringkali mempengaruhi suara yang dikeluarkan, oleh sebab itu penting untuk memastikan pemilihan bahan yang baik serta pemasangan yang benar.\n\nUmumnya, untuk bagian fingerboard sendiri membutuhkan bahan kayu yang keras serta memiliki warna gelap seperti kayu eboni serta rosewood untuk memberikan perpaduan yang baik antara ketahanan dengan hasil suara yang dikeluarkan. Selain itu, untuk tampilan berbeda ada juga yang menggunakan kayu maple."
        },
        {
          "id": 4,
          "judul": "Nut",
          "materi": "Bagian dari alat musik gitar elektrik yang keempat adalah nut yang merupakan sebuah bagian tempat senar terpasang. Nut merupakan alur tempat bertumpunya senar sebuah gitar yang telah dipotong dengan seteliti mungkin sehingga ukuran serta bentuk yang ada sesuai dengan senar yang ada.\n\nNut pada umumnya terbuat dari tulang, plastik keras atau menggunakan bahan sintetis yang canggih. Selain itu, bahan nut pada sebuah gitar elektrik harus keras agar suara yang dihasilkan bagus, namun juga licin agar stabilitas pengaturan yang baik."
        },
        {
          "id": 5,
          "judul": "Bridge dan Tailpiece",
          "materi": "Bagian dari alat musik gitar elektrik yang kelima adalah bridge dan tailpiece. Bridge pada sebuah gitar elektrik memiliki tiga fungsi utama, yaitu sebagai tempat ditempatkannya senar gitar pada bagian body gitar. Bridge juga sering disebut sebagai bridge tremolo atau yang lebih dikenal dengan vibrato.\n\nSelain itu, terdapat banyak faktor yang dapat mengubah cara bermain alat musik gitar termasuk di dalamnya adalah sudut tempat senar bertumpu pada bagian bridge di gitar. Terdapat tiga jenis utama yang ada pada gitar elektrik yaitu, vintage tremolo, stoptail bridge, serta locking tremolo."
        },
        {
          "id": 6,
          "judul": "Tuning Machines",
          "materi": "Bagian dari alat musik gitar elektrik yang keenam adalah tuning machines yang bisa disebut juga dengan machine head, tuning key, atau tuner.\n\nDengan memutar tuning machine, maka akan membuat senar yang ada tergulung sehingga membuat senar yang ada lebih erat dan membuat pitch pada gitar menjadi naik."
        },
        {
          "id": 7,
          "judul": "Truss Rod",
          "materi": "Bagian dari alat musik gitar elektrik yang ketujuh adalah truss rod yang berguna untuk menyetel serta meluruskan neck pada sebuah gitar dan mengimbangi ketegangan yang ada pada senar gitar."
        }
      ]
    }
  },
  {
    "materiID": 7,
    "alatMusik": "gitar",
    "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
    "data": {
      "nama": "Bagian - Bagian Gitar Akustik",
      "deskripsi": "Dalam gitar akustik setidaknya ada tiga belas bagian yang menjadi peranan penting dalam memainkan alat musik tersebut. Pada gitar akustik sendiri, bagian di dalamnya terbagi menjadi tiga bagian utama yaitu kepada atau head, leher atau neck, serta badan atau body yang kemudian terbagi lagi menjadi beberapa bagian sebagai berikut.",
      "tingkatan": "menengah",
      "rating": [],
      "pengunjung": 2,
      "createdAt": "2023-10-10T13:40:06.787Z",
      "updatedAt": "2023-10-10T13:40:06.787Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Gambar Bagian-Bagian Gitar Akustik",
          "materi": "<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/09/16142309/bagian-pada-gitar.jpg</img>"
        },
        {
          "id": 1,
          "judul": "Kepala atau Headstock",
          "materi": "Bagian dari alat musik gitar akustik yang pertama adalah kepala atau headstock yang berada tepat di bagian paling atas dari alat musik gitar. Pada umumnya, kepala gitar berbahan dasar kayu sebagai tempat dari bagian tuner serta nut.\nKepala dari alat musik gitar ini juga biasanya merepresentasikan sebuah brand atau merek gitar itu dibuat, karena setiap merek gitar pada umumnya memiliki karakteristik yang berbeda antara satu sama lain. Selain itu, pada kepala atau headstock di alat musik gitar juga terdapat gambar serta logo dari merek alat musik tersebut di buat."
        },
        {
          "id": 2,
          "judul": "Nut",
          "materi": "Bagian dari alat musik gitar akustik yang kedua adalah nut yang merupakan sebuah bantalan kecil yang biasanya digunakan untuk menyangga keenam senar pada gitar agar bunyi yang dikeluarkan dari alat musik tersebut terdengar nyaring.\nTanpa adanya nut pada sebuah alat musik gitar, maka suara yang dikeluarkan tidak akan terasa nyaring. Pada umumnya, semua merek pembuat alat musik gitar menggunakan warna nut yang sama yaitu putih. Pada bagian nut sebuah alat musik gitar juga memiliki rongga yang digunakan untuk menahan senar gitar."
        },
        {
          "id": 3,
          "judul": "Tuner",
          "materi": "Bagian dari alat musik gitar akustik yang ketiga adalah tuner yang merupakan mesin pemutar pada gitar yang umumnya terbuat dari bahan dasar logam atau metal. Jumlah tuner yang ada pada sebuah gitar memiliki jumlah yang sama dengan senar yaitu 6 buah.\\nHal ini dikarenakan, setiap tuner yang ada pada alat musik gitar mewakili satu senar di dalamnya. Fungsi dari tuner pada sebuah gitar adalah berguna untuk menyetel atau mengatur suara pada gitar akustik."
        },
        {
          "id": 4,
          "judul": "Fret",
          "materi": "Bagian dari alat musik gitar akustik yang keempat adalah fret yang merupakan sebuah besi melintang pada fingerboard atau fretboard. Pada umumnya, fret pada sebuah alat musik gitar terbuat dari bahan dasar logam.\\nPada sebuah gitar akustik, fret yang ada didalamnya berjumlah 19 buah yang memiliki fungsi untuk menentukan nada pada senar saat dimainkan. Oleh sebab itu, fungsi fret yang ada pada gitar akustik sangatlah penting dan vital."
        },
        {
          "id": 5,
          "judul": "Leher atau Neck",
          "materi": "Bagian dari alat musik gitar akustik yang kelima adalah leher atau neck yang digunakan sebagai tempat tangan kiri seseorang untuk memegang gitar atau sebaliknya bagi orang yang kidal. Leher pada sebuah gitar yang bagus pada umumnya lurus dengan sempurna.\nJika terdapat lengkungan pada alat musik gitar maka kualitas dari gitar tersebut sudah tidak bagus lagi. Pada umumnya, bagian leher pada sebuah gitar terbuat dari kayu solid yang memiliki kualitas yang tinggi."
        },
        {
          "id": 6,
          "judul": "Penghubung atau Heel",
          "materi": "Bagian dari alat musik gitar akustik yang keenam adalah penghubung atau heel yang pada umumnya terbuat dari bahan dasar kayu solid yang memiliki fungsi untuk menghubungkan antara bagian leher dengan bagian badan sebuah gitar.\nPada umumnya, penghubung atau heel pada sebuah alat musik gitar memiliki bentuk yang berbeda antara satu sama lain. Bentuk yang berbeda ini sendiri seringkali dibuat dengan alasan estetika, namun bisa juga menjadi penentu dari bagus atau tidaknya kualitas suara yang dikeluarkan."
        },
        {
          "id": 7,
          "judul": "Badan atau Body",
          "materi": "Bagian dari alat musik gitar akustik yang ketujuh adalah badan atau body yang merupakan bagian terpenting dan paling menonjol pada sebuah alat musik gitar. Hal ini dikarenakan 80% dari keseluruhan gitar terdiri dari bagian ini.\nBadan sebuah gitar sendiri juga bisa menjadi penanda tersendiri bagi sebuah brand maupun pemegang hak cipta dari sebuah gitar. Hal ini yang membuat badan dari alat musik gitar pada umumnya beragam serta bervariasi bergantung pada pembuat alat musiknya."
        },
        {
          "id": 8,
          "judul": "Bridge",
          "materi": "Bagian dari alat musik gitar akustik yang kedelapan adalah bridge yang memiliki fungsi untuk menghubungkan atau mengaitkan senar pada alat musik gitar dengan body atau badannya.\nSelain itu, pada bagian bridge di sebuah gitar, terdapat bantalan putih yang sering disebut sebagai saddle dan pada umumnya bagian ini terbuat dari bahan dasar kayu yang berkualitas."
        },
        {
          "id": 9,
          "judul": "Soundboard",
          "materi": "Bagian dari alat musik gitar akustik yang kesembilan adalah soundboard yang merupakan sebuah kotak resonansi suara yang ada pada alat musik gitar.\nSoundboard pada sebuah gitar pada umumnya memiliki bentuk seperti tabung yang pada bagian dalamnya terdapat sebuah ruang yang memiliki fungsi untuk meresonansikan suara yang dihasilkan dari senar gitar yang dimainkan. Soundboard juga memiliki fungsi agar suara yang dikeluarkan saat gitar dimainkan terdengar lebih nyaring dan keras."
        },
        {
          "id": 10,
          "judul": "Lubang Suara",
          "materi": "Bagian dari alat musik gitar akustik yang kesepuluh adalah lubang suara yang merupakan sebuah bagian pada gitar yang berfungsi sebagai akses dari bagian soundboard.\nGetaran dari sebuah senar yang dimainkan pada alat musik gitar yang dikeluarkan akan melewati lubang suara ini sebelum pada akhirnya bunyi akan diresonansikan oleh soundboard dari sebuah alat musik gitar."
        },
        {
          "id": 11,
          "judul": "Senar atau String",
          "materi": "Bagian dari alat musik gitar akustik yang kesebelas adalah senar atau string yang merupakan salah satu bagian paling penting dari sebuah gitar. Hal ini dikarenakan jika sebuah alat musik gitar tidak memiliki senar maka belumlah lengkap dan tidak dapat dimainkan.\nSenar yang ada pada alat musik gitar pada umumnya berjumlah enam buah, yang terdiri dari senar 1, senar 2, senar 3, senar 4, senar 5, dan senar 6. Masing-masing senar tersebut juga memiliki nada dasar yang berbeda yang terdiri dari nada E, nada A, nada, D, nada G, nada B, nada E1."
        },
        {
          "id": 12,
          "judul": "Saddle",
          "materi": "Bagian dari alat musik gitar akustik yang kedua belas adalah saddle yang merupakan bantalan pada sebuah alat musik gitar yang berada pada bagian bridge gitar.\nSaddle pada sebuah gitar memiliki fungsi yang hampir sama dengan bagian nut pada sebuah gitar yaitu untuk membuat suara yang dikeluarkan terdengar nyaring."
        },
        {
          "id": 13,
          "judul": "Fingerboard atau Fretboard",
          "materi": "Bagian dari alat musik gitar akustik yang ketiga belas adalah fingerboard atau fretboard yang sesuai dengan namanya memiliki arti sebagai papan jari. Bagian fingerboard pada sebuah alat musik gitar digunakan untuk menempatkan jari tangan saat menekan senar yang ada pada fret tertentu.\nPada umumnya, fingerboard pada sebuah alat musik gitar terdapat di bagian depan dari bagian leher sebuah alat musik gitar."
        }
      ]
    }
  },
  {
    "materiID": 8,
    "alatMusik": "gitar",
    "owner": "258234d6-f69c-4a48-a229-f4faf24197e5",
    "data": {
      "nama": "Mengenal Kunci Dasar Gitar",
      "deskripsi": "Gitar memiliki tujuh kunci dasar yaitu kunci A, kunci B, kunci C, kunci D, kunci E, kunci F, dan kunci G, yang setiap masing-masing kuncinya memiliki nada mayor maupun minor. Berikut daftar kunci gitar dasar yang dapat kamu pelajari, beserta gambar dan penjelasannya.",
      "tingkatan": "menengah",
      "rating": [],
      "pengunjung": 24,
      "createdAt": "2023-10-10T14:01:21.759Z",
      "updatedAt": "2023-10-10T14:05:36.641Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Kunci A Mayor",
          "materi": "Kunci dasar A, seringkali disebut sebagai kunci yang paling mudah bagi para pemula, dimana ketiga jari akan berada di fret yang sama sehingga tidak memerlukan perpindahan yang terlalu rumit. Berikut penjelasan cara untuk memainkan kunci A mayor.<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13094507/kunci-a-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar II pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar III pada fret atau kolom kedua pada gitar.</li>\n<li>Dan yang terakhir, menggunakan jari manis untuk menekan senar IV pada fret atau kolom kedua pada gitar.</li>"
        },
        {
          "id": 1,
          "judul": "Kunci Am (A minor)",
          "materi": "Kunci dasar Am atau A minor juga merupakan salah satu kunci yang sering digunakan. Berikut penjelasan cara untuk memainkan kunci A minor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13204352/kunci-a-minor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar II pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar IV pada fret atau kolom kedua pada gitar.</li>\n<li>Dan yang terakhir, menggunakan jari manis untuk menekan senar III pada fret atau kolom kedua pada gitar.</li>"
        },
        {
          "id": 2,
          "judul": "Kunci B Mayor",
          "materi": "Kunci B merupakan kunci yang cukup sulit untuk dipelajari bagi para pemula yang baru belajar bermain alat musik gitar, dikarenakan posisi jari yang rumit. Berikut penjelasan cara untuk memainkan kunci B mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13094646/kunci-b-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar I dan senar V secara bersamaan (bagi senar II, III, maupun IV boleh ikut ditekan) pada fret atau kolom kedua gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar IV pada fret atau kolom keempat pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar III pada fret atau kolom keempat pada gitar.</li>\n<li>Dan yang terakhir, menggunakan jari kelingking untuk menekan senar II pada fret atau kolom keempat pada gitar.</li>"
        },
        {
          "id": 3,
          "judul": "Kunci B Minor (Bb)",
          "materi": "Kunci Bb atau B mol minor pada gitar yang menandakan bahwa nada turun setengah dari nada yang dimaksud. Berikut penjelasan cara memainkan kunci B mol mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13204631/cord-b-minor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar I pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar IV pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar III pada fret atau kolom kedua pada gitar.</li>\n<li>Dan yang terakhir, menggunakan jari kelingking untuk menekan senar II pada fret atau kolom kedua pada gitar.</li>"
        },
        {
          "id": 4,
          "judul": "Kunci C Mayor",
          "materi": "Kunci C merupakan kunci yang akan paling sering digunakan dalam memainkan sebuah lagu atau alunan musik, Oleh sebab itu, penting untuk memahami cara memainkan chord tersebut. Berikut penjelasan cara memainkan kunci C mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13094900/c-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar II pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar IV pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar V pada fret atau kolom ketiga gitar.</li>"
        },
        {
          "id": 5,
          "judul": "Kunci D",
          "materi": "Kunci D merupakan kunci yang cukup mudah untuk dimainkan, namun bagi pemula harus tetap berhati-hati dalam menempatkan posisi jari dengan baik agar suara yang keluar tidak pecah. Berikut penjelasan cara memainkan kunci D mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13094959/d-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar III pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar I pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar II pada fret atau kolom ketiga pada gitar.</li>"
        },
        {
          "id": 6,
          "judul": "Kunci D Minor (Dm)",
          "materi": "Kunci Dm atau D minor biasanya sering digunakan untuk lagu-lagu yang memiliki suasana atau nuansa sedih . Berikan penjelasan cara memainkan kunci D minor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13204854/kunci-d-minor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar I pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar III pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar II pada fret atau kolom ketiga pada gitar.</li>"
        },
        {
          "id": 7,
          "judul": "Kunci E",
          "materi": "Kunci E mayor merupakan kunci yang cukup mudah untuk dipelajari, dan karena kunci E ini bassnya terletak pada senar VI kita tidak perlu khawatir tidak sengaja memainkan senar lain dan dapat menggunakan cara strumming. Berikut penjelasan cara memainkan kunci E mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13095310/kunci-gitar-e-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar III pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar V pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar IV pada fret atau kolom kedua pada gitar.</li>"
        },
        {
          "id": 8,
          "judul": "Kunci E Minor (Em)",
          "materi": "Kunci Em atau E minor merupakan kunci yang hanya memerlukan dua fret atau kolom saja. Berikut penjelasan cara memainkan kunci E minor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13205209/kunci-e-minor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar V pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar IV pada fret atau kolom kedua pada gitar.</li>"
        },
        {
          "id": 9,
          "judul": "Kunci F Mayor",
          "materi": "Kunci F mayor merupakan salah satu kunci pada alat musik gitar yang sulit dipelajari bagi para pemula, karena posisinya yang cukup rumit, sehingga memerlukan latihan untuk dapat memainkan chord tersebut dengan baik. Berikut penjelasan cara memainkan kunci F mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13095638/kunci-gitar-f-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar I dan senar II secara bersamaan yang terletak pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar III pada fret atau kolom kedua pada gitar.</li>\\n<li>Menggunakan jari manis untuk menekan senar IV pada fret atau kolom ketiga pada gitar.</li>"
        },
        {
          "id": 10,
          "judul": "Kunci Fm (F Minor)",
          "materi": "Kunci Fm atau F minor merupakan kunci yang cukup sulit untuk dimainkan. Oleh sebab itu, bagi para pemula yang baru belajar kunci F minor memiliki dua cara. Berikut penjelasan cara memainkan kunci F minor.\\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13205709/f-minor-kunci-gitar.jpg</img>\\nCara sederhana untuk memainkan kunci F minor:\n<li>Menggunakan jari telunjuk untuk menekan senar I, senar II, dan senar III secara bersamaan yang terletak pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar IV pada fret atau kolom ketiga pada gitar.</li>\n\nCara memainkan kunci F minor dengan bentuk chord penuh:\n<li>Menggunakan jari telunjuk untuk senar I hingga senar VI secara bersamaan yang terletak pada fret atau kolom pertama pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar V pada fret atau kolom ketiga pada gitar.</li>\n<li>Menggunakan jari kelingking untuk menekan senar IV pada fret atau kolom ketiga pada gitar.</li>"
        },
        {
          "id": 11,
          "judul": "Kunci G",
          "materi": "Kunci G mayor juga merupakan salah satu kunci yang biasa digunakan dalam sebuah lagu dan seringkali digunakan ketika seseorang berlatih untuk bermain alat musik gitar. Berikut penjelasan cara memainkan kunci G mayor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13095849/kunci-gitar-g-mayor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar V pada fret atau kolom kedua pada gitar.</li>\n<li>Menggunakan jari tengah untuk menekan senar VI pada fret atau kolom ketiga pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar I pada fret atau kolom ketiga pada gitar.</li>"
        },
        {
          "id": 12,
          "judul": "Kunci G Minor",
          "materi": "Kunci Gm atau G minor merupakan kunci yang yang terbilang mudah bahkan untuk para pemula yang baru belajar alat musik gitar. Berikut penjelasan cara memainkan kunci G minor.\n<img>https://cdnwpseller.gramedia.net/wp-content/uploads/2021/08/13205812/kunci-g-minor.jpg</img>\n<li>Menggunakan jari telunjuk untuk menekan senar I, senar II, dan senar III secara bersamaan pada fret atau kolom ketiga pada gitar.</li>\n<li>Menggunakan jari manis untuk menekan senar IV pada fret atau kolom kelima pada gitar.</li>"
        }
      ]
    }
  },
  {
    "materiID": 9,
    "alatMusik": "gitar",
    "owner": "258234d6-f69c-4a48-a229-f4faf24197e5",
    "data": {
      "nama": "Tips Bermain Gitar (2)",
      "deskripsi": "Terdapat beberapa tips yang bisa And gunakan selama latihan, berikut tips memainkan gitar bagi pemula.",
      "tingkatan": "pemula",
      "rating": [],
      "pengunjung": 2,
      "createdAt": "2023-10-10T14:12:04.629Z",
      "updatedAt": "2023-10-10T14:12:04.629Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Melatih dan merawat jari dan memori otot tangan",
          "materi": "Untuk memainkan alat musik dengan leluasa bukan hanya alat musik gitar, sangat penting untuk melatih jari tangan. Pentingnya melatih jari ini sendiri untuk seorang pemain gitar adalah agar membiasakan diri dengan senar gitar yang kita mainkan.\n\nCaranya dengan berlatih secara terus menerus, dimana selain dalam melatih jari tangan, secara langsung juga melatih ingatan memori otot tangan yang dalam jangka waktu panjang dapat membantu kita berpindah dari satu kunci ke kunci yang lain dengan leluasa dan cepat.\n\nNamun, dengan berlatih secara rutin terdapat konsekuensi yaitu, bagi yang belum terbiasa ujung jari akan terasa sakit dan kuku jari tangan akan sering tersangkut. Oleh sebab itu, penting bagi para pemain gitar untuk menjaga kuku jari tangannya tetap pendek."
        },
        {
          "id": 1,
          "judul": "Mempelajari kunci gitar serta menghafalkannya",
          "materi": "Langkah selanjutnya adalah memiliki pengetahuan mengenai kunci-kunci dasar untuk bermain alat musik gitar. Seperti yang ada di atas, penjelasan mengenai macam-macam kunci dasar pada gitar sangat penting bagi kamu untuk mempelajarinya dan menghafalkannya terlebih dahulu agar ketika memainkan gitar mampu berpindah dari satu kunci ke kunci yang lain dengan cepat."
        },
        {
          "id": 2,
          "judul": "Menggunakan referensi saat latihan",
          "materi": "Ketika mempelajari sesuatu, sangat penting untuk melihat terlebih dahulu bagaimana cara kerja hal tersebut. Dalam mempelajari cara bermain gitar, setelah kamu mengetahui dan menghafalkan kunci-kunci dasar kamu dapat melihat referensi melalui internet bagaimana para pemain gitar dapat membunyikan alat musik dengan baik."
        },
        {
          "id": 3,
          "judul": "Mempelajari dan fokus pada sebuah lagu yang memang kamu sukai",
          "materi": "Selanjutnya, setelah kamu cukup percaya diri memainkan kunci-kunci dasar yang ada di gitar, kamu bisa melanjutkannya dengan memilih dan melatih suatu lagu yang kamu sukai, sehingga proses latihan tidak terasa berat. Namun perlu diperhatikan, untuk awal latihan lebih baik memilih lagu yang memiliki tempo lambat dan perpindahan kunci yang tidak terlalu rumit."
        }
      ]
    }
  },
  {
    "materiID": 10,
    "alatMusik": "gitar",
    "owner": "325647e3-6cc5-4f23-a304-ca16ed12c85c",
    "data": {
      "nama": "Bermain Gitar Seperti Ed Sheeran ",
      "deskripsi": "Ayok bisa bermain gitar seperti Ed Sheeran ",
      "tingkatan": "sulit",
      "rating": [],
      "pengunjung": 5,
      "createdAt": "2023-10-10T15:26:04.718Z",
      "updatedAt": "2023-10-10T15:26:04.718Z",
      "daftarMateri": [
        {
          "id": 0,
          "judul": "Mengenal cara Bermain ",
          "materi": "."
        },
        {
          "id": 1,
          "judul": "Bermain selayaknya Ed Sheeran",
          "materi": "a"
        },
        {
          "id": 2,
          "judul": "Bermain Mencari Pro",
          "materi": "a"
        }
      ]
    }
  }
]
const materi_biola = [
  {
      "materiID": 3,
      "alatMusik": "biola",
      "owner": "258234d6-f69c-4a48-a229-f4faf24197e5",
      "data": {
          "nama": "Pengenalan Biola",
          "deskripsi": "Biola adalah alat musik gesek yang memiliki suara yang indah dan unik. Biola sangat populer dan banyak diminati untuk dipelajari karena memiliki sejarah panjang sebagai alat musik klasik dan sering digunakan dalam berbagai genre musik, mulai dari musik klasik hingga pop. Cara bermain biola banyak dicari oleh orang yang ingin tertarik dengan musik klasik.",
          "tingkatan": "pemula",
          "rating": [
              [
                  "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
                  5
              ]
          ],
          "pengunjung": 10,
          "createdAt": "2023-10-10T14:31:38.672Z",
          "updatedAt": "2023-10-10T14:32:10.656Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Suara biola",
                  "materi": "<img>https://cdn0-production-images-kly.akamaized.net/USq80Pku13JIJlUF9dZyRT0EeUY=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3651411/original/055067000_1638494372-lucia-macedo-d9_2kPJBG0U-unsplash.jpg</img>\nKeindahan suara biola terletak pada kemampuan alat ini untuk mengekspresikan berbagai nuansa emosi dan perasaan melalui suara yang dihasilkannya. Cara bermain biola menghasilkan suara yang halus, tajam, dan melankolis dapat membuat pendengarnya merasa terinspirasi dan terhubung dengan musik. Selain itu, cara bermain biola menarik untuk dipelajari karena teknik yang dibutuhkan untuk memainkannya membutuhkan ketelitian, konsentrasi, dan disiplin yang tinggi.\n\n<video>https://www.youtube.com/watch?v=WDst2mDVH0g</video>"
              }
          ]
      }
  },
  {
      "materiID": 4,
      "alatMusik": "biola",
      "owner": "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
      "data": {
          "nama": "Teknik Dasar Bermain Biola",
          "deskripsi": "Teknik dasar bermain biola adalah teknik harus dikuasai oleh seorang pemula yang ingin mempelajari cara bermain biola. Teknik ini harus dikuasai untuk dapat memainkan lagu dengan baik. Berikut adalah teknik dasar dalam bermain biola.",
          "tingkatan": "menengah",
          "rating": [],
          "pengunjung": 2,
          "createdAt": "2023-10-10T14:38:50.470Z",
          "updatedAt": "2023-10-10T14:38:50.470Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Memegang Biola",
                  "materi": "Teknik dasar cara bermain biola yang pertama harus dikuasai adalah posisi memegang biola. Untuk memegang biola, pertama-tama posisikan badan dengan berdiri tegak dan kaki sedikit terbuka. Biola ditempatkan pada bahu kiri dan tangan kiri memegang leher biola. Tangan kanan harus menyentuh busur di dekat ujung bawah, dengan jari telunjuk, jari tengah, dan jari manis memegang busur, sedangkan jari kelingking dan jari jempol membantu menstabilkan busur."
              },
              {
                  "id": 1,
                  "judul": "Memegang Busur ",
                  "materi": "Teknik memegang busur adalah salah satu kunci utama dalam memainkan biola. Posisikan tangan kanan dengan rileks di atas busur, jari telunjuk di atas busur, dan jari kelingking di bawah busur. Pastikan bahwa busur dipegang dengan stabil dan rileks. Untuk mendapatkan suara yang jelas dan indah, gunakan tekanan yang tepat pada busur."
              },
              {
                  "id": 2,
                  "judul": "Memetik Senar ",
                  "materi": "Teknik memetik senar pada biola adalah salah satu teknik yang paling mendasar pada cara bermain biola. Saat memetik senar, jari tangan kiri harus diletakkan di atas senar yang ingin dimainkan, sedangkan jari tangan kanan harus menggerakkan busur dengan gerakan yang halus dan stabil. Pastikan bahwa posisi tangan kanan dan kaki kiri tetap stabil saat memainkan biola."
              },
              {
                  "id": 3,
                  "judul": "Posisi Tubuh ",
                  "materi": "Posisi tubuh yang benar saat bermain biola sangat penting. Pastikan agar badan tetap tegak saat memegang biola dan busur, dengan bahu kiri dan siku kiri di bawah biola. Kaki kiri sedikit dibuka dan tumpuannya harus stabil."
              },
              {
                  "id": 4,
                  "judul": "Membaca Partitur",
                  "materi": "Membaca partitur adalah teknik penting dalam cara bermain biola. Partitur adalah notasi musik yang terdiri dari tanda-tanda dan simbol-simbol yang menunjukkan nada, tempo, ritme, dan dinamika. Untuk dapat memainkan lagu dengan benar, pemain biola harus dapat membaca partitur dengan baik."
              }
          ]
      }
  },
  {
      "materiID": 5,
      "alatMusik": "biola",
      "owner": "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
      "data": {
          "nama": "Tips Cara Bermain Biola",
          "deskripsi": "Untuk dapat memainkan biola dengan baik, dibutuhkan latihan yang cukup intensif dan tekun. Ada beberapa tips cara bermain biola yang dapat diikuti pemula",
          "tingkatan": "pemula",
          "rating": [],
          "pengunjung": 3,
          "createdAt": "2023-10-10T14:41:31.525Z",
          "updatedAt": "2023-10-10T14:41:31.525Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Mempelajari Teknik Dasar",
                  "materi": "Sebelum memulai belajar bermain biola, pahami teknik dasar memegang biola dan busurnya. Ada beberapa cara untuk memegang biola dan busur, tergantung pada preferensi pribadi dan jenis musik yang ingin dimainkan. Namun, pada umumnya, pemula harus belajar teknik dasar agar dapat memainkan biola dengan benar."
              },
              {
                  "id": 1,
                  "judul": "Mempelajari Notasi Musik",
                  "materi": "Setelah memahami teknik dasar, pelajari juga cara membaca notasi musik. Notasi musik adalah cara untuk menulis musik pada kertas. Dalam notasi musik, terdapat simbol-simbol yang menunjukkan nada, tempo, ritme, dan dinamika. Dengan memahami notasi musik, Anda dapat memainkan lagu dengan benar dan sesuai dengan partitur."
              },
              {
                  "id": 2,
                  "judul": "Berlatih Secara Teratur",
                  "materi": "Cara bermain biola juga harus dilatih secara teratur. Berlatih secara teratur sangat penting dalam belajar bermain biola. Jangan hanya berlatih saat Anda merasa ingin bermain atau saat memiliki waktu luang. Tetapkan jadwal harian untuk berlatih biola selama minimal 30 menit hingga satu jam. Berlatih dengan rutin akan membantu Anda memperbaiki teknik dan kemampuan memainkan biola."
              },
              {
                  "id": 3,
                  "judul": "Mulai dengan Lagu Sederhana",
                  "materi": "Ketika pertama kali belajar bermain biola, mulailah dengan memainkan lagu yang sederhana. Pilih lagu yang dikenal dan disukai, seperti lagu anak-anak atau lagu populer. Jangan terlalu ambisius dan mencoba memainkan lagu yang terlalu sulit pada awalnya."
              },
              {
                  "id": 4,
                  "judul": "Ikuti Kursus atau Les Privat",
                  "materi": "Jika memungkinkan, bergabunglah dengan kursus atau les privat untuk mempercepat proses belajar cara bermain biola. Tempat kursus atau les privat akan memberikan panduan yang lebih spesifik dan umpan balik dari instruktur. "
              },
              {
                  "id": 5,
                  "judul": "Tetap Sabar dan Tekun",
                  "materi": "Belajar bermain biola membutuhkan waktu dan kesabaran. Jangan merasa frustasi jika tidak dapat memainkan lagu dengan benar pada masa awal latihan. Tetaplah berlatih secara rutin dan perlahan-lahan, kemajuan akan terlihat seiring berjalannya waktu."
              }
          ]
      }
  },
  {
      "materiID": 6,
      "alatMusik": "biola",
      "owner": "258234d6-f69c-4a48-a229-f4faf24197e5",
      "data": {
          "nama": "Bagian - Bagian Biola",
          "deskripsi": "Setiap komponen biola itu bertujuan tertentu. Setiap senar menghasilkan suara yang berbeda, dan setiap pasak yang diputar memberikan efek yang berbeda. Pada artikel ini akan membahas apa saja bagian pada biola.",
          "tingkatan": "menengah",
          "rating": [],
          "pengunjung": 12,
          "createdAt": "2023-10-10T15:11:49.640Z",
          "updatedAt": "2023-10-10T15:11:49.640Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Gambar Bagian Biola",
                  "materi": "<img>https://static.wixstatic.com/media/8de21e_6fe633c70a424d5480a9f8dbba503720~mv2.png/v1/fill/w_345,h_466,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8de21e_6fe633c70a424d5480a9f8dbba503720~mv2.png</img>"
              },
              {
                  "id": 1,
                  "judul": "1. Scroll",
                  "materi": "<img>https://static.wixstatic.com/media/8de21e_d5423b73d6f54011b20ee21935ad5f4b~mv2.png/v1/fill/w_240,h_409,al_c,lg_1,q_85,enc_auto/8de21e_d5423b73d6f54011b20ee21935ad5f4b~mv2.png</img>\nDi atas setiap biola, ada bagian yang seringkali berbentuk seperti gulungan, atau scroll. Bentuk yang berbeda, seperti sebuah kepala, digunakan dalam desain yang lebih kontemporer."
              },
              {
                  "id": 2,
                  "judul": "2. Pegs (pasak)",
                  "materi": "Empat pasak kayu di mana semua senar bersatu, dan biasanya digunakan untuk menyetel senar biola. Kalau kamu putar pasak ini, efeknya akan berbeda-beda dan suara yang dihasilkan juga bakalan beda. Kencangkan pasakmu dan nada biolamu bakal lebih tinggi, dan melonggarkannya bisa langsung menurunkannya."
              },
              {
                  "id": 3,
                  "judul": "3. Pegbox (kotak pasak)",
                  "materi": "Ruang di mana senar melilit pasak."
              },
              {
                  "id": 4,
                  "judul": "4. Nuts",
                  "materi": "Sebuah potongan kayu kecil di antara kotak pasak dan fingerboard. Nuts terhubung ke empat takik, satu untuk setiap senar di atas fingerboard."
              },
              {
                  "id": 5,
                  "judul": "5. Neck (leher)",
                  "materi": "Bagian yang berfungsi sebagai jembatan penghubung antara badan biola dengan bagian atas biola; pegbox, dan scroll."
              },
              {
                  "id": 6,
                  "judul": "6. Fingerboard (Papan jari)",
                  "materi": "Permukaan di bawah leher, tempat jarimu bisa menekan senar. Biasanya terbuat dari kayu hitam, tetapi dapat dibuat dari bahan kayu lainnya."
              },
              {
                  "id": 7,
                  "judul": "7. Top",
                  "materi": "Bagian depan biola, yang biasanya terbuat dari kayu cemara atau lapisan kayu yang dilaminasi. Bagian belakang biola umumnya terbuat dari kayu maple."
              },
              {
                  "id": 8,
                  "judul": "8. Ribs",
                  "materi": "Potongan kayu tipis di tepi biola, yang menghubungkan bagian atas dan belakang biola dan membentuk kotak suara."
              },
              {
                  "id": 9,
                  "judul": "9. Senar",
                  "materi": "Empat tali tebal yang jadi asal datangnya suara. Biasanya, hari gini senar terbuat dari baja, bahan sintetis, dan/atau jeroan hewan. Dalam biola, senar disetel dalam interval seperlima, dan dari terendah ke tertinggi adalah G, D, A, dan E. Senar dipasang di atas fingerboard, mulai dari pasak biola sampai ke ujung biola.\n<img>https://static.wixstatic.com/media/8de21e_92539987f72f4d91a25ca46faaa48a28~mv2.png/v1/fill/w_450,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8de21e_92539987f72f4d91a25ca46faaa48a28~mv2.png</img>"
              },
              {
                  "id": 10,
                  "judul": "10. Purfling",
                  "materi": "Potongan tipis kayu yang disusun dalam bentuk saluran dan terletak di sekitar tepi biola sebagai pelindung terhadap kerusakan. Mirip garis yang ditarik di sekitar biola, tapi sebenarnya murni sebagai pelindung, bukan dekoratif."
              },
              {
                  "id": 11,
                  "judul": "11. Blok sudut",
                  "materi": "Blok penstabil yang terbuat kayu, dan terletak di dalam tubuh biola."
              },
              {
                  "id": 12,
                  "judul": "12. Lubang-F",
                  "materi": "Lubang-F. Dua lubang tempat suara keluar, dan berbentuk seperti sepasang F sambung. Gunanya adalah buat resonansi, yang juga ditingkatkan oleh bagian kosong di dalam badan biola."
              },
              {
                  "id": 13,
                  "judul": "13. Bridge",
                  "materi": "Jembatan balok maple yang menyeimbangkan senar dan melepas getaran dari senar ke badan biola. Bridge tidak ditempel menggunakan lem, tapi ditempatkan oleh ketegangan senar. Ketegangan yang disebabkan oleh senar di bridge sama dengan kira-kira 40 kg."
              },
              {
                  "id": 14,
                  "judul": "14. Soundpost",
                  "materi": "Sebuah balok kayu di dalam tubuh biola, tepat di bawah sisi kanan bridge. Ini melepaskan getaran ke senar, lalu ke dalam tubuh biola untuk menghasilkan dan beresonansi suara yang cukup. Mengubah penempatan soundpost dapat mengubah volume dan kualitas nada."
              },
              {
                  "id": 15,
                  "judul": "15. Fine tuner",
                  "materi": "Sepotong kecil tuner terletak di ujung tailpiece. Fine tuner menyetel senar lebih kecil dibandingkan dengan pasak, atau pegs. Biola berukuran lebih kecil memiliki tuner untuk keempat senar, sedangkan biola yang lebih besar memiliki tuner hanya untuk senar E."
              },
              {
                  "id": 16,
                  "judul": "16. Tailpiecei",
                  "materi": "Balok kayu segitiga tempat semua senar dipasang. Terletak di ujung bawah biola."
              },
              {
                  "id": 17,
                  "judul": "17. Usus buntut",
                  "materi": "Kawat yang menyatukan bagian tailpiece ke badan biola."
              },
              {
                  "id": 18,
                  "judul": "18. Sandaran dagu (chin rest)",
                  "materi": "Beberapa sandaran dagu terbuat dari kayu, namun ada juga yang terbuat dari plastik. Sandaran dagu ini biasa terletak di bagian bawah biola."
              },
              {
                  "id": 19,
                  "judul": "19. Saddle",
                  "materi": "Sebuah balok di dalam tubuh biola yang tujuan utamanya adalah untuk menopang tailgut dan ketegangan senar."
              },
              {
                  "id": 20,
                  "judul": "20. Pickup",
                  "materi": "Biasanya ditemukan pada biola listrik daripada biola tradisional. Pickup mengubah getaran akustik biola menjadi sinyal listrik, yang kemudian akan dikirim ke amplifier."
              },
              {
                  "id": 21,
                  "judul": "21. Bagian bow",
                  "materi": "Bow biola, seperti yang kita semua tahu, adalah tongkat kayu dengan kumpulan rambut. Bow adalah kunci untuk memainkan biola, soalnya kamu perlu menggesek rambut ke senar yang disetel untuk menghasilkan suara yang diinginkan. Bow gak cuma digunakan pada biola, tetapi juga pada cello, viola, dan bass, tapi biasanya bow-bow tersebut bakalan berberat dan berukuran yang berbeda.\n<img>https://static.wixstatic.com/media/8de21e_a394488ac2b041929c0cbfcc9a463a3d~mv2.png/v1/fill/w_450,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8de21e_a394488ac2b041929c0cbfcc9a463a3d~mv2.png</img>\nBerikut lima bagian penting sebuah bow :\n<li><b>Tongkat bow</b>, tulang punggung yang membentuk bow.</li>\n<li><b>Rambut bow</b>, kumpulan bulu kuda atau senar nilon dalam pembuatan biola modern yang dirangkai sejajar dengan tongkat bow. Digunakan untuk digesek ke senar biola, menggetarkan senar, dan menghasilkan suara.</li>\n<li><b>Ujung</b>, bagian tepi atas busur tempat rambut terhubung ke tongkat. Kebanyakan pemain biola biasanya paling sering menggunakan bagian ini.</li>\n<li><b>Frog</b>, sepotong kecil kayu tertutup yang menjadi pegangan busur. Bagian ini adalah sisi berlawanan dari tempat menempelnya rambut.</li>\n<li><b>Pegangan (atau bantalan)</b>, dasar bow yang terbuat karet dan logam.</li>"
              }
          ]
      }
  },
  {
      "materiID": 7,
      "alatMusik": "biola",
      "owner": "258234d6-f69c-4a48-a229-f4faf24197e5",
      "data": {
          "nama": "Manfaat Bermain Biola untuk Kesehatan Tubuh",
          "deskripsi": "Tahukah kamu bahwa memainkan alat musik, termasuk biola, dapat memperkuat ingatan dengan mengoptimalkan kerja kedua sisi otak? Selain itu, studi dalam Frontiers in Psychology menyebutkan, memainkan alat musik dapat meningkatkan penalaran spasial, memori verbal, dan keterampilan literasi. Melihat dari manfaat tersebut, kamu bisa menyimpulkan bahwa memainkan alat musik adalah pilihan yang baik bagi anak-anak maupun orang dewasa. Lalu, apa saja manfaat yang bisa kamu dapat dengan bermain biola?",
          "tingkatan": "menengah",
          "rating": [],
          "pengunjung": 3,
          "createdAt": "2023-10-10T15:17:02.270Z",
          "updatedAt": "2023-10-10T15:17:02.270Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "1. Meningkatkan daya ingat dan kapasitas mental",
                  "materi": "Belajar bermain biola ternyata dapat membantu meningkatkan daya ingat dan kapasitas mental dalam beberapa cara. Misalnya, sebuah studi menemukan bahwa anak-anak yang mengikuti pelajaran biola memiliki memori kerja yang jauh lebih baik daripada mereka yang tidak memainkan alat musik sama sekali. \n\nSelain itu, mereka juga memiliki rentang perhatian yang lebih baik dan lebih mampu memproses informasi dengan cepat. Studi lain menunjukkan hasil yang serupa pada orang dewasa yang belajar alat musik ini. \n\nKelompok orang tersebut menunjukkan peningkatan signifikan dalam memori verbal, kemampuan visuospasial, dan fungsi eksekutif (kemampuan merencanakan, mengatur, dan melakukan banyak tugas). \n\nKemudian, orang dewasa yang lebih tua yang belajar bermain alat musik serupa menunjukkan peningkatan yang signifikan dalam memori, penalaran, dan kecepatan pemrosesan.\n\nBermain biola juga membantu meningkatkan fungsi kognitif dengan menstimulasi otak kiri dan kanan secara bersamaan. Ini dapat meningkatkan memori, konsentrasi, dan bahkan keterampilan multitasking. Selain itu, mempelajari musik telah terbukti meningkatkan nilai IQ dan prestasi akademik secara umum."
              },
              {
                  "id": 1,
                  "judul": "2. Mendukung kreativitas",
                  "materi": "Kreativitas menjadi bagian penting dari fungsi kognitif. Fungsi ini membantu mengembangkan keterampilan berpikir seperti pemecahan masalah, pemikiran kritis, dan konsentrasi.\n\nMemainkan alat musik meningkatkan kreativitas dan memungkinkan melatih keterampilan berpikir kritis tersebut. Tak hanya itu, hal ini juga berdampak pada bagaimana otak bekerja saat kamu berlatih.\n\nSaat berlatih alat musik, volume otak akan meningkat dan hal ini berdampak pada  hubungan antara berbagai area otak yang lebih kuat. Memainkan alat musik juga mengubah cara otak mengintegrasikan dan menginterpretasikan informasi sensorik. \n\nIni terutama berlaku pada anak-anak berusia kurang dari tujuh tahun. Seiring bertambahnya usia, sangat penting untuk berpartisipasi dalam aktivitas yang mendukung kreativitas untuk kesehatan otak yang berkelanjutan."
              },
              {
                  "id": 2,
                  "judul": "3. Meningkatkan koneksi sosial",
                  "materi": "Tahukah kamu bahwa merasa kesepian dapat mempercepat penurunan kognitif? Jika pandemi memberikan pelajaran berharga tentang suatu hal, maka itu adalah pentingnya hubungan sosial.\n\nBermain biola dapat membantu mendorong keterhubungan sosial. Alat musik ini memberikan kamu kesempatan untuk terhubung dengan orang lain, bahkan jika kamu mengambil kursus online."
              },
              {
                  "id": 3,
                  "judul": "4. Memperbaiki postur tubuh",
                  "materi": "Saat memegang biola, kamu harus melibatkan inti tubuh. Supaya bisa melakukannya dengan baik dan benar, tentu saja kamu memerlukan postur tubuh yang baik. Postur yang buruk dapat menyebabkan rasa sakit dan masalah kesehatan lain.\n\nKetika melatih postur tubuh saat bermain biola, kamu akan melihat bahwa ada bagian tubuh yang menjadi lebih baik. Postur yang baik dapat membantu kamu menyeimbangkan dan membantu menjaga kesehatan punggung."
              },
              {
                  "id": 4,
                  "judul": "5. Berlatih Biola membantu melatih ketangkasan",
                  "materi": "Bermain biola menantang ketangkasan. Menggunakan satu tangan, kamu harus menekan papan jari untuk membuat not. Sementara itu, dengan tangan yang lain, kamu harus membungkuk tepat pada bagian atas senar yang berbeda dengan kecepatan yang berbeda pula. Aktivitas ini memberikan tantangan tersendiri, dan secara tidak langsung memberikan kesempatan lain untuk melatih otak."
              }
          ]
      }
  },
  {
      "materiID": 8,
      "alatMusik": "biola",
      "owner": "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
      "data": {
          "nama": "Hal Penting Untuk Mengetahui Kunci Nada Dasar Belajar Biola",
          "deskripsi": "Hal yang paling utama untuk dilakukan dalam belajar bermain biola, setelah memiliki alat musiknya tentu saja, adalah mengetahui kunci nada dasar belajar biola. Sebenarnya bukan hanya pada biola, namun sebagian alat music juga memerlukan pemahaman tentang hal tersebut. Untuk mengetahui kunci nada dasar belajar biola ada tiga hal yang perlu dipelajari. Berikut tiga hal tersebut.",
          "tingkatan": "menengah",
          "rating": [],
          "pengunjung": 7,
          "createdAt": "2023-10-10T15:25:34.901Z",
          "updatedAt": "2023-10-10T15:25:34.901Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "1. Mengetahui nada dasar",
                  "materi": "Apakah pernah mendengar ungkapan “main di C” atau “main di kunci C” dari para musisi yang sedang bermusik? Ungkapan tersebut memiliki arti bahwa lagu atau musik yang akan mereka mainkan bernada dasar C.\n\nNada dasar sendiri sangat penting dalam sebuah music, apalagi music yang dimainkan dengan lebih dari satu instrument karena berfungsi sebagai patokan atau kunci dari sebuah komposisi music.\n\nBiasanya nada dasar disebutkan dalam huruf kapital, yaitu nada dasar C, D, E, F, G, A, B. Jika kita memainkan biola menggunakan nada dasar C mayor, maka nada C akan mencadi nada “do”.\n\nDi dalam penulisan akan kita jumpai C = do.\n\nNada dasar merupakan dasar pemahaman untuk mengetahui kunci nada dasar belajar biola. Ada beberapa kriteria umum yang dapat dipakai dalam menentukan nada dasar.\n\nSebagai contoh, nada dasar disesuaikan dengan nuansa music yang akan dibuat, atau nada dasar disesuaikan dengan kemampuan vocal dari seorang vokalis, dan sebagainya."
              },
              {
                  "id": 1,
                  "judul": "2. Tangga Nada",
                  "materi": "Tangga nada adalah sejumlah nada yang tersusun secara berjenjang sesuai dengan nada dasar yang digunakan.\n\nKita mungkin lebih familiar dengan istilah “solmisasi”, atau bunyi do, re, mi, fa, sol, la, dan si, istilah tersebut adalah jenis-jenis nada yang biasa digunakan dalam teori musik.\n\nTangga nada ini sangat ditentukan oleh nada dasar yang dipilih. Jika kita tidak mengetahui kunci nada dasar bermain biola, tentu akan sangat menghambat perkembangan kita dalam belajar.\n\nJika nada dasar mayor selalu mengawali nadanya dari “do”, berbeda dengan nada dasar minor yang mengawali nadanya dari “la”.\n\nMisalnya jika sebuah tangga nada menggunakan nada dasar G mayor, maka do = C, atau nada dasar A maka do akan sama dengan A dan seterusnya. Sedangkan jika menggunakan nada dasar A minor maka nada A akan menjadi la dan seterusnya."
              },
              {
                  "id": 2,
                  "judul": "3. Jarak Nada",
                  "materi": "Untuk mengetahui kunci nada dasar bermain biola, kita juga harus memahami apa itu jarak nada.\n\nJarak nada adalah jarak antara sebuah nada dengan nada yang lain pada sebuah tangga nada. Secara berurutan, jarak nada dengan nada di atasnya atau di bawahnya hanya ada dua kemungkinan, yaitu berjarak 1 nada atau setengah nada."
              }
          ]
      }
  }
]
const materi_piano = [
  {
      "materiID": 0,
      "alatMusik": "piano",
      "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
      "data": {
          "nama": "Cara Bermain Piano",
          "deskripsi": "Cara bermain piano memiliki berbagai macam teknik seperti legato, staccato, dan arpeggio untuk menghasilkan musik yang bervariasi. Selain itu, piano juga sering digunakan sebagai alat musik utama dalam orkestra simfoni dan musik klasik lainnya. Penting juga untuk memahami notasi musik dan membaca partitur, sehingga Anda akan lebih mudah untuk memainkan lagu-lagu dengan cepat dan tepat. Perlu untuk diingat, bahwa cara bermain piano membutuhkan waktu dan kesabaran. Tidak mungkin untuk memainkan kunci-kunci piano dengan baik hanya dalam waktu singkat. Tetaplah berlatih dan terus mengembangkan keterampilan Anda dalam memainkan piano.",
          "tingkatan": "sulit",
          "rating": [],
          "pengunjung": 4,
          "createdAt": "2023-10-10T16:57:12.413Z",
          "updatedAt": "2023-10-10T16:57:12.413Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "1. Kenali Keyboard dan Notasi Musik",
                  "materi": "Cara bermain piano bagi pemula yang pertama adalah memahami keyboard dan notasi musik. Keyboard pada piano terdiri dari 88 kunci, terdiri dari 52 kunci putih dan 36 kunci hitam. Kunci putih terdiri dari nada-nada do, re, mi, fa, sol, la, si, sementara kunci hitam terdiri dari nada-nada setengah nada atau nada diantara nada-nada utama. Notasi musik adalah sistem penulisan musik yang menggambarkan nada, ritme, dan dinamika. Notasi musik digunakan untuk menggambarkan suara pada selembar kertas, dan memudahkan pemain untuk memainkan musik dengan tepat sesuai dengan instruksi yang diberikan pada lembaran musik tersebut."
              },
              {
                  "id": 1,
                  "judul": "2. Pelajari Teori Musik",
                  "materi": "Cara bermain piano selanjutnya adalah belajar teori musik, tentu akan membantu Anda memahami musik dengan lebih baik, dan membantu Anda memainkan piano dengan lebih efektif. Beberapa konsep dasar teori musik yang perlu dipahami meliputi:\n- Nada: Nada adalah bunyi yang dihasilkan dari getaran. Pada piano, setiap kunci menghasilkan nada yang berbeda.\n- Skala: Skala adalah serangkaian nada-nada yang diatur dalam urutan tertentu. Beberapa contoh skala yang sering digunakan adalah skala mayor dan minor.\n- Interval: Interval adalah jarak antara dua nada. Interval yang berbeda dapat menghasilkan perasaan yang berbeda dalam musik.\n- Akor: Akor adalah serangkaian nada yang dimainkan bersamaan. Akor sangat penting dalam musik, dan membantu membangun harmoni dalam lagu.\n- Melodi: Melodi adalah serangkaian nada yang dimainkan secara berurutan. Melodi adalah bagian dari musik yang paling mudah diingat dan membuat musik terdengar lebih indah.\n- Ritme: Ritme adalah pola irama dalam musik. Ritme mencakup ketukan, pause, dan aksen dalam musik."
              },
              {
                  "id": 2,
                  "judul": "3. Pelajari Teknik Dasar Piano",
                  "materi": "Setelah Anda memahami teori musik, selanjutnya Anda perlu mempelajari teknik dasar piano. Beberapa teknik dasar piano yang perlu Anda pelajari meliputi:\n- Duduk dengan postur tubuh yang benar dapat membantu Anda memainkan piano dengan lebih efisien dan menghindari cedera.\n- Pegang kunci dengan jari yang benar dan jangan memegangnya terlalu keras atau terlalu lembut.\n- Tekan kunci dengan ujung jari Anda, dan jangan menggunakan jari Anda secara terlalu kaku atau terlalu lentur\n- Pedal pada piano digunakan untuk menghasilkan sustain, dan dapat membuat suara piano terdengar lebih indah. Namun, pedal juga dapat digunakan untuk mengubah nada atau memainkan efek khusus pada piano."
              },
              {
                  "id": 3,
                  "judul": "4. Pelajari Lagu-Lagu Sederhana",
                  "materi": "Cara bermain piano selanjutnya adalah Anda bisa mulai untuk belajar lagu-lagu sederhana. Anda dapat memulai dengan lagu-lagu populer, atau lagu-lagu klasik yang mudah dimainkan. Penting untuk memulai dengan lagu-lagu yang tidak terlalu sulit, sehingga Anda dapat mempraktikkan teknik dasar piano secara efektif. Setiap kali Anda mempelajari lagu baru, cobalah untuk memahami struktur musiknya dan berlatih dengan teknik yang benar."
              },
              {
                  "id": 4,
                  "judul": "5. Berlatih Secara Teratur",
                  "materi": "Untuk menjadi seorang pianis yang mahir, Anda harus berlatih secara teratur. Cobalah untuk berlatih setiap hari, walaupun hanya selama beberapa menit saja. Berlatih piano secara teratur akan membantu Anda memperkuat otot jari Anda dan memperbaiki teknik dasar Anda. Selain itu, dengan berlatih secara teratur, Anda juga akan menjadi lebih akrab dengan piano dan memahami musik dengan lebih mendalam."
              },
              {
                  "id": 5,
                  "judul": "6. Bergabung dengan Kelas atau Kursus Piano",
                  "materi": "Jika Anda ingin meningkatkan keterampilan bermain piano Anda dengan lebih cepat, bergabunglah dengan kelas atau kursus piano. Dalam kelas atau kursus piano, Anda akan belajar dari guru yang berpengalaman dan akan mendapatkan masukan yang sangat berharga untuk meningkatkan keterampilan Anda. Selain itu, di kelas atau kursus piano, Anda juga akan bertemu dengan orang-orang yang memiliki minat yang sama dengan Anda, sehingga Anda dapat membangun jaringan dan mendapatkan dukungan dalam perjalanan Anda belajar piano."
              },
              {
                  "id": 6,
                  "judul": "7. Nikmati Proses Belajar",
                  "materi": "Cara bermain piano selanjutnya adalah nikmati, di mana Anda perlu memahami bahwa belajar piano memerlukan waktu dan kesabaran. Jangan terlalu fokus pada hasil akhir, melainkan nikmati proses belajar dan menjelajahi musik. Cobalah untuk bermain dengan perasaan, dan biarkan musik mengalir dengan alami. Jika Anda menikmati proses belajar dan menemukan kebahagiaan dalam bermain piano, maka Anda akan menjadi pianis yang jauh lebih baik."
              }
          ]
      }
  },
  {
      "materiID": 1,
      "alatMusik": "piano",
      "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
      "data": {
          "nama": "Manfaat Memainkan Piano pada Anak",
          "deskripsi": "Bermain alat musik piano bukan cuma menghibur. Ternyata, memainkan alat musik ini sangat bermanfaat untuk tumbuh kembang anak, salah satunya melatih fokus dan kepercayaan dirinya. Memainkan alat musik piano ternyata punya efek positif untuk tumbuh kembang anak. Mereka ternyata bisa belajar konsentrasi, kedisiplinan, kemampuan memori, penanganan stres, dan berbagai manfaat lain yang menguntungkan anak sepanjang hidupnya. Selain itu, bermain piano di muka umum juga bisa melatih kepercayaan dirinya. Mereka bisa mengasah fokus dan kemampuan pendengarannya. Berikut sederet manfaat bermain alat musik piano untuk anak.",
          "tingkatan": "pemula",
          "rating": [],
          "pengunjung": 1,
          "createdAt": "2023-10-10T17:01:38.838Z",
          "updatedAt": "2023-10-10T17:01:38.838Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "1. Menunjang pertumbuhan",
                  "materi": "Bermain piano secara bisa mempertajam keterampilan motorik halus dan meningkatkan koordinasi tangan-mata anak yang masih dalam pertumbuhan.  Penelitian telah menunjukkan bahwa piano untuk juga bisa meningkatkan kadar hormon pertumbuhan. Alunan juga terbukti mengurangi kecemasan, detak jantung dan pernapasan, komplikasi jantung, menurunkan tekanan darah dan meningkatkan respons imun."
              },
              {
                  "id": 1,
                  "judul": "2. Meningkatkan kecerdasan",
                  "materi": "Latihan piano juga meningkatkan kemampuan kognitif dan intelektual. Artinya, bermain piano bisa membuat anak lebih pintar karena bisa mengaktifkan bagian otak serupa yang digunakan dalam penalaran spasial dan matematika. Belajar piano juga telah terbukti meningkatkan daya ingat, terutama verbal. Latihan ini juga membangun kebiasaan baik seperti fokus, ketekunan, dan kreativitas. Anak-anak yang belajar piano selama beberapa tahun dapat mengingat kosa kata dua puluh persen lebih banyak daripada teman sebayanya.\n\nAnak-anak yang bisa bermain piano dianggap mampu menyimpan informasi lebih optimal di kemudian hari. Selain itu, bermain piano telah terbukti meningkatkan kemampuan spasial-temporal, yang sangat menonjol dalam matematika, sains, dan teknik. Latihan musik secara teratur pada usia dini bahkan dapat membuat perubahan struktural pada otak seumur hidup."
              },
              {
                  "id": 2,
                  "judul": "3. Menenangkan pikiran",
                  "materi": "Studi menunjukkan bahwa latihan piano bisa meningkatkan kesehatan mental. Mereka yang mampu bermain musik terbukti mengalami lebih sedikit kecemasan, kesepian, dan depresi. Bermain piano juga telah terbukti menjadi sumber penghilang stres dan meningkatkan kepercayaan diri."
              },
              {
                  "id": 3,
                  "judul": "4. Menjaga kesehatan fisik",
                  "materi": "Bukan cuma kesehatan mental, nyatanya piano juga bisa meningkatkan kesehatan fisik. Latihan ini melibatkan koordinasi mata dengan tangan dan kemampuan menggunakan alat dengan tangan, seperti sumpit. Seperti yang sudah dijelaskan sebelumnya, bermain piano juga mengasah kemampuan motorik halus yang akan semakin membaik ketika anak bertambah usia bahkan hingga dewasa."
              },
              {
                  "id": 4,
                  "judul": "5. Mengajarkan anak untuk menerima kritik dan pujian",
                  "materi": "Ketika mempelajari suatu instrumen baru, anak akan mendapat pujian dan juga kritik yang membangun secara alamiah. Hal ini penting dalam membentuk kondisi mentalnya. Setiap aspek kehidupan seseorang pastinya terdapat pujian maupun kritik yang membangun. Ini bisa menjadi cara yang tepat untuk melatih anak bagaimana menerima kritik dengan cara yang positif."
              },
              {
                  "id": 5,
                  "judul": "6. Mendapatkan kemampuan baru",
                  "materi": "Belajar piano juga bisa membantu anak untuk memiliki kemampuan baru. Ketika dia sudah menguasainya, otomatis kemampuan ini mampu meningkatkan kepercayaan diri anak dan mendapatkan pengalaman yang positif di sekolah. Kemampuan baru juga dapat memengaruhi performa anak menjadi lebih baik di sekolah. Oleh sebab itu, orang tua tak perlu ragu untuk memperkenalkan Si Kecil dengan kemampuan baru. Sebab, ini bisa menjadi aset berharga untuk dirinya di kemudian hari."
              }
          ]
      }
  },
  {
      "materiID": 2,
      "alatMusik": "piano",
      "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
      "data": {
          "nama": "Kunci Dasar Piano",
          "deskripsi": "Kunci dasar pada piano merupakan pondasi yang sangat penting dalam belajar bermain piano. Kunci-kunci tersebut adalah dasar dari semua karya musik yang dimainkan pada piano. Setiap kunci memiliki kombinasi nada yang berbeda dan letaknya di oktaf yang berbeda pula. Oleh karena itu, cara belajar kunci dasar piano adalah hal pertama yang harus dipelajari oleh pemula. Berikut adalah beberapa kunci dasar piano yang lebih detail.",
          "tingkatan": "menengah",
          "rating": [],
          "pengunjung": 2,
          "createdAt": "2023-10-10T17:09:06.763Z",
          "updatedAt": "2023-10-10T17:09:06.763Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Kunci C atau Do",
                  "materi": "Kunci C atau Do adalah kunci dasar yang terdiri dari 8 nada atau oktaf dimulai dari C1 hingga C8. Kunci ini sering dipelajari oleh pemula karena tidak memiliki notasi-naluri atau bemol. Dalam kunci C, tidak ada notasi-naluri atau bemol, sehingga kunci ini memiliki nada yang bersih dan cerah. Dalam kunci C, nada-nada yang dimainkan dengan tangan kiri biasanya merupakan bass dan chord dasar, sedangkan nada-nada yang dimainkan dengan tangan kanan merupakan melodi. Kunci C sering digunakan untuk lagu-lagu populer dan musik klasik."
              },
              {
                  "id": 1,
                  "judul": "Kunci D atau Re",
                  "materi": "Kunci D atau Re terdiri dari 8 nada atau oktaf dimulai dari D1 hingga D8. Kunci ini juga merupakan kunci yang mudah dipelajari oleh pemula. Nada-nada dalam kunci D lebih tinggi dibandingkan dengan kunci C, sehingga kunci ini memberikan nuansa yang lebih cerah. Dalam kunci D, tangan kiri biasanya memainkan bass dan chord dasar, sedangkan tangan kanan memainkan melodi dan riff. Kunci D sering digunakan dalam musik country dan pop."
              },
              {
                  "id": 2,
                  "judul": "Kunci E atau Mi",
                  "materi": "Kunci E atau Mi terdiri dari 8 nada atau oktaf dimulai dari E1 hingga E8. Kunci ini memiliki nada yang cerah dan menyenangkan, sehingga sering digunakan dalam musik rock dan pop. Dalam kunci E, nada-nada yang dimainkan oleh tangan kiri biasanya merupakan bass dan chord dasar, sedangkan tangan kanan memainkan melodi dan riff."
              },
              {
                  "id": 3,
                  "judul": "Kunci F atau Fa",
                  "materi": "Kunci F atau Fa terdiri dari 8 nada atau oktaf dimulai dari F1 hingga F8. Kunci ini memiliki nada yang agak suram dan cocok digunakan untuk lagu-lagu yang bernuansa sedih atau melankolis. Dalam kunci F, nada-nada yang dimainkan oleh tangan kiri biasanya merupakan bass dan chord dasar, sedangkan tangan kanan memainkan melodi dan riff."
              },
              {
                  "id": 4,
                  "judul": "Kunci G atau Sol",
                  "materi": "Kunci G atau Sol terdiri dari 8 nada atau oktaf dimulai dari G1 hingga G8. Kunci ini memiliki nada yang cerah dan energik, sehingga sering digunakan dalam musik pop dan country. Dalam kunci G, nada-nada yang dimainkan oleh tangan kiri biasanya merupakan bass dan chord dasar, sedangkan tangan kanan memainkan melodi dan riff."
              },
              {
                  "id": 5,
                  "judul": "Kunci A atau La",
                  "materi": "Kunci A atau La terdiri dari 8 nada atau oktaf dimulai dari A1 hingga A8. Kunci ini sering digunakan dalam musik blues dan rock. Nada-nada dalam kunci A sedikit lebih tinggi daripada kunci G, sehingga memberikan nuansa yang lebih cerah. Dalam kunci A, tangan kiri biasanya memainkan bass dan chord dasar, sedangkan tangan kanan memainkan melodi dan riff."
              },
              {
                  "id": 6,
                  "judul": "Kunci B atau Si",
                  "materi": "Kunci B atau Si terdiri dari8 nada atau oktaf dimulai dari B1 hingga B8. Kunci ini jarang digunakan dalam musik populer, namun sering digunakan dalam musik klasik. Nada-nada dalam kunci B cukup tinggi, sehingga sulit dimainkan oleh pemula. Dalam kunci B, tangan kiri biasanya memainkan bass dan chord dasar, sedangkan tangan kanan memainkan melodi dan riff."
              }
          ]
      }
  },
  {
      "materiID": 3,
      "alatMusik": "piano",
      "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
      "data": {
          "nama": "Sejarah Piano",
          "deskripsi": "Piano adalah alat musik yang dimainkan dengan jari-jemari tangan. Pemain piano disebut pianis. Piano (yang juga disebut pianoforte) adalah alat musik tuts yang diklasifikasikan sebagai instrumen dawai dan perkusi yang dimainkan dengan menekan tuts-tuts pada papan piano. Setiap tuts tersambung ke palu yang ada di dalam piano dan menekan senar di dalamnya, sehingga menghasilkan bunyi. Setiap senar memiliki panjang yang berbeda dan menghasilkan bunyi yang berbeda pula.",
          "tingkatan": "pemula",
          "rating": [],
          "pengunjung": 1,
          "createdAt": "2023-10-10T17:10:59.032Z",
          "updatedAt": "2023-10-10T17:10:59.032Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Sejarah",
                  "materi": "Pada saat awal-awal diciptakan, suara piano tidak sekeras piano abad XX-an, seperti piano yang dibuat oleh Bartolomeo Cristofori (1655 – 1731) buatan 1720. Pasalnya, tegangan senar piano kala itu tidak sekuat sekarang. Kini piano itu dipajang di Metropolitan Museum of Art di New York.\n\nMeskipun siapa penemu pertama piano, yang awalnya dijuluki gravecembalo col piano e forte (harpsichord dengan papan tuts lembut dan bersuara keras), masih menjadi perdebatan, banyak orang mengakui, Bartolomeo Cristofori sebagai penciptanya. Piano juga bukan alat musik pertama yang menggunakan papan tuts dan bekerja dengan dipukul. Alat musik berprinsip kerja mirip piano telah ada sejak 1440.\n\nPiano sendiri lahir dari keinginan untuk menggabungkan keindahan nada clavichord dengan kekuatan harpsichord. Hasrat itu mendorong Marius dari Paris (1716), Schroter dari Saxony (1717), dan Cristofori (1720) dari Padova, Italia, untuk membuat piano. Namun, hasil utuh dan lengkap cuma ditunjukkan Bartolomeo Christofori. Dari piano ciptaan pemelihara harpsichord dan spinet (harpsichord kecil) di Istana Florentine – kediaman Pangeran Ferdinand de’Medici – inilah piano modern berakar.\n\nPada pertengahan abad XVII piano dibuat dengan beberapa bentuk. Awalnya, ada yang dibuat mirip desain harpsichord, dengan dawai menjulang. Piano menjadi lebih rendah setelah John Isaac Hawkins memodifikasi letaknya menjadi sejajar lantai. Lalu, dengan munculnya tuntutan instrumen musik lebih ringan, tidak mahal, dan dengan sentuhan lebih ringan, para pembuat piano Jerman menjawabnya dengan piano persegi. Sampai 1860 piano persegi ini mendominasi penggunaan piano di rumah.\n\nRangka untuk senar piano pertama menggunakan rangka kayu dan hanya dapat menahan tegangan ringan dari senar. Akibatnya, ketika pada abad XIX dibangun gedung-gedung konser berukuran besar, suara piano tadi kurang memadai. Maka, mulailah dibuat piano dengan rangka besi. Sekitar tahun 1800 Joseph Smith dari Inggris membuat suatu piano dengan rangka logam seluruhnya. Piano hasil inovasinya mampu menahan tegangan senar sangat kuat, sehingga suara yang dihasilkan pun lebih keras. Sekitar 1820, banyak pembuat menggunakan potongan logam untuk bagian piano lainnya. Pada 1822, Erard bersaudara mematenkan double escapement action, yang merupakan temuan tersohor dari yang pernah ada berkaitan dengan cara kerja piano.\n\nDalam perkembangannya, sebelum memiliki 88 tuts seperti sekarang, piano memiliki lima oktaf dan 62 tuts. Ia juga dilengkapi dengan pedal yang digerakkan dengan lutut. Namun, kemudian pedal kaki yang diperkenalkan di Inggris menjadi populer hingga sekarang.\n\nSejumlah pengembangan berlanjut pada abad XIX dan XX. Tegangan senar, yang semula ditetapkan 16 ton pada tahun 1862, bertambah menjadi 30 ton pada piano modern. Hasilnya adalah sebuah piano dengan kemampuan menghasilkan nada yang tidak pernah dibayangkan Frederic Chopin, Ludwig van Beethoven, dan bahkan Franz Liszt."
              }
          ]
      }
  },
  {
      "materiID": 4,
      "alatMusik": "piano",
      "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
      "data": {
          "nama": "Pengenalan Piano",
          "deskripsi": "Piano adalah sejenis alat musik yang mempunyai papan ketik atau papan tangga nada, dan menghasilkan suara berdasarkan ketukan palu terhadap senar.\n ",
          "tingkatan": "pemula",
          "rating": [],
          "pengunjung": 3,
          "createdAt": "2023-10-10T17:17:16.412Z",
          "updatedAt": "2023-10-10T17:17:16.412Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Pengenalan",
                  "materi": "<img>https://html.scribdassets.com/1qo85auatc43zxe4/images/1-deca942002.png</img>\nPiano pada umumnya terbagi menjadi 2 jenis yaitu Stand-Up Piano dan Grand Piano. Stand-Up Piano adalah piano yang pendek “ekor”nya dan Grand Piano adalah piano yang berukuran lebih besar.Piano memiliki tuts yang lebih banyak karena alat musik piano diciptakan pada mulanya untuk permainan solo sehingga harus menjangkau nada mulai dari sangat rendah sampai tinggi, supaya semakin banyak variasi.\n<video>https://www.youtube.com/watch?v=AIaErCxVmxE</video>"
              }
          ]
      }
  },
  {
      "materiID": 5,
      "alatMusik": "piano",
      "owner": "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
      "data": {
          "nama": "Bagian - Bagian Piano",
          "deskripsi": "Faktor apa yang membuat piano bisa menghasilkan melodi yang begitu indah? Gimana piano bisa jadi alat musik yang dicintai begitu banyak orang? Apa saja bagian piano yang membuatnya begitu luar biasa? Buat para pemula, penting buat kalian untuk bisa membedakan berbagai elemen piano, jadi kamu bisa menggunakan dan mengoptimalkan setiap bagian piano buat menghasilkan nada yang indah. Malahan, siapa tahu nanti, kamu bahkan bisa membersihkan bagian-bagian itu sendiri. Yuk, belajar tentang bagian-bagian ini, definisi dan kegunaannya!",
          "tingkatan": "menengah",
          "rating": [],
          "pengunjung": 3,
          "createdAt": "2023-10-10T17:22:23.411Z",
          "updatedAt": "2023-10-10T17:22:23.411Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Gambar bagian piano",
                  "materi": "<img>https://static.wixstatic.com/media/8de21e_932c9f0d7ade44b5ba4d6337c49c078a~mv2.png/v1/fill/w_614,h_409,al_c,lg_1,q_85,enc_auto/8de21e_932c9f0d7ade44b5ba4d6337c49c078a~mv2.png</img>"
              },
              {
                  "id": 1,
                  "judul": "Keyboard",
                  "materi": "Keyboard adalah bagian yang paling khas dari piano, soalnya bagian ini tempat interaksi terbanyak seorang pianis. Keyboard piano totalnya 88 tuts, di mana 36 di antaranya adalah tuts hitam pendek - atau enharmonics, sharps, atau flats, dan 52 tuts putih sisanya - atau nama lainnya adalah natural.\n\nSetiap kunci terhubung ke komponen casing internal piano, seperti palu dan senar, yang pada akhirnya bakakl berinteraksi untuk membuat melodi yang indah. Jadi, pas kamu menekan tuts, kamu akan menggeser palu, menyerang senar dengan kuat, dan menghasilkan variasi nada yang berbeda."
              },
              {
                  "id": 2,
                  "judul": "Casing/Penutup",
                  "materi": "Aku yakin kamu tahu tentang bagian ini, yang membedakan piano dengan alat musik lainnya. Casing atau penutup itu bagian terbesar dari piano, di mana ia menampung bagian-bagian alat musik yang menyetel melodi yang indah. Bentuknya bisa dikenali dengan jelas, dan tergantung pada jenis pianonya, casing piano biasanya berfigur dan ukuran beda-beda. Grand piano, misalnya, tutupnya lebih besar dan dapat dibuka untuk menghasilkan nada yang lebih jernih dan lebih bervariasi, yang dihasilkan oleh casing yang dibuka. Contoh lain adalah piano upright yang lebih ringkas. Tapi, pas tutupnya dibuka, piano ini ber-resonansi nada yang lebih rendah saat lebih dekat ke dinding. Artinya, kamu bisa geser piano menjauh dari dinding buat meningkatkan nadanya!"
              },
              {
                  "id": 3,
                  "judul": "Senar dan palu",
                  "materi": "Komponen ini adalah inti sebuah piano; di mana pesona musik terjadi! Bagian belakang tuts piano biasanya ditempel ke palu yang dibungkus kain kempa, dan pas ditekan, tuts tersebut bakal jadi seperti sebuah titik tumpu, dan memutar palu dalam sebuah gerakan cepat yang memukul senar waktu dipukul. Setiap senar telah diatur dan diketatkan supaya bisa menghasilkan suara atau not musik tertentu. \n\nPalu menggetarkan resonansi dan menghasilkan suara yang berbeda pas memukul senar."
              },
              {
                  "id": 4,
                  "judul": "Peredam/Damper",
                  "materi": "Ketika jarimu baru saja menekan tuts, alat yang dikenal sebagai damper, atau peredam, turun ke bawah untuk menahan senar dari getaran berlebih, dan mencegah suara kecampur dan menghasilkan hiruk pikuk yang bikin pusing.\n\nDamper biasanya terbuat dari kain kempa atau kain lembut, dan membantu meredam senar yang bergetar setelah palu memukul senar. Maksudku, kita gak mau dong menghasilkan nada campuran Do dan Re pas lagi main tangga nada, kan?\n\nDamper itu adanya di atas senar, dan beroperasi hanya ketika penekanan tuts dilepaskan, kecuali kalau kamu secara aktif menekan pedal di bawah."
              },
              {
                  "id": 5,
                  "judul": "Pedal",
                  "materi": "Kalau soal pedal, bentuknya biasanya sama, tapi jumlahnya tergantung jenis pianonya. Biasanya pedal itu berjumlah dua atau tiga, dan terletak di dasar bawah piano, di mana kaki pianis biasanya berada.\n<img>https://static.wixstatic.com/media/8de21e_740386e8d41e4fd9b72a036e8c84b11d~mv2.jpg/v1/fill/w_584,h_438,al_c,lg_1,q_80,enc_auto/8de21e_740386e8d41e4fd9b72a036e8c84b11d~mv2.jpg</img>\nPedal piano berperan penting dalam pembuatan, pemeliharaan, dan penyelesaian not musik saat piano dimainkan. Seperti yang ditunjukkan di atas dari urutan kiri ke kanan, kegunaan pedal piano adalah sebagai berikut:\n<li>Una corda atau pedal lembut.</li>\n<li>Pedal sostenuto untuk memperpanjang sebuah not.</li>\n<li>Pedal damper, yang menopang senar pada piano dengan melepaskan senar dari pengaruh damper supaya senar bisa bergetar dengan bebas.</li>\n<li>Penopang adalah pedal dari kiri ke kanan. </li>"
              }
          ]
      }
  }
]
const materi_drum = [
  {
      "materiID": 0,
      "alatMusik": "drum",
      "owner": "59d1756f-5259-4527-bc72-640db97372b5",
      "data": {
          "nama": "Sejarah Drum",
          "deskripsi": "Sejarah alat musik drum berawal dari munculnya peradaban manusia. Dahulu, pukulan drum telah dikaitkan dengan kelahiran manusia. Karena, drum, saat itu merupakan alat musik yang sering kali digunakan di hutan, yang disebut juga membranophone, yang berarti sebuah alat musik yang mengeluarkan suara dari selaput (sebuah lengkung stik) yang berkepanjangan dan mengesankan bagi setiap objek yang mendengarkannya.",
          "tingkatan": "pemula",
          "rating": [
              [
                  "88ba3d39-2af4-4526-8ab2-97d8b470d061",
                  5
              ]
          ],
          "pengunjung": 6,
          "createdAt": "2023-10-10T17:24:43.522Z",
          "updatedAt": "2023-10-10T17:24:43.522Z",
          "daftarMateri": [
              {
                  "id": 0,
                  "judul": "Sejarah",
                  "materi": "Alat musik drum sudah ada sejak tahun 6000 SM. Di dalam gua-gua di negara Peru, terdapat beberapa lukisan yang tertempel pada dindingnya, yang menggambarkan bahwa alat musik drum bisa digunakan dalam berbagai aspek kehidupan masyarakat. Contohnya suku Indian, mereka menggunakan labu dan batang kayu untuk membuat alat musik drum. Dan, biasanya mereka menggunakan alat musik drum tersebut untuk kepentingan upacara-upacara ritual adat istiadat mereka.\n\nDrum tidak hanya digunakan untuk menghibur diri saja, tetapi juga bisa digunakan sebagai alat komunikasi, contohnya budaya suku Afrika. Biasanya, meraka mengandalakn alat musik drum sebagai alat untuk mengekspresikan diri mereka, juga digunakan sebagai alat untuk menyampaikan pesan penting melalui serangkaian pukulan drum disepanjang hutan tempat tinggal mereka tinggal.\n\nDrum set modern mulai tercipta pada tahun 1890-an dan dikembangkan oleh orang- orang Afrika-Amerika di Amerika Selatan. Ketika itu grup-grup band memainkan drumnya sambil berdiri dan dimainkan dalam bentuk parade dan berkeliling dijalanan kota. Saat itu perangkat drum belum disusun dalam satu kesatuan, tetapi masih terpisah- pisah dan satu alat dimainkan oleh satu orang.\n\nSemisal snare drum dimainkan satu orang, bass drum dimainkan satu orang, begitu pula cymbal dimainkan oleh satu orang dengan cara mengadu dua buah cymbal. Grup musik keliling ini mirip dengan marching band yang jamak kita jumpai saat ini. Mereka memainkan trombone dan trumpet didalamnya. Grup musik seperti ini banyak terdapat di daerah New Orleans dan terbentuk secara tradisional.\n\nPerkembangan selanjutnya pada tahun 1909, Ludwig bersaudara yaitu William Ludwig dan Theodor Ludwig menemukan penemuan baru, yaitu sistem pedal yang dapat membunyikan bass drum. Diameter bass drum pada saat itu sangat besar, yakni 26 hingga 30. Drum set ini dilengkapi dengan beberapa roda pada bagian bawah bass drum yang memudahkan perangkat drum bergeser saat didorong.\n\nSelain itu juga ditemukan cymbal untuk hi–hat, namun sayangnya belum menggunakan perangkat stand. Hi–hat dahulu nya hanya diletakan di bawah lantai dan dibunyikan dengan pijakan kaki kiri. Sebenarnya perangkat cymbal sudah diproduksi dan digunakan sekitar abad ke–16 oleh orang–orang Arab dan Turki, hanya saja penggunaannya belum dalam bentuk perangkat alat musik drum.\n\nSelanjutnya, pada tahun 1960-an, perkembangan drum kit mulai melesat. Berawal dari para pemain drum aliran musik rock yang telah bangkit. Drum kit kembali ditambahkan alat, yaitu tambahan tom-tom dan gembrengan, serta bass drum lain untuk meningkatkan kecepatan pada drum tersebut. Kemudian dari sini muncullah drum elektronik yang dapat menghasilkan berbagai jenis suara. dan, hingga saati ini, alat musik drum masih digunakan dalam berbagai kontes musik di seluruh dunia."
              }
          ]
      }
  }
]

const post = {
  postID: 0,
  owner: UUID,
  title: "post1",
  description: lorem,
  createdAt: "2023-10-01T11:28:33.724Z",
  upvotes: [UUID3, UUID4, UUID5],
  downvotes: [UUID6],
  comments: [
    {
      owner: UUID2,
      content: "halo",
      createdAt: "2023-10-02T11:28:33.724Z",
    },
    {
      owner: UUID,
      content: "halo juga",
      createdAt: "2023-10-02T11:28:35.724Z",
    }
  ]
}
const post2 = {
  postID: 1,
  owner: UUID2,
  title: "post2",
  description: lorem,
  createdAt: "2023-09-01T11:28:33.724Z",
  upvotes: [UUID3],
  downvotes: [UUID4, UUID5, UUID6],
  comments: [
    {
      owner: UUID,
      content: "wow",
      createdAt: "2023-09-01T11:40:33.724Z",
    },
    {
      owner: UUID,
      content: "keren",
      createdAt: "2023-10-10T11:22:33.724Z",
    }
  ]
}

const user1 = {
  "email": "fanes23.pratama@gmail.com",
  "password": "admin123",
  "username": "Admin1",
  "terimaEmail": true,
  "akses": "admin",
  "createdAt": "2023-10-01T11:28:33.724Z"
};
const user2 = {
  "email": "pratama14.f@gmail.com",
  "password": "admins123",
  "username": "Admin2",
  "terimaEmail": false,
  "akses": "admin",
  "createdAt": "2021-10-01T11:28:33.724Z"
};
const user3 = {
  "email": "user3@gmail.com",
  "password": "user3",
  "username": "user3",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2022-10-01T11:28:33.724Z"
};
const user4 = {
  "email": "user4@gmail.com",
  "password": "user4",
  "username": "user4",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2022-04-15T11:28:33.724Z"
};
const user5 = {
  "email": "user5@gmail.com",
  "password": "user5",
  "username": "user5",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2020-12-21T11:28:33.724Z"
};
const user6 = {
  "email": "user6@gmail.com",
  "password": "user6",
  "username": "user6",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2023-01-02T11:28:33.724Z"
};

const clearDatabase = async () => {
  try {
    console.log("[SEEDER] Clearing database...");
    await db_user.deleteAll();
    await db_materi.deleteAll();
    await db_loggedUser.deleteAll();
    await db_forum.deleteAll();
    await db_forgetPass.deleteAll();
  } catch (err) {
    console.log("[SEEDER] Error while clearing database");
    console.log(err);
  } finally {
    console.log("[SEEDER] Database cleared");
  }
}

const seedDatabase = async () => {
  try {
    console.log("[SEEDER] Seeding database...");
    await db_user.set(UUID, user1);
    await db_user.set(UUID2, user2);
    await db_user.set(UUID3, user3);
    await db_user.set(UUID4, user4);
    await db_user.set(UUID5, user5);
    await db_user.set(UUID6, user6);
    await db_materi.set("gitar", materi_gitar);
    await db_materi.set("biola", materi_biola);
    await db_materi.set("piano", materi_piano);
    await db_materi.set("drum", materi_drum);
    await db_forum.set(UUID, [post]);
    await db_forum.set(UUID2, [post2]);
  } catch (err) {
    console.log("[SEEDER] Error while seeding database");
    console.log(err);
  } finally {
    console.log("[SEEDER] Database seeded");
  }
}

(async () => {
  await clearDatabase();
  await seedDatabase();
  console.log("[SEEDER] Seeder finished!");
})();