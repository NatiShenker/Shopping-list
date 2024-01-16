import React from "react";
import { Select, OutlinedInput, MenuItem, ListItemText, FormControl, InputLabel } from "@mui/material";


const CategoriesSelect = ({ categories, selectedCategory, onChange, disabled = false }) => {

    return (
        <FormControl>
            <InputLabel>בחר מחלקה</InputLabel>
            <Select
                value={selectedCategory.CATEGORY_NAME}
                onChange={onChange}
                disabled={disabled}
                input={
                    <OutlinedInput
                        label="Tag"
                        sx={{
                            '& .css-14lo706': {
                                width: '4em',
                            },
                        }}
                    />
                }
            >
                {
                    categories.map(category => (
                        <MenuItem key={category.CATEGORY_NAME} value={category.CATEGORY_NAME}>
                            <ListItemText
                                style={{ margin: '0' }}
                                primary={category.CATEGORY_NAME}
                            />
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
    
};

export default CategoriesSelect;