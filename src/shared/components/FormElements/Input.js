import React, { useReducer } from "react";

import { validate } from "../../util/validators";
import './Input.css'

const inputReducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, action.validators)
        };
      case 'TOUCH':
        return {
            ...state,
            isTouched:true
        }
      default:
        return state;
    };
}

function Input(props) {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isTouched:false, isValid: false });

    console.log("inputState", inputState);

    const changeHandler = (event) => {
        dispatch({
            type:'CHANGE', 
            val: event.target.value, 
            validators:props.validators
        })
    }

    const touchHandler = () => {
        dispatch({type:'TOUCH'})
    }

    const element =
      props.element === "input" ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      ) : (
        <textarea
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
    
    return (
      <div
        className={`form-control ${
          !inputState.isValid && inputState.isTouched && "form-control--invalid"
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.value && inputState.isTouched && <p>{props.errorText}</p>}
      </div>
    );
}

export default Input;