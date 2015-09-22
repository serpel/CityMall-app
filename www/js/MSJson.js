String.prototype.FromWCFDate = function (throwOnInvalidInput) {
        var pattern = /Date\(([^)]+)\)/;
        var results = pattern.exec(this);
        if (results.length != 2) {
            if (!throwOnInvalidInput) {
                return this;
            }
            throw new Error(this + " is not .net json date.");
        }
        return new Date(parseFloat(results[1]));
    };

Date.prototype.ToWCFDate = function() {
        // here is how we force wcf to parse as UTC and give correct local time serverside        
        var date = '\/Date(' + this.getTime() + '-0000)\/';
        return date;
    };