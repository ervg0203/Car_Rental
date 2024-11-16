// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
    {
        id: 1,
        title: "The best way to drive cars",
        author: "John",
        date: "1 Dec, 2023",
        time: "2pm",
        imgUrl: img01,
        description:
            "Driving can be a joy when done right. In this post, we explore tips and techniques for becoming a confident and mindful driver. From mastering smooth acceleration and braking to understanding defensive driving, we'll cover ways to enhance your driving experience, make each ride safer, and keep your car in optimal condition. Whether you're a beginner or seasoned driver, these insights can improve the quality of every journey.",
        quote: "Driving isn't just about getting from point A to B; it's about enjoying the journey responsibly.",
    },

    {
        id: 2,
        title: "If your car battery is down",
        author: "Tim",
        date: "15 Nov, 2023",
        time: "7pm",
        imgUrl: img02,
        description:
            "Few things are more frustrating than discovering a dead car battery when you're ready to hit the road. This article walks you through immediate steps to handle a downed battery, including jump-starting techniques and signs your battery may need replacing. We'll also share essential tips to prevent future battery issues, helping you avoid delays and enjoy uninterrupted travel.",
        quote: "A little maintenance goes a long way—keep your battery charged, and your car will be ready whenever you are.",
    },

    {
        id: 3,
        title: "The best way to give trip",
        author: "Amber",
        date: "22 Jan, 2024",
        time: "9pm",
        imgUrl: img03,
        description:
            "Planning a trip can be as enjoyable as the journey itself when done thoughtfully. This blog delves into steps for organizing a memorable road trip or city excursion. From choosing the right car rental to creating an exciting itinerary and packing essentials, we'll help you turn your travel plans into unforgettable experiences. Explore ideas that make the journey as special as the destination.",
        quote: "The secret to a great trip lies in the planning—give each moment purpose, and every mile becomes meaningful.",
    },
];

export default blogData;
