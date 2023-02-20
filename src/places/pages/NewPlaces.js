import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import './NewPlaces.css'

    const formReducer = (state, action) => {
        switch (action.type) {
            case 'INPUT_CHANGE':
                let formIsValid = true;
                for (const inputId in state.inputs) {
                    console.log("inputId", inputId);
                    console.log("action 2", action);
                    console.log("state 2", state);

                    if (inputId === action.inputId) {
                        formIsValid = formIsValid && action.isValid;
                    } else {
                        formIsValid = formIsValid && state.inputs[inputId].isValid
                    }
                }
                return {
                    ...state,
                    inputs: {
                        ...state.inputs,
                        [action.inputId]: {value:action.value, isValid: action.isValid}
                    },
                    isValid: formIsValid
                };
            default:
                return state;
        }
    }

function NewPlaces() {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid:false
    })
    console.table("formState - ", formState);
    const inputHandler = useCallback((id, value, isValid)=> {
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, [dispatch])
    
    return (
      <form className="place-form">
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          type="text"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description(at least 5 ch.)"
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>
            ADD PLACE
        </Button>
      </form>
    );
}

export default NewPlaces;