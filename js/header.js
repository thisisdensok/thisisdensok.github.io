const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #1c1c84;
    }

    .header-contact .header-svg-icon {
      visibility: hidden;
      fill: blue;
    }

    .header-contact:hover .header-svg-icon {
      visibility: visible;
      fill: red;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
        <div class="header-left-menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="project.html">Project</a></li>
          </ul>
        </div>
        <div class="header-right-menu">
          <ul>
            <li>
              <a class="header-contact" target="_blank" href="https://www.densok.com/contact/">Contact
                <svg class="header-svg-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
                  <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
