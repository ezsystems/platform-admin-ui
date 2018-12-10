(function (global) {

    const ZERO_WIDTH_CHARS_REGEX = /[\u200B-\u200D\uFEFF]/g;
    const WHITE_CHARACTERS_REGEX = /\s\r?\n/g;
    const SELECTOR_INPUT = '.ez-data-source__richtext';
    const COUNTER_CLASSNAME = 'ez-characters-counter';
    const ALLOWED_TAGS = ['p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5' , 'h6', 'th', 'td'];

    if (CKEDITOR.plugins.get('ezcountchars')) {
        return;
    }

    /**
     * Removes zero-width characters (like zero-width space) globally.
     *
     * @method cleanZeroWidthCharacters
     * @param {string} text to clean
     * @return {string} text after removing unwanted entities
     */
    const cleanZeroWidthCharacters = (text) => {
        return text.replace(ZERO_WIDTH_CHARS_REGEX, '');
    };

    /**
     * Fetches HTML tags which contain characters to count.
     * Selector applies only to direct children to prevent nested paragraphs
     * inside custom tags, embeds or images from being taken into account.
     *
     * @method fetchCountableTags
     * @param {string} contains current html in the editor
     * @return {Object}
     */
    const fetchCountableTags = (html) => {
        return new DOMParser()
            .parseFromString(html, 'text/html')
            .querySelectorAll(SELECTOR_INPUT + '>' + ALLOWED_TAGS.join(','));
    };

    /**
     * Removes unwanted whitespaces and newlines from the provided tag text.
     *
     * @method sanitize
     * @param {string} text to sanitize
     * @return {string} text after removing unwanted entities
     */
    const sanitize = (text) => {
        return text.replace(WHITE_CHARACTERS_REGEX, '').trim();
    };

    /**
     * Displays current count of typed characters.
     *
     * @method displayCharactersCount
     * @param {Event} the event object
     */
    const displayCharactersCount = (event) => {
        let editor = event.editor.element.$;
        let counterWrapper = editor.parentElement.getElementsByClassName(COUNTER_CLASSNAME);

        if (counterWrapper.length) {
            let charactersCount = 0;
            let editorHtml = cleanZeroWidthCharacters(editor.outerHTML);
            let countableTags = fetchCountableTags(editorHtml);

            countableTags.forEach((tag) => {
                charactersCount += sanitize(tag.innerText).length;
            });

            counterWrapper[0].innerText = charactersCount;
        }
    };

    /**
     * CKEditor plugin to count typed characters.
     *
     * @class ezcountchars
     * @namespace CKEDITOR.plugins
     * @constructor
     */
    CKEDITOR.plugins.add('ezcountchars', {
        init: function (editor) {
            editor.on('change', displayCharactersCount);
        }
    });
})(window);
