import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function AddTooltip({ id }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Хотите заказать несколько штук данного товара?
            Оставьте комментарий к заказу! 😊
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <div style={{ color: 'green', textAlign: 'center'}}>Добавлено ✔</div>
        </OverlayTrigger>
    );
}

export default AddTooltip;