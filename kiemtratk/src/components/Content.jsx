import { useState, useEffect } from "react";
import square from "/imgs/Squares four 1.png"
import importIcon from "/imgs/Download.png"
import exportIcon from "/imgs/Move up.png"

export default function Content() {
    const [overviews, setOverView] = useState([]);
    const [datas, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [isAddMode, setIsAddMode] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/overview")
            .then(resp => resp.json())
            .then(datas => setOverView(datas));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/table")
            .then(resp => resp.json())
            .then(data => setData(data));
    }, []);

    const handleEditClick = (data) => {
        setEditData(data);
        setIsAddMode(false);
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file" && files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditData(prev => ({
                    ...prev,
                    img: reader.result
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setEditData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSave = () => {
        if (isAddMode) {
            fetch("http://localhost:3000/table", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editData)
            })
            .then(res => res.json())
            .then(newItem => {
                setData(prev => [...prev, newItem]);
                setShowModal(false);
                setIsAddMode(false);
            })
            .catch(err => console.error("Failed to add:", err));
        } else {
            fetch(`http://localhost:3000/table/${editData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editData)
            })
            .then(res => res.json())
            .then(updatedItem => {
                setData(prev =>
                    prev.map(item =>
                        item.id === updatedItem.id ? updatedItem : item
                    )
                );
                setShowModal(false);
            })
            .catch(err => console.error("Failed to update:", err));
        }
    };

    return (
        <div className="content">
            {/* Overview */}
            <div className="overview">
                <div className="overview_title">
                    <img src={square} alt="" />
                    <span>Overview</span>
                </div>
                <ul>
                    {overviews.map((overview, index) => (
                        <li key={overview.id} className={"overview-item" + " overview"+(index + 1)}>
                            <div className="overview-item_data">
                                <h4 className="overview_item-title">{overview.title}</h4>
                                <h1 className="overview_item-cost">${overview.value}</h1>
                                <div className="overview_item-perchange-container">
                                    <span className="overview_item-perchange">{overview.changePercent}</span>
                                    period of change
                                </div>
                                
                            </div>
                            <div
                                className={"overview-item_icon overview" + index}
                                dangerouslySetInnerHTML={{ __html: overview.icon }}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Detail Report */}
            <div className="detailReport">
                <div className="detailReport_header">
                    <div className="overview_title">
                        <img src={square} alt="" />
                        <span>Detail Report</span>
                    </div>

                    <div className="detailReport_io">
                        <button onClick={() => {
                            setEditData({
                                name: "",
                                company: "",
                                orderValue: "",
                                orderDate: "",
                                status: "",
                                img: ""
                            });
                            setIsAddMode(true);
                            setShowModal(true);
                        }}>
                            <img src={importIcon} alt="" />
                            Import
                        </button>
                        <button><img src={exportIcon} alt="" />Export</button>
                    </div>
                </div>

                <div className="detailReport_table">
                    <table style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
                        <thead>
                            <tr>
                                <th className="customer_check"><input type="checkbox" /></th>
                                <th>CUSTOMER NAME</th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th className="colum_status">STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data) => (
                                <tr key={data.id}>
                                    <td className="customer_check"><input type="checkbox" /></td>
                                    <td className="customer_name">
                                        {data.img && <img src={data.img} className="customer_avatar" alt="" />}
                                        {data.name}
                                    </td>
                                    <td>{data.company}</td>
                                    <td>{data.orderValue}</td>
                                    <td>{data.orderDate}</td>
                                    <td className="row_status"><span className = {data.status === "New"?"new" : 
                                        data.status === "In-progress"?"progress" :
                                        data.status === "Completed"?"completed" :""
                                    }>{data.status}</span></td>
                                    <td className="customer_edit">
                                        <i className="fa-solid fa-pen" onClick={() => handleEditClick(data)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="detailReport_footer">
                    <div className="detailReport_result">63 results</div>
                    <ul className="detailReport_changPage">
                        <li>&larr;</li>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>...</li>
                        <li>10</li>
                        <li>11</li>
                        <li>&rarr;</li>
                    </ul>
                </div>
            </div>

            {/* Modal */}
            {showModal && editData && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{isAddMode ? "Add New Customer" : "Edit Customer"}</h2>

                        <label>
                            Name:
                            <input name="name" value={editData.name} onChange={handleChange} />
                        </label>

                        <label>
                            Company:
                            <input name="company" value={editData.company} onChange={handleChange} />
                        </label>

                        <label>
                            Order Value:
                            <input name="orderValue" value={editData.orderValue} onChange={handleChange} />
                        </label>

                        <label>
                            Order Date:
                            <input type="date" name="orderDate" value={editData.orderDate} onChange={handleChange} />
                        </label>

                        <label>
                            Status:
                            <br />
                            <select name="status" value={editData.status} onChange={handleChange} className="form-control">
                                <option value="">Select status</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </label>

                        <label>
                        <br />
                            Avatar:
                            <input type="file" accept="image/*" onChange={handleChange} />
                        </label>

                        <div className="modal-buttons">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
