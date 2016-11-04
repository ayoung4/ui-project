import { Template } from 'meteor/templating';

import './sortableListItem.html';

Template.sortableListItem.helpers({
    isToggled() {
        return this.item.toggled ? 'checked' : ''
    },
});

Template.sortableListItem.events({
    'change .js-checkbox'(event) {
        this.toggleItem(event.target.checked);
    },
});