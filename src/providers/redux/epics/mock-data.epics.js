import { ActionTypes } from '../constants';
import { getMockDataSuccess } from '../actions';

import mockState from '../../mock-state';

import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const GetMockData$ = (epic) => epic.pipe(
                                        ofType(ActionTypes.GET_MOCK_DATA),
                                        map(_ => getMockDataSuccess(mockState))
                                    );