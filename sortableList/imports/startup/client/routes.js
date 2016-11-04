import { Router } from 'meteor/iron:router';

import '/imports/ui/pages/indexPage/indexPage.js';

Router.route('/', {
    name: 'index',
    action: function () {
        this.render('indexPage');
    },
});
