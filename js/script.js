let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

/*
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});
*/

function copyLink() {
    // โค้ดที่นี่ใช้สำหรับคัดลอกลิงก์ไปยังคลิปบอร์ด
    // ตัวอย่างเช่น:
    var linkToCopy = "https://facebook.com"; // ลิงก์ที่ต้องการคัดลอก
    navigator.clipboard.writeText(linkToCopy)
        .then(function() {
            alert("ลิงก์ถูกคัดลอกไปยังคลิปบอร์ดแล้ว");
            // คุณสามารถเพิ่มโค้ดเพื่อแจ้งเตือนผู้ใช้หรือปรับแต่งตามต้องการได้
        })
        .catch(function(error) {
            console.error("การคัดลอกลิงก์ผิดพลาด: ", error);
        });
}