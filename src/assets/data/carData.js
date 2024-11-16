// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
    {
        id: 1,
        brand: "Tesla",
        rating: 112,
        carName: "Tesla Malibu",
        imgUrl: img01,
        model: "Model 3",
        price: 4200,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "Experience luxury and sustainability with the Tesla Malibu, combining advanced electric performance with a sleek, modern design for eco-conscious drivers.",
    },

    {
        id: 2,
        brand: "Toyota",
        rating: 102,
        carName: "Toyota Aventador",
        imgUrl: img02,
        model: "Model-2022",
        price: 4200,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "A sporty, versatile option that offers exceptional fuel efficiency and reliability, ideal for city driving and long trips alike.",
    },

    {
        id: 3,
        brand: "BMW",
        rating: 132,
        carName: "BMW X3",
        imgUrl: img03,
        model: "Model-2022",
        price: 5500,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "The BMW X3 delivers a perfect balance of power and elegance, offering a spacious interior with cutting-edge features for a premium driving experience.",
    },

    {
        id: 4,
        brand: "Nissan",
        rating: 102,
        carName: "Nissan Mercielago",
        imgUrl: img04,
        model: "Model-2022",
        price: 5900,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "With dynamic performance and a stylish exterior, the Nissan Mercielago brings excitement to every drive, whether in the city or on the open road.",
    },

    {
        id: 5,
        brand: "Ferrari",
        rating: 94,
        carName: "Ferrari Camry",
        imgUrl: img05,
        model: "Model-2022",
        price: 3800,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "The Ferrari Camry combines sporty style with dependable engineering, perfect for those who want a thrilling yet practical ride.",
    },

    {
        id: 6,
        brand: "Mercedes",
        rating: 119,
        carName: "Mercedes Benz XC90",
        imgUrl: img06,
        model: "Model-2022",
        price: 7200,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "Sophisticated and luxurious, the Mercedes Benz XC90 offers advanced safety and comfort features, ensuring a smooth and relaxing journey.",
    },

    {
        id: 7,
        brand: "Audi",
        rating: 82,
        carName: "Audi Fiesta",
        imgUrl: img07,
        model: "Model 3",
        price: 4200,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "Compact and stylish, the Audi Fiesta is ideal for city explorers, providing a fun and fuel-efficient ride with impressive handling.",
    },

    {
        id: 8,
        brand: "Colorado",
        rating: 52,
        carName: "Rolls Royce Colorado",
        imgUrl: img08,
        model: "Model 3",
        price: 4200,
        speed: "20kmpl",
        gps: "GPS Navigation",
        seatType: "Heated seats",
        automatic: "Automatic",
        description:
            "The Rolls Royce Colorado redefines luxury with its spacious interior, top-of-the-line amenities, and an unrivaled smooth ride for the ultimate driving experience.",
    },
];

export default carData;
