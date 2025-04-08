import findIcon from "/imgs/Search.png"
import ringIcon from "/imgs/Bell 1.png"
import quesIcon from "/imgs/Question 1.png"
import ava from "/imgs/Avatar (5).png"
export default function Header() {
    return (
        <div className="header">
            <span className="header_title">Dashboard</span>
            <div className="header_rightbar">
                <div className="header_searchBar">
                    <img className="header_iconSearch" src={findIcon} alt="" />
                    <input type="text" name="" id="" className="header_searchbar" placeholder="Search..." />
                </div>

                <img src={ringIcon} alt="" className="header_nofication" />
                <img src={quesIcon} alt="" className="header_questions" />
                <img src={ava} alt="" className="header_avatar" />
            </div>
        </div>
    )
}