/**
 * Module created for validation and preparation of forms served dynamically.
 */
class DynamicFormModule {
    // instance properties
    constructor() {
        /**
         * Stablishes wich form fields are required by the time the 
         * form is validated before send it to the server.
         */
        this.requiredFormFields = [];

        /**
         * Stablishes if the current form being served has form fields
         * rendered dynamically along with dynamic rules.
         */
        this.formHasDynamicControls = false;

        /**
         * Stablishes whether or not the current form is valid, that is,
         * the form doesn't have invalid form fields.
         */
        this.formValid = true;

        /**
         * Keeps track of the errors reported while validating the current form
         * using the dynamic rules attached to the form fields.
         */
        this.errorMessages = {};
        this.serverErrorMessages = {};

        /**
         * Stablishes wich dynamic field rules have been added for validation
         * on the current form being validated.
         */
        this.formRules = [];

        /**
         * Container for all the information and functionality associated with a
         * form being validated.
         */
        this.self = {};
    }
}

export default DynamicFormModule;