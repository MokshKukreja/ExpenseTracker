// import React, { useEffect, useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'; // Import the Navbar component

// function Home() {
//     const [transactions, setTransactions] = useState([]);
//     const [description, setDescription] = useState("");
//     const [amount, setAmount] = useState("");
//     const [userName, setUserName] = useState("");


//     const income = transactions
//         .filter((transaction) => transaction.amount > 0)
//         .reduce((total, transaction) => total + transaction.amount, 0);

//     const expense = transactions
//         .filter((transaction) => transaction.amount < 0)
//         .reduce((total, transaction) => total + transaction.amount, 0);

//     const balance = income + expense;

//     const navigate = useNavigate();

//     const getTransactions = async () => {
//         try {
//             const response = await fetch(`http://localhost:8000/transactions`,{
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization':localStorage.getItem( "token" )
//                 },
//             });
//             const json = await response.json();
            
//             if (Array.isArray(json)) {
//                 setTransactions(json);
//             } else {
//                 console.error("Received non-array data for transactions:", json);
//             }
//         } catch (error) {
//             console.error("Error fetching transactions:", error);
//         }
//     };
    
//     const addTransactions = async () => {
//         try {
//             const response = await fetch(`http://localhost:8000/transactions`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization':localStorage.getItem( "token" )
//                 },
//                 body: JSON.stringify({ description, amount })
//             });
//             const transaction = await response.json();
//             setTransactions([...transactions, transaction]);
//         } catch (error) {
//             console.error("Error adding transaction:", error);
//         }
//     };

//     const deleteTransactions = async (id) => {
//         try {
//             await fetch(`http://localhost:8000/transactions/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization':localStorage.getItem( "token" )
//                 }
//             });
//             const updatedTransactions = transactions.filter(transaction => transaction._id !== id);
//             setTransactions(updatedTransactions);
//         } catch (error) {
//             console.error("Error deleting transaction:", error);
//         }
//     };
//     const fetchUserName = async () => {
//         try {
//             const response = await fetch(`http://localhost:8000/users/userinfo`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': localStorage.getItem("token")
//                 }
//             });
//             const user = await response.json();
//             console.log(user.name)
//             setUserName(user.name);
//         } catch (error) {
//             console.error("Error fetching user name:", error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await addTransactions();
//         setDescription("");
//         setAmount("");
//     };

//     const handleLogout = () => {
//         // Perform logout actions here if needed
//         navigate('/login');
//     };

//     useEffect(() => {
//         getTransactions();
//         fetchUserName();
//     }, []);

//     return (
//         <div className="d-flex flex-column" style={{ backgroundColor: "#ccc", height: "100%", width: "100%" }}>
//           <Navbar title={`${userName}'s Expense Tracker`} />
//             <div className="d-flex justify-content-center flex-grow-1">
//                 <div className="">
//                     <h1 className="py-5">Expense Tracker</h1>
//                     <div className='pb-3'>
//                         <h3>Your Balance</h3>
//                         <h4>{balance}</h4>
//                     </div>
//                     <div className="container text-center bg-white shadow-sm mb-5 ">
//                         <div className="row">
//                             <div className="col m-4 ">
//                                 Income
//                                 <div className="text-success">{income}</div>
//                             </div>
//                             <div className="col m-4 ">
//                                 Expense
//                                 <div className="text-danger">{expense * -1}</div>
//                             </div>
//                         </div>
//                     </div>
//                     <h3 className='my-3'>History</h3>
//                     <div className="container text-center" style={{ width: "300px" }}>
//                         <div className="row row-cols-1">
//                             {transactions.map((transaction, index) => (
//                                 <div className="col d-flex justify-content-between bg-white shadow-sm p-2 my-2" key={index}>
//                                     <div>{transaction.description}</div>
//                                     <div className='d-flex gap-3   '>
//                                         <div className={transaction.amount > 0 ? "text-success" : "text-danger"}>{transaction.amount}</div>
//                                         <AiOutlineClose className='pe-auto mt-1 opacity-50' onClick={() => deleteTransactions(transaction._id)} />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <h3 className='my-3'>Add new transaction</h3>
//                     <form className='mb-5 pb-5'>
//                         <div className="mb-3">
//                             <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
//                             <input type="text" className="form-control" placeholder='Enter Description..' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
//                             <input type="text" className="form-control" placeholder='Enter amount..' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
//                         </div>
//                         <button type="submit" onClick={handleSubmit} className="btn btn-primary my-4 w-100">Add transaction</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

function Home() {
    const [transactions, setTransactions] = useState([]);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [userName, setUserName] = useState("");

    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((total, transaction) => total + transaction.amount, 0);

    const expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = income + expense;

    const navigate = useNavigate();

    const getTransactions = async () => {
        try {
            const response = await fetch(`http://localhost:8000/transactions`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':localStorage.getItem( "token" )
                },
            });
            const json = await response.json();
            
            if (Array.isArray(json)) {
                setTransactions(json);
            } else {
                console.error("Received non-array data for transactions:", json);
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };
    
    const addTransactions = async () => {
        try {
            const response = await fetch(`http://localhost:8000/transactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':localStorage.getItem( "token" )
                },
                body: JSON.stringify({ description, amount })
            });
            const transaction = await response.json();
            setTransactions([...transactions, transaction]);
        } catch (error) {
            console.error("Error adding transaction:", error);
        }
    };

    const deleteTransactions = async (id) => {
        try {
            await fetch(`http://localhost:8000/transactions/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':localStorage.getItem( "token" )
                }
            });
            const updatedTransactions = transactions.filter(transaction => transaction._id !== id);
            setTransactions(updatedTransactions);
        } catch (error) {
            console.error("Error deleting transaction:", error);
        }
    };
    const fetchUserName = async () => {
        try {
            const response = await fetch(`http://localhost:8000/users/userinfo`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                }
            });
            const user = await response.json();
            console.log(user.name)
            setUserName(user.name);
        } catch (error) {
            console.error("Error fetching user name:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTransactions();
        setDescription("");
        setAmount("");
    };

    const handleLogout = () => {
        // Perform logout actions here if needed
        navigate('/login');
    };

    useEffect(() => {
        getTransactions();
        fetchUserName();
    }, []);

    return (
        <div className="home-container" style={{ background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)', minHeight: '100vh' }}>
            <Navbar title={`${userName}'s Expense Tracker`} handleLogout={handleLogout} />
            <div style={{display:"flex", flexDirection:'column', justifyContent:"center", alignItems:'center'}}>
            <div className="d-flex justify-content-center" style={{width:"500px"}}>
                <div className="container">
                    <h1 className="py-5 text-white">Expense Tracker</h1>
                    <div className="pb-3" style={{color:"white"}}>
                    <h3>Your Balance</h3>
                        <h4>{balance}</h4>
                    </div>
                    <div className="container text-center bg-white shadow-sm mb-5 ">
                        <div className="row">
                            <div className="col m-4 ">
                                Income
                                <div className="text-success">{income}</div>
                            </div>
                            <div className="col m-4 ">
                                Expense
                                <div className="text-danger">{expense * -1}</div>
                            </div>
                        </div>
                    </div>
                    <h3 className='my-3' style={{color:"white"}}>History</h3>
                    <div className="container text-center" style={{ width: "475px" }}>
                        <div className="row row-cols-1">
                            {transactions.map((transaction, index) => (
                                <div className="col d-flex justify-content-between bg-white shadow-sm p-2 my-2" key={index}>
                                    <div>{transaction.description}</div>
                                    <div className='d-flex gap-3   '>
                                        <div className={transaction.amount > 0 ? "text-success" : "text-danger"}>{transaction.amount}</div>
                                        <AiOutlineClose className='pe-auto mt-1 opacity-50' onClick={() => deleteTransactions(transaction._id)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h3 className='my-3' style={{color:"white"}}>Add new transaction</h3>
                    <form className='mb-5 pb-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                            <input type="text" className="form-control" placeholder='Enter Description..' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
                            <input type="text" className="form-control" placeholder='Enter amount..' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn my-4 w-100" style={{background:'white',borderRadius:"30px"}}>Add transaction</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;

