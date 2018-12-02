export const setSelectedSlid=(slid_obj)=>{
    return {
        type: 'UPDATE_SELECTED_SLID',
        obj:slid_obj
    };
}

export const updateContentMap=(content_obj)=>{
    return {
        type: 'UPDATE_CONTENT_MAP',
        obj:content_obj
    };
}
