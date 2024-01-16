import React, { useState } from 'react';
import CategoriesSelect from '../../Components/CategoriesSelect/CategoriesSelect';
import OrderSummury from '../OrderSummury/OrderSummury';
import { TextField, Button } from '@mui/material';


const OrderList = ({ categories, selectedCategory, newSelectedCategory }) => {

    const [itemName, setItemName] = useState('');
    const [amount, setAmount] = useState(1);
    const [order, setOrder] = useState([]);

    const handleItemName = (e) => {
        const {
            target: { value },
        } = e;
        setItemName(value);
    }

    const handleItem = () => {
        const isExist = order.length ? order.find(item => item.item === itemName ? true : false) : false;
        if (!isExist) {
            setOrder(prevOrder => ([
                ...prevOrder,
                {item: itemName,
                amount: amount,
                category: selectedCategory.CATEGORY_NAME}
            ]));
            handledisableConfirmButton()
        };
    }

    const [disableSelect, setDisableSelect] = useState(true);
    const [disableAddButton, setDisableAddButton] = useState(true);
    const [disableConfirmButton, setDisableConfirmButton] = useState(true);

    const handleDisableSelect = (e) => {
        if (!itemName) {
            setDisableSelect(disableSelect => !disableSelect);
            handleDisableAddButton();
        };
        handleItemName(e);
    }

    const handleDisableAddButton = () => {
        setDisableAddButton(disableAddButton => !disableAddButton)
    }

    const handledisableConfirmButton = () => {
        setDisableConfirmButton(disableConfirmButton => !disableConfirmButton)
    }

    const handleCategory = (e) => {

        const {
            target: { value },
        } = e;

        if (selectedCategory.CATEGORY_NAME === value) return;
        newSelectedCategory(categories.find(cat => cat.CATEGORY_NAME === value));

    }


    return (
        <div>
            <h1>הזמנה</h1>
            <span>סך פריטים: {order.length}</span>
            <div>
                <TextField
                    label="הכנס מוצר"
                    onInput={(e) => handleDisableSelect(e)}
                />
                {
                    selectedCategory &&
                    <CategoriesSelect
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onChange={handleCategory}
                        disabled={disableSelect}
                    />
                }
            </div>
            <Button
                key='add'
                variant="contained"
                disabled={disableAddButton}
                onClick={() => handleItem()}
            >
                הוסף להזמנה
            </Button>
            <OrderSummury order={order} />
            <div>
                <Button
                    key='confirm'
                    variant="contained"
                    disabled={disableConfirmButton}
                >
                    אשר הזמנה
                </Button>
            </div>
        </div>
    )
};

export default OrderList;