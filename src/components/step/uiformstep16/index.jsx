import { useState } from "react";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import "./uiformstep16.scss";
import ButtonContinue from "../../buttoncontinue";

const dietOptions = [
    {
        category: "WITH MEAT",
        options: [
            { value: "Traditional", img: "Traditional.webp", title: "Traditional", desc: "I enjoy everything" },
            { value: "Keto", img: "Keto.webp", title: "Keto", desc: "I prefer high-fat low-carb meals" },
            { value: "Paleo", img: "Paleo.webp", title: "Paleo", desc: "I don't eat processed foods" },
        ]
    },
    {
        category: "WITHOUT MEAT",
        options: [
            { value: "Vegetarian", img: "Vegetarian.webp", title: "Vegetarian", desc: "I avoid meat and fish" },
            { value: "Vegan (Plant Diet)", img: "Vegan.webp", title: "Vegan (Plant Diet)", desc: "I do not eat animal products" },
            { value: "Keto Vegan", img: "Keto_Vegan.webp", title: "Keto Vegan", desc: "I eat low-carb plant-based meals only" },
        ]
    },
    {
        category: "WITH FISH",
        options: [
            { value: "Mediterranean", img: "Mediterranean.webp", title: "Mediterranean", desc: "I eat plenty of veggies, grains, and seafood" },
            { value: "Pescatarian", img: "Pescatarian.webp", title: "Pescatarian", desc: "I avoid meat but enjoy fish" },
        ]
    },
    {
        category: "WITHOUT ALLERGENS",
        options: [
            { value: "Lactose Free", img: "Lactose.webp", title: "Lactose Free", desc: "I do not consume foods with lactose" },
            { value: "Gluten Free", img: "Gluten.webp", title: "Gluten Free", desc: "I avoid gluten-containing grains" },
        ]
    }
];

const UIFormStep16 = ({ handleNextStep16, handleNext }) => {
    const [selectedDiets, setSelectedDiets] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const updatedDiets = checked
            ? [...selectedDiets, value] // Nếu chọn thì thêm vào danh sách
            : selectedDiets.filter((diet) => diet !== value); // Nếu bỏ chọn thì loại ra

        setSelectedDiets(updatedDiets);
        handleNextStep16(updatedDiets.join()); // Truyền danh sách mới lên component cha
    };

    return (
        <>
            <div className="form-step-16">
                <div>What type of diet do you prefer?</div>
                <FormControl className="form-step-16__checkbox">
                    <div className="form-step-16__columns">
                        {/* Lặp qua từng danh mục */}
                        {dietOptions.map((group, index) => (
                            <div key={index} className={`form-step-16__column ${index % 2 === 0 ? "left" : "right"}`}>
                                <h1>{group.category}</h1>
                                {group.options.map((diet) => (
                                    <FormControlLabel
                                        key={diet.value}
                                        className="form-step-16__label"
                                        control={
                                            <Checkbox
                                                value={diet.value}
                                                checked={selectedDiets.includes(diet.value)}
                                                onChange={handleCheckboxChange}
                                            />
                                        }
                                        label={
                                            <div className="form-step-16__content">
                                                <img
                                                    src={`/icons/icons-Q16/${diet.img}`}
                                                    alt={diet.title}
                                                    className="form-step-16__icon"
                                                />
                                                <div className="form-step-16__text">
                                                    <span>{diet.title}</span>
                                                    <p>{diet.desc}</p>
                                                </div>
                                            </div>
                                        }
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </FormControl>
            </div>
            <ButtonContinue handleNext={handleNext} />
        </>
    );
};

UIFormStep16.propTypes = {
    handleNextStep16: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
};

export default UIFormStep16;
