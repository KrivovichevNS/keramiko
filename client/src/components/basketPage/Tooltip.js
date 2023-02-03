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
        // <OverlayTrigger
        //     placement="bottom"
        //     delay={{ show: 0, hide: 400 }}
        //     overlay={renderTooltip}>
        // </OverlayTrigger>
            <div onClick={() => dispatch(clearBasket())}>Очистить корзину</div>
    );
}

export default TriggerExample;