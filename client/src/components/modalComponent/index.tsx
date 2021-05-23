import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';

function ModalError() {
    return (
        <Modal dimmer="blurring" basic open={true} size="small">
            <Header icon size="huge">
                <h1> 500 Internal server error</h1>
            </Header>
            <Modal.Content image>
                <Image size="large" src="img/error-500.png" />
                <Modal.Description>
                    <br></br>
                    <h2>
                        We are very sorry, it seems there is a problem with our
                        servers.
                    </h2>
                    <h3>
                        Rest assured that our developers are working hard to
                        repair it, please comeback soon.
                    </h3>

                    <Button
                        color="yellow"
                        inverted
                        onClick={() => window.location.reload(true)}
                    >
                        <Icon name="checkmark" /> Refresh
                    </Button>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

export default ModalError;
