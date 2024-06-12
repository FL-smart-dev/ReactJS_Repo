import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './storesScreen.module.css'; 
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { deletePromoMessage } from '../../utils/api.services';
import { promoPath } from '../../utils/promo-constants';
import PromoItem from '../promoItem/promoItem';
import { AppContext } from '../../AppContext';
import { dbref, dbOnValue, database } from "../../objects/dataobject";

function StoreCardsView() {
}

StoreCardsView.propTypes = {};

export default StoreCardsView;
