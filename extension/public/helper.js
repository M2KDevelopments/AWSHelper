/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/**
 * Look for an element from a text inside an att ribute
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
