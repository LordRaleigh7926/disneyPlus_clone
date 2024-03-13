import styled from 'styled-components'

const Login = (props) => {

    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get premier access to what ever damned upcoming movie there is with a subscription. We prefer you take the costliest one. Would help us increase profits uk.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100vw;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    
`;

const BgImage = styled.div`
    height: 100%;
    background-image: url("images/login-background.jpg");
    z-index: -1;
    position:absolute;
    top:0;
    right:0;
    left:0;
    background-repeat: no-repeat;
    background-position: top;
    background-size:cover;
`;

const CTA = styled.div`

    max-width: 100%;
    margin-bottom: 2vw;
    max-width: 650px;
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:0;
    text-align:center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;


`;

const CTALogoOne = styled.img`
    width:100%;
    max-width: 600px;
    min-height: 10px;
    display:block;
    
`;

const SignUp = styled.a`

    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    margin-top: 2.5rem;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 2rem;
    padding: 2rem 0;
    border-radius: 4px;
    border: 1px solid transparent;

    &:hover {
        background-color: #0483ee;
    }

` ;

const Description = styled.p`

    color: hsla(0, 0%, 95.3%, 1);
    font-size: 1rem;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    width:100%;
    max-width: 600px;
    min-height: 10px;
    display:inline-block;
    margin-bottom:20px;
    margin-top:12px
    vertical-align: bottom;
    width:100%;
`;

export default Login;