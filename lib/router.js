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

    this.route('bread',{
       path: '/bread.html',
       template: 'household'
    });

    this.route('drinks',{
       path: '/drinks.html',
       template: 'household'
    });

    this.route('events',{
       path: '/events.html',
       template: 'household'
    });

    this.route('faqs',{
       path: '/faqs.html',
       template: 'household'
    });

    this.route('frozen',{
       path: '/frozen.html',
       template: 'household'
    });

    this.route('household',{
       path: '/household.html',
       template: 'household'
    })

    this.route('index',{
       path: '/index.html',
       template: 'household'
    });

    this.route('kitchen',{
       path: '/kitchen.html',
       template: 'household'
    });

    //this.route('login');

    this.route('mail',{
       path: '/mail.html',
       template: 'household'
    });

    this.route('not-found',{
       path: '/not-found.html',
       template: 'household'
    });

    this.route('pet',{
       path: '/pet.html',
       template: 'household'
    });

    this.route('privacy',{
       path: '/privacy.html',
       template: 'household'
    });

    this.route('products',{
       path: '/products.html',
       template: 'household'
    });

    this.route('services',{
       path: '/services.html',
       template: 'household'
    });

    this.route('short-codes',{
       path: '/short-codes.html',
       template: 'household'
    });

    this.route('single',{
       path: '/single.html',
       template: 'household'
    });

    this.route('vegetable',{
       path: '/vegetable.html',
       template: 'household'
    });

});