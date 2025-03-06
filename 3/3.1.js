// การจัดการ Event ด้วย JavaScript

document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});

// ฟังก์ชันสุ่มสีแบบสุ่ม
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}