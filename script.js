document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("resumeModal");
    var btn = document.getElementById("viewResume");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});


document.addEventListener('DOMContentLoaded', function () {
    const skillsList = document.querySelectorAll('.skills-list li');
    const skillDetail = document.querySelector('.skill-detail');

    skillsList.forEach(skill => {
        skill.addEventListener('click', function () {
            const detailText = this.getAttribute('data-detail');
            skillDetail.textContent = detailText;
            skillDetail.classList.toggle('active');
        });

        skill.addEventListener('mouseleave', function () {
            skillDetail.classList.remove('active');
        });
    });
});
