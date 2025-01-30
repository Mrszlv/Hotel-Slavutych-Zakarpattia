import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [
    {
      id: 1,
      name: "Номер Люкс 2 кімнати головний корпус",
      price: 2890,
      description:
        "Люкс дво-кімнатний з усіма зручностями, ванною кімнатою та балконом. Чудовий вид на територію готелю та гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg",
      images: [
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3139_hqjdtc.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3140_yivcpf.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3141_rfleft.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249275/IMG_3138_ezbnyk.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249275/IMG_3136_kk4byv.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249275/IMG_3135_ahioxf.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249275/IMG_3134_blc8ln.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3143_ptsgkr.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249276/IMG_3142_b4njeg.jpg",
      ],
    },
    {
      id: 2,
      name: "Номер Напівлюкс 3 місний головний корпус",
      price: 2590,
      description:
        "Напівлюкс з усіма зручностями, ванною кімнатою та балконом з видом на територію готелю та гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg",
      images: [
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249433/IMG_3132_k4bpyj.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249432/IMG_3131_f2ieye.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249431/IMG_3130_adnmvh.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249430/IMG_3129_lor4y7.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249429/IMG_3128_khamnm.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249435/IMG_3133_sjuez2.jpg",
      ],
    },
    {
      id: 3,
      name: "Номер Стандарт головний корпус",
      price: 2290,
      description:
        "Стандарт покращений, двомісний номер з ванною кімнатою та балклоном з видом на територію готелю та гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg",
      images: [
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249494/IMG_3126_bumjur.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249493/IMG_3125_gcdj2b.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249492/IMG_3124_yclgdo.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249490/IMG_3123_l01h5d.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249490/IMG_3122_jrne2t.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249489/IMG_3121_f0gvl8.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249495/IMG_3127_ahu42y.jpg",
      ],
    },
    {
      id: 4,
      name: "Номер Економ головний корпус",
      price: 2090,
      description:
        "Економ покращений з роздільними ліжками та балконом, з видом на територію готелю та гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249379/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-1_t5bkc1.jpg",
      images: [
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249536/IMG_3118_f9jtmq.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249535/IMG_3117_hophkn.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249533/IMG_3116_umtecu.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249532/IMG_3115_rgp3a3.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249530/IMG_3113_alswpi.jpg",
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249539/IMG_3120_gdoln8.jpg",
      ],
    },
    {
      id: 5,
      name: "Номер Люкс 3 кімнати корпус 9",
      price: 1790,
      description:
        "Номер люкс трикімнатний з двома санвузлами (душові), балконом з чудовим видом на гори та територію. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc.jpg",
      images: [
        "../../public/images/20200704_125609_Original.JPEG",
        "../../public/images/20200704_131924_Original.JPEG",
        "../../public/images/20200704_125550_Original.JPEG",
      ],
    },
    {
      id: 6,
      name: "Номер Люкс 2 кімнати корпус 9",
      price: 1590,
      description:
        "Люкс двокімнатний з усіма зручностями, савузол з душем, балкон з видом на гори та місцевість. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc.jpg",
      images: [
        "../../public/images/20200704_131924_Original.JPEG",
        "../../public/images/20200704_125609_Original.JPEG",
        "../../public/images/20200704_125550_Original.JPEG",
      ],
    },
    {
      id: 7,
      name: "Номер Напівлюкс корпус 9",
      price: 1590,
      description:
        "Напівлюкс з усіма зручностями, савузол з душем, без балкону з гарним видом на гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc.jpg",
      images: [
        "../../public/images/20200704_131924_Original.JPEG",
        "../../public/images/20200704_125609_Original.JPEG",
        "../../public/images/20200704_125550_Original.JPEG",
      ],
    },
    {
      id: 8,
      name: "Номер Економ корпус 9",
      price: 1590,
      description:
        "Економ з роздільними ліжками, савузол з душем, без балкону з гарним видом на гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738249381/%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8F-2_fqrmyc.jpg",
      images: [
        "../../public/images/20200704_131924_Original.JPEG",
        "../../public/images/20200704_125609_Original.JPEG",
        "../../public/images/20200704_125550_Original.JPEG",
      ],
    },
    {
      id: 9,
      name: "Номер Економ корпус 9-А",
      price: 1590,
      description:
        "Економ з двоспальним ліжком, савузол з ванною, з невеликим балконом з гарним видом на гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738251119/IMG_2942_blxn6r.jpg",
      images: [
        "../../public/images/20200704_131924_Original.JPEG",
        "../../public/images/20200704_125609_Original.JPEG",
        "../../public/images/20200704_125550_Original.JPEG",
      ],
    },
    {
      id: 10,
      name: "Стандарт Економ корпус 9-А",
      price: 1590,
      description:
        "Стандарт з двоспальним ліжком та розкладним кріслом для дитини, савузол з ванною, з невеликим балконом з гарним видом на гори. В номері є: телевізор, холодильник, кондиціонер, фен, чайник(Якщо нема блекауту), та багато всього іншого для Вашого комфорту.",
      avatar:
        "https://res.cloudinary.com/ddqtzq55a/image/upload/v1738251119/IMG_2942_blxn6r.jpg",
      images: [
        "../../public/images/20200704_131924_Original.JPEG",
        "../../public/images/20200704_125609_Original.JPEG",
        "../../public/images/20200704_125550_Original.JPEG",
      ],
    },
  ],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});

export const selectRooms = (state) => state.rooms.rooms;
export default roomsSlice.reducer;
