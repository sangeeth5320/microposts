Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFoundLayout'
});

Router.map(function(){

    this.route('posts',{
       path: '/',
       template: 'posts'

    });
    this.route('about');
    
    this.route('profile');

   /* this.route('bread',{
       path: '/bread.html',
       template: 'bakery'
    }); */

    this.route('drinks',{
       path: '/drinks.html',
       template: 'drinks'
    });

    this.route('events',{
       path: '/events.html',
       template: 'events'
    });

    this.route('faqs',{
       path: '/faqs.html',
       template: 'faqs'
    });

    this.route('frozen',{
       path: '/frozen.html',
       template: 'frozen'
    });

    this.route('household',{
       path: '/household.html',
       template: 'household'
    })

    this.route('index',{
       path: '/index.html',
       template: 'index'
    });

    this.route('kitchen',{
       path: '/kitchen.html',
       template: 'kitchen'
    });

    //this.route('login');

    this.route('mail',{
       path: '/mail.html',
       template: 'mail'
    });

    this.route('not-found',{
       path: '/not-found.html',
       template: 'notFoundLayout'
    });

    this.route('pet',{
       path: '/pet.html',
       template: 'pet'
    });

    this.route('privacy',{
       path: '/privacy.html',
       template: 'privacy'
    });

    this.route('products',{
       path: '/products.html',
       template: 'products'
    });

    this.route('services',{
       path: '/services.html',
       template: 'services'
    });

    this.route('short-codes',{
       path: '/short-codes.html',
       template: 'short-codes'
    });

    this.route('single',{
       path: '/single.html',
       template: 'single'
    });

    this.route('vegetable',{
       path: '/vegetable.html',
       template: 'vegetable'
    });

});