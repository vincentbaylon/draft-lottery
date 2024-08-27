import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const divStyle = {
    textAlign: 'center',
    padding: '10px',
    width: '100%',
    height: '125px',
    color: 'white',
    cursor: 'pointer',
}

const flipStyle = {
    backgroundColor: 'grey',
}

function Card({ eachList, order }) {
    return (
        <Flippy flipDirection='vertical' style={divStyle}>
            <FrontSide style={flipStyle}>
                <div>
                    <h2>#{order}</h2>
                </div>

            </FrontSide>
            <BackSide>
                <div>
                    <h3 className='ui header'>
                        #{order}
                    </h3>
                    <h2 className='ui header'>{eachList}</h2>
                </div>
            </BackSide>
        </Flippy>
    )
}

export default Card
