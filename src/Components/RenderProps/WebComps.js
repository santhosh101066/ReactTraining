import React from 'react';

function WebComps(props) {

    return (
        <div>
            <x-opener url='react' name='react'></x-opener>
        </div>
    );
}

export default WebComps;

class UrlEncode extends HTMLElement {
    onclick = (e) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Open in this tab')) {

        }
        else {
            e.preventDefault()
        }


    }
    connectedCallback() {
        const aTag = document.createElement('a')
        const url = this.getAttribute('url')
        this.attachShadow({ mode: 'closed' }).appendChild(aTag)
        aTag.href = 'https://www.google.com/search?q=' + url
        aTag.innerText = this.getAttribute('name')
    }
}
customElements.define('x-opener', UrlEncode)