import Header from "./Header"
import Footer from "./Footer"


function MainContent() {
    return(
        <div>
            <h1>Fun facts about React</h1>
            <ul className="MainContent">
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



