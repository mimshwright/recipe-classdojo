const SELECTOR_INBOX_UNREAD = '#postings article:not([data-seen=true])';

module.exports = (Franz) => {
  const getMessages = () => {
    const unreadMessages = document.querySelectorAll(SELECTOR_INBOX_UNREAD).length;

    // set Franz badge to 1 if there are any unread messages.
    Franz.setBadge(unreadMessages > 0 ? 1 : 0);
  };

  Franz.loop(getMessages);

  // inject franz.css stylesheet
  // Franz.injectCSS(path.join(__dirname, 'service.css'));
};
