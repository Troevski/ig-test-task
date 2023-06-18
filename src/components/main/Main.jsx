import React, { useEffect, useState } from 'react';
import style from'./Main.module.css'
import { fetchAccountType, fetchData } from '../api/api';

const Main = () => {

    const [accounts, setAccounts] = useState([])
    const [accountsType, setAccountsType] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData(setAccounts, setIsLoading)
        fetchAccountType(setAccountsType, setIsLoading )
    }, [])

    return (
        <div className = {style.container}>
            <div className={style.gridContainer}>
                <div>
                    <p className= {style.nameTable}>Name</p>
                    {isLoading 
                    ? 
                    <div class="spinner-border m-5" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    accounts.map((account) => (
                            <div key={account._id} className= {style.gridItem}>{account.name}</div>
                    ))
                   
                    }
                </div>

                <div className={style.gridHeader}>
                    <p className= {style.nameTable}>Profit & Loss</p>
                    {isLoading 
                    ? 
                    <div class="spinner-border m-5" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    accounts.map((account) => (
                            <div key={account._id} className={style.gridItem}>{`${account.currency} ${account.funds}`}</div>
                    ))}
                </div>

                <div className={style.gridHeader}>
                    <p className={style.nameTable}>Account Type</p>
                    {isLoading 
                    ? 
                    <div class="spinner-border m-5" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    accountsType.map((account) => (
                            <div key={account._id} className={style.gridItem}>{account.title}</div>
                    ))}
                </div>
            </div>
      </div>
    );
};

export default Main;
