import { Loading, Container } from './styles';
import { Loader } from 'semantic-ui-react';
export default function LoaderComponent() {
    return (
        <Container>
            <Loading
                className="lottie"
                data-animation-path="img/loading.json"
                data-anim-loop="true"
                data-name="loading"
            />
            <Loader active inline />
        </Container>
    );
}
