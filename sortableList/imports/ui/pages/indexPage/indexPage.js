import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import '/imports/ui/components/sortableList/sortableList.js';
import './indexPage.html';

Session.setDefault('list', [
    { title: 'A', toggled: false }, 
    { title: 'B', toggled: false },
    { title: 'C', toggled: true },
    { title: 'D', toggled: false }
]);

// indexPage is a smart component because it relies on a data source - a session variable
// components that query the database are also smart

Template.indexPage.helpers({
    sortableListArgs() {
        const listItems = Session.get('list');
        return {
            listItems,
        };
    },
})