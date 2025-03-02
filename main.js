
// 1) 0 - 100 arası yalnız sadə ədədləri console'da çap edin

// 2) let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// // task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// 3) const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"];
// array daxilindəki ən uzun sözü tapan alqoritm yazın

// 4) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// racecar - polidromdur
// hello - polidrom deyil

// 5) Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// reverseWordOrder("javascript öyrənmək maraqlıdır");

// Nəticə: "maraqlıdır öyrənmək javascript"
// hint: (

// split reverse join metodlarını araşdırın )

// 6)
// const users = [
//     { id: 1, name: "Orkhan Mammadov", age: 28, gender: "Male", city: "Baku", email: "orxan.m@mail.com" },
//     { id: 2, name: "Leyla Aliyeva", age: 24, gender: "Female", city: "Ganja", email: "leyla.a@mail.com" },
//     { id: 3, name: "Rashad Guliyev", age: 30, gender: "Male", city: "Sumqayit", email: "reshad.q@mail.com" },
//     { id: 4, name: "Aytan Hasanova", age: 26, gender: "Female", city: "Shaki", email: "ayten.h@mail.com" },
//     { id: 5, name: "Elvin Karimov", age: 32, gender: "Male", city: "Lankaran", email: "elvin.k@mail.com" },
//     { id: 6, name: "Nigar Rahimli", age: 27, gender: "Female", city: "Mingachevir", email: "nigar.r@mail.com" },
//     { id: 7, name: "Tural Abbasov", age: 29, gender: "Male", city: "Barda", email: "tural.a@mail.com" },
//     { id: 8, name: "Aysel Mammadova", age: 23, gender: "Female", city: "Khachmaz", email: "aysel.m@mail.com" },
//     { id: 9, name: "Murad Aliyev", age: 31, gender: "Male", city: "Shamakhi", email: "murad.a@mail.com" },
//     { id: 10, name: "Gulnar Gasimova", age: 25, gender: "Female", city: "Zagatala", email: "gulnar.q@mail.com" }
// ];
// # Yaşı 30-dan kiçik olan istifadəçilərin sayını tapın
// # İstifadəçilərin yaşları ortalamasını tapın
// # Bütün istifadəçilərin e-maillərindən ibarət array yaradın
// # Qadın istifadəçilərdən ibarət array yaradın
// # Kişi istifadəçiləri yaşına görə sıralayın (artan)  

// OPTİONAL:  
// 1) Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.
// sentenceCapitalization("a short sentence")
// Expected Output:"A Short Sentence"

// 2) Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN






// 1)
for (let i = 2; i < 100; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
        console.log(i);
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        console.log(i);
    }
}

// 2)
let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands on experience and knowledge right away. 
However, overtime issues in the application arise, adaptations to changes,and new features happen.`;
let countSapce = sampleNews.split(" ").length - 1;
console.log(countSapce);


// 3) 
const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"];
let sortedList = fruits.sort((x, y) => x.length - y.length)
console.log(sortedList[sortedList.length - 1]);

// 4) 







// 5) Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

function reverseWordOrder(sentence) {

    console.log(sentence.split(" ").reverse().join(" "));
}

reverseWordOrder("Javascript öyrenmek maraqlıdı")

// 6)
const users = [
    { id: 1, name: "Orkhan Mammadov", age: 28, gender: "Male", city: "Baku", email: "orxan.m@mail.com" },
    { id: 2, name: "Leyla Aliyeva", age: 24, gender: "Female", city: "Ganja", email: "leyla.a@mail.com" },
    { id: 3, name: "Rashad Guliyev", age: 30, gender: "Male", city: "Sumqayit", email: "reshad.q@mail.com" },
    { id: 4, name: "Aytan Hasanova", age: 26, gender: "Female", city: "Shaki", email: "ayten.h@mail.com" },
    { id: 5, name: "Elvin Karimov", age: 32, gender: "Male", city: "Lankaran", email: "elvin.k@mail.com" },
    { id: 6, name: "Nigar Rahimli", age: 27, gender: "Female", city: "Mingachevir", email: "nigar.r@mail.com" },
    { id: 7, name: "Tural Abbasov", age: 29, gender: "Male", city: "Barda", email: "tural.a@mail.com" },
    { id: 8, name: "Aysel Mammadova", age: 23, gender: "Female", city: "Khachmaz", email: "aysel.m@mail.com" },
    { id: 9, name: "Murad Aliyev", age: 31, gender: "Male", city: "Shamakhi", email: "murad.a@mail.com" },
    { id: 10, name: "Gulnar Gasimova", age: 25, gender: "Female", city: "Zagatala", email: "gulnar.q@mail.com" }
];
// # Yaşı 30-dan kiçik olan istifadəçilərin sayını tapın
let usersUnder30 = 0;
users.forEach(user => {
    if (user.age < 30) {
        usersUnder30 += 1
    }

});
console.log(usersUnder30);

// # İstifadəçilərin yaşları ortalamasını tapın
let avarage = 0
users.forEach(user => {
    avarage += user.age
})
console.log(avarage / users.length);

// # Bütün istifadəçilərin e-maillərindən ibarət array yaradın
let allEmail = [];
users.forEach(user => {
    allEmail.push(user.email)
})
console.log(allEmail);

// # Qadın istifadəçilərdən ibarət array yaradın
const femaleUsers = users
    .filter(person => person.gender === "Female")
console.log(femaleUsers);





// # Kişi istifadəçiləri yaşına görə sıralayın (artan)  

const maleUsersSortedByAge = users
    .filter(person => person.gender === "Male")
    .sort((a, b) => a.age - b.age);

console.log(maleUsersSortedByAge);






// OPTİONAL:  
// 1) Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

function capitalizeFirstLetter(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
let sentence = ("salam sagol")
console.log(capitalizeFirstLetter(sentence));





// 2) Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN
function Convert(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase())
        .join(" ");
}
console.log(Convert("salam sagol"));

