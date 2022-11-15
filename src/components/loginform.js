import React from "react";
import "./loginform.css";
import img from "./img/loginimg.svg";

const LoginForm = () => {
    return (
        <div className="main-login">
            <div className="left-login">
                <h1>Entre com a sua conta</h1>
                <img className="left-login-image" src="./images/loginimg.svg" alt=""></img>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>Login</h1>
                    <div className="textfield">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário"/>
                    </div>
                    <div className="textfield">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha"/>
                    </div>
                    <button class="btn-login">Login</button>
                </div>
            </div>
        </div>

    )
}
export default LoginForm