// Send Email Js Function
function sendEmail() {
  let emailInput = document.querySelector(".email-input").value;
  Email.send({
    SecureToken: "4a1a26e2-36a8-41ef-b409-308c841b9c0a",
    Host: "smtp.gmail.com",
    Username: "mezdunaame@gmail.com",
    Password: "bvxtcmaxcppazico",
    To: "mezdunaame@gmail.com",
    From: "mezdunaame@gmail.com",
    Subject: `${emailInput} has Subscribed To Your Website`,
    Body: `This Email: ${emailInput} Has Subscribed To Your Website`,
    // Attachments: [
    //   {
    //     name: "smtpjs.png",
    //     path:
    //       "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
    //   },
    // ],
  }).then((message) =>
    alert(` ${emailInput} You Have successfully Subscribed To Newsletter `)
  );
  document.querySelector(".email-input").value = "";
}

//sticky navigation
window.addEventListener("scroll", function () {
  let header = document.querySelector("#main-nav");
  if (window.scrollY > 150) {
    header.style.opacity = 0.8;
  } else {
    header.style.opacity = 1;
  }
  header.classList.toggle("sticky", window.scrollY > 0);
});

// //   sicky menue= background
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 150) {
//     document.querySelector("#navbar").style.opacity = 0.9;
//   } else {
//     document.querySelector("#navbar").style.opacity = 1;
//   }
// });
