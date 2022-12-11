// styled components
import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    ButtonGroup,
    colors,
    Company,
    Blues
} from "../components/style";

// formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/formLib";
// import * as Yup from "yup";

// icons
import { TiMail, TiLockClosed } from "react-icons/ti";


const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={30}>
                    Login
                </StyledTitle>
                <Formik>
                    {() => (
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="a.gmail.com"
                                icon={<TiMail/>}
                            />

                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<TiLockClosed />}
                            />

                            <ButtonGroup>
                                <StyledFormButton
                                    type="submit">
                                        Login
                                    </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}

export default Login