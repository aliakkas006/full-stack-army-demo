import { action, createStore } from 'easy-peasy';

let id = 1;
function generateID() {
  return id++;
}

const counterModel = {
  value: 0, // data
  increment: action((state, payload) => (state.value += payload)), //action
  decrement: action((state, payload) => (state.value -= payload)), //action
};

const historyModel = {
  items: [],
  addHistory: action((state, payload) =>
    state.items.push({
      id: generateID(),
      action: payload.action,
      count: payload.count,
      time: new Date(),
    })
  ),
  clearHistory: action((state) => (state.items = [])),
  // getHistoryById: action((state))
};

const store = createStore({
  count: counterModel,
  history: historyModel,
});

export default store;
