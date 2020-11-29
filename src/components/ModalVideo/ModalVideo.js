import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './ModalVideo.scss';

const ModalVideo = ({ videoKey, videoPlatform, isOpen, close }) => {

    const [ urlVideo, setUrlVideo ] = useState( null );

    useEffect( () => {

        switch( videoPlatform ) {
            case 'YouTube':
                setUrlVideo( `https://youtu.be/${ videoKey }` );
                break;
            case 'Vimeo':
                setUrlVideo( `https://vimeo.com/${ videoKey }` )
                break;
            default:
                break;
        }
        
    }, [ videoKey, videoPlatform ]);

    return (
        <Modal
            className="modal-video"
            visible={ isOpen }
            centered
            onCancel={ close }
            footer={ false }
        >
            <ReactPlayer url={ urlVideo } controls />
        </Modal>
    );
};

ModalVideo.propTypes = {
    videoKey: PropTypes.string.isRequired,
    videoPlatform: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default ModalVideo;