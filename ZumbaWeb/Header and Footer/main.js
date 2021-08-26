class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../header and footer/header-style.css">
        <header id="navbar">
            <a href="../home-page/home-page.html">
                <img class="logo" src="../header and footer/pictures/zumbaLogo3.png" alt="logo">
            </a>
            <nav>
                <ul> <i class="nav__links">
                    <li><a href="../home-page/home-page.html">Home</a></li>
                    <li><a href="../Class-page/Adult.html">Class</a></li>
                    <li><a href="../Order-page/order-multi-form.html">Concession</a></li>
                    <li><a href="../MyAccount/MyAccountPage.html">MyAccount</a></li>
                    <li><a href="../SignUp-page/SignUp.html">Sign-Up</a></li>
                </ul>
            </nav>
            
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
        <div class="item">@2021 Zumba Club. All rights reserved.</div>
        <div class="item-center">
          <br><br><br>
          Best Technical Student(BTS)
        </div>
        <div class="item">
          <div id="social">
            <a href="https://www.facebook.com/zumbawithdavey/?ref=page_internal"><img src="../header and footer/pictures/FacebookLogo3.png" alt=""></a>
          </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-footer', MyFooter)