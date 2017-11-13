import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    fetchInitialDataAttempt: [],
    fetchInitialDataSuccess: ['payload'],
    fetchInitialDataFailure: ['error'],
    onReceiveUpdate: ['payload']
});
