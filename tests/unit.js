describe('MyCtrl', function() {
    var $httpBackend, $rootScope, createController;

    // Set up the module
    beforeEach(module('app'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('MyCtrl', {'$scope' : $rootScope });
        };
    }));

    it('should send GET request to server', function() {
        var controller = createController();

        $httpBackend.expectGET('http://localhost:8081/homes/House1/data').respond(200, 'OK');

    });

});