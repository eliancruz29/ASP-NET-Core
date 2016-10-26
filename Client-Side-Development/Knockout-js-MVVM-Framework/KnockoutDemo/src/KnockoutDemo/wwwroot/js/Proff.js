function GameResult(opponent, result) {
    var self = this;
    self.opponent = opponent;
    self.result = ko.observable(result);
}

function viewModel() {
    var self = this;

    self.resultChoices = ["Win", "Loss", "Tie"];

    self.gameResults = ko.observableArray([
      new GameResult("Brendan", self.resultChoices[0]),
      new GameResult("Brendan", self.resultChoices[0]),
      new GameResult("Michelle", self.resultChoices[1])
    ]);

    self.authorName = ko.observable('Steve Smith');
    self.twitterAlias = ko.observable('@ardalis');

    self.twitterUrl = ko.computed(function () {
        return "https://twitter.com/" + this.twitterAlias().replace('@', '');
    }, this);

    self.capitalizeTwitterAlias = function () {
        var currentValue = this.twitterAlias();
        this.twitterAlias(currentValue.toUpperCase());
    };

    // add this to ViewModel()
    self.addResult = function () {
        self.gameResults.push(new GameResult("", self.resultChoices[0]));
    }

    self.displayRecord = ko.computed(function () {
        var wins = self.gameResults().filter(function (value) { return value.result() == "Win"; }).length;
        var losses = self.gameResults().filter(function (value) { return value.result() == "Loss"; }).length;
        var ties = self.gameResults().filter(function (value) { return value.result() == "Tie"; }).length;
        return wins + " - " + losses + " - " + ties;
    }, this);
};
ko.applyBindings(new viewModel);
