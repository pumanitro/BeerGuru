import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Beer.scss';
import {ActionTypes} from '../../../redux/actions/ActionTypes';
import {makeAction} from '../../../redux/actions/ActionCreator';

const Beer = ({beer, openModal}) => {

    return (
        // div with role button and onKeyPress for people with physical disabilities
        <div role="button" tabIndex={0} className={styles['beer__container']} onClick={() => openModal(beer.id)} onKeyPress={() => openModal(beer.id)}>
            <img className={styles['beer__img']} src={beer.image_url} alt={`Beer - ${beer.name}`} />
            <div className={styles['beer__name']}>{beer.name}</div>
            <div className={styles['beer__tagline']}>{beer.tagline}</div>
        </div>
    );
};

Beer.propTypes = {
    beer: PropTypes.object.isRequired,

    openModal: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    openModal: makeAction(ActionTypes.beerModal.OPEN_BEER_MODAL)
};

export default connect(null, mapDispatchToProps)(Beer);
