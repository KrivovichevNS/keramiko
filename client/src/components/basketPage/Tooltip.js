import { CloseButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { clearBasket } from '../../slices/storeSlice'

function TriggerExample() {
    const dispatch = useDispatch()

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Очистить корзину
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <CloseButton onClick={() => dispatch(clearBasket())}/>
        </OverlayTrigger>
    );
}

export default TriggerExample;