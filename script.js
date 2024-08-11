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
    const blogContainer = document.getElementById('blog-container');
    const repoUrl = 'https://api.github.com/repos/Preet-Govind/Preet-Govind.github.io/contents/blogs';

    fetch(repoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Filter out only .html files
            const htmlFiles = data.filter(file => file.type === 'file' && file.name.endsWith('.html'));

            // Sort files by modification date in descending order
            htmlFiles.sort((a, b) => new Date(b.commit.committer.date) - new Date(a.commit.committer.date));

            // Take only the 4 most recent files
            const recentFiles = htmlFiles.slice(0, 4);

            // Process and display the blog files
            recentFiles.forEach(file => {
                const blogCard = document.createElement('div');
                blogCard.classList.add('blog-card');
                
                blogCard.innerHTML = `
                    <div class="blog-content">
                        <h3>${file.name.replace('.html', '').replace(/-/g, ' ')}</h3>
                        <a href="blogs/${file.name}" target="_blank">Read more</a>
                    </div>
                `;

                blogContainer.appendChild(blogCard);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            blogContainer.innerHTML = '<p>Unable to load blogs at this time.</p>';
        });
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
