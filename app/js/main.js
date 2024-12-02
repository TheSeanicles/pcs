// MAIN.JS
function formatPage() {
    const header = document.getElementById("header");    
    const nav = document.getElementById("nav");
    const canvas = document.getElementById("canvas");
    const footer = document .getElementById("footer");
    
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    const navWidth = Math.floor(w * 0.2);
    const navHeight = Math.floor(h * 0.8) - header.offsetHeight;
    
    nav.setAttribute("style", `width: ${navWidth}px; height: ${navHeight}px;`);

    const canvasWidth = w - nav.offsetWidth;
    const canvasHeight = Math.floor(h * 0.8) - header.offsetHeight;

    canvas.setAttribute("style", `width: ${canvasWidth}px; height: ${canvasHeight}px;`);

    const footerWidth = w;
    const footerHeight = Math.floor(h * 0.2) ;

    footer.setAttribute("style", `width: ${footerWidth}px; height: ${footerHeight}px;`);

    new ResizeObserver(reformatCanvas).observe(nav);
}

function reformatCanvas() {
    const header = document.getElementById("header");    
    const nav = document.getElementById("nav");
    const canvas = document.getElementById("canvas");
    const footer = document .getElementById("footer");
    
    const w = window.innerWidth;
    const h = window.innerHeight;

    const canvasWidth = w - nav.offsetWidth;
    const canvasHeight = Math.floor(h * 0.8) - header.offsetHeight;

    canvas.setAttribute("style", `width: ${canvasWidth}px; height: ${canvasHeight}px;`);
}



function getNav() {
    const navTemplateDataString = `{"nodes": [{"name": "node1","containers": ["LXC 1", "LXC 2", "LXC 3", "LXC 4", "LXC 5", "LXC 6"]}, {"name": "node2","containers": ["LXC 1", "LXC 2", "LXC 3", "LXC 4"]}]}`;
    const navTemplateDataJSON = JSON.parse(navTemplateDataString);

    const nav = document.getElementById("nav");

    for (let i = 0; i < navTemplateDataJSON.nodes.length; i++) {
        const node = navTemplateDataJSON.nodes[i];
        const nodeEntry = document.createElement("div");
        nodeEntry.innerText = node.name;
        nodeEntry.id = node.name;
        nodeEntry.className = "node";
        for (let j = 0; j < node.containers.length; j++) {
            const navEntry = document.createElement("button");
            navEntry.textContent = node.containers[j];
            navEntry.addEventListener("click", () => {
                alert(node.name + ": " + node.containers[j])
            });
            nodeEntry.appendChild(navEntry);
        }
        nav.appendChild(nodeEntry);
    }
}

formatPage();
getNav();