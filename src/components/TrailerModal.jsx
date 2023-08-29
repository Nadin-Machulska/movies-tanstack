import { Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const TrailerModal = () => {
    const { state } = useLocation();
    return (
            
            <Modal show={state.showTrailer}   size="lg">
                <Modal.Header >
                    <button >X</button>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${state.trailer?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose()}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>
    )
};

export default TrailerModal;
//onHide={handleClose}