/* eslint-disable no-underscore-dangle */
function localStorage(...args) {
  const _actions = ['set', 'get', 'remove', 'clear'];
  if (args.length === 0 || args.length > 2) {
    return null;
  }
  const [key = null, value = null] = args;
  if (key === null) {
    return null;
  }
  const [action = null, storageKey = null] = key.split(':');
  if (action === null || !_actions.includes(action)) {
    return null;
  }
  const ls = window.localStorage;
  if (action === 'clear') {
    ls.clear();
    return null;
  }
  if (action === 'remove') {
    ls.removeItem(storageKey);
    return null;
  }
  if (action === 'get') {
    return ls.getItem(storageKey);
  }
  if (value === null) {
    return null;
  }
  ls.setItem(storageKey, value);
  return value;
}
export default localStorage;
