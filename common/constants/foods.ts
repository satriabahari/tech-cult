import { FoodProps } from "../types/food";

export const FOODS: FoodProps[] = [
  {
    id: 1,
    name: "Nasi Goreng",
    description:
      "Nasi goreng adalah masakan nasi yang digoreng dalam minyak goreng, biasanya ditambah dengan bawang putih, bawang merah, kecap manis, garam, lada, cabai dan bahan lainnya, seperti telur, daging (ayam, sapi, kerang, cumi-cumi atau udang), dan sayuran.",
    origin: "Indonesia",
    ingredients: [
      "Nasi",
      "Bawang putih",
      "Bawang merah",
      "Kecap manis",
      "Garam",
      "Lada",
      "Cabai",
      "Telur",
      "Daging",
      "Sayuran",
    ],
    instructions:
      "Tumis bawang putih dan bawang merah hingga harum, masukkan telur, tambahkan nasi, aduk hingga merata. Tambahkan kecap manis, garam, lada, dan cabai sesuai selera. Terakhir, tambahkan daging dan sayuran, aduk hingga matang.",
    image: "/images/foods/nasi_goreng.webp",
    isShow: true,
  },
  {
    id: 2,
    name: "Rendang",
    description:
      "Rendang adalah masakan daging sapi yang dimasak dalam santan dengan tambahan rempah-rempah yang kaya dan kompleks, seperti serai, lengkuas, jahe, galangal, bawang merah, bawang putih, cabai merah, cabai rawit, ketumbar, jintan, garam, gula, dan daun jeruk.",
    origin: "Sumatera Barat, Indonesia",
    ingredients: [
      "Daging sapi",
      "Santan",
      "Serai",
      "Lengkuas",
      "Jahe",
      "Bawang merah",
      "Bawang putih",
      "Cabai merah",
      "Cabai rawit",
      "Ketumbar",
      "Jintan",
      "Garam",
      "Gula",
      "Daun jeruk",
    ],
    instructions:
      "Tumis bumbu halus hingga harum, masukkan potongan daging sapi, aduk hingga berubah warna. Tambahkan santan dan daun jeruk, masak dengan api kecil hingga daging empuk dan bumbu meresap.",
    image: "/images/foods/rendang.webp",
    isShow: true,
  },
  {
    id: 3,
    name: "Sate",
    description:
      "Sate adalah makanan yang terdiri dari potongan-potongan daging yang ditusuk dengan tusukan bambu atau tahan panas lainnya, kemudian dipanggang menggunakan bara api. Sate disajikan dengan bumbu kacang atau saus kecap.",
    origin: "Indonesia",
    ingredients: [
      "Daging (sapi, ayam, kambing)",
      "Bumbu kacang",
      "Saus kecap",
      "Tusukan bambu",
    ],
    instructions:
      "Tusuk potongan daging ke tusukan bambu, panggang di atas bara api sambil diolesi bumbu, sampai matang dan berwarna kecokelatan. Sajikan dengan bumbu kacang atau saus kecap.",
    image: "/images/foods/sate.webp",
    isShow: true,
  },
  {
    id: 4,
    name: "Gado-Gado",
    description:
      "Gado-gado adalah salah satu makanan khas Indonesia yang terdiri dari berbagai macam sayuran segar, tahu, tempe, telur rebus, kerupuk, dan lainnya, disajikan dengan bumbu kacang yang kental.",
    origin: "Jawa, Indonesia",
    ingredients: [
      "Sayuran segar",
      "Tahu",
      "Tempe",
      "Telur rebus",
      "Kerupuk",
      "Bumbu kacang",
    ],
    instructions:
      "Rebus sayuran, tahu, tempe, dan telur rebus hingga matang. Sajikan dengan kerupuk dan bumbu kacang.",
    image: "/images/foods/gado_gado.webp",
    isShow: true,
  },
  {
    id: 5,
    name: "Soto Ayam",
    description:
      "Soto ayam adalah masakan berupa sup ayam dengan tambahan bahan-bahan seperti telur rebus, tauge, daun seledri, bawang goreng, dan bawang merah. Disajikan dengan nasi putih atau lontong dan sambal.",
    origin: "Jawa, Indonesia",
    ingredients: [
      "Ayam",
      "Bawang merah",
      "Bawang putih",
      "Serai",
      "Daun jeruk",
      "Daun salam",
      "Tauge",
      "Telur rebus",
      "Daun seledri",
      "Bawang goreng",
      "Sambal",
      "Nasi putih atau lontong",
    ],
    instructions:
      "Rebus ayam dengan bumbu hingga empuk. Sajikan ayam bersama kaldu, tambahkan tauge, telur rebus, daun seledri, dan bawang goreng di atasnya. Sajikan dengan sambal dan nasi putih atau lontong.",
    image: "/images/foods/soto_ayam.webp",
    isShow: true,
  },
  {
    id: 6,
    name: "Martabak manis",
    description:
      "Martabak manis adalah makanan Indonesia yang terbuat dari adonan berbahan dasar tepung terigu, telur, gula, dan ragi. Setelah adonan dipanggang, martabak biasanya diisi dengan cokelat, kacang, keju, atau selai.",
    origin: "Indonesia",
    ingredients: [
      "Tepung terigu",
      "Telur",
      "Gula",
      "Ragi",
      "Cokelat",
      "Kacang",
      "Keju",
      "Selai",
    ],
    instructions:
      "Campur semua bahan adonan hingga rata dan mengembang. Tuangkan adonan ke loyang, panggang hingga matang. Setelah itu, isi dengan cokelat, kacang, keju, atau selai, lipat, dan sajikan.",
    image: "/images/foods/martabak.webp",
    isShow: true,
  },
  {
    id: 7,
    name: "Bakso",
    description:
      "Bakso adalah bola daging yang terbuat dari campuran daging sapi giling dan tepung tapioka, dengan tambahan bumbu rempah-rempah. Bakso biasanya disajikan dalam kuah kaldu panas dengan tambahan mie, tahu, pangsit, dan sayuran.",
    origin: "Indonesia",
    ingredients: [
      "Daging sapi giling",
      "Tepung tapioka",
      "Bumbu rempah-rempah",
      "Mie",
      "Tahu",
      "Pangsit",
      "Sayuran",
      "Kuah kaldu",
    ],
    instructions:
      "Campur daging sapi giling dengan tepung tapioka dan bumbu rempah-rempah. Bentuk adonan menjadi bola-bola kecil, rebus dalam air hingga matang. Sajikan dalam kuah kaldu dengan mie, tahu, pangsit, dan sayuran.",
    image: "/images/foods/bakso.webp",
    isShow: true,
  },
  {
    id: 8,
    name: "Pecel Lele",
    description:
      "Pecel lele adalah masakan Indonesia yang terdiri dari ikan lele yang digoreng kering dan disajikan dengan sambal pecel, lalapan, dan nasi.",
    origin: "Jawa, Indonesia",
    ingredients: [
      "Ikan lele",
      "Tepung bumbu",
      "Minyak untuk menggoreng",
      "Sambal pecel",
      "Lalapan",
      "Nasi",
    ],
    instructions:
      "Goreng ikan lele hingga kering dan berwarna kecokelatan. Sajikan dengan sambal pecel, lalapan, dan nasi.",
    image: "/images/foods/pecel_lele.webp",
    isShow: true,
  },
  {
    id: 9,
    name: "Rujak",
    description:
      "Rujak adalah hidangan asli Indonesia yang terbuat dari berbagai macam buah segar yang dipotong-potong dan dicampur dengan bumbu rujak yang manis, asam, dan pedas.",
    origin: "Indonesia",
    ingredients: [
      "Buah-buahan segar (mangga, jambu, nanas, pepaya, dll.)",
      "Bumbu rujak",
    ],
    instructions:
      "Potong-potong buah-buahan segar, campurkan dengan bumbu rujak, aduk hingga merata, dan hidangkan.",
    image: "/images/foods/rujak.webp",
    isShow: true,
  },
  {
    id: 10,
    name: "Siomay",
    description:
      "Siomay adalah salah satu makanan favorit di Indonesia yang terbuat dari campuran daging ikan atau daging ayam cincang yang dibungkus dengan kulit pangsit, kemudian direbus dan disajikan dengan saus kacang dan bumbu kencur.",
    origin: "Tionghoa-Indonesia",
    ingredients: [
      "Daging ikan atau daging ayam cincang",
      "Kulit pangsit",
      "Saus kacang",
      "Bumbu kencur",
    ],
    instructions:
      "Campur daging ikan atau daging ayam cincang dengan bumbu, bungkus dengan kulit pangsit, kemudian direbus. Sajikan dengan saus kacang dan bumbu kencur.",
    image: "/images/foods/siomay.webp",
    isShow: true,
  },
];
