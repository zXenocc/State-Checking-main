// For Loop to display numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While Loop to receive input from the user until they type "exit"
function checkNumber() {
    let userInput = ""; // กำหนดค่าเริ่มต้นให้ไม่เท่ากับ "exit"
    while (userInput.toLowerCase() !== "exit") { // เผื่อกรณีผู้ใช้พิมพ์ EXIT, Exit ฯลฯ
        userInput = prompt("Type something (type 'exit' to quit):");
        if (userInput && userInput.toLowerCase() !== "exit") { // ตรวจสอบว่าไม่ได้กด cancel หรือปล่อยว่าง
            console.log(`You typed: ${userInput}`);
        }

        if (!isNaN(userInput)) {
            let number = parseInt(userInput); // แปลงเป็นตัวเลข
            if (number % 2 === 0) {
                console.log(`${number} is an even number.`);
            } else {
                console.log(`${number} is an odd number.`);
            }
        } else {
            console.log("Please enter a valid number.");
        }
    }
    console.log("Goodbye!");
}
