// const projects = [
//     {
//         "title": "TEQST",
//         "description": "An app to effectively collect speech data.",
//         "image": "res/img/teqst.png",
//         "github": "https://github.com/TEQST"
//     },
//     {
//         "title": "My Bachelor Thesis",
//         "description": "AI-based phoneme classification and alignment of voice recordings.",
//         "image": "res/img/bachelor_thesis.png",
//         "github": "https://github.com/lischilpp/BachelorThesis-PhonemeRecognitionAlignment"
//     },
//     {
//         "title": "Chat Application",
//         "description": "description.",
//         "image": "https://placehold.co/300",
//         "github": "https://github.com/username/chat-app"
//     }
// ];

// function renderPortfolio(projects) {
//     const projectList = document.getElementById('projects-list');
//     projects.forEach(project => {
//         // Create container for the project
//         const projectArticle = document.createElement('article');
//         projectArticle.className = 'project';

//         // Add title
//         const title = document.createElement('h3');
//         title.textContent = project.title;
//         projectArticle.appendChild(title);

//         // Add description
//         const description = document.createElement('p');
//         description.textContent = project.description;
//         projectArticle.appendChild(description);

//         // Add image
//         const img = document.createElement('img');
//         img.src = project.image;
//         img.alt = project.title;
//         projectArticle.appendChild(img);

//         // Add GitHub link if available
//         if (project.github) {
//             const githubLink = document.createElement('a');
//             githubLink.href = project.github;
//             githubLink.textContent = "View on GitHub";
//             githubLink.target = "_blank";
//             projectArticle.appendChild(githubLink);
//         }

//         // Append the project to the projects list
//         projectList.appendChild(projectArticle);
//     });
// }

// // Call the renderPortfolio function
// renderPortfolio(projects);