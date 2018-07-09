import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {ActionTypes} from '../../redux/actions/ActionTypes';
import {makeAction} from '../../redux/actions/ActionCreator';

const BeerModal = () => {

    return (
        <Modal>
            TEST
        </Modal>
    );
};

BeerModal.propTypes = {
    beers: PropTypes.instanceOf(OrderedMap).isRequired
};

const mapStateToProps = state => ({
    beers: state.beers
});

const mapDispatchToProps = {
    getMoreBeers: makeAction(ActionTypes.beers.GET_MORE_BEERS)
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal);
