const SELECTOR_INBOX_UNREAD = '#postings article:not([data-seen=true])';

module.exports = (Franz) => {
  const getMessages = () => {
    const allMessages = document.querySelectorAll(SELECTOR_INBOX_UNREAD).length;

    // set Franz badge
    Franz.setBadge(allMessages > 0 ? 1 : 0);
  };

  Franz.loop(getMessages);

  // inject franz.css stylesheet
  // Franz.injectCSS(path.join(__dirname, 'service.css'));
};
