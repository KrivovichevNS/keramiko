import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { sliceBasket } from '../../slices/storeSlice'

function TriggerExampleProduct({ id }) {
    const dispatch = useDispatch()

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Удалить товар
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <FontAwesomeIcon style={{}} icon={faTrash} onClick={() => dispatch(sliceBasket(id))} />
        </OverlayTrigger>
    );
}

export default TriggerExampleProduct;