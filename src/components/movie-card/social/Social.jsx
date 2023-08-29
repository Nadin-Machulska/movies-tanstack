import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Reviews from './Reviews';
import Discussions from './Discussions';
import  Container  from 'react-bootstrap/Container';
const Social = ({ reviews }) => {
    const handleTabChange = (eventKey) => {
        console.log('Selected tab:', eventKey);
    };
    return (
        <Container className='social-container'>
            <div className="social-header">
                <h3>Social</h3>
                <Tabs defaultActiveKey="tab1" onSelect={handleTabChange}>
                    <Tab eventKey="tab1" title={`Reviews`}>
                        <Reviews reviews={reviews} />
                    </Tab>
                    <Tab eventKey="tab2" title="Discussions">
                        <Discussions />
                    </Tab>
                </Tabs>
            </div>
        </Container>
    )
};

export default Social;