import executeAllCountryTests from './country.test';
import executeAllStateTests from './state.test';

const { Country, State } = require('../index');

executeAllCountryTests(Country);
executeAllStateTests(State);
