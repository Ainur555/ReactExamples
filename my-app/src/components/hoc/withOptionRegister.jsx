import WithRegisterLogin from './withRegisterLogin';

const withOptionRegister = ((WpapperComponent) => {
    return (props) => {
        let title = "";
        let buttonTitle = "";
        if (props.isLogin) {
            title = "Вход";
            buttonTitle = "Войти";
        } else {
            title = "Регистрация";
            buttonTitle = "Зарегистрироваться";
        }
        return <WithRegisterLogin {...props} title={title} buttonTitle={buttonTitle}  />;
    };
});
export default withOptionRegister;