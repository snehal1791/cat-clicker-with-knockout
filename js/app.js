var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'Flickr',
        nicknames: ['Smiley']
    },
    {
        clickCount: 0,
        name: 'Kitty',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'Flickr',
        nicknames: ['Starey']
    },
    {
        clickCount: 0,
        name: 'Whitey',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'Flickr',
        nicknames: ['Snowy']
    },
    {
        clickCount: 0,
        name: 'Sofie',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'Flickr',
        nicknames: ['Fatso']
    },
    {
        clickCount: 0,
        name: 'Rosie',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'Flickr',
        nicknames: ['Tabtab']
    }
];

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.age = ko.observable();
    //observable array
    this.nicknames = ko.observableArray(data.nicknames);

    this.showLevel = ko.computed(function() {
        if (this.clickCount() >= 5 & this.clickCount() <= 10){
            return this.age('Infant');
        }
        else if (this.clickCount() > 10){
            return this.age('Adult');
        }
        else {
            return this.age('Just Born');
        }
    }, this);
}

var ViewModel = function() {

    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.newCat = function(catData){
        self.currentCat(catData);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    // or use this methos. here self = this refers to ViewModel
    /*var self = this;
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };*/
};

ko.applyBindings(new ViewModel());
