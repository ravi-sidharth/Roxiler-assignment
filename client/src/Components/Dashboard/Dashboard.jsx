import React, { useEffect, useState } from "react";
import axios from 'axios'

const Dashboard = () => {
    const [transactionsData, setTransactionData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [month,setMonth] = useState(3)

    const perPage = 10


    const fetchAllTransactions = async() => {
        const result =await  axios.get(`/api/transactions?month=${month}`)
        setTransactionData(result.data.transactions)
        console.log(result)
        setCurrentPage(result.data.page)
    }

    const handleMonthValue = (e) => {
        setMonth(e.target.value)
    }
    useEffect(()=> {
        fetchAllTransactions()
    },[month])

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-center text-4xl font-bold">
        <div className="mt-5 p-4 border-2 w-[430px] rounded-lg shadow-[40px] shadow-blue-500">
          Transaction Dashboard
        </div>
      </div>
      <div className="flex justify-between">
        <div><input className="border rounded-lg" type="text" placeholder="Search transaction"/></div>
        <div>
            <select className="border rounded-lg" defaultValue="3" onChange={(e)=>handleMonthValue(e)} >
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">March</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">Aug</option>
                <option value="9">Sept</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>
        </div>
      </div>

      <div className="" >
        <table className="mt-5 border">
          <thead>
            <tr className="border">
              <th className="border">id</th>
              <th className="border">title</th>
              <th className="border">price</th>
              <th className="border">description</th>
              <th className="border">category</th>
              <th className="border">image</th>
              <th className="border">sold</th>
            </tr>
          </thead>
          <tbody className="border-2 ">
          {transactionsData && transactionsData.length>0 &&
            transactionsData.map((each) => {
              return (
                <tr className="border " key={each.id}>
                  <td className="text-center border ">{each.id}</td>
                  <td className="border">{each.title}</td>
                  <td className="text-center border">{each.price} Rs</td>
                  <td className="border">{each.description}</td>
                  <td className="text-center border">{each.category}</td>
                  <td className="text-center border">
                    <img
                      src={each.image}
                      height={40}
                      width={40}
                      alt={each.title}
                    />
                  </td>
                  <td className="text-2xl text-center">
                    {each.sold ? "✅" : undefined}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <div>Page No:{currentPage}</div>
        <div>
            <button>Next</button>-
            <button>Previous</button>
        </div>
        <div>Per Page:{perPage}</div>
      </div>

    </div>
  );
};

export default Dashboard;
