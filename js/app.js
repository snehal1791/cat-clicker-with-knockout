var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
    this.imgAttribution = ko.observable('Flickr');
    this.age = ko.observable();

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
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
};

ko.applyBindings(new ViewModel());
