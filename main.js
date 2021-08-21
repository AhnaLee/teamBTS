class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../header and footer/header-style.css">
        <header id="navbar">
            <a href="../home-page/home-page.html">
                <img class="logo" src="../header and footer/pictures/Web Dev Logo - final.png" alt="logo">
            </a>
            <nav>
                <ul> <i class="nav__links">
                    <li><a href="../Menu-page/menu-coffee.html">Menu</a></li>
                    <li><a href="../Order-page/order-multi-form.html">Order</a></li>
                    <li><a href="../About-Us/AboutUsPage.html">About Us</a></li>
                </ul>
            </nav>
            <a class="cta" href="../Promo-page/promo-page.html"><button>Promo</button></a>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../header and footer/footer-style.css">
        <div class="footer">
        <div class="item">@2021 Coffee and Food. All rights reserved.</div>
        <div class="item-center">
          <br><br><br>
          ©Sungjoo-Hama-Felix (SHF)
        </div>
        <div class="item">
          <div id="social">
            <img src="../header and footer/pictures/facebook.svg" alt="">
          </div>
          <div id="social">
            <img src="../header and footer/pictures/twitter.svg" alt="">
          </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-footer', MyFooter)