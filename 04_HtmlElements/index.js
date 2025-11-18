

document.addEventListener("DOMContentLoaded", () => {
    pageLoaded();
});

function pageLoaded() {
    const num1 = document.getElementById("num1");
    const num2 = document.querySelector('#num2');

    const calcBtn = document.getElementById("calcBtn");
    calcBtn.addEventListener('click', () => {
        calculate();
    });

    const result = document.getElementById("result");
}

function calculate() {

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    if (n1 && n2) {
        result.value = n1 + n2;
    }
}



const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    print("Button 2 clicked | " + btn2.id + " " + btn2.innerText);
});


// btn2.addEventListener("click", func1);

// function func1()
// {

// }


// document.getElementById("calcBtn").addEventListener("click", () => {
//     const n1 = Number(document.getElementById("num1").value);
//     const n2 = Number(document.getElementById("num2").value);
//     document.getElementById("result").value = n1 + n2;
// });


// =============================================
// HELPER: PRINT TO TEXTAREA
// =============================================
function print(msg) {
    const ta = document.getElementById("output");
    if (ta) ta.value = msg;
    else console.log(msg);
}

// =============================================
// STEP 1: JS NATIVE TYPES, USEFUL TYPES & OPERATIONS
// =============================================
function demoNative() {
    let out = "=== STEP 1: NATIVE TYPES ===\n";

    // String
    const s = "Hello World";
    out += "\n[String] s = " + s;
    out += "\nLength: " + s.length;
    out += "\nUpper: " + s.toUpperCase();

    // Number
    const n = 42;
    out += "\n\n[Number] n = " + n;

    // Boolean
    const b = true;
    out += "\n\n[Boolean] b = " + b;

    // Date
    const d = new Date();
    out += "\n\n[Date] now = " + d.toISOString();

    // Array
    const arr = [1, 2, 3, 4];
    out += "\n\n[Array] arr = [" + arr.join(", ") + "]";
    out += "\nPush 5 → " + (arr.push(5), arr.join(", "));
    out += "\nMap x2 → " + arr.map(x => x * 2).join(", ");

    // Functions as variables
    const add = function (a, b) { return a + b; };
    out += "\n\n[Function as variable] add(3,4) = " + add(3, 4);

    // Callback
    function calc(a, b, fn) { return fn(a, b); }
    const result = calc(10, 20, (x, y) => x + y);
    out += "\n[Callback] calc(10,20, x+y ) = " + result;

    print(out);
}


// =============================================
// STEP 2: BASIC OBJECTS
// =============================================
function demoObjects() {
    const user = {
        name: "Dana",
        age: 30,
        city: "Haifa",
        greet() { return "Hello " + this.name; }
    };

    let out = "=== STEP 2: OBJECTS ===\n";
    out += "user.name = " + user.name + "\n";
    out += "user.age = " + user.age + "\n";
    out += "user.city = " + user.city + "\n";
    out += "user.greet() = " + user.greet() + "\n";

    out += "\nObject.keys: " + JSON.stringify(Object.keys(user));
    out += "\nObject.values: " + JSON.stringify(Object.values(user));

    print(out);
}


// =============================================
// STEP 3: OBJECTS + ARRAY + DESTRUCTURING
// =============================================
function demoObjArrayDestruct() {
    let out = "=== STEP 3: OBJECT + ARRAY + DESTRUCTURING ===\n";

    const person = {
        name: "Avi",
        job: "Developer",
        hobbies: ["music", "games", "sport"]
    };

    out += "\nPerson: " + JSON.stringify(person);

    // Object destructuring
    const { name, job, hobbies } = person;
    out += `\n\nDestruct: name=${name}, job=${job}`;

    // Array destructuring
    const [h1, h2, ...other] = hobbies;
    out += `\nFirst two hobbies: ${h1}, ${h2}`;
    out += `\nOther hobbies: [${other.join(", ")}]`;

    // Spread
    const extended = [...hobbies, "coding"];
    out += "\nSpread hobbies: [" + extended.join(", ") + "]";

    print(out);
}


// =============================================
// STEP 4: CLASSES
// =============================================
function demoClasses() {
    let out = "=== STEP 4: CLASSES ===\n";

    class Song {
        constructor(title, artist) {
            this.title = title;
            this.artist = artist;
        }
        info() { return `"${this.title}" by ${this.artist}`; }
    }

    class Playlist {
        constructor(name) {
            this.name = name;
            this.songs = [];
        }
        add(song) { this.songs.push(song); }
    }

    const s1 = new Song("Imagine", "John Lennon");
    const s2 = new Song("Halo", "Beyonce");

    const pl = new Playlist("Favorites");
    pl.add(s1);
    pl.add(s2);

    out += "Playlist name = " + pl.name + "\n";
    out += "Songs count = " + pl.songs.length + "\n";
    out += "Song 1: " + s1.info() + "\n";
    out += "Song 2: " + s2.info() + "\n";

    print(out);
}
