

function Header() {
    return(
        <header>
            <nav className="nav">
                        <img src="./react-logo.jpg" alt="React Logo" height="80px" width="120px" />
                        <h3 className="nav-title">ReactFacts</h3>
                        <h4 className="nav-bars">React Course - Project 1</h4>
                </nav>
            </header>
        )
}

function Footer() {
    return (
        <footer className="Footer">
            <small>© 2022 Web3Vicky development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return(
        <div className="Main">
            <h1 className="MainContent-title">Fun facts about React</h1>
            <ul className="MainContent-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(page(), document.getElementById("root"))

