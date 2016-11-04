import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { $ } from 'meteor/jquery';
import 'meteor/mizzao:jquery-ui';

import './sortableListItem/sortableListItem.js';
import './sortableList.html';

// this is a reusable component because it does not rely on a data source
// ie. it does not query the database or get the value of a session var
// instead a data context is passed into it from a smart component

Template.sortableList.onCreated(function () {
    // use a ReactiveDict to create a state for this template
    this.state = new ReactiveDict();
    this.state.set('listItems', Template.currentData().listItems);
    this.state.set('dragging', undefined);
    
    // define state methods
    this.setToggle = (index, toggle) => {
        const listItems = this.state.get('listItems');
        if(listItems[index]) {
            listItems[index].toggled = toggle;
        }
        this.state.set('listItems', listItems);
    }

    this.reorderList = (index, newIndex) => {
        // complete this method
    };

});

Template.sortableList.onRendered(function () {
    const template = Template.instance();
    $('#js-sortable-list').sortable({
        revert: true,
        containment: 'parent',
        start(event, ui) {
            // template.state.set('selected', ...)
        },
        stop(event, ui) {
            template.reorderList(template.state.get('selected'), ui.item.index());
            $(this).sortable('cancel');
        },
    });
});

Template.sortableList.helpers({
    list() {
        const template = Template.instance();
        const list = template.state.get('listItems'); 
        return list;
    },
    sortableListItemArgs(index, item) {
        const template = Template.instance();
        const setToggle = template.setToggle;
        // create a new function that calls state method with 
        // correct arguments for a particular list item and pass
        // this function to that list item
        const toggleItem = (toggle) => setToggle(index, toggle);
        return {
            item,
            toggleItem,
        };
    },
});

Template.sortableList.events({
    // this button should always print the correct state after toggling/reordering items
    'click #js-log-state'() {
        console.log(Template.instance().state.get('listItems'));
    },
});