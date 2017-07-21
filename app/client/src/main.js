(function(){
  angular.module('testApp', [])
})();

(function(){
  angular.module('testApp')
    .controller('testController', testController)

  testController.$inject = ['testService']
  function testController(testService) {
    const vm = this

    vm.post = {
      title: 'Welcome!',
      body: 'This is your application'
    }

    vm.send = post => testService.do(post)
  }
})();

(function(){
  angular.module('testApp')
    .service('testService', testService)

  function testService() {
    // Does nothing at all!
    return {
      do: post => console.log(post)
    }
  }
})();