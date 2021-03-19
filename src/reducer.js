export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token: "",
    // "BQBj9E7Bg4AwU2cPxtfUyKZK3xTGNjPCC3b_qCWf_yQBK4nKWVMMxbgffDaKTes7AlFzfUFyBOvEeyPui3dUNDQtlhTU7ggX7J8KGnJ-ubCbYi_trjvhlb9QsanCls1f4Ss6bTER7JbFLI9ctIjkiDNYtzOz_UTPN84cgZVjuLoaqGDJ"

};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;