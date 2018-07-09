import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {ActionTypes} from '../../redux/actions/ActionTypes';
import {makeAction} from '../../redux/actions/ActionCreator';
import styles from './BeerModal.scss';

Modal.setAppElement('#root');

const BeerModal = ({beerModal, closeModal}) => {

    return (
        <Modal
            isOpen={beerModal.isShown}
            onRequestClose={() => closeModal()}
            className={styles['modal__container']}
            overlayClassName={styles['modal__overlay']}
            contentLabel="Example Modal"
        >
            <button type="button" onClick={() => closeModal()}>close</button>
        </Modal>
    );
};

BeerModal.propTypes = {
    beerModal: PropTypes.shape({
        beerId: PropTypes.string.isRequired,
        isShown: PropTypes.bool.isRequired
    }).isRequired
};

const mapStateToProps = state => ({
    beerModal: state.beerModal
});

const mapDispatchToProps = {
    closeModal: makeAction(ActionTypes.beerModal.CLOSE_BEER_MODAL)
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal);
