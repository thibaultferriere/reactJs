var Tools = require('../services/Tools.js');

const updateModelReducer= (state={presentation:{},content_map:{}},action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            const newState2 = {presentation:action.obj};
            return newState2;
        case 'UPDATE_PRESENTATION_SLIDS':
            return; //TODO
        case 'UPDATE_CONTENT_MAP':
            const newState3 = {content_map:action.obj};
            return newState3; //TODO
        case 'ADD_CONTENT':
            return; //TODO
        default:
            return state;
    }
}

export default updateModelReducer;
