import Button from "./Button";
import Input from "./Input";

const Login = () => {
  return (
    <div className="login">
      <h4 className="login__title">Inicia Sesión 🧀</h4>
      <div className="mb-25px">
        <Input placeholder="Correo Electronico" />
      </div>
      <div className="mb-25px">
        <Input placeholder="Contraseña" />
      </div>
      <div className="flex-button mb-25px end">
        <Button style={{ width: 116 }}>Iniciar</Button>
      </div>
      <div className="separator">
        <hr />
        <span>O Inicia Con</span>
        <hr />
      </div>
      <div className="flex-button center mt-25px">
        <Button style={{ width: 50, height: 50, padding: 0 }}>
          <i className="fa-brands fa-google"></i>
        </Button>
      </div>
    </div>
  );
};

export default Login;
