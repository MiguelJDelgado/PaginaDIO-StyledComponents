import email from '../../assets/email.png';
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import password from '../../assets/password.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';
import {Column, Container, CriarText, EsqueciText,Row, 
        SubTitleLogin, TitleLogin, Wrapper, Title} from "./styles";

const schema = yup.object({
    email: yup.string().email('email não é válido').required(),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed');
            } else {
                alert('Email ou senha inválido');
            }
        } catch (error) {
            console.error('Erro ao autenticar:', error);
            alert('Houve um erro, tente novamente');
        }
    };

    const handleCadastroRedirect = () => {
        navigate('/cadastro');
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu login</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<img src={email} alt="email icon" />} />
                            <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<img src={password} alt="password icon" />} />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleCadastroRedirect}>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export default Login;
