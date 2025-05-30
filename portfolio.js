
function sendmail(){
    let obj={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
}

const serviceid ="service_mzosifp";
const templateid="template_z4c1nej";

emailjs.send(serviceid,templateid,obj)
.then(
    res =>{
            ["name", "email", "message"].forEach(id => {
                document.getElementById(id).value = "";
            });
            alert("Message sent successfully");
        })
        .catch(err => console.log(err));
}


  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Reset when leaving view
        }
      });
    }, {
      threshold: 0.2
    });

    document.querySelectorAll('.from-left, .from-right').forEach(el => {
      observer.observe(el);
    });
  });

  document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.getElementById('side').classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
  










