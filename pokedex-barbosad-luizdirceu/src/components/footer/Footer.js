import { Container, Icons } from "./Style";
// import Logo from "./estilo-de-desenho.png"

const Footer = () => {
  return (
    <Container>
      {/* <img src={Logo} alt={'text'}/> */}
      <Icons>
        <h1>Desenvolvido por: Luiz Dirceu Marques Júnior</h1>
        <div>
          <a href="https://github.com/luizdirceu" target='blank'>
            <img src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} alt={'text'}/>
          </a>
          <a href="https://www.linkedin.com/in/luiz-dirceu-marques-243825242/" target='blank'>
            <img src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt={'text'} />
          </a>
        </div>
        <p>Todos os direitos reservados.</p>
      </Icons>
    </Container>
  );
};

export default Footer;