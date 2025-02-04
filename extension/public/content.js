console.log("Running AWSHelper")

async function run() {

    // Get Navigation Bar
    const nav = document.querySelector('nav');

    // Get Search Bar
    const inputSearchbar = document.getElementById('awsc-concierge-input') || getElement('search', nav, 'input');

    // Get Services Button
    const btnService = nav.querySelector('button[title="Services"]');

    // Get Console Shell Button on Navbar
    const btnConsoleShell = nav.getElementById("awsc-nav-scallop-icon")

    // Side Drawer Button
    const btnDrawer = document.querySelector('button[aria-label="Open navigation drawer"]') || getElement('awsui_navigation-toggle', null, 'button');

    // SideBar
    const navDrawwer = document.querySelector('nav[aria-label="Drawer"]');
    // navDrawwer.getAttribute('hidden') == 'true';


    // // Services Popup - when 'Services Button' is clicked.
    // const servicesPopup = document.getElementById('menu--services') || document.querySelector('data-testid="awsc-nav-service-menu"');
    // const servicesList = servicesPopup.querySelectorAll('li[data-itemid]');
    // console.log(servicesList)
}

run();

/**
 * Look for an element from a text inside an attribute
 * @param {String} searchAttrText What text of the attribute to search for
 * @param {Element} parentElement which parent element to start from. 
 * @param {String} tag which element tag to look for
 * @param {String} attr which attribute to look for 
 * @returns 
 */
function getElement(searchAttrText, parentElement = null, tag = 'div', attr = "class") {
    const divs = (parentElement || document).querySelectorAll(tag);
    for (const div of divs) {
        if (div.getAttribute(attr) && div.getAttribute(attr).includes(searchAttrText)) {
            return div;
        }
    }
}
