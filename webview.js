const SELECTOR_INBOX_UNREAD = '[aria-label*="Messages ("]';

module.exports = (Franz) => {
  const getMessages = () => {
    const $messages = document.querySelector(SELECTOR_INBOX_UNREAD);
    const unreadMessages = $messages ? $messages.getAttribute("aria-label").split("(")[1].split(")")[0] : 0;
    Franz.setBadge(unreadMessages);
  };

  Franz.loop(getMessages);

  // inject franz.css stylesheet
  // Franz.injectCSS(path.join(__dirname, 'service.css'));
};
