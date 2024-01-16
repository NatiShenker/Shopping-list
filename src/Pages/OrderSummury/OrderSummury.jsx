import React from "react";
import { Table, TableHead, TableCell, TableRow, TableBody } from "@mui/material";


const OrderSummury = ({ order }) => {

    return (
        <Table>
            <TableHead>
                <TableRow style={{ display: 'flex' }}>
                    <TableCell>שם המוצר</TableCell>
                    <TableCell>כמות</TableCell>
                    <TableCell>מחלקה</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    order.length &&
                    order.map(item => (
                        <div>
                            <TableRow key={item.item} style={{ display: 'flex' }}>
                                {
                                    item.item &&
                                    <div>
                                    <TableCell key={item.item}>{item.item}</TableCell>
                                    <TableCell key={item.amount}>{item.amount}</TableCell>
                                    <TableCell key={item.category}>{item.category}</TableCell>
                                    </div>
                                }
                            </TableRow>
                        </div>
                    ))
                }
            </TableBody>
        </Table>
    );

};

export default OrderSummury;