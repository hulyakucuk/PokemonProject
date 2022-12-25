import { Container } from "./style"
const HomeContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default HomeContainer
