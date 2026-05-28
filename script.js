let maindiv = document.querySelector("#main");
let cards = document.querySelectorAll(".mycls");
let data_ofUser = document.querySelector("#detail_information article");
let showInfo0 = document.querySelector("#name");
let showInfo1 = document.querySelector("#address");
let showInfo2 = document.querySelector("#profession");
let showInfo3 = document.querySelector("#lifestyle");
let main_user_info = document.querySelector("#user_info");
let btn = document.querySelector("#btn");


let user_info = {
    name: "<b>Oliver Smith</b>",
    address: "24 Maple Street, London, EC1A 1BB, UK<br><br>",
    profession: "<b>Profession:</b> Investment Banker<br><br>",
    lifestyle: "<b>Lifestyle:</b> Oliver thrives in the fast-paced corporate environment of London’s financial district. His weekdays are packed with market analysis, client meetings, and high-stakes decisions. To unwind, he enjoys upscale dining in Soho, catching Premier League football matches, and networking at historic pubs on weekends."
}

let user_info2 = {
    name: "<b>Emma Watson</b>",
    address: "742 Evergreen Terrace, Springfield, OR 97477, USA<br><br>",
    profession: "<b>Profession:</b> Environmental Engineer<br><br>",
    lifestyle: "<b>Lifestyle:</b> Living in the lush Pacific Northwest, Emma practices exactly what she preaches. Her lifestyle is heavily anchored in sustainability, minimalism, and low-impact living. She commutes primarily by e-bike and maintains a zero-waste household. Emma’s free time is spent entirely outdoors—whether she is backcountry hiking through national forests or volunteering her engineering expertise to clear local watersheds. Her evenings are slower; she finds grounding by working at a local pottery studio, turning raw clay into functional kitchenware. She prioritizes investing her income into ethical index funds and high-quality outdoor gear."
}

let user_info3 = {
    name: "<b>Lucas Müller</b>",
    address: "Hauptstraße 12, 10115 Berlin, Germany<br><br>",
    profession: "<b>Profession:</b> Software Engineer<br><br>",
    lifestyle: "<b>Lifestyle:</b> Lucas embodies the classic, effortlessly cool Berlin tech lifestyle. He works on a flexible, hybrid schedule, often coding from local specialty coffee shops. Because his job requires intense, sedentary cognitive focus, his lifestyle outside of work is highly physical and deeply social. Three nights a week, he pushes his physical limits at a local bouldering gym. Lucas is also a passionate hobbyist who has converted his spare room into a mini-brewery where he crafts micro-batch IPAs. His weekends are reserved for complex tabletop strategy games, hosting vibrant dinner-and-board-game nights for his close-knit circle of friends."
}

let user_info4 = {
    name: "<b>Chloe Dubois</b>",
    address: "15 Rue de Rivoli, 75001 Paris, France<br><br>",
    profession: "<b>Profession:</b> Graphic Designer & Illustrator<br><br>",
    lifestyle: "<b>Lifestyle:</b> Chloe lives a quintessentially Parisian lifestyle, where art and daily existence are entirely intertwined. Working as a freelance designer, her schedule is completely her own, allowing her to live as a modern-day flâneur—someone who wanders the city simply to experience it. Her days are spent cafe-hopping along the Seine, using the bustling crowds as inspiration for her illustrations. She lives a sensory-rich life on a modest budget, preferring fresh market produce, independent cinema screenings, and late nights spent oil painting in her sunlit studio apartment over material luxuries."
}

let user_info5 = {
    name: "<b>Liam Johnson</b>",
    address: "456 Oak Avenue, Toronto, ON M5V 2T6, Canada<br><br>",
    profession: "<b>Profession:</b> Cybersecurity Specialist<br><br>",
    lifestyle: "<b>Lifestyle:</b> Liam lives a life of sharp contrasts. By day, he operates in the sterile, high-security digital ether, protecting corporate networks from complex cyber threats. By night and weekend, his lifestyle shifts to the tactile, physical, and comforting. He is deeply embedded in Toronto’s local sports culture, playing competitive ice hockey in a community league. At home, he satisfies his tech cravings by meticulously coding and rigging his entire apartment into a fully automated smart-home ecosystem. To unwind completely, he takes up culinary arts, spending hours slow-cooking intricate, multi-course Italian meals for his family."
}

let user_info6 = {
    name: "<b>Sofia Rossi</b>",
    address: "Via Roma 42, 00184 Rome, Italy<br><br>",
    profession: "<b>Profession:</b> Architect<br><br>",
    lifestyle: "<b>Lifestyle:</b> Sofia’s lifestyle is deeply romantic, intellectual, and rooted in Italian heritage. Living and working in Rome, she views the city as a living museum, which heavily influences how she spends her time. Her lifestyle centers around preservation and classical beauty; she spends her Saturdays scouting local flea markets for dilapidated antique furniture, which she meticulously restores by hand using traditional techniques. Her afternoons are often spent sitting on the steps of ancient piazzas, sketching historic cornices and columns. She avoids the digital rush entirely, preferring to wind down with physical historical fiction novels and a glass of local wine."
}

let user_info7 = {
    name: "<b>William Brown</b>",
    address: "12 George Street, Sydney, NSW 2000, Australia<br><br>",
    profession: "<b>Profession:</b> Marine Biologist<br><br>",
    lifestyle: "<b>Lifestyle:</b> William enjoys a quintessential sun-drenched, active Australian lifestyle. For him, the boundary between his career and his private life is almost nonexistent; the ocean is both his office and his playground. He wakes up at 5:00 AM every morning to catch the best surf before heading into the lab or onto a research vessel. His lifestyle is heavily defined by adventure and wildlife tracking. Armed with specialized underwater housing for his camera, he spends his weekends scuba diving and shooting breathtaking wildlife photography. His social life revolves around beachside barbecues, coastal conservation meetups, and open-air active living."
}

let user_info8 = {
    name: "<b>Amelie Novak</b>",
    address: "Wenceslas Square 18, 110 00 Prague, Czech Republic<br><br>",
    profession: "<b>Profession:</b> Content Marketing Manager<br><br>",
    lifestyle: "<b>Lifestyle:</b> Amelie's lifestyle is fast-paced, highly expressive, and culturally charged. Managing content strategy for major brands means she is always plugged into current trends, a trait that spills over into her love for creative writing. Her lifestyle is highly nomadic; she uses Prague’s central location in Europe to take spontaneous weekend train trips, backpacking through small Eastern European towns to discover hidden historical gems and folklore. When she is at home, her lifestyle is acoustic and intimate. She is currently teaching herself guitar and regularly hosts small gatherings where friends share poetry and acoustic music."
}

let user_info9 = {
    name: "<b>Yuki Tanaka</b>",
    address: "3 Chome-1-1 Shibakoen, Minato City, Tokyo 105-0011, Japan<br><br>",
    profession: "<b>Profession:</b> Data Scientist<br><br>",
    lifestyle: "<b>Lifestyle:</b> Yuki lives a deeply analytical yet adrenaline-fueled lifestyle in Tokyo. By day, he trains deep learning models, but his real passion emerges at night as an urban night-photographer, chasing the neon aesthetic of Shinjuku and Akihabara. Instead of traditional martial arts, Yuki is an avid indoor skydiving enthusiast and spends his mid-weeks practicing bodyflight geometry. He treats his kitchen like a chemistry lab, experimenting with molecular gastronomy to create futuristic versions of classic ramen. His weekends are spent off-the-grid, driving his converted camper van into the mountains near Mount Fuji, where he uses satellite data to track and stargaze under the clearest night skies."
}
let all_user_info = [user_info, user_info2, user_info3, user_info4, user_info5, user_info6, user_info7, user_info8, user_info9]
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        showInfo0.innerHTML = all_user_info[i].name;
        showInfo1.innerHTML = all_user_info[i].address;
        showInfo2.innerHTML = all_user_info[i].profession;
        showInfo3.innerHTML = all_user_info[i].lifestyle;
        maindiv.style.display = "none";
        main_user_info.style.display = "flex";
        btn.style.display = "flex";
    });
}

btn.addEventListener("click",
    () => {
        main_user_info.style.display = "none";
        maindiv.style.display = "flex"
        btn.style.display = "none";
    }
)