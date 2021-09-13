(function(global, doc, eZ) {
    const userMenuContainer = doc.querySelector('.ibexa-main-header__user-menu-column');

    if (!userMenuContainer) {
        return;
    }

    const userNameElement = userMenuContainer.querySelector('.ibexa-header-user-menu__name');
    const popupMenuElement = userMenuContainer.querySelector('.ibexa-popup-menu');
    new eZ.core.PopupMenu({
        triggerElement: userNameElement,
        popupMenuElement,
    });
})(window, window.document, window.eZ);
