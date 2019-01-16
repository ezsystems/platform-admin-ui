import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';
import EzEmbedDiscoverContentButton from '../base/ez-embeddiscovercontent';

export default class EzBtnEmbed extends EzEmbedDiscoverContentButton {
    static get key() {
        return 'ezembed';
    }

    /**
     * Checks if the command is disabled in the current selection.
     *
     * @method isDisabled
     * @return {Boolean} True if the command is disabled, false otherwise.
     */
    isDisabled() {
        return !this.props.editor.get('nativeEditor').ezembed.canBeAdded();
    }

    /**
     * Executes the command generated by the ezembed plugin and set the
     * correct value based on the choosen content.
     *
     * @method addEmbed
     * @param {Object} items the result of the choice in the UDW
     */
    addEmbed(items) {
        const contentInfo = items[0].ContentInfo.Content._id;

        if (navigator.userAgent.indexOf('Chrome') > -1) {
            const scrollY = window.pageYOffset;

            this.execCommand();
            window.scroll(window.pageXOffset, scrollY);
        } else {
            this.execCommand();
        }
        this.setContentInfo(contentInfo);

        const widget = this.getWidget();

        widget.setWidgetContent('');
        widget.renderEmbedPreview(items[0].ContentInfo.Content.Name);
        widget.setFocused(true);

        ReactDOM.unmountComponentAtNode(document.querySelector('#react-udw'));
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        const css = 'ae-button ez-btn-ae ez-btn-ae--embed ' + this.getStateClasses(), disabled = this.isDisabled();

        return (
            <button className={css} disabled={disabled} onClick={this.chooseContent.bind(this)} tabIndex={this.props.tabIndex}>
                <svg className="ez-icon ez-btn-ae__icon">
                    <use xlinkHref="/bundles/ezplatformadminui/img/ez-icons.svg#tag"></use>
                </svg>
                <p className="ez-btn-ae__label">Embed</p>
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnEmbed.key] = AlloyEditor.EzBtnEmbed = EzBtnEmbed;

EzBtnEmbed.defaultProps = {
    command: 'ezembed',
    modifiesSelection: true,
    udwTitle: 'Select a content to embed',
    udwContentDiscoveredMethod: 'addEmbed',
    udwConfigName: 'richtext_embed'
};
