import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function GridLayout() {
    return <div className="container">
        <Sidebar />

        <Header />

        <Content />

        <Footer />
    </div>
}