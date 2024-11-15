import email from '../../assets/email.png';
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import password from '../../assets/password.png';
import vector from '../../assets/Vector.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column, Container, LoginText, JaTemText, Row, 
        SubTitleLogin, TitleLogin, Wrapper, Title} from "./styles";

const schema = yup.object({
    email: yup.string().email('email não é válido').required(),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = () => {
        navigate('/feed');
    };

    const handleLoginRedirect = () => {
        navigate('/login');
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                name="name" 
                                errorMessage={errors.email?.message} 
                                control={control} 
                                placeholder="Nome" 
                                leftIcon={<img src={vector} alt="email icon" />} 
                            />
                            <Input 
                                name="email" 
                                errorMessage={errors.email?.message} 
                                control={control} 
                                placeholder="E-mail" 
                                leftIcon={<img src={email} alt="email icon" />} 
                            />
                            <Input 
                                name="password" 
                                errorMessage={errors.password?.message} 
                                control={control} 
                                placeholder="Senha" 
                                type="password" 
                                leftIcon={<img src={password} alt="password icon" />} 
                            />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <JaTemText>Já tenho conta.</JaTemText>
                            <LoginText  onClick={handleLoginRedirect}>Fazer Login</LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export default Cadastro;
