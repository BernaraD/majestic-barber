import './Services.css'
import Card from "../UI/Card";
import ServicesList from "./ServicesList";

function Services() {

    const services = [
        { name: 'Haircut', price: 25, id: 1 },
        { name: 'Shave & haircut', price: 35, id: 2 },
        { name: 'Children', price: 20, id: 3 },
        { name: 'Children skin fade', price: 22, id: 4 },
        { name: 'Shave & Line Up', price: 15, id: 5 },
        { name: 'Flat top', price: 25, id: 6 },
        { name: 'Line up', price: 12, id: 7 },
        { name: 'Taper', price: 25, id: 8 },
        { name: 'Haircut, shave & colors', price: 65, id: 9 },
        { name: 'Beard shave', price: 12, id: 10 },
        { name: 'Beard trim', price: 7, id: 11 },
        { name: 'Design', price: 60, id: 12 },
        { name: 'Eyebrow', price: 7, id: 13 },
        { name: 'Haircut, shave & facial', price: 65, id: 14 },
        { name: 'Facial only', price: 20, id: 15 },
        { name: 'Haircut and eyebrow', price: 27, id: 16 },

    ];

    const serviceList = services.map(service => <ServicesList key={ service.id }
                                                              id={ service.id }
                                                              name={ service.name }
                                                              price={ service.price }
    />)

    return (
        <div className='services' name='services'>
            <h1>Our price List</h1>
            <Card>
                <ul>{ serviceList }</ul>
            </Card>
        </div>
    );
};

export default Services;