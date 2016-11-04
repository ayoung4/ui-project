import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './sortableListItem/sortableListItem.js';
import './sortableList.html';

Template.sortableList.onCreated(function () {
    this.state = new ReactiveDict();
});

Template.sortableList.helpers({
    sortableListItemArgs(item) {
        return {
            item,
        };
    }
});