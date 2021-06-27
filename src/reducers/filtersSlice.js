export const StatusFilters = {
      All: 'all',
      Active: 'active',
      Completed: 'completed',
}

const initialState = {
      status: 'All',
      colors: [],
}

const filtersReducer = (state = initialState, action) => {

      switch(action.type) {
            case "todos/todoFilterStatus":
                  return {
                        ...state,
                        status: action.payload
                  }
            case "todos/todoColorFilter": {
                  let {filterValue:color, selectType:changeType} = action.payload;
                  const {colors} = state;
                  switch(changeType) {
                        case "added": {
                              if(colors.includes(color)) {
                                    return state;
                              }
                              return {
                                    ...state,
                                    colors: state.colors.concat(color),
                              }
                        }
                        case "removed": {
                              return {
                                    ...state,
                                    colors: state.colors.filter((existingColor) => existingColor !== color),
                              }
                        }
                        default:
                              return state

                  }
            }
            default:
                  return state
      }

}

export default filtersReducer;