import React from 'react';
import styles from './Table.module.css';

const Table = ({dispData}) => {
    let keyId=0;
    return (
    <table className={styles.table}>
        <thead className={styles.tHead}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            {
                dispData.map((d)=>
                     <tr key={keyId++}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.role}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    )
}

export default Table;