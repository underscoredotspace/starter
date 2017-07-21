describe('Fake Controller Test', () => {
  require('angular')
  require('angular-mocks')

  require('../../client/src/main.js')

  // Setup Application Mocks
  const testService = {
    do: jest.fn()
  }
  
  let $rootScope, $controller, $q
  beforeEach(() => {
    jest.clearAllMocks()

    angular.mock.module('testApp')

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope')
      $controller = $injector.get('$controller')
    })
  })

  describe('test testController controller', () => {
    test('Initial Setup', () => {
      const testController = $controller('testController', {testService})
      $rootScope.$digest()
      
      const post = {
        title: 'Welcome!',
        body: 'This is your application'
      }
        
      expect(testController.post.title).toBe(post.title)
      expect(testController.post.body).toBe(post.body)

      testController.send(post)
      $rootScope.$digest()
      expect(testService.do).toHaveBeenCalledWith(post)
    })
  })
})