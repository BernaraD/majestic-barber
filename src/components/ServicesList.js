import './ServiceList.css';

function ServicesList(props) {
    return (
        <div className='services'>

            <div className='services-list'>
                <div>
                    <h3>{ props.name }</h3>
                </div>

                <div>
                    <div className='price'>${props.price}</div>
                </div>
            </div>

        </div>
    );
};

export default ServicesList;