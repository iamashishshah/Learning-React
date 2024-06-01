 /** this is the custom rendoring
     * we have to create a tag
     * actually this is havy task to do, can't we find any better solution
     * 
     */

customRender = (reactElement, container) =>{
    /**
     * const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    domElement.style.color = reactElement.props.color;
    domElement.style.fontSize = reactElement.props.fontSize;
    container.appendChild(domElement)
     */
    
    // same thing we have to do, but while adding attributes, we can change
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        // if(prop == children) continue;
        domElement.setAttribute(prop, reactElement.props.prop)
    }
    for (let prop in reactElement.props) {
        // if(prop == children) continue;
        domElement.setAttribute(prop, reactElement.props.prop)
    }
    /**
     * For Styling we have to do different
     */
    for (const styl in reactElement.styles) {
        domElement.style.styl = reactElement.styles.styl
    }
    container.appendChild(domElement)
}


// This is our custom react
const reactElement = {
    type: 'a', 
    props: {
        target: '_blank',
        href: 'https://google.com'
    },
    styles: {
        color: 'black',
        fontSize: '24px'
    },
    children: "Google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)