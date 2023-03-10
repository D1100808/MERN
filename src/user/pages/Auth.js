import React from 'react'
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/UIElements/Card'
import { VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './Auth.css'

export default function Auth() {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid:false
        },
        password: {
            value: '',
            isValid:false
        }
    }, false)

    const authSubmitHandler = (event) => {
        event.preventDefault();

        console.log(formState.inputs);
    }

    return (
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Enter a valid email"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Enter a valid password"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            LOGIN
          </Button>
        </form>
      </Card>
    );
}
