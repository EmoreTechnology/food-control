'use strict';

/**
 * product-registration service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-registration.product-registration');
