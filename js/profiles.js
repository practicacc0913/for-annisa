window.onload = () => {
    loadProfiles();
}

// Analytics (optional)
const measurement_id = `G-8LLQ3459GG`;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', measurement_id);

function loadProfiles() {
    // personalities is already loaded from test.js, so we just use it!
    const keys = Object.keys(personalities);
    const gallery = document.getElementById("gallery");

    if (!gallery) return; // Safety check

    keys.forEach(key => {
        const person = personalities[key];
        
        const profile_container = document.createElement("div");
        profile_container.className = "profile";

        const profile_img = document.createElement("img");
        profile_img.src = person.image; 
        profile_img.alt = person.name;

        const profile_txt = document.createElement("p");
        profile_txt.innerText = person.name;
        profile_txt.className = "caption";

        profile_container.appendChild(profile_img);
        profile_container.appendChild(profile_txt);
        gallery.appendChild(profile_container);
    });
}
