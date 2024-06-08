import React from "react"
import Form from "./components/Form"
import form from '../../assets/form.svg'
import NavigationBar from "../../shared/NavigationBar";

const Register = () => {
    return(
        <NavigationBar>
            <div style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
            }}>
                <div style={{width: '50%', paddingLeft: '100px', paddingTop: '100px'}}>
                    <img src={form} alt="formImage" width={'400px'}/>
                </div>
                <div style={{width: '50%'}}>
                    <Form/>
                </div>
            </div>
        </NavigationBar>
        
    )
}

export default Register