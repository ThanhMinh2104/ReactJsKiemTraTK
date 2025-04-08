import { useState, useEffect } from "react";

export default function Content() {
    const [overviews, setOverView] = useState([]);
    const [datas, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);

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
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
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
    };

    return (
        <div className="content">
            {/* Overview */}
            <div className="overview">
                <h1>Overview</h1>
                <ul>
                    {overviews.map((overview) => (
                        <li key={overview.id} className="overview-item">
                            <div className="overview-item_data">
                                <h4 className="overview_item-title">{overview.title}</h4>
                                <h1 className="overview_item-cost">${overview.value}</h1>
                                <p className="overview_item-perchange">{overview.changePercent} period of change</p>
                            </div>
                            <div
                                className="overview-item_icon"
                                dangerouslySetInnerHTML={{ __html: overview.icon }}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Detail Report */}
            <div className="detailReport">
                <div className="detailReport_header">
                    <span>Detail Report</span>
                    <div className="detailReport_io">
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>

                <div className="detailReport_table">
                    <table>
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
                                        <img src={data.img} className="customer_avatar" alt="" />
                                        {data.name}
                                    </td>
                                    <td>{data.company}</td>
                                    <td>{data.orderValue}</td>
                                    <td>{data.orderDate}</td>
                                    <td className="row_status">{data.status}</td>
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
                        {[1, 2, 3, 4, 5].map((num) => <li key={num}>{num}</li>)}
                    </ul>
                </div>
            </div>

            {/* Modal */}
            {showModal && editData && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Customer</h2>
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
                            <input name="orderDate" value={editData.orderDate} onChange={handleChange} />
                        </label>
                        <label>
                            Status:
                            <input name="status" value={editData.status} onChange={handleChange} />
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
