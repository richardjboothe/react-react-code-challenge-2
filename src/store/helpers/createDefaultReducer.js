/**
 * This is a wrapper function used to create a reducer function to manage a particular section of the app state. It accepts an optional initial state of the reducer and an actionMap to map the action({ payload, type }) that was fired to its appropriate action handler function.
 * @export
 * @param {object by default} [actionMap={}]
 * @param {object by default} [initialState={}]
 * @returns a function to manage state of a particular section of the app state
 */
export default function createDefaultReducer (
  actionMap = {},
  initialState = {}
) {
  /**
   * This is the reducer function that takes in the previous app state and the action fired, and returns the next app state.
   */
  function defaultReducer (state = initialState, { payload, type } = {}) {
    return actionMap[type] ? actionMap[type](state, payload) : state
  }
  return defaultReducer
}
