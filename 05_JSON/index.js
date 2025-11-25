
let userObj = {
    username: "Nash",
    grade: 90,
    password: "pass123",
    isConnected: true,
    adderss: {
        country: "israel",
        city: "shmona",
        street: "ben 10"
    },
    allGrades: [{ csharp: 90 }, { cpp: 70 }, 80, 90, 95, 100]
}

let newGrade = userObj.grade + 10;
userObj.grade += 10;
userObj.id = 1000;

let userObj2 = userObj;
userObj.grade += 10;
userObj2.grade = 0;
let grade1 = userObj.grade;

userObj.adderss.street = "empty";
userObj["adderss"]["street"] = "";

let arr = [userObj, {
    username: "Nash",
    grade: 90,
    password: "pass123",
    isConnected: true,
    adderss: {
        country: "israel",
        city: "shmona",
        street: "ben 10"
    },
    allGrades: [{ csharp: 90 }, { cpp: 70 }, 80, 90, 95, 100]
}]

arr[0].allGrades[1] = { CPP: 80 };
arr[1].avg = 99;

let user2 = arr[1];
user2.password = "123456";
